

## Update About Page Rules Section

Expand from 3 generic rules to 5 constraints that reflect how you actually operate—validated from discovery call language.

---

### Current Rules (lines 46-50)

```javascript
const rules = [
  "We assess before we build.",
  "Fixed price, not hourly.",
  "You own everything."
];
```

---

### Proposed Rules

```javascript
const rules = [
  "Discovery before scope.",
  "No skipped layers.",
  "Fixed scope, not hourly.",
  "Build → Document → Handoff.",
  "You own everything."
];
```

---

### Rationale (call-validated)

| Rule | Source |
|------|--------|
| **Discovery before scope** | "I can't tell you how I see it from A to Z until we have an initial discovery deep dive." |
| **No skipped layers** | "I don't skip steps. I believe in systems integrity." |
| **Fixed scope, not hourly** | Canonical language preference (fixed scope > fixed price) |
| **Build → Document → Handoff** | "We don't do Fractional before Sprint... Build → Document → Handoff → then Optimize." |
| **You own everything** | Keep—this is already strong and differentiating |

---

### Technical Changes

**File:** `src/pages/About.tsx`

**Lines 45-50:** Replace rules array

```javascript
// Rules - no justifications
const rules = [
  "Discovery before scope.",
  "No skipped layers.",
  "Fixed scope, not hourly.",
  "Build → Document → Handoff.",
  "You own everything."
];
```

---

### Visual Result

The Rules section will display 5 numbered items instead of 3, using the existing layout (numbered cards with left border accent).

