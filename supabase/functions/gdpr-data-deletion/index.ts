import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "https://esm.sh/resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// UUID v4 validation regex
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

interface DataDeletionRequest {
  requestId: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("GDPR data deletion function called");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

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
    const { requestId }: DataDeletionRequest = await req.json();

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
      .eq("request_type", "deletion")
      .single();

    if (requestError || !request) {
      console.error("Request not found:", requestError);
      return new Response(
        JSON.stringify({ error: "Deletion request not found" }),
        { status: 404, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // CRITICAL: Verify ownership - user can only process their own requests
    const ownsRequest = 
      (request.user_id && request.user_id === currentUserId) ||
      (request.email && currentUserEmail && request.email.toLowerCase() === currentUserEmail.toLowerCase());

    if (!ownsRequest) {
      console.warn(`Unauthorized deletion attempt: user ${currentUserId} tried to delete request ${requestId}`);
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
    const deletionLog: string[] = [];

    try {
      // 1. Delete nurture sequences
      const { error: nurtureError } = await supabase
        .from("nurture_sequences_sent")
        .delete()
        .eq("email", email);
      
      if (!nurtureError) {
        deletionLog.push("Deleted nurture sequence records");
      }

      // 2. Delete assessments
      const { error: assessmentError } = await supabase
        .from("assessments")
        .delete()
        .eq("email", email);
      
      if (!assessmentError) {
        deletionLog.push("Deleted assessment records");
      }

      // 3. Delete waitlist entries
      const { error: waitlistError } = await supabase
        .from("waitlist")
        .delete()
        .eq("email", email);
      
      if (!waitlistError) {
        deletionLog.push("Deleted waitlist entries");
      }

      // 4. Delete deals (if user is a partner)
      if (userId) {
        const { error: dealsError } = await supabase
          .from("deals")
          .delete()
          .eq("partner_id", userId);
        
        if (!dealsError) {
          deletionLog.push("Deleted deal records");
        }
      }

      // 5. Delete user roles
      if (userId) {
        const { error: rolesError } = await supabase
          .from("user_roles")
          .delete()
          .eq("user_id", userId);
        
        if (!rolesError) {
          deletionLog.push("Deleted user role records");
        }
      }

      // 6. Delete profile
      if (userId) {
        const { error: profileError } = await supabase
          .from("profiles")
          .delete()
          .eq("id", userId);
        
        if (!profileError) {
          deletionLog.push("Deleted user profile");
        }
      }

      // 7. Delete other data requests (except this one)
      const { error: requestsError } = await supabase
        .from("data_requests")
        .delete()
        .eq("email", email)
        .neq("id", requestId);
      
      if (!requestsError) {
        deletionLog.push("Deleted previous data request records");
      }

      // 8. Delete the auth user (this will cascade delete related data)
      if (userId) {
        const { error: authError } = await supabase.auth.admin.deleteUser(userId);
        if (!authError) {
          deletionLog.push("Deleted authentication account");
        } else {
          console.error("Error deleting auth user:", authError);
          deletionLog.push("Note: Auth account deletion requires manual processing");
        }
      }

      // Update request as completed
      await supabase
        .from("data_requests")
        .update({
          status: "completed",
          processed_at: new Date().toISOString(),
        })
        .eq("id", requestId);

      // Send confirmation email
      if (resendApiKey) {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: "CWT Studio <onboarding@resend.dev>",
          to: [email],
          subject: "Your Data Deletion Request Has Been Completed",
          html: `
            <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #111827; margin-bottom: 16px;">Data Deletion Completed</h2>
              <p style="color: #374151; line-height: 1.6;">
                Your request to delete your personal data has been processed. The following actions were taken:
              </p>
              <ul style="color: #374151; line-height: 1.8;">
                ${deletionLog.map(item => `<li>${item}</li>`).join('')}
              </ul>
              <p style="color: #6b7280; font-size: 14px; margin-top: 24px;">
                If you have any questions, please contact us at hello@thecwtstudio.com
              </p>
            </div>
          `,
        });
      }

      console.log(`Data deletion completed for request ${requestId}:`, deletionLog);

      return new Response(
        JSON.stringify({
          success: true,
          message: "Data deletion completed",
          deleted: deletionLog,
        }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );

    } catch (deleteError) {
      console.error("Error during deletion:", deleteError);
      
      // Update request as failed
      await supabase
        .from("data_requests")
        .update({ status: "failed" })
        .eq("id", requestId);

      throw deleteError;
    }

  } catch (error: unknown) {
    console.error("Error in gdpr-data-deletion:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process deletion request" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
