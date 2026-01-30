// Centralized backend configuration.
//
// In Lovable Cloud projects, these values are normally injected via Vite env vars.
// In some preview contexts, env injection can be temporarily unavailable.
//
// These are *publishable* values (URL + publishable/anon key). They are safe to ship
// in the client bundle.

export const BACKEND_URL =
  import.meta.env.VITE_SUPABASE_URL ??
  // Fallback to known project URL (publishable)
  "https://efivymqchdnirblhpnoa.supabase.co";

export const BACKEND_PUBLISHABLE_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ??
  // Fallback to known project publishable key (publishable)
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmaXZ5bXFjaGRuaXJibGhwbm9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxNzQwOTEsImV4cCI6MjA3Nzc1MDA5MX0.6QLO0FwaQ943dZpiB0nRB8UGfUKlhk70VqQFPjzPvWA";
