

# Rewrite "What I've Seen" Section — About Page

## The Problem

The current "Pattern Recognition" section reads like internal shorthand. Descriptions like "No validation. Duplicates found when finance asks." are telegraphic to the point of being cryptic for visitors. The actual buyer profile — owners and operators at family-owned businesses and PE-backed companies doing ~$100M — needs to see themselves in this language. Right now, the copy names failure modes without grounding them in buyer context.

## Current State (What Needs to Change)

```text
CSV IMPORT CHAOS
"No validation. Duplicates found when finance asks."

INVOICE-DELIVERY GAP
"Access before payment. Revenue recognized, cash missing."

SHARED LOGIN SPRAWL
"Compliance asks for access audit. Nobody can produce one."

TOOL SELECTION BY FAMILIARITY
"Architecture never evaluated."
```

These are too compressed. A visitor at a $100M family-owned distributor or a PE portfolio company doesn't recognize themselves in "CSV Import Chaos." They recognize themselves in "products are in three systems and nobody knows which price is right."

## Proposed Rewrite

Grounded in VoC transcript language, expanded to 2-sentence descriptions that name the situation AND the consequence. Labels shifted from jargon to plain failure modes.

| Label | Description (VoC-grounded) |
|-------|---------------------------|
| DATA ENTERS WITHOUT GOVERNANCE | Product data lives in the CRM, the accounting system, and a spreadsheet. Pricing is different in every one — so your team quotes from memory. |
| BILLING NEVER FOLLOWS DELIVERY | Client gets onboarded, access gets granted, invoice never gets sent. Revenue shows on the books, but cash never arrives. |
| NOBODY KNOWS WHO HAS ACCESS | Everyone uses the same login. When compliance asks for an access audit, nobody can produce one. |
| TOOLS CHOSEN BY WHOEVER USED THEM LAST | The CRM got picked because someone used it at their last company. Nobody evaluated whether it fit the business you're running now. |

## What Changes and Why

- **Labels**: Rewritten from internal category codes ("CSV IMPORT CHAOS") to plain-language failure statements that an owner/operator would say out loud.
- **Descriptions**: Expanded from 1-line fragments to 2-sentence descriptions pulled directly from VoC transcript phrases ("We quote from memory because no system is accurate," "Everyone uses the same login," etc.)
- **Buyer context**: Language now reflects the reality of companies with real operations, real compliance exposure, and real teams — not abstract "data governance" problems.

## Technical Changes

| File | Change |
|------|--------|
| `src/pages/About.tsx` | Rewrite the `seenPatterns` array (lines 14-31) with updated labels and descriptions |

## Specific Edit

### About.tsx — `seenPatterns` array (lines 14-31)

Replace with:

```typescript
const seenPatterns = [
  {
    label: "DATA ENTERS WITHOUT GOVERNANCE",
    description: "Product data lives in the CRM, the accounting system, and a spreadsheet. Pricing is different in every one — so your team quotes from memory."
  },
  {
    label: "BILLING NEVER FOLLOWS DELIVERY",
    description: "Client gets onboarded, access gets granted, invoice never gets sent. Revenue shows on the books, but cash never arrives."
  },
  {
    label: "NOBODY KNOWS WHO HAS ACCESS",
    description: "Everyone uses the same login. When compliance asks for an access audit, nobody can produce one."
  },
  {
    label: "TOOLS CHOSEN BY WHOEVER USED THEM LAST",
    description: "The CRM got picked because someone used it at their last company. Nobody evaluated whether it fit the business you're running now."
  }
];
```

## Result

The "What I've Seen" section will read like pattern recognition from someone who has sat across from these operators — not like a consultant's internal taxonomy. Every description uses language buyers actually said in discovery calls.

