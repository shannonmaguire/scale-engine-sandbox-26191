

# Generalize Vendor-Specific Language

## What Changes

Replace all third-party tool names and industry jargon with plain-English system failure descriptions, matching the vendor-neutral standard already applied on the Proof page.

---

## Homepage (`src/pages/Home.tsx`)

### "What We're Seeing Right Now" patterns

| Line | Current | Replacement |
|------|---------|-------------|
| 19 | "CSV uploads to Salesforce. Zero validation." | "Data imported manually. Zero validation." |
| 35 | "Former contractor still has Salesforce access." | "Former contractor still has system access." |
| 39-40 | "AE can't scope technical work. Pipeline stalls." | "Sales can't scope technical work. Pipeline stalls." |
| 49 | "Projects live in email, Slack, Drive, and Trello." | "Projects live across 4+ disconnected tools." |

### Proof quote attribution

| Line | Current | Replacement |
|------|---------|-------------|
| 73 | "FEDERAL CYBERSECURITY (SAVIINT PIPELINE)" | "FEDERAL CYBERSECURITY" |

Removes the vendor name "Saviint" which means nothing to a general audience.

---

## Assessment Page (`src/pages/Assessment.tsx`)

### Qualification patterns

| Line | Current | Replacement |
|------|---------|-------------|
| 64 | "Do you manually import data into Salesforce via CSV?" | "Do you manually import data into your systems via spreadsheet?" |
| 84 | "Do projects live in email, Slack, Drive, and 3+ other tools?" | "Do projects live across 4+ disconnected tools?" |

### Outcomes section

| Line | Current | Replacement |
|------|---------|-------------|
| 99 | "HubSpot and lighter stacks. 4-8 weeks." | "Streamlined systems. 4-8 weeks." |
| 103 | "Enterprise Salesforce" (title) | "Enterprise Architecture" |
| 104 | "CWT-led, CloudRoute-built" | "Architect-Led Build" |
| 105 | "Complete Salesforce architecture. 3-6 months. I remain your architect." | "Full-scale system rebuild. 3-6 months. I remain your architect." |

### Included list

| Line | Current | Replacement |
|------|---------|-------------|
| 51 | "System configuration audit (CRM, marketing automation, data infrastructure)" | "System configuration audit (sales tools, marketing automation, data infrastructure)" |

### PARTNER badge removal

The "PARTNER" badge on the Enterprise outcome card (line 104) referenced the CloudRoute partnership. Since we're removing the CloudRoute name, the badge no longer carries meaning and should be removed (set to `null`).

---

## Files Modified

- `src/pages/Home.tsx` — 5 text changes
- `src/pages/Assessment.tsx` — 7 text changes

No structural, layout, or component changes. Copy-only edits.

