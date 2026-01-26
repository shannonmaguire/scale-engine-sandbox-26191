

# Fix "What We're Seeing Right Now" Patterns

## Problem
The current patterns mix real observations with made-up categories. "PARTNER-LED SALESFORCE" and "ENFORCEMENT SOFTWARE" don't map to actual work done. The descriptions are too abstract and generic.

## Solution
Replace with patterns grounded in actual case study work and real market observations. Each pattern should describe what's breaking in language buyers recognize.

---

## New Patterns (Based on Real Work)

**File**: `src/pages/Home.tsx`  
**Lines**: 15-47

Replace `currentPatterns` array with:

```javascript
const currentPatterns = [
  {
    category: "LEAD FOLLOW-UP",
    title: "Leads come in. Nobody follows up.",
    description: "Everything depends on memory. Deals go cold while the team argues about whose turn it was."
  },
  {
    category: "TRIAL CONVERSION",
    title: "800 trials a month, 6% convert",
    description: "Sales calls everyone. No way to tell who's actually using the product."
  },
  {
    category: "SCATTERED OPERATIONS",
    title: "Projects live in email, Slack, Drive, and Trello",
    description: "15 hours a week just figuring out what's happening. No single source of truth."
  },
  {
    category: "OUTBOUND",
    title: "Zero pipeline. Waiting for inbound that never comes.",
    description: "No ICP. No system. Founder still doing all the selling."
  },
  {
    category: "BILLING / DELIVERY GAP",
    title: "Clients onboarded. Invoice never sent.",
    description: "Operational access granted before payment collected. Revenue recognized, cash never arrives."
  },
  {
    category: "WRONG BUSINESS MODEL",
    title: "$500/hour partners doing $50/hour work",
    description: "Want subscriptions but don't know if the math works. Trapped in hourly billing."
  }
];
```

---

## Why These Patterns

| Pattern | Source |
|---------|--------|
| "Leads come in. Nobody follows up." | Case Study #2: Digital Education Platform |
| "800 trials a month, 6% convert" | Case Study #6: B2B SaaS Project Management |
| "Projects live in email, Slack, Drive, and Trello" | Case Study #7: Marketing Agency |
| "Zero pipeline. Waiting for inbound." | Case Study #3: Federal Cybersecurity |
| "Clients onboarded. Invoice never sent." | Retained from current (validated observation) |
| "$500/hour partners doing $50/hour work" | Case Study #4: Subscription Legal |

---

## What Gets Removed

- "ENFORCEMENT SOFTWARE" — No case study supports it
- "MULTI-PLATFORM" — Too abstract, replaced with specific "scattered operations" observation  
- "REALITY DRIFT" — Good concept but too abstract as a category label
- "PARTNER-LED SALESFORCE" — Made up, no supporting work

---

## Tone Alignment

Each pattern now:
- Uses specific numbers where possible (800 trials, 6%, $500/hour)
- Describes the symptom the buyer experiences
- Avoids abstract category labels
- Matches the grandmaster writing standards (direct, settled, no theatrical framing)

---

## Technical Details

**File**: `src/pages/Home.tsx`  
**Lines modified**: 15-47 (replace `currentPatterns` array)

**No other files affected**

**Estimated change**: ~30 lines replaced

