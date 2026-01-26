
# Standardize Nav-to-Hero Spacing Across All Interior Pages

## Problem Identified
The Proof page uses different spacing than other interior pages:
- **Proof**: Uses `noPadding` + custom `section-spacing-half` (40px on both desktop and mobile)
- **About, How We Work, Assessment, Contact**: Use standard `section-spacing` (80px desktop / 40px mobile)

This creates visual inconsistency in the distance between the navigation/breadcrumbs and the hero section badges (FOUNDER, METHODOLOGY, CASE STUDIES, etc.).

---

## Solution

Update the Proof page hero section to match the standard pattern used by About, How We Work, Assessment, and Contact pages.

### Changes Required

**File**: `src/pages/Proof.tsx`  
**Lines**: 175-179

**Current code:**
```jsx
<Section noPadding className="border-b border-border">
  <div className="section-spacing-half">
    <div className="system-status mb-8">CASE STUDIES</div>
    <h1 className="heading-page">What We Fixed</h1>
  </div>
</Section>
```

**Updated code:**
```jsx
<Section className="border-b border-border">
  <div className="system-status mb-8">CASE STUDIES</div>
  <h1 className="heading-page">What We Fixed</h1>
</Section>
```

---

## Why This Works

- Removes `noPadding` prop to restore standard section spacing
- Removes the extra `<div className="section-spacing-half">` wrapper since the Section component already applies padding
- All interior pages now have identical structure:
  - `Breadcrumbs` → `Section` (with standard 80px/40px padding) → `system-status` badge → `heading-page`

---

## Verification

After this change, all interior pages will share identical spacing:

| Page | Structure |
|------|-----------|
| About | `Breadcrumbs` → `Section` → `system-status mb-8` → `heading-page` |
| How We Work | `Breadcrumbs` → `Section` → `system-status mb-8` → `heading-page` |
| Proof | `Breadcrumbs` → `Section` → `system-status mb-8` → `heading-page` |
| Assessment | `Breadcrumbs` → `Section` → `system-status mb-8` → `heading-page` |
| Contact | `Breadcrumbs` → `Section` → `system-status mb-8` → `heading-page` |

---

## Technical Details

- **File modified**: `src/pages/Proof.tsx`
- **Lines changed**: 175-179 (5 lines)
- **No other files affected**
- **Spacing system preserved**: Uses existing `section-spacing` class from design system

