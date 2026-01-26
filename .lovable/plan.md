

# Homepage Language Grounding: Remove Abstract Jargon

## Problem
"Run a Revenue Integrity Diagnostic" and related phrases use abstract consultant language. The /start page proves simpler is better: "Revenue systems break. We fix them."

## Changes

### 1. Hero CTA
**Before**: "Run a Revenue Integrity Diagnostic"
**After**: "Book a System Audit"

Simple. Says what it is. Not branded jargon.

### 2. Hero Headline (POSITIONING.primary)
**Before**: "Most revenue problems are invisible until it's too late."
**After**: "Revenue systems break. We find where."

Mirrors /start page language. Active, not passive.

### 3. Supporting Line (POSITIONING.supportingLine)
**Before**: "We surface them early, prove where they're leaking, and install enforcement before deals are lost."
**After**: "2-week audit. We diagnose where deals stall, forecast fails, and customers lose trust."

Specific outcomes. Time-bound. Trust angle (from About page work).

### 4. Tagline Badge (POSITIONING.tagline)
**Before**: "Revenue Integrity Systems"
**After**: "Systems Architecture"

Less branded, more descriptive of what you actually do.

### 5. Final CTA Section
**Before**: "2-week diagnostic. System-level audit for when deals are active, budgets are real, and failure is expensive."
**After**: "2-week audit. For teams with active pipeline, real budget, and no room for system failure."

Direct qualifiers. Same rhythm as "Who This Is For" section.

---

## Files to Modify

1. **`src/lib/canonical-constants.ts`** - Update POSITIONING constants
2. **`src/pages/Home.tsx`** - Update hero CTA text

---

## Technical Details

### canonical-constants.ts changes:
```typescript
export const POSITIONING = {
  primary: "Revenue systems break. We find where.",
  tagline: "Systems Architecture",
  supportingLine: "2-week audit. We diagnose where deals stall, forecasts fail, and customers lose trust.",
  targetLine: "For teams where system failure means lost deals, not just lost time.",
  velocity: "Systems that hold under load.",
} as const;
```

### Home.tsx hero CTA:
```tsx
<ConversionOptimizedButton ...>
  <span className="hidden sm:inline text-inherit">Book a System Audit</span>
  <span className="sm:hidden text-inherit">Book Audit</span>
</ConversionOptimizedButton>
```

---

## Language Compliance
- No triplets
- No "unlock/discover/leverage/optimize"
- No abstract branded terms ("Revenue Integrity")
- Direct, active voice
- Concrete outcomes (deals stall, forecasts fail, customers lose trust)

