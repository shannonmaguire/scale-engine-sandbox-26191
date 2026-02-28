

## Plan: Update Legal Pages for Consistency

Several issues found across all three legal pages and the footer.

### Issues Identified

1. **Privacy Policy SEO** — title says "Business Automation & Salesforce Services", keywords reference "Creator Wealth Tools", "business automation data protection", "Salesforce services privacy". None of this matches current positioning (revenue systems architecture).

2. **Privacy Policy /data-rights link** — Links to `/data-rights` twice (lines 101, 105) but no such route exists in App.tsx. Dead link. Replace with direct email contact instruction.

3. **Terms of Service SEO** — title says "Automation, Web & Salesforce Engagements", keywords reference "Creator Wealth Tools", "business automation contract", "Salesforce consulting agreement". Outdated.

4. **Terms of Service section 2** — lists services as "Enterprise Architecture", "AE Technical Support", "Custom development, integrations, and system installations". Should match canonical service language.

5. **Cookie Policy SEO** — keywords reference "Creator Wealth Tools", "business automation analytics", "Salesforce services cookies". Outdated.

6. **Cookie Policy section 7.1** — says "clicking the 'Cookie Settings' link in the footer" but the footer has no such link. Either add the link to the footer or correct the text.

7. **Footer** — missing "Cookie Settings" link referenced by cookie policy.

8. **All dates** — currently "January 30, 2026". Today is February 28, 2026. Update to "February 28, 2026" since we're making substantive changes.

---

### Changes

**1. `src/pages/PrivacyPolicy.tsx`**
- Update SEO title to `"Privacy Policy | CWT Studio"`
- Update SEO description to `"How CWT Studio collects, uses, and protects your data. Review your privacy rights under PIPEDA, GDPR, and CCPA."`
- Update keywords to match current positioning (remove "Creator Wealth Tools", "business automation", "Salesforce services")
- Remove `/data-rights` links (lines 101-109). Replace with email-only contact instruction.
- Update "Last updated" to February 28, 2026

**2. `src/pages/TermsOfService.tsx`**
- Update SEO title to `"Terms of Service | CWT Studio"`
- Update SEO description to `"Terms governing CWT Studio's revenue infrastructure diagnostic, implementation, and systems architecture engagements."`
- Update keywords to match current positioning
- Update section 2 service list to match canonical language: System Diagnostic, Implementation Engagements, Fractional Operations, Web Systems
- Update "Last updated" to February 28, 2026

**3. `src/pages/CookiePolicy.tsx`**
- Update SEO title to `"Cookie Policy | CWT Studio"`  
- Update SEO description to `"How CWT Studio uses cookies. Cookie types, purposes, and your control options."`
- Update keywords to match current positioning
- Section 7.1: Change "clicking the 'Cookie Settings' link in the footer" to "clicking 'Customize' on the cookie banner when it appears, or by clearing your cookie preferences in your browser settings"
- Update "Last updated" to February 28, 2026

**4. `src/components/Footer.tsx`**
- Add "Data Rights" link under Legal section pointing to `mailto:shannon@thecwtstudio.com?subject=Data%20Rights%20Request` (since there's no /data-rights page, link directly to email)

No structural or layout changes. Text and metadata only.

