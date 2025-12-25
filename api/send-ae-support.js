import {
  validateEmail,
  validateRequired,
  validatePayloadSize,
  validateTextFields,
  escapeHtml,
  checkRateLimit,
  getClientIP,
} from './_lib/validation.js';

const RECIPIENT =
  process.env.AE_SUPPORT_RECIPIENT ||
  process.env.CONTACT_RECIPIENT ||
  "shannon@creatorwealthtools.com";
const FROM_ADDRESS =
  process.env.CONTACT_FROM || "CWT Studio AE Support <onboarding@resend.dev>";

// Field-specific length limits
const FIELD_LIMITS = {
  aeName: 200,
  aeEmail: 254,
  aeCompany: 200,
  prospectCompany: 200,
  prospectContact: 200,
  dealSize: 100,
  urgency: 50,
  supportNeeded: 2000,
  technicalChallenges: 5000,
  timeline: 200,
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ error: "Method Not Allowed" });
  }

  // Rate limiting
  const clientIP = getClientIP(req);
  const rateLimit = checkRateLimit(`ae-support:${clientIP}`);
  if (!rateLimit.allowed) {
    res.setHeader('Retry-After', rateLimit.retryAfter);
    return res.status(429).json({ 
      error: "Too many requests. Please try again later.",
      retryAfter: rateLimit.retryAfter 
    });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable");
    return res
      .status(500)
      .json({ error: "Email service not configured" });
  }

  try {
    const payload =
      typeof req.body === "string"
        ? JSON.parse(req.body || "{}")
        : req.body || {};

    // Validate payload size
    if (!validatePayloadSize(payload)) {
      return res.status(413).json({ error: "Request payload too large" });
    }

    // Validate required fields
    const requiredFields = [
      "aeName",
      "aeEmail",
      "aeCompany",
      "prospectCompany",
      "prospectContact",
      "dealSize",
      "urgency",
      "supportNeeded",
      "technicalChallenges",
      "timeline",
    ];
    const missing = validateRequired(payload, requiredFields);

    if (missing.length > 0) {
      return res.status(400).json({
        error: `Missing required fields: ${missing.join(", ")}`,
      });
    }

    // Validate email format
    if (!validateEmail(payload.aeEmail)) {
      return res.status(400).json({ error: "Invalid email address format" });
    }

    // Validate field lengths
    const textValidation = validateTextFields(payload, FIELD_LIMITS);
    if (!textValidation.valid) {
      return res.status(400).json({ error: textValidation.errors[0] });
    }

    const html = buildHtml(payload);
    const subject = `[AE SUPPORT - ${escapeHtml(payload.urgency)}] ${escapeHtml(payload.aeName)} · ${escapeHtml(payload.prospectCompany)} · ${escapeHtml(payload.dealSize)}`;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [RECIPIENT],
        reply_to: payload.aeEmail,
        subject,
        html,
        text: `AE Support Request - ${payload.urgency} Priority\n\nAE: ${payload.aeName} (${payload.aeEmail})\nProspect: ${payload.prospectCompany}\nDeal Size: ${payload.dealSize}\n\nSupport Needed:\n${payload.supportNeeded}\n\nTechnical Challenges:\n${payload.technicalChallenges}`,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend API error:", errorText);
      return res
        .status(502)
        .json({ error: "Failed to deliver email via Resend" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Unhandled AE support function error:", error);
    return res
      .status(500)
      .json({ error: "Unexpected server error" });
  }
}

const getUrgencyColor = (urgency) => {
  const colors = {
    CRITICAL: "#dc2626",
    HIGH: "#ea580c",
    MEDIUM: "#0891b2",
    GENERAL: "#6b7280",
  };
  return colors[urgency] || colors.GENERAL;
};

const getUrgencyResponseTime = (urgency) => {
  const times = {
    CRITICAL: "4 hours",
    HIGH: "24 hours",
    MEDIUM: "48 hours",
    GENERAL: "3-5 days",
  };
  return times[urgency] || times.GENERAL;
};

const buildHtml = (payload) => {
  const urgencyColor = getUrgencyColor(payload.urgency);
  const responseTime = getUrgencyResponseTime(payload.urgency);

  return `
    <div style="font-family:Inter,Segoe UI,system-ui,-apple-system,sans-serif;color:#111827;max-width:640px;">
      <div style="background:#681038;color:#ffffff;padding:24px;border-radius:8px 8px 0 0;">
        <h1 style="margin:0;font-size:24px;font-weight:700;">AE Technical Support Request</h1>
        <div style="margin-top:12px;display:inline-flex;align-items:center;background:rgba(255,255,255,0.2);padding:8px 12px;border-radius:6px;font-family:monospace;font-size:14px;font-weight:600;">
          <span style="color:${urgencyColor};margin-right:8px;">●</span>
          ${escapeHtml(payload.urgency)} PRIORITY
          <span style="color:rgba(255,255,255,0.7);margin:0 8px;">→</span>
          Response: ${responseTime}
        </div>
      </div>
      <div style="background:#ffffff;padding:24px;border:1px solid #e5e7eb;border-top:none;">
        <h2 style="margin:0 0 16px 0;font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#6b7280;">Account Executive</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          <tr>
            <td style="padding:8px 0;font-weight:600;color:#374151;width:140px;">Name</td>
            <td style="padding:8px 0;color:#111827;">${escapeHtml(payload.aeName)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:600;color:#374151;">Email</td>
            <td style="padding:8px 0;color:#111827;"><a href="mailto:${escapeHtml(
              payload.aeEmail
            )}" style="color:#681038;">${escapeHtml(payload.aeEmail)}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:600;color:#374151;">Company</td>
            <td style="padding:8px 0;color:#111827;">${escapeHtml(payload.aeCompany)}</td>
          </tr>
        </table>
        <h2 style="margin:24px 0 16px 0;font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#6b7280;padding-top:24px;border-top:1px solid #e5e7eb;">Prospect Details</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          <tr>
            <td style="padding:8px 0;font-weight:600;color:#374151;width:140px;">Company</td>
            <td style="padding:8px 0;color:#111827;font-weight:700;">${escapeHtml(payload.prospectCompany)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:600;color:#374151;">Contact</td>
            <td style="padding:8px 0;color:#111827;">${escapeHtml(payload.prospectContact)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:600;color:#374151;">Deal Size</td>
            <td style="padding:8px 0;color:#111827;">${escapeHtml(payload.dealSize)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:600;color:#374151;">Timeline</td>
            <td style="padding:8px 0;color:#111827;">${escapeHtml(payload.timeline)}</td>
          </tr>
        </table>
        <h2 style="margin:24px 0 16px 0;font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#6b7280;padding-top:24px;border-top:1px solid #e5e7eb;">Support Requested</h2>
        <div style="background:#f9fafb;padding:16px;border-radius:6px;margin-bottom:16px;border-left:3px solid #681038;">
          <p style="margin:0;color:#111827;line-height:1.6;">${escapeHtml(payload.supportNeeded)}</p>
        </div>
        <h3 style="margin:16px 0 8px 0;font-size:13px;font-weight:600;color:#374151;">Technical Challenges / Context</h3>
        <div style="background:#f9fafb;padding:16px;border-radius:6px;border-left:3px solid #548687;">
          <p style="margin:0;color:#111827;line-height:1.6;white-space:pre-wrap;">${escapeHtml(payload.technicalChallenges)}</p>
        </div>
      </div>
      <div style="background:#f3f4f6;padding:16px 24px;border-radius:0 0 8px 8px;text-align:center;font-size:12px;color:#6b7280;">
        <p style="margin:0;">Respond directly to <a href="mailto:${escapeHtml(
          payload.aeEmail
        )}" style="color:#681038;">${escapeHtml(payload.aeEmail)}</a></p>
        <p style="margin:8px 0 0 0;">Expected response time: <strong>${responseTime}</strong></p>
      </div>
    </div>
  `;
};
