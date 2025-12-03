import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WaitlistConfirmationRequest {
  email: string;
  full_name: string;
  queue_position: number;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, full_name, queue_position }: WaitlistConfirmationRequest = await req.json();

    console.log(`Sending waitlist confirmation to ${email}, position #${queue_position}`);

    const emailResponse = await resend.emails.send({
      from: "CWT Studio <hello@cwtstudio.com>",
      to: [email],
      subject: `You're #${queue_position} on the CWT Studio Waitlist`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="border-bottom: 1px solid #e5e5e5; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="font-size: 24px; font-weight: 600; margin: 0;">CWT Studio</h1>
          </div>
          
          <p style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #666; margin-bottom: 8px;">
            Waitlist Confirmation
          </p>
          
          <h2 style="font-size: 28px; font-weight: 600; margin: 0 0 20px 0;">
            You're #${queue_position} on the list
          </h2>
          
          <p style="font-size: 16px; color: #444; margin-bottom: 24px;">
            Hi ${full_name},
          </p>
          
          <p style="font-size: 16px; color: #444; margin-bottom: 24px;">
            Thanks for joining the CWT Studio waitlist. We're currently at capacity, but we'll reach out as soon as a spot opens.
          </p>
          
          <div style="background: #f9f9f9; border: 1px solid #e5e5e5; padding: 24px; margin: 30px 0;">
            <h3 style="font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">What Happens Next</h3>
            <ul style="margin: 0; padding: 0 0 0 20px; color: #444;">
              <li style="margin-bottom: 8px;">We operate in 90-day cycles</li>
              <li style="margin-bottom: 8px;">New capacity opens at cycle end</li>
              <li style="margin-bottom: 8px;">You'll get priority notification</li>
              <li style="margin-bottom: 0;">7 days to respond when contacted</li>
            </ul>
          </div>
          
          <p style="font-size: 16px; color: #444; margin-bottom: 24px;">
            <strong>While you wait:</strong> Take the free <a href="https://cwtstudio.com/self-assessment" style="color: #1a1a1a;">Revenue Health Check</a> to identify priority areas in your current infrastructure.
          </p>
          
          <p style="font-size: 16px; color: #444; margin-bottom: 8px;">
            Questions? Reply to this email or reach out at hello@cwtstudio.com.
          </p>
          
          <div style="border-top: 1px solid #e5e5e5; margin-top: 40px; padding-top: 20px;">
            <p style="font-size: 14px; color: #666; margin: 0;">
              CWT Studio<br>
              Revenue Infrastructure, Built to Hand Off
            </p>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Waitlist confirmation email sent:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-waitlist-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
