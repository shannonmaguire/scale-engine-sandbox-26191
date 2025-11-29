import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface AssessmentRequest {
  email: string;
  checklistId: string;
  checklistTitle: string;
  overallScore: number;
  answerCounts: {
    yes: number;
    no: number;
    partial: number;
  };
  checklistState: any;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      email,
      checklistTitle,
      overallScore,
      answerCounts,
    }: AssessmentRequest = await req.json();

    console.log("Sending assessment report to:", email);

    const maturityLevel = 
      overallScore >= 86 ? "Advanced" :
      overallScore >= 71 ? "Established" :
      overallScore >= 41 ? "Developing" : "Foundational";

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
            .header { background: linear-gradient(135deg, #8B0000 0%, #660000 100%); color: white; padding: 40px; text-align: center; border-radius: 8px 8px 0 0; }
            .score { font-size: 72px; font-weight: bold; margin: 20px 0; }
            .badge { display: inline-block; padding: 8px 16px; background: rgba(255,255,255,0.2); border-radius: 20px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-top: 10px; }
            .content { background: white; padding: 40px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px; }
            .metric-row { display: flex; justify-content: space-between; padding: 15px 0; border-bottom: 1px solid #f0f0f0; }
            .metric-label { color: #666; font-size: 14px; }
            .metric-value { font-weight: 600; color: #8B0000; }
            .cta { display: inline-block; background: #8B0000; color: white; padding: 16px 32px; text-decoration: none; border-radius: 4px; margin: 30px 0; font-weight: 600; }
            .footer { text-align: center; padding: 30px; color: #999; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px; font-weight: 600;">Technical Maturity Assessment</h1>
              <div class="score">${overallScore}%</div>
              <div class="badge">${maturityLevel}</div>
            </div>
            
            <div class="content">
              <h2 style="color: #8B0000; margin-top: 0;">Your ${checklistTitle}</h2>
              
              <p>Your infrastructure assessment is complete. Here's what the data shows:</p>
              
              <div style="margin: 30px 0;">
                <div class="metric-row">
                  <span class="metric-label">Completed Criteria</span>
                  <span class="metric-value">${answerCounts.yes} items</span>
                </div>
                <div class="metric-row">
                  <span class="metric-label">Partial Implementation</span>
                  <span class="metric-value">${answerCounts.partial} items</span>
                </div>
                <div class="metric-row">
                  <span class="metric-label">Missing Capabilities</span>
                  <span class="metric-value">${answerCounts.no} items</span>
                </div>
              </div>

              ${overallScore < 71 ? `
                <div style="background: #FFF9E6; border-left: 4px solid #FFA500; padding: 20px; margin: 30px 0;">
                  <strong style="color: #FFA500;">Infrastructure Gaps Detected</strong>
                  <p style="margin: 10px 0 0 0; color: #666;">Your score indicates operational inefficiencies that compound over time. Prioritized system improvements typically yield 40-60% reduction in manual operations overhead.</p>
                </div>
              ` : ''}

              <p style="margin-top: 30px;">For detailed category breakdown and specific recommendations, view your full report:</p>
              
              <a href="https://cwtstudio.com/assessment-results" class="cta">View Full Report</a>

              <p style="color: #666; font-size: 14px; margin-top: 30px;">
                Want to discuss implementation priorities? <a href="https://cwtstudio.com/contact" style="color: #8B0000;">Schedule a technical consultation</a>.
              </p>
            </div>

            <div class="footer">
              <p>CWT Studio | Revenue Infrastructure Engineering</p>
              <p>This assessment was completed on ${new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailResponse = await resend.emails.send({
      from: "CWT Studio <onboarding@resend.dev>",
      to: [email],
      subject: `Your Technical Maturity Score: ${overallScore}% (${maturityLevel})`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-assessment-report function:", error);
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
