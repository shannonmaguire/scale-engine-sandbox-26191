
# Proof Page Compression

## Problem
The page shows the same 8 case studies twice with overlapping content. Too much text, too much scrolling, too much repetition.

## Solution
Merge the two sections into one tight grid. Kill the carousel. Show all 8 studies in a scannable format.

---

## Structure: Before vs After

### Current (Verbose)
1. Hero (badge + h1 + subtitle)
2. "The Short Version" — 4 expandable cards
3. "All 8 Case Studies" — Full carousel with navigation, quotes, bullet lists
4. Partner logos
5. CTA

### Proposed (Compressed)
1. Hero (badge + h1 only — remove subtitle)
2. Single grid: all 8 studies, scannable format
3. Partner logos
4. CTA

---

## Changes

### 1. Remove hero subtitle
**File**: `src/pages/Proof.tsx` (lines 184-186)

```text
BEFORE:
<h1 className="heading-page mb-4">What We Fixed</h1>
<p className="text-description text-muted-foreground max-w-2xl">
  Real results from teams that fixed what was breaking.
</p>

AFTER:
<h1 className="heading-page">What We Fixed</h1>
```

---

### 2. Combine into single 8-study grid
**File**: `src/pages/Proof.tsx` (lines 190-263)

Replace the two sections ("The Short Version" + "All 8 Case Studies" carousel) with a single grid showing all 8 studies.

Each card shows:
- Industry + Growth (top row, bold)
- One-line problem (what broke, not the full paragraph)
- Before → After metric (bottom)

Remove:
- `humanProblem` full paragraph (too long)
- Expandable detail
- Carousel entirely
- "Click to expand" instruction
- "The full story with details" subtitle

New format per card:
```text
┌─────────────────────────────────────┐
│ Healthcare          Foundation Built │
│ AI-Assisted Clinic          90 Days │
├─────────────────────────────────────┤
│ No patient acquisition system.       │
├─────────────────────────────────────┤
│ Patients: Zero → System: 90 days    │
└─────────────────────────────────────┘
```

---

### 3. Use `whatBroke` instead of `humanProblem`
The `humanProblem` field has full paragraph descriptions. The `whatBroke` field is a compressed one-liner. Use that instead.

---

### 4. Delete carousel component import
Remove the `CaseStudyCarousel` import since it's no longer used.

---

## Technical Details

**Files modified**:
- `src/pages/Proof.tsx` — lines 1-6, 184-263

**Components removed from page**:
- `CaseStudyCarousel` (import and usage)

**Note**: `CaseStudyCarousel.tsx` file can remain in codebase if potentially needed later.

**Estimated change**: ~80 lines removed, ~40 lines simplified

---

## Expected Outcome

- Page becomes scannable in one viewport
- No duplicate content
- All 8 studies visible at once
- Faster path to CTA
- Matches "ruthless compression" and "single viewport" standards from memories
