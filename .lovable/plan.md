
# Homepage Redesign Plan

## Overview
Redesign the homepage to match the reference screenshot's structure and content while maintaining the existing design system and brand standards.

## Key Changes

### 1. Hero Section Updates

**Current:**
- Tagline: "Disciplined systems. Clean execution. Durable growth."
- Headline: "Growth dies when systems break."
- Subtext about installing infrastructure

**New (matching reference):**
- Tagline: `REVENUE INTEGRITY SYSTEMS`
- Headline: "Most revenue problems are invisible until it's too late."
- Subtext: "We surface them early, prove where they're leaking, and install enforcement before deals are lost."
- Target line: "For teams where system failure means lost deals, not just lost time."
- Primary CTA: "RUN A REVENUE INTEGRITY DIAGNOSTIC →"
- Trust badges: "42 systems installed → Zero failed migrations" + "Martech, Revops, OPS, SaaS, RevOps"

### 2. New Section: "What We're Seeing Right Now"

Add a 6-card grid showing current patterns observed from active engagements, organized by industry/vertical:

| Category | Title | Description |
|----------|-------|-------------|
| MEDICAL DEVICES | Teams losing forecast accuracy during regulatory handoffs | Deals stall as compliance reviews prevent clean baseline → the pipeline |
| OPS | Deals stalling post-demo because ownership isn't enforced | Handoff from sales to ops breaks when there's no system holding it |
| PROFESSIONAL SERVICES | Revenue closes but delivery systems fail to operationalize | Sales close, ops scrambles, clients churn |
| PARTNER-LED SALESFORCE | RevOps → Finance boundary breaks at scale | Everyone looks clean until 5 errors compound |
| SAAS STARTUPS | Companies selling enforcement systems that lack their own internal system of enforcement | The product is polished but the back office is held together by manual processes |
| EQUIPMENT / KIT | Growth exposing cracks in fragmented systems before they break | Things work today, but volume will surface what manual processes are hiding |

### 3. Replace "What We Do" → "How We Work"

Transform the simple 3-icon row into a more descriptive 3-card section with icons:

| Icon | Title | Description |
|------|-------|-------------|
| Eye | Visibility | Most revenue problems are invisible until too late. We surface them first. |
| Search | Diagnosis | We trace breakage to source—fix traffic, process breaks, and catch contact failures. |
| Lock | Enforcement | Systems that hold under load—automation, prevention, and accountability built in. |

Add a callout box below:
> "We design for expected value—what will close, what will stall, and why. That's how CPOs and RevOps leaders think. We design systems the same way."

### 4. Rename "Fit Check" → "Who This Is For"

Keep the existing Good Fit / Not a Fit structure but update the content to match reference:

**Good Fit:**
- Active pipeline, real budget, pressure
- Deals stalling for reasons you can't see in dashboards
- RevOps or ops function exists but can't scale

**Not a Fit:**
- Pre-revenue or pre-product
- Looking for a Salesforce admin
- Comparing consultants on hourly rate

### 5. Keep "What Happened" with Updated Content

Update the single proof point to match reference style:
- Quote: "We went from waiting for Upwork gigs to a repeatable outbound system with 40%+ open rates."
- Attribution: FEDERAL CYBERSECURITY (SAVIINT PIPELINE)
- Result metric: "$500k pipeline built in 90 days."
- Link: "SEE ALL 8 CASE STUDIES →"

### 6. Update Final CTA Section

**Current:** "Find Out What's Breaking" → "Book Assessment"

**New:** 
- Heading: "Find Out What's Breaking"
- Subtext: "2-week diagnostic. System-level audit for when deals are active, budgets are real, and failure is expensive."
- CTA: "BOOK ASSESSMENT →"

---

## Technical Implementation

### Files to Modify:
1. **`src/pages/Home.tsx`** - Complete restructure of sections
2. **`src/lib/canonical-constants.ts`** - Update positioning constants

### New Data Structures:

```typescript
// What We're Seeing patterns
const currentPatterns = [
  {
    category: "MEDICAL DEVICES",
    title: "Teams losing forecast accuracy during regulatory handoffs",
    description: "Deals stall as compliance reviews prevent clean baseline → the pipeline"
  },
  // ... 5 more patterns
];

// How We Work cards
const howWeWork = [
  {
    icon: Eye,
    title: "Visibility",
    label: "WHAT YOU CAN'T SEE YET",
    description: "Most revenue problems are invisible until too late. We surface them first."
  },
  // ... 2 more
];

// Updated fit criteria
const fitCriteria = [
  { fit: true, label: "Active pipeline, real budget, pressure" },
  { fit: true, label: "Deals stalling for reasons you can't see in dashboards" },
  { fit: true, label: "RevOps or ops function exists but can't scale" },
  { fit: false, label: "Pre-revenue or pre-product" },
  { fit: false, label: "Looking for a Salesforce admin" },
  { fit: false, label: "Comparing consultants on hourly rate" }
];
```

### Styling Approach:
- Maintain existing Section component and spacing
- Use border-border for card borders
- Use font-mono for category labels (uppercase, tracking-widest)
- Keep squared aesthetic (no rounded corners)
- Primary color for category labels and accents

---

## Language Compliance Check

All new copy verified against phrases kill list:
- No triplet cadences
- No "compelling/powerful/impactful/transformative"
- No "unlock/discover/leverage/optimize"
- No "Not X, but Y" framing
- Direct declarative statements only
