# CWT Studio Spacing System

## Overview
This document defines the non-destructive spacing standardization system for CWT Studio. All spacing values use an **8px baseline grid** for visual consistency and rhythm.

---

## Vertical Rhythm (8px baseline)

### Semantic Spacing Classes

| Class | Value | Use Case |
|-------|-------|----------|
| `.spacing-micro` | 8px | Icon to label, inline elements |
| `.spacing-tight` | 16px | Paragraph to paragraph |
| `.spacing-element` | 24px | Element to button, list items |
| `.spacing-content` | 40px (24px mobile) | Content blocks, card internals |
| `.spacing-subsection` | 64px (40px mobile) | Major content divisions |
| `.spacing-section` | 80px (48px mobile) | Section boundaries |

### Heading Spacing

| Class | Value | Use Case |
|-------|-------|----------|
| `.heading-spacing` | 24px (16px mobile) | Standard heading to content |

---

## Grid Gaps

### Semantic Grid Gap Classes

| Class | Value | Use Case |
|-------|-------|----------|
| `.gutter-micro` | 8px | Tight inline (badges, tags) |
| `.gutter-tight` | 16px | Compact grids (mobile) |
| `.gutter-standard` | 24px | Default grid spacing |
| `.gutter-content` | 32px | Generous content grids |

---

## Section Padding

### Section Utilities

- **Desktop**: `py-20` (80px)
- **Mobile**: `py-10` (40px)
- Use `Section` component which applies this automatically

### Manual Classes

| Class | Desktop | Mobile | Use Case |
|-------|---------|--------|----------|
| `.section-spacing` | 80px | 40px | Standard section padding |
| `.section-spacing-half` | 40px | 40px | Half section padding |
| `.section-spacing-quarter` | 20px | 20px | Quarter section padding |

---

## Alignment Rules

### Hero Sections
- **Desktop/Tablet**: Left-aligned
- **Mobile (<768px)**: Centered
- **Exception**: Form pages (Assessment, Contact) remain centered

### Cards/Content
- **Title & body**: Always left-aligned
- **Icons**: Centered in their own container (typically 48×48)

### Buttons
- Align to text block (not center of screen)
- Minimum 24px space from adjacent text (use `.spacing-element`)

---

## Card Padding

### StandardCard Component
- **Padding**: 32px (p-8) - Do not override
- **Mobile**: Same 32px padding maintained
- **Rationale**: Consistent breathing room across all card components

---

## Usage Examples

### Correct Spacing Pattern
```tsx
<Section>
  <h2 className="heading-section heading-spacing">Section Title</h2>
  <p className="text-description spacing-element">Description text</p>
  <div className="grid md:grid-cols-3 gutter-standard spacing-content">
    {/* Cards */}
  </div>
  <Button className="spacing-element">Call to Action</Button>
</Section>
```

### Grid Gap Pattern
```tsx
{/* Service cards with standard gutters */}
<div className="grid md:grid-cols-3 gutter-standard">
  {services.map(service => <StandardCard {...service} />)}
</div>

{/* Timeline with content gutters */}
<div className="grid md:grid-cols-2 gutter-content">
  {timeline.map(phase => <StandardCard {...phase} />)}
</div>
```

---

## Implementation Guidelines

### When to Use Each Spacing Class

1. **spacing-micro (8px)**: Inline badges, icon-to-text gaps
2. **spacing-tight (16px)**: Consecutive paragraphs, list items
3. **spacing-element (24px)**: Between different content types (text → button)
4. **spacing-content (40px)**: Between major content blocks (text → grid)
5. **spacing-subsection (64px)**: Between subsections within a page
6. **spacing-section (80px)**: Between major page sections (handled by `Section` component)

### When to Use Each Grid Gap

1. **gutter-micro (8px)**: Inline tags, tight button groups
2. **gutter-tight (16px)**: Mobile grids, compact layouts
3. **gutter-standard (24px)**: Default for most card grids
4. **gutter-content (32px)**: Large cards, spacious layouts

---

## Migration Notes

### Replacing Hardcoded Spacing

| Old | New | Notes |
|-----|-----|-------|
| `mb-4` | `spacing-tight` | 16px between paragraphs |
| `mb-6` | `spacing-element` | 24px element spacing |
| `mb-8` | `spacing-content` | 40px content spacing |
| `mb-12` | `spacing-subsection` | 64px subsection spacing |
| `mb-16` | `spacing-subsection` | 64px subsection spacing |
| `mb-20` | `spacing-section` | 80px section spacing |
| `gap-6` | `gutter-standard` | 24px grid gap |
| `gap-8` | `gutter-content` | 32px grid gap |

---

## Quality Checklist

Before publishing changes, verify:

- [ ] Every spacing value is either a semantic class or Tailwind's 8px increment
- [ ] All grid gaps use `gutter-*` classes
- [ ] Heroes follow alignment rules (left desktop, center mobile)
- [ ] Buttons have consistent 24px minimum space from text
- [ ] Cards have uniform 32px padding
- [ ] No visual "breaking" - site feels the same, just cleaner

---

## Design Rationale

### Why 8px Baseline?
- **Consistency**: All spacing values divisible by 8
- **Flexibility**: Scales cleanly across breakpoints
- **Predictability**: Developers know exact spacing without memorizing arbitrary values
- **Visual rhythm**: Creates harmonious vertical flow

### Why Semantic Classes?
- **Maintainability**: Change one value, update everywhere
- **Readability**: `spacing-element` is clearer than `mb-6`
- **Scalability**: Easy to adjust system-wide without find/replace

---

## Future Enhancements

- Add horizontal spacing utilities (`.gap-x-*`, `.gap-y-*`)
- Create spacing presets for common component patterns
- Document responsive spacing overrides for edge cases
