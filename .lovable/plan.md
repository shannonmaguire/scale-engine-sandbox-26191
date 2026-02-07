
# Full Defensible Security Scan Report

## Overall Security Posture: Solid Foundation, 4 Actionable Items

The project demonstrates strong security hygiene across most surfaces. RLS is enabled on all 8 tables with RESTRICTIVE policies, input validation is consistent across API endpoints, no sensitive keys are exposed in client code, and there's no use of `dangerouslySetInnerHTML`. The items below are the gaps that would matter in a compliance review or adversarial audit.

---

## What's Clean (No Action Needed)

- **RLS enabled on all 8 tables** with 33 RESTRICTIVE policies — no tables are unprotected
- **No service_role key in client code** — only the publishable anon key is shipped
- **No dangerouslySetInnerHTML** anywhere in the codebase
- **All 4 Vercel API endpoints** (send-contact, send-ae-support, send-exit-intent, send-resource-download) have: rate limiting, payload size validation, email format validation, field length limits, and HTML escaping
- **Client-side form rate limiter** provides defense-in-depth against spam
- **GDPR edge functions** (export + deletion) verify user identity and enforce ownership checks before processing
- **Email nurture sequence** has duplicate detection, rate limiting, and input validation
- **Cookie consent** gates analytics initialization — analytics only fires after explicit consent
- **Assessment SELECT policy** properly restricts to owner or admin — anonymous submissions cannot be read back by other users
- **Deals table** properly dual-gated: requires both `partner_id` match AND `partner` role

---

## Issues Found

### ISSUE 1: Error Message Leakage in Assessment Report Function
**Severity: Medium | File: `supabase/functions/send-assessment-report/index.ts`**

Line 193 returns `error.message` directly to the client:
```typescript
JSON.stringify({ error: error.message })
```

This can expose internal implementation details (database errors, API keys in error strings, stack traces) to attackers. The nurture sequence function already handles this correctly by returning a generic message. This function should do the same.

**Fix:** Replace `error.message` with a generic error string like `"Failed to process assessment report"`.

---

### ISSUE 2: GDPR Functions Use Deprecated `verify_jwt = true`
**Severity: Medium | File: `supabase/config.toml`**

The `gdpr-data-export` and `gdpr-data-deletion` functions are set to `verify_jwt = true` in config.toml. With the signing-keys system, this deprecated flag can silently block valid requests. Both functions already perform proper auth validation in code (checking Authorization header, calling `getUser()`, verifying ownership), so the config flag is redundant and potentially harmful.

**Fix:** Set both to `verify_jwt = false` in config.toml. The in-code auth validation remains as the actual security gate.

---

### ISSUE 3: Assessment Report Function Missing from config.toml
**Severity: Medium | File: `supabase/config.toml`**

The `send-assessment-report` function has no entry in config.toml, meaning it defaults to `verify_jwt = true`. This function is called after anonymous assessment submissions (no auth required), so the default JWT verification could silently block legitimate assessment report emails. The function also lacks rate limiting.

**Fix:** Add `[functions.send-assessment-report]` with `verify_jwt = false` to config.toml, and add rate limiting logic to the function (matching the pattern used in the nurture sequence function).

---

### ISSUE 4: CORS Wildcard on Edge Functions
**Severity: Low (Informational)**

All edge functions use `Access-Control-Allow-Origin: *`. This is standard practice for public API endpoints and edge functions that serve a single-domain frontend, but worth noting for the audit record. Since the functions validate auth tokens independently and don't rely on origin for security, this is acceptable.

**Action:** No change needed. Documented for compliance record.

---

## Implementation Plan

### Step 1: Fix error message leakage in send-assessment-report
- Replace `error.message` with a generic `"Failed to process assessment report"` string
- Add rate limiting to the function (IP-based, matching nurture sequence pattern)

### Step 2: Update config.toml for all edge functions
- Set `gdpr-data-export` to `verify_jwt = false`
- Set `gdpr-data-deletion` to `verify_jwt = false`
- Add `send-assessment-report` with `verify_jwt = false`

### Step 3: Update security findings
- Record resolved items and document accepted risks

---

## Summary Table

| Area | Status |
|------|--------|
| Database RLS | All 8 tables protected, 33 restrictive policies |
| Client-side secrets | Clean — only publishable key shipped |
| API input validation | All 4 endpoints validated (rate limit, size, format, length) |
| Edge function auth | GDPR functions verify ownership; nurture has rate limiting |
| XSS prevention | No dangerouslySetInnerHTML; all outputs HTML-escaped |
| Error handling | 1 function leaks internal errors (fix in Step 1) |
| JWT configuration | 2 functions use deprecated flag; 1 missing from config (fix in Step 2) |
| CORS | Wildcard — acceptable for this architecture |
| Cookie consent | Analytics gated behind explicit consent |
| GDPR compliance | Export + deletion functions with ownership verification |
