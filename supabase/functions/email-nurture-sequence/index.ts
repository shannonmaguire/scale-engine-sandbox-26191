import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
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

const handler = async (req: Request): Promise<Response> => {
  console.log("Email nurture sequence function called");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, resourceId, resourceTitle }: NurtureRequest = await req.json();
    
    console.log(`Processing nurture sequence for resource: ${resourceId}, email: ${email}`);

    if (!email || !resourceId) {
      console.error("Missing required fields:", { email, resourceId });
      return new Response(
        JSON.stringify({ error: "Email and resourceId are required" }),
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

    const fromEmail = "CWT Studio <hello@cwtstudio.com>";
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
        resourceId,
        email,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in email-nurture-sequence function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to initiate nurture sequence",
        details: error.toString(),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
