
# Website Word Compression Plan

## Problem Identified

The site has accumulated word density that creates visual compression on mobile, especially in:

1. **Descriptions with 2-3 sentences** where 1 would suffice
2. **Explanatory "why" text** that adds scaffolding instead of signal
3. **Redundant intro paragraphs** before lists/grids
4. **Card descriptions** that repeat the title's meaning

## Compression Philosophy

Every word that doesn't name a **failure mode**, **consequence**, or **action** gets cut.

---

## Page-by-Page Compression

### 1. Home Page (`src/pages/Home.tsx`)

**Current Problem Areas:**

| Section | Current | Issue |
|---------|---------|-------|
| Pattern cards | Title + 2-sentence description | Descriptions often repeat the title |
| Final CTA | "2-week audit. For teams with active pipeline, real budget, and no room for system failure." | 21 words for CTA context |

**Proposed Changes:**

Pattern card descriptions compressed (examples):

```text
BEFORE: "Asset records, serial numbers, product data—all entering the system without governance."
AFTER: "Data enters without validation."

BEFORE: "Manual reconciliation takes 15 hours a week. Finance trusts nothing."
AFTER: "15 hours/week reconciling. Nobody trusts the numbers."

BEFORE: "Operational access granted before payment collected. Revenue recognized, cash never arrives."
AFTER: "Access granted before invoice sent."
```

Final CTA compressed:
```text
BEFORE: "2-week audit. For teams with active pipeline, real budget, and no room for system failure."
AFTER: "2-week audit. Active pipeline required."
```

---

### 2. Assessment Page (`src/pages/Assessment.tsx`)

**Current Problem Areas:**

| Section | Current Word Count | Issue |
|---------|-------------------|-------|
| Hero description | 32 words | Two paragraphs where one line works |
| Qualification intro | 23 words | Unnecessary "If you're nodding" framing |
| Deliverable descriptions | 20-30 words each | Full sentences for bullet-level content |
| Outcome descriptions | 20+ words | Could be compressed to core |

**Proposed Changes:**

Hero compression:
```text
BEFORE: "2 weeks diagnostic audit. We find what's breaking your growth—system bottlenecks, data leaks, process gaps—and a clear path to fix them. Required entry point. We start with the assessment."

AFTER: "2-week diagnostic. System bottlenecks, data leaks, process gaps."
```

Remove qualification intro paragraph entirely.

Deliverable descriptions compressed:
```text
BEFORE: "We score how well your tools are working: data accuracy, automation reliability, how well your systems talk to each other, and whether your team is actually using them."

AFTER: "Data accuracy, automation reliability, integration health, adoption rates."
```

Outcome descriptions compressed:
```text
BEFORE: "Workflow automation, data cleanup, integration repair, process optimization. HubSpot and lighter stacks. Typically 4-8 weeks."

AFTER: "HubSpot and lighter stacks. 4-8 weeks."

BEFORE: "Complete Salesforce redesign, multi-cloud integration, custom development. Typically 3-6 months. You work with me throughout."

AFTER: "Complete Salesforce architecture. 3-6 months. I remain your architect."
```

---

### 3. About Page (`src/pages/About.tsx`)

**Current Problem Areas:**

| Section | Issue |
|---------|-------|
| "What I've Seen" descriptions | 2 sentences each, could be 1 |
| "Where I Disagree" descriptions | Explanation after the stance |
| Diagnostic questions | Question + full explanation |

**Proposed Changes:**

Pattern descriptions compressed:
```text
BEFORE: "Data entering the system without validation. Nobody catches duplicates until finance asks."
AFTER: "No validation. Duplicates found when finance asks."

BEFORE: "Operational access granted before payment collected. Revenue recognized, cash never arrives."
AFTER: "Access before payment. Revenue recognized, cash missing."
```

Stance descriptions compressed:
```text
BEFORE: 'Skip a layer and the next one breaks. The sequence is People → Process → Technology. Most projects fail because they start with technology.'
AFTER: 'People → Process → Technology. Skip a layer, the next one breaks.'
```

Diagnostic question purposes compressed:
```text
BEFORE: "Mapping where operational access outpaces commercial settlement. Clients onboarded, revenue recognized, invoice never sent."
AFTER: "Surfaces billing/delivery gaps."
```

---

### 4. Proof Page (`src/pages/Proof.tsx`)

**Already compressed.** No changes needed. Cards use single-line problem descriptions.

---

### 5. How We Work Page (`src/pages/HowWeWork.tsx`)

**Already compressed.** Clean rule → consequence format. No changes needed.

---

### 6. Contact Page (`src/pages/Contact.tsx`)

**Minor compression:**

```text
BEFORE: "Usually faster. We don't do sales calls—just direct answers."
AFTER: "Usually faster. No sales calls."
```

---

## Technical Changes Summary

| File | Sections Modified |
|------|------------------|
| `src/pages/Home.tsx` | 8 pattern descriptions, final CTA |
| `src/pages/Assessment.tsx` | Hero, deliverables, outcomes, remove intro paragraph |
| `src/pages/About.tsx` | 4 pattern descriptions, 3 stances, 3 diagnostic questions |
| `src/pages/Contact.tsx` | 1 sidebar description |

---

## Expected Results

- **~40% word reduction** on heavy pages (Assessment, About)
- **Single-line descriptions** on all cards
- **Mobile viewport fits** without text compression
- **Maintains operator tone** - every remaining word names a failure, consequence, or action

---

## Implementation Order

1. Assessment page (currently on this route)
2. Home page
3. About page
4. Contact page

