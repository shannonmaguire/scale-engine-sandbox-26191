

# Strategic VoC Integration Plan

## What I'd Do With Full Reign

This transcript data is a goldmine. Here's the comprehensive plan to make CWT Studio the best version of itself using this material:

---

## Phase 1: Extract & Document VoC Patterns

**Create a new reference document:** `docs/voice-of-customer-library.md`

### What goes in it:
1. **Verbatim client quotes** (anonymized) organized by pain point
2. **Exact language patterns** clients use to describe problems
3. **Objection sequences** from discovery calls
4. **Pricing psychology insights** (the "too cheap won't be taken seriously" pattern)
5. **Technical problem descriptions** in client words

### Why this matters:
The site currently uses consultant-constructed language. Real buyer language converts better because prospects recognize themselves in it.

---

## Phase 2: Homepage Pattern Grid Refresh

The current 8 patterns are good, but the transcripts reveal **additional failure modes** that could be added or refined:

### Patterns I'd extract from transcripts:

| New Category | Pattern Title | Description |
|--------------|---------------|-------------|
| DATA STRUCTURE | CSV uploads to Salesforce. Zero validation. | Asset records, serial numbers, product data—all entering the system without governance. |
| INTEGRATION GAP | Apple, Stripe, QuickBooks—none talking to each other | Manual reconciliation between systems. Finance trusts nothing. |
| CREDENTIAL CHAOS | Shared logins. No audit trail. | Who has access? Nobody knows. Compliance liability growing. |
| PARTNER HANDOFF | Deals registered. Then silence. | AEs can't scope technical work. Pipeline stalls post-introduction. |

These come directly from the transcript discussions about client situations.

---

## Phase 3: Update Proof Page Case Studies

The transcripts mention **specific client situations** that could enrich existing case studies or become new ones:

### Potential additions:
- **IT Services / Reseller** - Apple authorized reseller with data structure problems (CSV imports, serial numbers, asset tracking)
- **Partner/Channel** - Deal registration and AE technical support patterns

### Enhancement approach:
Use transcript language to add specificity to existing case studies. Replace generic phrases with the exact way clients described their problems.

---

## Phase 4: Objection Handling Content

Create a new section in `docs/canonical-language.md` or a standalone `docs/objection-patterns.md`:

### Documented patterns from transcripts:
1. **Pricing objection** - "Too cheap won't be taken seriously" → how to handle rate discussions
2. **Timeline pressure** - Client urgency patterns and how to respond
3. **Scope creep signals** - Early indicators from discovery language
4. **Competitor comparison** - How clients describe other vendors they've used

---

## Phase 5: Assessment Quiz Enhancement

The transcripts reveal **buyer qualification signals** that could improve the assessment intake:

### Add questions based on:
- Data structure problems (CSVs, imports, governance)
- Integration gaps (what systems aren't connected)
- Credential/access patterns (shared logins, audit trails)
- Partner/channel dynamics

---

## Phase 6: Blog Content Pipeline

The transcripts contain **3-5 potential blog posts** worth of material:

| Post Title | Source Material |
|------------|-----------------|
| "Why Your CSV Imports Are a Compliance Time Bomb" | Data structure discussions |
| "The Partner Handoff Problem: When AEs Can't Scope" | Partner/channel dynamics |
| "Salesforce 360: What Decision-Makers Actually Need" | BI/strategic decision-making discussions |

---

## Implementation Priority

```text
HIGH PRIORITY (immediate impact)
├── Create docs/voice-of-customer-library.md
├── Update 2-3 homepage patterns with transcript language
└── Enrich 2-3 Proof page case studies

MEDIUM PRIORITY (content depth)
├── Document objection patterns
├── Add assessment quiz questions
└── Update canonical-language.md with new phrases

LOWER PRIORITY (content expansion)
├── Create new case studies
└── Develop blog post outlines
```

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `docs/voice-of-customer-library.md` | Create new - extracted VoC patterns |
| `src/pages/Home.tsx` | Modify - update pattern descriptions with VoC language |
| `src/pages/Proof.tsx` | Modify - enrich case study descriptions |
| `docs/canonical-language.md` | Modify - add new phrases and objection patterns |
| `docs/objection-patterns.md` | Create new - sales objection handling |

---

## What This Achieves

1. **Authenticity** - Site speaks in buyer language, not consultant language
2. **Pattern recognition** - Visitors see their exact situation described
3. **Faster qualification** - Right buyers self-select because they recognize themselves
4. **Objection preparation** - Sales conversations pre-handled by site content
5. **Content durability** - Patterns grounded in real data, not assumptions

---

## Technical Details

- All changes maintain existing design system (squared borders, JetBrains Mono headers, Inter body text)
- No new components required—just content updates
- VoC library becomes reference for future copywriting
- All additions comply with Grandmaster Writing Prompt standards (no triplets, no contrastual framing, settled authority)

