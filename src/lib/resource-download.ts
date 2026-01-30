import { callJsonFunction } from "@/lib/serverless";
import { BACKEND_PUBLISHABLE_KEY, BACKEND_URL } from "@/lib/backendConfig";

export interface ResourceDownloadPayload {
  email: string;
  resourceId?: string;
  resourceTitle?: string;
  downloadUrl?: string;
  page?: string;
}

interface ResourceDownloadResponse {
  error?: string;
  success?: boolean;
}

export async function submitResourceDownload(
  payload: ResourceDownloadPayload,
): Promise<void> {
  // Send initial notification email
  const { response, data } = await callJsonFunction<
    ResourceDownloadPayload,
    ResourceDownloadResponse
  >("send-resource-download", payload);

  if (!response.ok) {
    throw new Error(data?.error || "Unable to submit resource request.");
  }

  // Trigger nurture sequence via Supabase edge function
  try {
    const nurtureResponse = await fetch(
      `${BACKEND_URL}/functions/v1/email-nurture-sequence`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${BACKEND_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          email: payload.email,
          resourceId: payload.resourceId,
          resourceTitle: payload.resourceTitle,
        }),
      }
    );

    if (!nurtureResponse.ok) {
      console.error("Failed to trigger nurture sequence:", await nurtureResponse.text());
      // Don't throw - resource download succeeded, nurture sequence is secondary
    } else {
      console.log("Nurture sequence triggered successfully");
    }
  } catch (error) {
    console.error("Error triggering nurture sequence:", error);
    // Don't throw - resource download succeeded, nurture sequence is secondary
  }
}
