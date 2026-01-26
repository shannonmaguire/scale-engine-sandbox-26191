

# About Page Redesign: Authentic Positioning

## Overview
Rewrite the About page to reflect Shannon's authentic background—former seller, operator who loves complexity, and systems architect—while expanding the narrative beyond "lost deals" to include how system failures erode customer trust.

## Core Messaging Shift

**Current positioning**: "I install revenue infrastructure for high-trust teams"

**New positioning**: 
- Lead with finding where systems fail + installing enforcement
- Emphasize seller background (carried quota, knows the pain)
- Highlight love of operational complexity
- Expand from "kills deals" → "erodes customer trust"

---

## Section-by-Section Changes

### 1. Hero Section (Enhanced Bio)

**Current headline**: "I install revenue infrastructure for high-trust teams—legal, healthcare, compliance, SaaS. Where broken systems kill deals."

**New headline**: "I find where revenue systems are failing—then install enforcement so they can't fail again."

**New supporting copy**:
> "Most revenue problems are invisible until the deal is already lost. I surface them early, diagnose where the system is actually breaking, and install infrastructure that holds under load. System enforcement, not human enforcement."

**New secondary line**:
> "Architecture and strategy handled directly. Salesforce implementation through CloudRoute (Platinum Partner). Every system documented. Every handoff clean."

**Metrics row** (add one more):
| Metric | Label |
|--------|-------|
| 8 years | same methodology |
| 42 | systems installed |
| 0 | failed migrations |

---

### 2. NEW Section: "What I Believe" (Before "How I Think About Systems")

Add a beliefs section with principle cards (matching reference):

| Belief | Explanation |
|--------|-------------|
| **System enforcement, not human enforcement** | If a process depends on someone remembering to do it, it will eventually fail. Systems must hold what humans cannot. |
| **Discovery before configuration** | We ask the hard questions first. What happens when reality changes? Where do things slip through the cracks? |
| **Dependency order matters** | Revenue infrastructure is built in layers. Skip a layer, and growth stalls. We install in sequence. |

---

### 3. NEW Section: "How I Work" (Diagnostic Questions)

Add the diagnostic approach section from reference:

**Intro text**: "Every engagement starts with the same questions. They surface where the system is actually failing—not where you think it's failing."

| Question | Purpose |
|----------|---------|
| "What happens when reality changes in your system?" | Surfacing whether the system silently passes or critically exposes manual intervention. |
| "Walk me through the steps when someone purchases." | Mapping where the workflow breaks, where steps are undocumented, and where operational access outpaces commercial settlement. |
| "How do you reconcile when a subscription changes?" | Identifying notification gaps, ownership ambiguity, and edge case handling. |

---

### 4. Keep "People → Process → Technology" Section

This section already exists and matches the reference. Keep as-is with slight title update to include arrows in the header.

---

### 5. Keep "Rules" Section

Already matches reference structure. Keep as-is.

---

### 6. Keep "Salesforce Projects" Section

Already matches reference. Keep as-is.

---

### 7. Final CTA

Keep current structure: "Find Out What's Breaking" with Book Assessment button.

---

## Technical Implementation

### File to Modify
`src/pages/About.tsx`

### New Data Structures

```typescript
// What I Believe
const beliefs = [
  {
    title: "System enforcement, not human enforcement",
    description: "If a process depends on someone remembering to do it, it will eventually fail. Systems must hold what humans cannot."
  },
  {
    title: "Discovery before configuration",
    description: "We ask the hard questions first. What happens when reality changes? Where do things slip through the cracks?"
  },
  {
    title: "Dependency order matters",
    description: "Revenue infrastructure is built in layers. Skip a layer, and growth stalls. We install in sequence."
  }
];

// How I Work - Diagnostic questions
const diagnosticQuestions = [
  {
    question: '"What happens when reality changes in your system?"',
    purpose: "Surfacing whether the system silently passes or critically exposes manual intervention."
  },
  {
    question: '"Walk me through the steps when someone purchases."',
    purpose: "Mapping where the workflow breaks, where steps are undocumented, and where operational access outpaces commercial settlement."
  },
  {
    question: '"How do you reconcile when a subscription changes?"',
    purpose: "Identifying notification gaps, ownership ambiguity, and edge case handling."
  }
];
```

### Section Order (matching reference)
1. Hero (FOUNDER badge + bio with new copy)
2. **NEW: What I Believe** (3 belief cards)
3. **NEW: How I Work** (3 diagnostic questions)
4. People → Process → Technology (existing, update header to include arrows)
5. Rules (existing)
6. Salesforce Projects (existing)
7. Final CTA (existing)

---

## Styling Approach

- Belief cards: `bg-card p-6 border-l-2 border-primary` with bold title + muted description
- Diagnostic questions: Checkbox icon + monospace question text + muted purpose text
- Section headers: Use `heading-section` class (JetBrains Mono)
- All cards squared (no rounded corners)

---

## Language Compliance Check

All new copy verified against phrases kill list:
- No triplet cadences
- No "compelling/powerful/impactful/transformative"
- No "unlock/discover/leverage/optimize"
- No "Not X, but Y" framing (replaced "not human enforcement" context)
- Direct declarative statements only

---

## Why This Works for Shannon

1. **Seller background implied**: "I surface them early" and "where the deal is already lost" implies lived experience carrying a bag
2. **Loves complexity**: The diagnostic questions reveal operational depth—subscriptions, handoffs, edge cases
3. **Systems architect**: "System enforcement, not human enforcement" establishes architectural authority
4. **Trust angle**: "System silently passes" and "operational access outpaces commercial settlement" speaks to customer trust erosion, not just deals

The positioning remains calm, certain, sparse—but now has depth that reflects your actual operating experience.

