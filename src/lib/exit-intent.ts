import { callJsonFunction } from "@/lib/serverless";

export async function submitExitIntentLead(email: string): Promise<void> {
  const { response, data } = await callJsonFunction<
    { email: string },
    { error?: string; success?: boolean }
  >("send-exit-intent", { email });

  if (!response.ok) {
    throw new Error(data?.error || "Unable to submit guide request.");
  }
}
