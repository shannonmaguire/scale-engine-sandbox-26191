import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// --- Rate Limiting ---
const rateLimitMap = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per minute per IP

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();

  // Periodic cleanup
  if (rateLimitMap.size > 500) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (now - val.windowStart > RATE_LIMIT_WINDOW_MS) rateLimitMap.delete(key);
    }
  }

  const state = rateLimitMap.get(ip);
  if (!state || now - state.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return { allowed: true };
  }
  if (state.count >= RATE_LIMIT_MAX) {
    const retryAfter = Math.ceil((state.windowStart + RATE_LIMIT_WINDOW_MS - now) / 1000);
    return { allowed: false, retryAfter };
  }
  state.count++;
  return { allowed: true };
}

function getClientIP(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

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

// Validation constants
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_TITLE_LENGTH = 200;
const MIN_SCORE = 0;
const MAX_SCORE = 36;

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Rate limit check
  const clientIP = getClientIP(req);
  const rateCheck = checkRateLimit(clientIP);
  if (!rateCheck.allowed) {
    return new Response(
      JSON.stringify({ error: "Too many requests. Please try again later." }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": String(rateCheck.retryAfter),
          ...corsHeaders,
        },
      }
    );
  }

  try {
    const {
      email,
      checklistTitle,
      overallScore,
      answerCounts,
    }: AssessmentRequest = await req.json();

    // Input validation
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!checklistTitle || typeof checklistTitle !== 'string' || checklistTitle.length > MAX_TITLE_LENGTH) {
      return new Response(
        JSON.stringify({ error: "Invalid checklist title" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (typeof overallScore !== 'number' || overallScore < MIN_SCORE || overallScore > MAX_SCORE) {
      return new Response(
        JSON.stringify({ error: `Invalid score (must be ${MIN_SCORE}-${MAX_SCORE})` }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!answerCounts || typeof answerCounts.yes !== 'number' || typeof answerCounts.no !== 'number' || typeof answerCounts.partial !== 'number') {
      return new Response(
        JSON.stringify({ error: "Invalid answer counts" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Sending assessment report to:", email.substring(0, 3) + "***");

    // Determine tier based on raw score (0-36)
    const getTierData = (score: number) => {
      if (score >= 31) return {
        label: "Optimized",
        message: "Your environment is technically mature and ready to absorb growth. The focus now shifts to scale plays: outbound programs, new verticals, and advanced experimentation across your stack.",
        cta: "Explore Expansion and New Verticals",
        ctaUrl: "https://thecwtstudio.com/contact?service=Sprint&message=I%20scored%20" + score + "%20on%20the%20assessment%20and%20want%20to%20explore%20expansion%20opportunities"
      };
      if (score >= 21) return {
        label: "Structured",
        message: "Your foundation is strong. Data, CRM, and execution have structure, and the main gaps sit in optimization and scale. You are ready for outbound engines, deeper analytics, and stronger automation layers.",
        cta: "Design Your Revenue Engine Blueprint",
        ctaUrl: "https://thecwtstudio.com/contact?service=Sprint&message=I%20scored%20" + score + "%20on%20the%20assessment%20and%20want%20to%20design%20a%20revenue%20engine%20blueprint"
      };
      if (score >= 11) return {
        label: "Emerging",
        message: "You have pieces in place, yet the system leaks. Data hygiene, automations, and reporting exist in pockets rather than as a connected whole. The next step is to standardize your core workflows and fix the highest-impact breaks.",
        cta: "Schedule a 90-Day Infrastructure Sprint",
        ctaUrl: "https://thecwtstudio.com/sprint"
      };
      return {
        label: "Foundational",
        message: "Your systems are carrying more risk than you see day to day. Data quality, pipeline structure, and execution discipline all need a clean reset before growth efforts will stick. The next step is a focused architecture review and a minimum viable operating system.",
        cta: "Book a Technical Architecture Review",
        ctaUrl: "https://thecwtstudio.com/contact?service=Assessment&message=I%20scored%20" + score + "%20on%20the%20assessment%20and%20need%20an%20architecture%20review"
      };
    };

    const tierData = getTierData(overallScore);

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
            .insight-box { background: #FFF9E6; border-left: 4px solid #8B0000; padding: 20px; margin: 30px 0; }
            .cta { display: inline-block; background: #8B0000; color: white; padding: 16px 32px; text-decoration: none; border-radius: 4px; margin: 30px 0; font-weight: 600; }
            .footer { text-align: center; padding: 30px; color: #999; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px; font-weight: 600;">Technical Maturity Assessment</h1>
              <div class="score">${overallScore}/36</div>
              <div class="badge">${tierData.label}</div>
            </div>
            
            <div class="content">
              <h2 style="color: #8B0000; margin-top: 0;">Your ${checklistTitle}</h2>
              
              <p>${tierData.message}</p>
              
              <div style="margin: 30px 0;">
                <div class="metric-row">
                  <span class="metric-label">Yes (Fully Implemented)</span>
                  <span class="metric-value">${answerCounts.yes} items</span>
                </div>
                <div class="metric-row">
                  <span class="metric-label">Partial Implementation</span>
                  <span class="metric-value">${answerCounts.partial} items</span>
                </div>
                <div class="metric-row">
                  <span class="metric-label">No (Not Implemented)</span>
                  <span class="metric-value">${answerCounts.no} items</span>
                </div>
              </div>

              <div class="insight-box">
                <strong style="color: #8B0000;">Next Step</strong>
                <p style="margin: 10px 0 0 0;">${tierData.message}</p>
              </div>

              <p style="margin-top: 30px;">Ready to take action?</p>
              
              <a href="${tierData.ctaUrl}" class="cta">${tierData.cta}</a>

              <p style="color: #666; font-size: 14px; margin-top: 30px;">
                View your full results with category breakdown at <a href="https://thecwtstudio.com/assessment-results" style="color: #8B0000;">cwtstudio.com/assessment-results</a>
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
      subject: `Your Technical Maturity Score: ${overallScore}/36 (${tierData.label})`,
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
  } catch (error: unknown) {
    console.error("Error in send-assessment-report function:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process assessment report" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
