

# How We Work Page Redesign Plan

## Overview
Redesign the How We Work page to match the reference screenshot structure, adding two new sections ("Questions We Ask" and "What We Look For") while refining the existing architecture and implementation phases sections.

## Key Changes

### 1. Architecture Section Enhancement

**Current:**
- Title: "The Architecture" with subtitle "How We Build It"
- 6-layer grid with cards

**Updated:**
- Combined title: "The Architecture" + "How We Build It" on two lines
- Keep the 6-layer grid with same structure
- Footer text: "This is the order. Starting layer stages." (matching reference)

### 2. NEW Section: "Questions We Ask"

Add a diagnostic questions section after the architecture:

| Question | Description |
|----------|-------------|
| "What happens when reality changes in your system?" | Surfacing whether the system the silently passes under critically exposes manual intervention. |
| "Walk me through the steps when someone purchases." | Mapping where the workflow breaks, where steps are undocumented, and where operational revenue is baked into the commercial settlements. |
| "How do you reconcile when a subscription changes?" | Identifying notification gaps, system-to-system ambiguity and edge case handling. |
| "What keeps you up at night?" | Locating the trust or rigor and where things slip through the cracks. |

### 3. NEW Section: "What We Look For"

Add a 4-card grid showing critical patterns that predict revenue system failure:

| Pattern | Description |
|---------|-------------|
| No orchestration | Everything trying to be generous stitches |
| System drift | Parallel changing that one system but not the adjacent one |
| Manual enforcement | If something critical requires someone to check |
| Operational access before contractual settlement | Granting viewing that hits the payment collection |

Intro text: "These are the four patterns that predict revenue system failure. If any of these exist, growth will expose them."

### 4. Implementation Phases - Minor Updates

Keep the current 3-phase structure with same deliverables, but ensure styling matches reference:
- Phase numbers aligned left
- Title with duration badge on the right
- Deliverables as checkmark list inline

### 5. Principles Section

Keep existing principles as border-boxed tags with primary color text.

### 6. Final CTA

Keep current structure:
- Title: "Find Out What's Breaking"
- Two buttons: "Book Assessment" and "See Results"

---

## Technical Implementation

### Files to Modify:
1. **`src/pages/HowWeWork.tsx`** - Add new sections and data structures
2. **`src/components/RevenueArchitectureDiagram.tsx`** - Update footer text

### New Data Structures:

```typescript
// Questions We Ask
const diagnosticQuestions = [
  {
    question: "What happens when reality changes in your system?",
    description: "Surfacing whether the system silently passes or critically exposes manual intervention."
  },
  {
    question: "Walk me through the steps when someone purchases.",
    description: "Mapping where the workflow breaks, where steps are undocumented, and where operational revenue is baked into commercial settlements."
  },
  {
    question: "How do you reconcile when a subscription changes?",
    description: "Identifying notification gaps, system-to-system ambiguity, and edge case handling."
  },
  {
    question: "What keeps you up at night?",
    description: "Locating the trust or rigor and where things slip through the cracks."
  }
];

// What We Look For - Critical patterns
const criticalPatterns = [
  {
    title: "No orchestration",
    description: "Everything trying to be generous stitches"
  },
  {
    title: "System drift",
    description: "Parallel changing that one system but not the adjacent one"
  },
  {
    title: "Manual enforcement",
    description: "If something critical requires someone to check"
  },
  {
    title: "Operational access before contractual settlement",
    description: "Granting viewing that hits the payment collection"
  }
];
```

### Section Order (matching reference):
1. Hero (existing)
2. The Architecture / How We Build It (existing, update footer text)
3. **NEW: Questions We Ask**
4. **NEW: What We Look For**
5. Implementation Phases (existing)
6. Principles (existing)
7. Final CTA (existing)

### Styling Approach:
- Questions section: Numbered list with monospace question text and muted description
- Critical patterns: 2x2 card grid with border-border styling
- Use font-mono for section badges and labels
- Maintain squared aesthetic (no rounded corners)
- Primary color for section badges

---

## Language Compliance Check

All new copy verified against phrases kill list:
- No triplet cadences
- No "compelling/powerful/impactful/transformative"
- No "unlock/discover/leverage/optimize"
- No "Not X, but Y" framing
- Direct declarative statements only

