import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// UUID v4 validation regex
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

interface DataExportRequest {
  requestId: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("GDPR data export function called");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");

    if (!supabaseUrl || !supabaseServiceKey || !supabaseAnonKey) {
      throw new Error("Missing Supabase configuration");
    }

    // Validate authentication and get current user
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({ error: "Authorization required" }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Create client with user's auth context to verify their identity
    const supabaseAuth = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } }
    });

    // Verify the user's token
    const { data: { user }, error: userError } = await supabaseAuth.auth.getUser();
    
    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: "Invalid authentication token" }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const currentUserId = user.id;
    const currentUserEmail = user.email;

    // Service role client for actual data operations
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const { requestId }: DataExportRequest = await req.json();

    if (!requestId || typeof requestId !== 'string') {
      return new Response(
        JSON.stringify({ error: "Request ID is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate UUID format
    if (!UUID_REGEX.test(requestId)) {
      return new Response(
        JSON.stringify({ error: "Invalid request ID format" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Get the request details
    const { data: request, error: requestError } = await supabase
      .from("data_requests")
      .select("*")
      .eq("id", requestId)
      .eq("request_type", "export")
      .single();

    if (requestError || !request) {
      console.error("Request not found:", requestError);
      return new Response(
        JSON.stringify({ error: "Export request not found" }),
        { status: 404, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // CRITICAL: Verify ownership - user can only process their own requests
    const ownsRequest = 
      (request.user_id && request.user_id === currentUserId) ||
      (request.email && currentUserEmail && request.email.toLowerCase() === currentUserEmail.toLowerCase());

    if (!ownsRequest) {
      console.warn(`Unauthorized export attempt: user ${currentUserId} tried to export request ${requestId}`);
      return new Response(
        JSON.stringify({ error: "Not authorized to process this request" }),
        { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Update status to processing
    await supabase
      .from("data_requests")
      .update({ status: "processing" })
      .eq("id", requestId);

    const email = request.email.toLowerCase().trim();
    const userId = request.user_id;

    // Collect all user data
    const exportData: Record<string, unknown> = {
      export_date: new Date().toISOString(),
      email: email,
      user_id: userId,
    };

    // 1. Profile data
    if (userId) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .maybeSingle();
      
      if (profile) {
        exportData.profile = profile;
      }
    }

    // 2. Assessment data
    const { data: assessments } = await supabase
      .from("assessments")
      .select("*")
      .eq("email", email);
    
    if (assessments && assessments.length > 0) {
      exportData.assessments = assessments;
    }

    // 3. Waitlist data
    const { data: waitlistEntries } = await supabase
      .from("waitlist")
      .select("*")
      .eq("email", email);
    
    if (waitlistEntries && waitlistEntries.length > 0) {
      exportData.waitlist = waitlistEntries;
    }

    // 4. Deals data (if user is a partner)
    if (userId) {
      const { data: deals } = await supabase
        .from("deals")
        .select("*")
        .eq("partner_id", userId);
      
      if (deals && deals.length > 0) {
        exportData.deals = deals;
      }
    }

    // 5. User roles
    if (userId) {
      const { data: roles } = await supabase
        .from("user_roles")
        .select("*")
        .eq("user_id", userId);
      
      if (roles && roles.length > 0) {
        exportData.user_roles = roles;
      }
    }

    // 6. Data requests history
    const { data: dataRequests } = await supabase
      .from("data_requests")
      .select("id, request_type, status, created_at, processed_at")
      .eq("email", email);
    
    if (dataRequests && dataRequests.length > 0) {
      exportData.data_requests = dataRequests;
    }

    // 7. Nurture sequences sent
    const { data: nurtureSequences } = await supabase
      .from("nurture_sequences_sent")
      .select("resource_id, sent_at")
      .eq("email", email);
    
    if (nurtureSequences && nurtureSequences.length > 0) {
      exportData.nurture_sequences = nurtureSequences;
    }

    // Generate JSON export
    const jsonExport = JSON.stringify(exportData, null, 2);

    // Update request as completed with download data
    // In production, you'd upload to storage and provide a signed URL
    // For now, we'll store a data URI (only for small exports)
    const base64Data = btoa(unescape(encodeURIComponent(jsonExport)));
    const dataUri = `data:application/json;base64,${base64Data}`;

    await supabase
      .from("data_requests")
      .update({
        status: "completed",
        processed_at: new Date().toISOString(),
        download_url: dataUri,
        download_expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days
      })
      .eq("id", requestId);

    console.log(`Data export completed for request ${requestId}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Data export completed",
        download_url: dataUri,
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );

  } catch (error: unknown) {
    console.error("Error in gdpr-data-export:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process export request" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
