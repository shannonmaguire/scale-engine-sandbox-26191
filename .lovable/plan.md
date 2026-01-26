

# Lock In: CWT Studio as Gateway, Not Destination

## Strategic Architecture

```
CWT Studio (Gateway)          →    CloudRoute (Destination)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Platform-agnostic                  Platform-specific
Diagnosis-first                    Implementation
Executive-facing                   Technical delivery
Risk-aware                         Solution-oriented
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"We don't sell tools.              "We implement what the
 We identify failure modes."        diagnosis requires."
```

---

## Phase 1: Homepage — Remove Platform Tells

### Current Problem
Line 77: `"Looking for a Salesforce admin"` in "Not a Fit" list

This signals "we do Salesforce" rather than "we diagnose systems."

### Change
Replace with: `"Looking for platform administration"`

This stays diagnostic. Doesn't name a tool.

---

## Phase 2: About Page — Soften CloudRoute Introduction

### Current State
Hero copy (lines 140-141): "Salesforce implementation through CloudRoute (Platinum Partner)."

This is direct but premature. The assessment hasn't happened yet.

### Change
Replace with: "Enterprise platform implementation through CloudRoute (ISV Partner). HubSpot and lighter stacks handled directly."

Why: "Enterprise platform" signals scale without naming Salesforce. Lets the assessment determine what's needed.

### Salesforce Projects Section (lines 256-279)
Keep but rename to "Platform Implementation" section:
- CWT Studio: Strategy & architecture
- CloudRoute: Enterprise platform delivery

---

## Phase 3: Assessment Output Language

### Current State
Assessment page outcomes (lines 61-72) are already platform-agnostic:
- "Implementation Engagement" (4-8 weeks)
- "Enterprise Architecture" (3-6 months)

This is correct. The assessment determines the path, not the platform.

### No Change Needed Here

---

## Phase 4: Trust Indicators — Quiet the Badges

### Current State
`src/components/TrustIndicators.tsx` line 104: `"Salesforce ISV Partner"` as primary badge

### Change
Move Salesforce badge to secondary position. Lead with compliance badges:
1. SOC 2 Compliant
2. GDPR Ready  
3. Salesforce ISV Partner (moved to third)

Or: Remove from public-facing pages entirely. Let CloudRoute carry the partner badge in proposals.

---

## Phase 5: Blog / Content — Keep as Thought Leadership

### Current State
Blog has "Salesforce Technical Debt as Competitive Intelligence" article.

### Recommendation: Keep
This is thought leadership, not sales. It positions you as someone who understands Salesforce deeply—which is expertise, not selling.

The difference:
- Selling: "We implement Salesforce"
- Authority: "We understand what Salesforce debt reveals about your business"

No change needed.

---

## Phase 6: Email Nurture — Platform-Specific is OK Here

### Current State
Email templates reference "Salesforce cleanup" extensively.

### Recommendation: Keep for Now
These emails go to people who downloaded Salesforce-specific resources. They're already qualified by interest.

The gateway logic applies to cold traffic, not nurtured leads.

---

## Phase 7: Deal Registration Modal — Simplify Options

### Current State (line 352)
Options include: "Salesforce Implementation"

### Change
Replace with:
- Assessment
- Implementation
- Enterprise Architecture
- Custom Engagement

Remove "Sprint" and "Fractional" (deprecated). Remove "Salesforce Implementation" (let assessment determine).

---

## Summary of Changes

| File | Change | Purpose |
|------|--------|---------|
| `src/pages/Home.tsx` | "Salesforce admin" → "platform administration" | Remove platform tell |
| `src/pages/About.tsx` | "Salesforce implementation" → "Enterprise platform implementation" | Soften introduction |
| `src/pages/About.tsx` | "Salesforce Projects" → "Platform Implementation" | De-brand the section |
| `src/components/TrustIndicators.tsx` | Reorder badges (Salesforce → third) | Compliance-first positioning |
| `src/components/DealRegistrationModal.tsx` | Simplify service options | Assessment-first funnel |

---

## What Stays Platform-Specific (Correctly)

- Blog content (thought leadership)
- Email nurture sequences (qualified leads)
- SEO keywords (organic discovery)
- FAQ schema on About page (explicit Q&A)

---

## The Strategic Result

**Before**: CWT Studio looks like "a Salesforce partner with a diagnostic wrapper"

**After**: CWT Studio looks like "a systems architect who happens to have enterprise delivery capabilities"

The assessment becomes the conversion event. CloudRoute enters as a consequence of diagnosis, not as a sales pitch.

---

## Technical Implementation

### Files to Modify

1. **`src/pages/Home.tsx`** — Line 77 fit criteria change
2. **`src/pages/About.tsx`** — Lines 140-141 + 256-279 section rename
3. **`src/components/TrustIndicators.tsx`** — Badge reordering
4. **`src/components/DealRegistrationModal.tsx`** — Service options cleanup

### Estimated Scope
4 small edits. No new components. No structural changes.

