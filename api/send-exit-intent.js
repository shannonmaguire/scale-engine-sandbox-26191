const RECIPIENT =
  process.env.EXIT_INTENT_RECIPIENT ||
  process.env.CONTACT_RECIPIENT ||
  "hello@thecwtstudio.com";
const FROM_ADDRESS =
  process.env.CONTACT_FROM || "CWT Studio Guides <onboarding@resend.dev>";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ error: "Method Not Allowed" });
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
    const email =
      typeof payload.email === "string" ? payload.email.trim() : "";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res
        .status(400)
        .json({ error: "Valid email address is required" });
    }

    const timestamp = new Date().toISOString();

    const html = `
      <div style="font-family:Inter,Segoe UI,system-ui,-apple-system,sans-serif;color:#111827;max-width:600px;">
        <h2 style="margin-bottom:16px;">New Guide Request</h2>
        <p style="margin-bottom:12px;">Someone requested the revenue operations guide via the exit-intent popup.</p>
        <table style="border-collapse:collapse;width:100%;max-width:480px;">
          <tbody>
            <tr>
              <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.04em;">Email</td>
              <td style="padding:8px 12px;border:1px solid #e5e7eb;font-size:14px;">
                <a href="mailto:${email}" style="color:#681038;text-decoration:none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.04em;">Source</td>
              <td style="padding:8px 12px;border:1px solid #e5e7eb;font-size:14px;">Exit Intent Popup</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.04em;">Captured</td>
              <td style="padding:8px 12px;border:1px solid #e5e7eb;font-size:14px;">${timestamp}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [RECIPIENT],
        subject: "New Exit Intent Guide Request",
        html,
        text: `New exit intent guide request.\n\nEmail: ${email}\nSource: Exit Intent Popup\nCaptured: ${timestamp}`,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend API error (exit intent):", errorText);
      return res
        .status(502)
        .json({ error: "Failed to send guide request notification" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Unhandled exit-intent function error:", error);
    return res
      .status(500)
      .json({ error: "Unexpected server error" });
  }
}
