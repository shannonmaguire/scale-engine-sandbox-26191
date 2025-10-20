const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-1.5-flash";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ error: "Method Not Allowed" });
  }

  if (!process.env.GEMINI_API_KEY) {
    console.error("Missing GEMINI_API_KEY environment variable");
    return res
      .status(500)
      .json({ error: "AI service not configured" });
  }

  try {
    const payload =
      typeof req.body === "string"
        ? JSON.parse(req.body || "{}")
        : req.body || {};
    const messages = Array.isArray(payload.messages) ? payload.messages : [];

    if (messages.length === 0) {
      return res
        .status(400)
        .json({ error: "Conversation history is required" });
    }

    const systemPrompt = [
      "You are the virtual assistant for CWT Studio, a Canadian consulting firm that delivers:",
      "- Business assessments focused on revenue operations and automation.",
      "- Automation of business processes and revenue infrastructure.",
      "- Website design and development across e-commerce, WordPress, Webflow, Framer, and full-stack stacks.",
      "",
      "Tone: professional, confident, and helpful. Keep answers concise and action-oriented.",
      "Always offer to provide an assessment of the client's business and explain how CWT Studio can help automate operations, build web experiences, or optimize e-commerce.",
      "If a question falls outside these topics or you are unsure, reply with: \"This question is outside my scope. Contact support: support@thecwtstudio.com\" and nothing else.",
      "Never mention that you are an AI model; refer to yourself as the CWT Studio assistant.",
      "When appropriate, invite the user to schedule a diagnostic or discovery call.",
    ].join("\n");

    const contents = messages
      .filter(
        (message) =>
          message &&
          typeof message.content === "string" &&
          message.content.trim().length > 0 &&
          (message.role === "user" || message.role === "assistant")
      )
      .map((message) => ({
        role: message.role === "assistant" ? "model" : "user",
        parts: [{ text: message.content }],
      }));

    const requestBody = {
      contents,
      systemInstruction: {
        role: "user",
        parts: [{ text: systemPrompt }],
      },
      generationConfig: {
        temperature: 0.4,
        topK: 32,
        topP: 0.95,
        maxOutputTokens: 512,
      },
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", errorText);
      return res.status(502).json({
        error: "Failed to generate a response. Please try again later.",
      });
    }

    const data = await response.json();
    const candidate =
      (Array.isArray(data.candidates) &&
        data.candidates.find((c) => c.finishReason !== "SAFETY")) ||
      data.candidates?.[0];

    const reply =
      candidate?.content?.parts
        ?.map((part) => part?.text || "")
        .join("")
        .trim() || "";

    if (!reply) {
      console.error("Gemini API returned an empty response:", data);
      return res.status(502).json({
        error:
          "Assistant is unavailable right now. Contact support: support@thecwtstudio.com",
      });
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Unhandled chat widget error:", error);
    return res.status(500).json({
      error:
        "Assistant is unavailable right now. Contact support: support@thecwtstudio.com",
    });
  }
}
