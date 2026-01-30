import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";
import { BACKEND_PUBLISHABLE_KEY, BACKEND_URL } from "@/lib/backendConfig";

// NOTE: We intentionally do NOT import from src/integrations/supabase/client.ts here.
// That file is auto-generated and throws at import-time if env vars are missing.
//
// This wrapper ensures the app keeps running even if env injection is transient.
export const supabase = createClient<Database>(BACKEND_URL, BACKEND_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});
