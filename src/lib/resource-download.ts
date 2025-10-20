import { callJsonFunction } from "@/lib/serverless";

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
  const { response, data } = await callJsonFunction<
    ResourceDownloadPayload,
    ResourceDownloadResponse
  >("send-resource-download", payload);

  if (!response.ok) {
    throw new Error(data?.error || "Unable to submit resource request.");
  }
}
