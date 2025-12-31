import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { getEmailSequence } from "./email-templates.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface NurtureRequest {
  email: string;
  resourceId: string;
  resourceTitle: string;
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// In-memory rate limiting (resets on cold start, but provides basic protection)
const rateLimits = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const RATE_LIMIT_MAX_PER_IP = 5; // 5 requests per minute per IP

// Duplicate detection window (7 days)
const DUPLICATE_WINDOW_DAYS = 7;

/**
 * Validate email format
 */
const validateEmail = (email: string): boolean => {
  if (typeof email !== 'string') return false;
  const trimmed = email.trim();
  return trimmed.length > 0 && trimmed.length <= 254 && EMAIL_REGEX.test(trimmed);
};

/**
 * Check in-memory rate limit by IP
 */
const checkRateLimit = (ip: string): { allowed: boolean; retryAfter?: number } => {
  const now = Date.now();
  const key = `ip:${ip}`;
  
  // Clean old entries periodically
  if (rateLimits.size > 1000) {
    for (const [k, timestamp] of rateLimits.entries()) {
      if (now - timestamp > RATE_LIMIT_WINDOW_MS) {
        rateLimits.delete(k);
      }
    }
  }
  
  const lastRequest = rateLimits.get(key);
  if (lastRequest && now - lastRequest < RATE_LIMIT_WINDOW_MS / RATE_LIMIT_MAX_PER_IP) {
    const retryAfter = Math.ceil((RATE_LIMIT_WINDOW_MS / RATE_LIMIT_MAX_PER_IP - (now - lastRequest)) / 1000);
    return { allowed: false, retryAfter };
  }
  
  rateLimits.set(key, now);
  return { allowed: true };
};

/**
 * Get client IP from request headers
 */
const getClientIP = (req: Request): string => {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  );
};

const handler = async (req: Request): Promise<Response> => {
  console.log("Email nurture sequence function called");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIP = getClientIP(req);
    const rateCheck = checkRateLimit(clientIP);
    if (!rateCheck.allowed) {
      console.warn(`Rate limited IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { 
            "Content-Type": "application/json", 
            "Retry-After": String(rateCheck.retryAfter),
            ...corsHeaders 
          },
        }
      );
    }

    const { email, resourceId, resourceTitle }: NurtureRequest = await req.json();
    
    console.log(`Processing nurture sequence for resource: ${resourceId}, email: ${email?.substring(0, 3)}***`);

    // Validate required fields
    if (!email || !resourceId) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Email and resourceId are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      console.error("Invalid email format");
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Get email templates for this resource
    const emailSequence = getEmailSequence(resourceId);
    
    if (!emailSequence) {
      console.error(`No email sequence found for resource: ${resourceId}`);
      return new Response(
        JSON.stringify({ error: `No email sequence configured for resource: ${resourceId}` }),
        {
          status: 404,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Initialize Supabase client for duplicate detection
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    
    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Missing Supabase configuration");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check for duplicate - has this email received this resource sequence recently?
    const cutoffDate = new Date(Date.now() - DUPLICATE_WINDOW_DAYS * 24 * 60 * 60 * 1000).toISOString();
    const { data: existing, error: checkError } = await supabase
      .from('nurture_sequences_sent')
      .select('id')
      .eq('email', email.toLowerCase().trim())
      .eq('resource_id', resourceId)
      .gte('sent_at', cutoffDate)
      .maybeSingle();

    if (checkError) {
      console.error("Error checking for duplicates:", checkError);
      // Continue anyway - don't block legitimate users due to DB errors
    }

    if (existing) {
      console.log(`Duplicate detected - sequence already sent to ${email?.substring(0, 3)}*** for ${resourceId}`);
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Sequence already sent recently",
          duplicate: true 
        }),
        {
          status: 200, // Return 200 to not reveal duplicate detection to potential attackers
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Record this sequence send BEFORE sending emails (prevents race conditions)
    const { error: insertError } = await supabase
      .from('nurture_sequences_sent')
      .insert({
        email: email.toLowerCase().trim(),
        resource_id: resourceId,
        ip_address: clientIP,
        user_agent: req.headers.get('user-agent')?.substring(0, 500),
      });

    if (insertError) {
      console.error("Error recording sequence:", insertError);
      // Continue anyway - better to send duplicate than block legitimate user
    }

    const fromEmail = "CWT Studio <hello@thecwtstudio.com>";
    const fromEmailFallback = "CWT Studio <onboarding@resend.dev>";

    // Send Email 1 immediately
    console.log("Sending Email 1 (immediate)...");
    try {
      const email1Response = await resend.emails.send({
        from: fromEmailFallback, // Change to fromEmail when domain is verified
        to: [email],
        subject: emailSequence.email1.subject,
        html: emailSequence.email1.html,
        text: emailSequence.email1.text,
        tags: [
          { name: 'campaign', value: 'resource-nurture' },
          { name: 'resource_id', value: resourceId },
          { name: 'sequence_position', value: '1' },
        ],
      });
      console.log("Email 1 sent successfully:", email1Response);
    } catch (error) {
      console.error("Error sending Email 1:", error);
      throw error;
    }

    // Schedule Email 2 for 2 days later
    console.log("Scheduling Email 2 (Day 2)...");
    try {
      const email2Response = await resend.emails.send({
        from: fromEmailFallback, // Change to fromEmail when domain is verified
        to: [email],
        subject: emailSequence.email2.subject,
        html: emailSequence.email2.html,
        text: emailSequence.email2.text,
        scheduledAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
        tags: [
          { name: 'campaign', value: 'resource-nurture' },
          { name: 'resource_id', value: resourceId },
          { name: 'sequence_position', value: '2' },
        ],
      });
      console.log("Email 2 scheduled successfully:", email2Response);
    } catch (error) {
      console.error("Error scheduling Email 2:", error);
      // Don't throw - continue to Email 3 even if Email 2 fails
    }

    // Schedule Email 3 for 5 days later
    console.log("Scheduling Email 3 (Day 5)...");
    try {
      const email3Response = await resend.emails.send({
        from: fromEmailFallback, // Change to fromEmail when domain is verified
        to: [email],
        subject: emailSequence.email3.subject,
        html: emailSequence.email3.html,
        text: emailSequence.email3.text,
        scheduledAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
        tags: [
          { name: 'campaign', value: 'resource-nurture' },
          { name: 'resource_id', value: resourceId },
          { name: 'sequence_position', value: '3' },
        ],
      });
      console.log("Email 3 scheduled successfully:", email3Response);
    } catch (error) {
      console.error("Error scheduling Email 3:", error);
      // Don't throw - sequence is partially successful
    }

    console.log("Nurture sequence initiated successfully");
    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Nurture sequence initiated",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: unknown) {
    console.error("Error in email-nurture-sequence function:", error);
    const message = error instanceof Error ? error.message : "Failed to initiate nurture sequence";
    return new Response(
      JSON.stringify({ error: "Failed to process request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
