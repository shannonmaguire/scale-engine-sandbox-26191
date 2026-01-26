
# Fortune 500 Voice of Customer Integration

## The Enterprise Approach

Fortune 500 marketing teams don't randomly add quotes. They run systematic **Voice of Customer (VoC) programs** that:

1. **Extract patterns** from sales/discovery calls
2. **Validate language** that resonates with buyers
3. **Update messaging** based on how real prospects describe problems
4. **Rotate fresh signals** to show market awareness

This creates credibility because visitors think: "They're describing my exact situation."

---

## Integration Points for CWT Studio

### 1. Homepage "What We're Seeing Right Now" Section

**Current State (Lines 16-47)**
Generic patterns like "OPS" and "EQUIPMENT / KIT" that feel manufactured.

**Update with Call-Validated Patterns**

From Clean Claims transcript:
```
Category: ENFORCEMENT SOFTWARE
Title: Companies selling enforcement systems without internal enforcement
Description: The product is polished. The back office is duct tape and prayer.
```

From Munch/Gino transcript:
```
Category: MULTI-PLATFORM
Title: Platform decisions made by familiarity, not architecture fit
Description: "One guy knew Zoho" becomes a $50K mistake six months later.
```

From Clean Claims transcript:
```
Category: HEALTH SERVICES  
Title: Operational access granted before payment collected
Description: Clients onboarded. Revenue recognized. Invoice never sent.
```

From Munch transcript:
```
Category: REALITY DRIFT
Title: CRM data requires human intervention to match truth
Description: Software assumes compliance. Humans don't comply.
```

### 2. Proof Page "What We're Seeing Right Now" (Lines 26-67)

Add two new patterns from transcripts:

```tsx
{
  category: "ENFORCEMENT SOFTWARE",
  title: "Product enforces rules externally that don't exist internally",
  description: "Clean claims for customers, messy books for the business"
},
{
  category: "PLATFORM DECISIONS",
  title: "CRM chosen by individual familiarity, not system fit",
  description: "One person knew the tool. Nobody knew the architecture."
}
```

### 3. New Case Study Candidate

From Clean Claims engagement:
```tsx
{
  id: 9,
  industry: "Healthcare Technology",
  vertical: "Claims Enforcement SaaS",
  size: "Series A",
  timeline: "6 weeks",
  humanProblem: "They sell software that enforces clean claims. Their own invoicing had no enforcement.",
  whatBroke: "Clients got operational access before commercial settlement. Revenue recognized, payment not collected.",
  pullQuote: "We fixed the irony: enforcement software with no internal enforcement",
  system: [
    "Linked operational access to commercial settlement",
    "Built invoice enforcement before service activation",
    "Created audit trail for revenue recognition"
  ],
  beforeMetric: { label: "Payment collection", value: "Untracked" },
  afterMetric: { label: "Payment collection", value: "Enforced" },
  growth: "Revenue Secured",
  patternRestored: "Access only after payment. No exceptions. System enforces what the product promises."
}
```

### 4. Callout Box Language Update

**Current (Lines 203-206)**
```
"We design for expected value—what will close, what will stall, and why."
```

**Updated with validated positioning phrase**
```
"CRM agnostic. We dive deeper into how the business actually runs—then design systems that hold under load."
```

This phrase landed in the Clean Claims discovery call: "CRM agnostic...dive deeper into how the business actually runs."

---

## Technical Implementation

### File 1: `src/pages/Home.tsx`

**Lines 16-47 — Replace `currentPatterns` array**

New patterns derived from call insights:

| Category | Title | Source |
|----------|-------|--------|
| ENFORCEMENT SOFTWARE | Product enforces externally what doesn't exist internally | Clean Claims |
| HEALTH SERVICES | Operational access before commercial settlement | Clean Claims |
| MULTI-PLATFORM | Platform chosen by familiarity, not architecture | Munch/Gino |
| REALITY DRIFT | CRM data diverges from truth without human intervention | Munch |
| PROFESSIONAL SERVICES | Revenue closes, delivery systems fail to operationalize | Existing (keep) |
| PARTNER-LED SALESFORCE | RevOps → Finance boundary breaks at scale | Existing (keep) |

**Lines 203-206 — Update callout quote**

Replace generic quote with validated positioning language.

### File 2: `src/pages/Proof.tsx`

**Lines 26-67 — Update `currentPatterns` array**

Add enforcement software and platform decision patterns.

**Lines 73-194 — Add 9th case study**

Clean Claims engagement as anonymized case study (if appropriate).

---

## Quarterly Rotation Strategy (Fortune 500 Standard)

Enterprise marketing teams rotate "What We're Seeing Right Now" quarterly based on:
- Recent discovery calls
- Closed deals
- Lost deals (patterns that indicate readiness)

For CWT Studio, establish a cadence:
- Q1: Update with insights from Q4 calls
- Q2: Update with insights from Q1 calls
- etc.

This shows buyers the site is actively maintained and market-aware.

---

## Summary of Changes

| Location | Change | Purpose |
|----------|--------|---------|
| `Home.tsx` lines 16-47 | Replace 4 of 6 patterns with call-validated ones | Real market signals |
| `Home.tsx` lines 203-206 | Update callout with validated language | Proven resonance |
| `Proof.tsx` lines 26-67 | Add 2 new patterns from calls | Fresh signals |
| `Proof.tsx` lines 73-194 | Optional: Add 9th case study | Depth of proof |

---

## What This Achieves

**Before**: Patterns feel like consultant hypotheticals

**After**: Patterns feel like "wait, how do they know my exact situation?"

The key insight from Fortune 500 VoC programs: **Buyers trust language that sounds like their internal meetings, not marketing copy.**

These transcripts gave you exact phrases buyers use. Now your website speaks their language.
