const RECIPIENT =
  process.env.RESOURCES_RECIPIENT ||
  process.env.EXIT_INTENT_RECIPIENT ||
  process.env.CONTACT_RECIPIENT ||
  "hello@thecwtstudio.com";
const FROM_ADDRESS =
  process.env.CONTACT_FROM || "CWT Studio Resources <onboarding@resend.dev>";

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable");
    return res.status(500).json({ error: "Email service not configured" });
  }

  try {
    const payload =
      typeof req.body === "string"
        ? JSON.parse(req.body || "{}")
        : req.body || {};

    const rawEmail = typeof payload.email === "string" ? payload.email : "";
    const email = rawEmail.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res
        .status(400)
        .json({ error: "Valid email address is required" });
    }

    const resourceTitle =
      typeof payload.resourceTitle === "string" && payload.resourceTitle.trim()
        ? payload.resourceTitle.trim()
        : "Unknown Resource";
    const resourceId =
      typeof payload.resourceId === "string" ? payload.resourceId.trim() : "";
    const downloadUrl =
      typeof payload.downloadUrl === "string"
        ? payload.downloadUrl.trim()
        : "";
    const pagePath =
      typeof payload.page === "string" ? payload.page.trim() : "";

    const timestamp = new Date().toISOString();

    const htmlEmail = escapeHtml(email);
    const htmlResourceTitle = escapeHtml(resourceTitle);
    const htmlResourceId = escapeHtml(resourceId);
    const htmlDownloadUrl = escapeHtml(downloadUrl);
    const htmlPagePath = escapeHtml(pagePath);

    const html = `
      <div style="font-family:Inter,Segoe UI,system-ui,-apple-system,sans-serif;color:#111827;max-width:640px;">
        <h2 style="margin-bottom:16px;">New Resource Download Request</h2>
        <p style="margin-bottom:12px;">A visitor requested one of the website resources.</p>
        <table style="border-collapse:collapse;width:100%;max-width:520px;">
          <tbody>
            <tr>
              <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.04em;">Email</td>
              <td style="padding:8px 12px;border:1px solid #e5e7eb;font-size:14px;">
                <a href="mailto:${htmlEmail}" style="color:#681038;text-decoration:none;">${htmlEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.04em;">Resource</td>
              <td style="padding:8px 12px;border:1px solid #e5e7eb;font-size:14px;">${htmlResourceTitle}</td>
            </tr>
            ${
              resourceId
                ? `<tr>
                    <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.04em;">Resource ID</td>
                    <td style="padding:8px 12px;border:1px solid #e5e7eb;font-size:14px;">${htmlResourceId}</td>
                  </tr>`
                : ""
            }
            ${
              downloadUrl
                ? `<tr>
                    <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.04em;">Download URL</td>
                    <td style="padding:8px 12px;border:1px solid #e5e7eb;font-size:14px;">
                      <a href="${htmlDownloadUrl}" style="color:#681038;text-decoration:none;">${htmlDownloadUrl}</a>
                    </td>
                  </tr>`
                : ""
            }
            ${
              pagePath
                ? `<tr>
                    <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.04em;">Page</td>
                    <td style="padding:8px 12px;border:1px solid #e5e7eb;font-size:14px;">${htmlPagePath}</td>
                  </tr>`
                : ""
            }
            <tr>
              <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.04em;">Captured</td>
              <td style="padding:8px 12px;border:1px solid #e5e7eb;font-size:14px;">${timestamp}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    const text = [
      "New resource download request.",
      `Email: ${email}`,
      `Resource: ${resourceTitle}`,
      resourceId ? `Resource ID: ${resourceId}` : null,
      downloadUrl ? `Download URL: ${downloadUrl}` : null,
      pagePath ? `Page: ${pagePath}` : null,
      `Captured: ${timestamp}`,
    ]
      .filter(Boolean)
      .join("\n");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [RECIPIENT],
        subject: `Resource Download Request · ${resourceTitle}`,
        html,
        text,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend API error (resource download):", errorText);
      return res
        .status(502)
        .json({ error: "Failed to send resource notification" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Unhandled resource download function error:", error);
    return res.status(500).json({ error: "Unexpected server error" });
  }
}
