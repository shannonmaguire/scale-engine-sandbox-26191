# CWT Studio Color System Reference

## Core Principle
All colors reference CSS variables defined in `src/index.css`.
**Never use hardcoded hex values or inline HSL.**
**Never use opacity modifiers (e.g., /70, /80, /90) - use semantic tokens instead.**

## Semantic Token Usage

### Backgrounds
- **Primary actions**: `bg-primary` + `text-primary-foreground`
- **Navigation/Authority**: `bg-authority` + `text-authority-foreground`
- **Cards/Elevation**: `bg-card` + `text-card-foreground`
- **Page background**: `bg-background` + `text-foreground`
- **Muted sections**: `bg-surface-muted` + `text-foreground`

### Text Colors
- **Primary text**: `text-foreground` (full contrast)
- **Secondary text**: `text-muted-foreground` (de-emphasized but still WCAG AA)
- **Subtle text**: `text-foreground-subtle` (intentional de-emphasis for tertiary content)

### Interactive States
- **Hover (primary)**: `hover:bg-[hsl(var(--primary-hover))]`
- **Hover (accent)**: `hover:text-accent`
- **Focus ring**: `focus:ring-primary`

### Critical Rules

#### WCAG Contrast Requirements
**NEVER** pair `bg-primary` with `text-foreground` (creates WCAG violation).
**ALWAYS** use `bg-primary` with `text-primary-foreground`.

#### Button Variant Trust
Do not override button text colors with hardcoded classes like `text-foreground`.
Trust the button variant system:
- `variant="default"` (burgundy) → white text
- `variant="outline"` → inherits foreground color
- `variant="ghost"` → inherits foreground color

## Color Palette Mood
"Architectural precision with operational warmth"

### Distribution
- 65% neutral (gray-light, gray-very-light)
- 25% accent (teal, warm-tan)
- 10% highlight (burgundy, yellow-green)

### Warmed Surface Colors
- `--gray-very-light: 40 15% 96%` (#F9F8F5) - Warm, inviting card backgrounds
- `--gray-light: 40 12% 91%` (#EBE9E3) - Warm foundation for page backgrounds
- `--surface-muted: 40 10% 94%` (#F1EFE9) - Lighter muted section background for better contrast

### Text Colors
- `--foreground: 0 0% 0%` (#000000) - Primary text color
- `--muted-foreground: 0 0% 25%` (#404040) - De-emphasized text with 7:1 contrast
- `--foreground-subtle: 0 0% 35%` (#595959) - Subtle text for tertiary content

### Data & Interaction
- `--teal: 184 28% 44%` (#52939C) - Increased saturation for better visibility

## Implementation Checklist

### ✅ Correct Usage
```tsx
// Footer using semantic tokens
<footer className="bg-primary text-primary-foreground">

// Button trusting variant system
<Button variant="default" className="hover-lift hover-glow">

// Section with muted background
<Section variant="muted">

// Text hierarchy using semantic tokens
<p className="text-foreground">Primary content</p>
<p className="text-muted-foreground">Secondary content</p>
<p className="text-foreground-subtle">Tertiary content</p>
```

### ❌ Incorrect Usage
```tsx
// WRONG: Inline HSL overriding design system
<footer className="bg-[hsl(var(--burgundy))]">

// WRONG: Hardcoding text color over button variant
<Button className="text-foreground hover:text-foreground">

// WRONG: Using opacity modifiers instead of semantic tokens
<p className="text-foreground/70">

// WRONG: Using old muted background
<Section variant="muted" className="bg-muted">
```

## Maintenance Notes

1. **Single Source of Truth**: All color values live in `src/index.css`
2. **Design System Page**: Keep `src/pages/DesignSystem.tsx` synchronized with `src/index.css`
3. **No Inline Overrides**: Use semantic tokens or create new variants in the design system
4. **Accessibility First**: Every color pairing must meet WCAG AA (4.5:1 for text, 3:1 for UI components)
