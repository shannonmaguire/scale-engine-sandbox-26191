

# Full Site Alignment Update

## Issues Found

After reviewing all pages, I found several inconsistencies that need alignment:

### 1. Operating Rules Mismatch (How We Work vs About)

**How We Work page** has outdated rules:
```text
Rule 3: "Fixed scope, not hourly" → "Incentivizes efficiency"
Rule 5: "You own everything" → "No vendor lock-in"
```

**About page** (recently updated) has:
```text
Rule 3: "Fixed scope, not hourly." → "We sell outcomes, not time."
Rule 5: "Your team runs it." → "We build. We train. You operate."
```

The About page is the canonical version per your recent updates.

---

### 2. Assessment Page - Vendor Names Still Present

The Assessment page still contains specific vendor names that violate the vendor-neutral standard:
- Line 70: `"Stripe, QuickBooks, invoicing tools—none talking to each other. Manual reconciliation."`

Should be generic like the Home page fix: `"Financial tools don't sync. Manual reconciliation."`

---

### 3. Contact Page - Already Aligned

The Contact page already uses compressed copy:
- `"Usually faster. No sales calls."` (line 303)

No changes needed.

---

### 4. How I Work Intro Paragraph (About Page)

The "How I Work" section has a 2-sentence intro paragraph:
```text
"Every engagement starts with the same questions. They surface where the system is actually failing—not where you think it's failing."
```

Per compression standards, this could be cut entirely since the diagnostic questions are self-explanatory.

---

## Technical Changes

| File | Change |
|------|--------|
| `src/pages/HowWeWork.tsx` | Update rules 3 and 5 to match About page canonical versions |
| `src/pages/Assessment.tsx` | Remove "Stripe, QuickBooks" vendor names from integration pattern |
| `src/pages/About.tsx` | Remove intro paragraph from "How I Work" section |

---

## Specific Edits

### HowWeWork.tsx (lines 9-30)

Update `sequencingRules` array:
```typescript
const sequencingRules = [
  {
    rule: "Discovery before scope",
    consequence: "Prevents mid-project drift"
  },
  {
    rule: "No skipped layers",
    consequence: "The skipped layer becomes the one that breaks"
  },
  {
    rule: "Fixed scope, not hourly",
    consequence: "We sell outcomes, not time"
  },
  {
    rule: "Build → Document → Handoff",
    consequence: "Undocumented systems die with the builder"
  },
  {
    rule: "Your team runs it",
    consequence: "We build. We train. You operate."
  }
];
```

### Assessment.tsx (lines 68-71)

Update integration pattern signal:
```typescript
{
  category: "INTEGRATION",
  question: "Are your financial systems disconnected from your CRM?",
  signal: "Financial tools don't sync. Manual reconciliation."
}
```

### About.tsx (lines 250-254)

Remove intro paragraph from "How I Work" section. Keep the system-status badge and heading, go straight into the questions.

---

## Result

After these changes:
- All 5 operating rules will be consistent across How We Work and About pages
- All vendor names removed site-wide (vendor-neutral standard)
- Intro scaffolding removed per compression philosophy

