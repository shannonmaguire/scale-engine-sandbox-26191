

# About Page Enterprise Cleanup

## Issues Identified

### 1. Stats Section Alignment (Lines 145-158)
Current layout uses inconsistent flex structure. The three stats don't align cleanly:
- "8 years | same methodology"
- "42 | systems installed"  
- "0 | failed migrations"

**Fix**: Use a cleaner grid with consistent formatting. Make the number/label pairs stack vertically instead of inline.

### 2. Job Title Still Says "Salesforce Delivery"
Line 128: `Principal System Architect, CWT Studio | Managing Partner, Salesforce Delivery (CloudRoute)`

This contradicts the gateway positioning we just established. The About page bio should be platform-agnostic.

**Fix**: Change to `Principal System Architect, CWT Studio | Managing Partner, CloudRoute`

Also update:
- Line 72 (personSchema jobTitle)
- Line 88 (FAQ answer about CloudRoute relationship)

### 3. Platform Implementation Section
Lines 256-280 explicitly names CloudRoute and creates a "partner card" aesthetic. For enterprise positioning, this feels like selling.

**Options**:
- Remove entirely (CloudRoute is mentioned in proposals, not public pages)
- Keep but simplify to single line: "Enterprise delivery through CloudRoute (ISV Partner)"

**Recommendation**: Remove the section. The hero bio already mentions CloudRoute once. Repeating it in its own section feels like a sales deck, not an executive bio.

### 4. Upwork Page Existence
The `/upwork` page exists and is indexed in App.tsx. It's a standalone landing page for Upwork proposals with $2,000 diagnostic pricing.

**Options**:
- Keep as-is (it's noindexed, used for proposals)
- Remove entirely
- Update positioning language to match gateway

**Recommendation**: Keep. It's noindexed (`noindex={true}`), so not visible to search. It serves a specific funnel purpose for Upwork leads.

### 5. FAQ Schema References Salesforce
Line 88: `'For Salesforce projects, CWT partners with CloudRoute (Salesforce ISV Partner). For non-Salesforce work, CWT handles directly.'`

**Fix**: Change to platform-agnostic language:
`'For enterprise platform implementations, CWT partners with CloudRoute (ISV Partner). For lighter stacks (HubSpot, etc.), CWT handles directly.'`

---

## Changes Summary

| Location | Before | After |
|----------|--------|-------|
| Line 128 (job title) | `...Salesforce Delivery (CloudRoute)` | `...Managing Partner, CloudRoute` |
| Line 72 (personSchema) | `...Salesforce Delivery (CloudRoute)` | `...Managing Partner, CloudRoute` |
| Line 88 (FAQ) | `For Salesforce projects...` | `For enterprise platform implementations...` |
| Lines 145-158 (stats) | Inline flex with varying widths | Consistent stacked layout |
| Lines 256-280 (Platform Implementation section) | Full section with 2 cards | Remove entirely |

---

## Technical Implementation

### File: `src/pages/About.tsx`

**1. Fix job title (line 128)**
```
Before: Principal System Architect, CWT Studio | Managing Partner, Salesforce Delivery (CloudRoute)
After:  Principal System Architect, CWT Studio | Managing Partner, CloudRoute
```

**2. Fix personSchema jobTitle (line 72)**
```
Before: jobTitle: 'Principal System Architect, CWT Studio | Managing Partner, Salesforce Delivery (CloudRoute)'
After:  jobTitle: 'Principal System Architect, CWT Studio | Managing Partner, CloudRoute'
```

**3. Fix FAQ answer (line 88)**
```
Before: 'For Salesforce projects, CWT partners with CloudRoute (Salesforce ISV Partner). For non-Salesforce work, CWT handles directly.'
After:  'For enterprise implementations, CWT partners with CloudRoute (ISV Partner). For lighter stacks, CWT handles directly.'
```

**4. Fix stats alignment (lines 145-158)**
Replace inline flex with stacked layout:
```tsx
<div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
  <div>
    <div className="text-2xl text-primary font-mono">8</div>
    <div className="text-sm text-muted-foreground">years, same methodology</div>
  </div>
  <div>
    <div className="text-2xl text-primary font-mono">42</div>
    <div className="text-sm text-muted-foreground">systems installed</div>
  </div>
  <div>
    <div className="text-2xl text-primary font-mono">0</div>
    <div className="text-sm text-muted-foreground">failed migrations</div>
  </div>
</div>
```

**5. Remove Platform Implementation section (lines 256-280)**
Delete the entire section. CloudRoute is already mentioned once in the hero bio—that's sufficient for a gateway page.

---

## What Stays

- **Upwork page** (`/upwork`): Kept as-is. Noindexed, serves specific funnel purpose.
- **Blog Salesforce content**: Kept. Thought leadership, not selling.
- **Email nurture Salesforce references**: Kept. Qualified leads.

---

## Result

The About page becomes a clean executive bio focused on:
- Who Shannon is (Principal System Architect)
- What she does (diagnoses revenue system failures)
- How she works (diagnostic questions, beliefs, rules)
- Social proof (8 years, 42 systems, 0 failed migrations)

CloudRoute appears once, in passing, in the hero bio. No dedicated section. No partner cards. Gateway, not destination.

