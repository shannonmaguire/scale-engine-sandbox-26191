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
  process.env.CONTACT_RECIPIENT || "shannon@creatorwealthtools.com";
const FROM_ADDRESS =
  process.env.CONTACT_FROM || "Creator Wealth Tools <onboarding@resend.dev>";

// Field-specific length limits
const FIELD_LIMITS = {
  fullName: 200,
  email: 254,
  company: 200,
  servicesInterested: 500,
  timeline: 100,
  budgetRange: 100,
  currentSetup: 500,
  message: 5000,
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
  const rateLimit = checkRateLimit(`contact:${clientIP}`);
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

    // Validate payload size (prevent DoS)
    if (!validatePayloadSize(payload)) {
      return res.status(413).json({ error: "Request payload too large" });
    }

    // Validate required fields
    const requiredFields = ["fullName", "email", "servicesInterested", "timeline", "message"];
    const missing = validateRequired(payload, requiredFields);

    if (missing.length > 0) {
      return res.status(400).json({
        error: `Missing required fields: ${missing.join(", ")}`,
      });
    }

    // Validate email format
    if (!validateEmail(payload.email)) {
      return res.status(400).json({ error: "Invalid email address format" });
    }

    // Validate servicesInterested is an array
    if (!Array.isArray(payload.servicesInterested) || payload.servicesInterested.length === 0) {
      return res.status(400).json({
        error: "At least one service must be selected",
      });
    }

    // Validate field lengths
    const textValidation = validateTextFields(payload, FIELD_LIMITS);
    if (!textValidation.valid) {
      return res.status(400).json({ error: textValidation.errors[0] });
    }

    const html = buildHtml(payload);
    const servicesLabel = payload.servicesInterested.join(", ");
    const subject = `New Lead: ${escapeHtml(payload.fullName)}${payload.company ? ` · ${escapeHtml(payload.company)}` : ""} · ${escapeHtml(servicesLabel)}`;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [RECIPIENT],
        reply_to: payload.email,
        subject,
        html,
        text: `New contact submission from ${payload.fullName} (${payload.email}).`,
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
    console.error("Unhandled contact function error:", error);
    return res
      .status(500)
      .json({ error: "Unexpected server error" });
  }
}

const buildHtml = (payload) => {
  // Format services array
  const formatValue = (key, val) => {
    if (key === "servicesInterested" && Array.isArray(val)) {
      return val.join(", ");
    }
    if (typeof val === "boolean") {
      return val ? "Yes" : "No";
    }
    return String(val ?? "—");
  };

  // Order and label fields
  const fieldOrder = [
    { key: "fullName", label: "Full Name" },
    { key: "email", label: "Email" },
    { key: "company", label: "Company" },
    { key: "servicesInterested", label: "Services Interested" },
    { key: "timeline", label: "Timeline" },
    { key: "budgetRange", label: "Budget Range" },
    { key: "currentSetup", label: "Current Setup" },
    { key: "message", label: "Project Details" },
  ];

  const rows = fieldOrder
    .filter(({ key }) => payload[key] && payload[key] !== "")
    .map(({ key, label }) => {
      const displayValue = formatValue(key, payload[key]);
      const isMessage = key === "message";
      
      return `
        <tr>
          <td style="padding:12px;border:1px solid #e5e7eb;font-weight:600;text-transform:uppercase;font-size:11px;letter-spacing:0.05em;background:#f9fafb;vertical-align:top;width:140px;">${escapeHtml(
            label
          )}</td>
          <td style="padding:12px;border:1px solid #e5e7eb;font-size:14px;${isMessage ? 'white-space:pre-wrap;' : ''}">${escapeHtml(
            displayValue
          )}</td>
        </tr>
      `;
    })
    .join("");

  // Priority indicator based on timeline
  const isPriority = payload.timeline === "urgent" || payload.timeline === "soon";
  const priorityBadge = isPriority 
    ? `<span style="display:inline-block;padding:4px 12px;background:#dc2626;color:#fff;font-size:11px;font-weight:700;border-radius:4px;text-transform:uppercase;letter-spacing:0.05em;">High Priority</span>` 
    : "";

  return `
    <div style="font-family:Inter,Segoe UI,system-ui,-apple-system,sans-serif;color:#111827;padding:20px;">
      <div style="max-width:700px;">
        <h2 style="font-size:22px;margin-bottom:8px;font-weight:700;">New CWT Studio Lead ${priorityBadge}</h2>
        <p style="margin-bottom:24px;color:#6b7280;font-size:14px;">Review the qualification details below and respond within 24 hours.</p>
      <table style="border-collapse:collapse;width:100%;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
        <tbody>
          ${rows}
        </tbody>
      </table>
      <p style="margin-top:24px;font-size:13px;color:#6b7280;">Reply directly to this email to respond to ${escapeHtml(payload.fullName)}.</p>
      </div>
    </div>
  `;
};
