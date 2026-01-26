
# Proof Page Redesign: Maximize Case Studies

## Overview
Restructure the Proof page to maximize case study visibility by adding a pattern-based industry signals section (mirroring the homepage pattern grid) and improving the overall information density so visitors see more social proof above the fold.

## Current Issues
1. The rotating metrics bar takes up valuable space but only shows 4 metrics at a time
2. "The Short Version" only shows 4 of 8 case studies
3. The carousel requires active navigation to see all case studies
4. Missing: Pattern signals section that shows current observations from active engagements

## Proposed Structure (matching reference)

### Section 1: Hero (Keep, Minor Update)
- Title: "What We Fixed"
- Subtitle: "Real results from teams that fixed what was breaking."
- Remove rotating metrics bar (redundant - metrics embedded in case studies)

### Section 2: The Short Version (Enhanced)
All 4 featured studies shown with:
- Industry + Vertical header
- Growth result + timeline badge
- Human problem as main text
- Before → After metrics footer
- Click to expand for "What we did" + "The Result"

### Section 3: NEW - "What We're Seeing Right Now" (Pattern Grid)
Add 8-card grid mirroring homepage pattern but derived from case study verticals:

| Category | Title | Description |
|----------|-------|-------------|
| MEDICAL DEVICES | Teams losing forecast accuracy during regulatory handoffs | Deals stall as compliance reviews aren't linked into the pipeline |
| OPS | Deals stalling post-demo because ownership isn't enforced | Handoff from sales to ops breaks when there's no system holding it |
| PROFESSIONAL SERVICES | Revenue closes but delivery systems fail to operationalize | Sales close, ops scrambles, clients churn |
| PARTNER-LED SALESFORCE | RevOps → Finance boundary breaks at scale | Everyone looks clean until 5 errors accumulate |
| SAAS STARTUPS | Companies selling enforcement systems that lack their own internal system of enforcement | The product is polished but the back office is held together by manual processes |
| EQUIPMENT / KIT | Growth exposing cracks in fragmented systems before they break | Things work today, but volume will surface what manual processes are hiding |
| HEALTH SERVICES | Operational access granted before commercials are settled | Revenue recognized in paper while payment collection is unmoored |
| MULTI SYSTEM ENGINEERING | Systems drift between CRM, finance, and operations platforms | Reality diverges in one system but isn't reflected everywhere without human intervention |

Section intro: "Anonymized signals from active engagements across medical devices, CPG, SaaS, and services."

### Section 4: All 8 Case Studies (Carousel - Keep)
- Title: "All 8 Case Studies"
- Subtitle: "The full story with details."
- Keep existing carousel component unchanged

### Section 5: Trust Indicators (Keep)
Partner logos section

### Section 6: Final CTA (Keep)
"Find Out What's Breaking" with Book Assessment button

---

## Technical Implementation

### Files to Modify
1. **`src/pages/Proof.tsx`** - Add patterns section, remove rotating metrics bar

### New Data Structure
```typescript
const currentPatterns = [
  {
    category: "MEDICAL DEVICES",
    title: "Teams losing forecast accuracy during regulatory handoffs",
    description: "Deals stall as compliance reviews aren't linked into the pipeline"
  },
  {
    category: "OPS",
    title: "Deals stalling post-demo because ownership isn't enforced",
    description: "Handoff from sales to ops breaks when there's no system holding it"
  },
  {
    category: "PROFESSIONAL SERVICES",
    title: "Revenue closes but delivery systems fail to operationalize",
    description: "Sales close, ops scrambles, clients churn"
  },
  {
    category: "PARTNER-LED SALESFORCE",
    title: "RevOps → Finance boundary breaks at scale",
    description: "Everyone looks clean until 5 errors accumulate"
  },
  {
    category: "SAAS STARTUPS",
    title: "Companies selling enforcement systems that lack their own internal system of enforcement",
    description: "The product is polished but the back office is held together by manual processes"
  },
  {
    category: "EQUIPMENT / KIT",
    title: "Growth exposing cracks in fragmented systems before they break",
    description: "Things work today, but volume will surface what manual processes are hiding"
  },
  {
    category: "HEALTH SERVICES",
    title: "Operational access granted before commercials are settled",
    description: "Revenue recognized in paper while payment collection is unmoored"
  },
  {
    category: "MULTI SYSTEM ENGINEERING",
    title: "Systems drift between CRM, finance, and operations platforms",
    description: "Reality diverges in one system but isn't reflected everywhere without human intervention"
  }
];
```

### Section Order (Final)
1. Hero ("What We Fixed")
2. The Short Version (4 featured case study cards)
3. **NEW: "What We're Seeing Right Now"** (8-card pattern grid)
4. All 8 Case Studies (carousel)
5. Trust Indicators
6. Final CTA

### Changes Summary
- **Remove**: Rotating metrics bar section (lines 261-308)
- **Add**: "What We're Seeing Right Now" pattern grid section after "The Short Version"
- **Keep**: Everything else unchanged

### Styling
- Pattern grid: 2 columns on mobile, 4 columns on desktop
- Cards use `border border-border bg-card p-6` consistent with homepage
- Monospace category labels with `font-mono text-xs uppercase tracking-widest text-primary`
- Section badge: "PATTERNS" in primary color

---

## Language Compliance
All new copy verified against phrases kill list:
- No triplet cadences
- No banned words (compelling, powerful, unlock, discover, etc.)
- Direct declarative statements only
