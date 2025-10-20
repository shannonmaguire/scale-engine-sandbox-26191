# CWT Studio Design Law
**Visual System Principles & Implementation Guide**

---

## Core Philosophy
**"Architectural precision with operational warmth"**

CWT Studio's visual identity reflects systems thinking meets calm confidence—blueprint-meets-boardroom. Every design decision serves comprehension, authority, and trust.

---

## 1. Color System

### Brand Palette (HSL)
```css
--burgundy: 327 82% 31%         /* Primary CTAs, conversion moments */
--forest: 135 27% 15%           /* Authority, navigation, headers */
--deep-black: 0 0% 0%           /* All body text */
--teal: 184 28% 44%             /* Data, interaction, charts */
--yellow-green: 75 100% 90%     /* Success, spotlight */
--warm-tan: 47 27% 71%          /* Differentiator, warmth */
--muted-gray: 240 3% 61%        /* Supporting, secondary */
--gray-very-light: 40 15% 96%   /* Warm white elevation */
--gray-light: 40 12% 91%        /* Warm ivory foundation */
```

### Tonal Ratio
- **60%** Neutral base (warm ivory/white space)
- **30%** Accent/mid-tone (teal, muted gray)
- **10%** Highlight/interactive (burgundy, success)

### Critical Rules
1. **Never** pair `bg-primary` (burgundy) with black text
2. Always use `text-primary-foreground` (white) on burgundy
3. Minimum contrast ratio: **4.5:1** for body text, **3:1** for large text (WCAG AA)
4. Hover states use `--primary-hover: 327 82% 38%` (no hardcoded values)

### Color-Blind Accessibility
- All data visualizations use **shape + color** (never color alone)
- Test with deuteranopia/protanopia simulators
- Rely on contrast ratios over hue differentiation

---

## 2. Typography

### Font Stack
- **Headings**: JetBrains Mono (600 weight, -0.025em tracking)
- **Body**: Inter (500 weight, 1.6 line-height)
- **Labels**: JetBrains Mono (600 weight, uppercase, wider tracking)

### Scale & Rhythm (Desktop)
```
H1 (heading-page):        64px / 1.1 line-height
H2 (heading-section):     48px / 1.2 line-height
H3 (heading-subsection):  32px / 1.3 line-height
Body (text-description):  18px / 1.6 line-height (500 weight, max-width: 70ch)
Label (text-label):       14px / 1.4 line-height (600 weight, uppercase)
```

### Mobile Adjustments (≤767px)
```
H1: 40px (increased from 36px for impact)
H2: 28px
H3: 20px
Body: 17px (increased from 16px for readability)
```

### Spacing Rules
- Paragraph max-width: **70 characters**
- Heading bottom margin: **1.5rem (24px)**
- Section spacing: **80px baseline** (5rem desktop, 2.5rem mobile)

---

## 3. Layout & Grid

### Grid System
- **Max content width**: 1440px
- **Grid gutter**: 2rem (32px)
- **Column system**: 12-column flexible grid

### Spacing Scale (8pt grid)
```
--spacing-baseline: 5rem (80px)     /* Section spacing desktop */
--spacing-half: 2.5rem (40px)       /* Section spacing mobile */
--spacing-quarter: 1.25rem (20px)   /* Internal spacing */
--spacing-gutter: 1.5rem (24px)     /* Grid gutter */
```

### Section Hierarchy
```
XL: 120px - Hero sections
LG: 96px  - Major sections
MD: 64px  - Sub-sections
SM: 32px  - Internal spacing
```

### White Space Discipline
- Every scroll segment resolves with **CTA or insight** (no dead zones)
- Maintain **60% neutral base** tonal ratio
- Use negative space to create visual rhythm

---

## 4. Interaction & Motion

### Timing Standards
```
Instant:    150ms - Microinteractions (hover, focus)
Standard:   200ms - State changes (buttons, cards)
Deliberate: 300ms - Page transitions, reveals
```

### Easing Functions
- **Default**: `ease-out` (cubic-bezier(0, 0, 0.2, 1))
- **Smooth**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Emphasis**: `cubic-bezier(0.4, 0, 1, 1)`

### Motion Rules
1. Animations serve **comprehension**, not decoration
2. Max **2 scroll-triggered reveals** per viewport
3. Use specific properties (avoid `transition-all` for performance)
   ```css
   /* ✅ Good */
   transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
   
   /* ❌ Bad */
   transition: all 0.3s;
   ```
4. Hover states: **200ms** for border-color, box-shadow
5. Reduced motion support: `prefers-reduced-motion: reduce`

---

## 5. Visual Language

### Iconography
- **Source**: Lucide React (consistent stroke weight)
- **Sizing System**:
  ```typescript
  micro: 14px   // Inline text, badges
  small: 16px   // Body text inline
  medium: 20px  // Card headers
  large: 24px   // Hero sections
  xl: 32px      // Marketing hero
  ```
- **Stroke Weight**: 2px default, 1.5px subtle, 2.5px emphasis
- **Corner Radius**: Match parent container (default: 0.375rem)

### Logos
- **Navigation**: 40px height (`.logo-navigation`)
- **Footer**: 48px height (`.logo-footer`)
- **Rendering**: `image-rendering: crisp-edges`
- **Alt text**: "CWT Studio - Backend Revenue Systems"

### Photography/Illustration (Future)
- Architectural photography (concrete, steel, glass)
- Abstract data visualizations (low-poly, geometric)
- Avoid stock photos with excessive warmth or people (unless testimonials)
- Lighting: High contrast, directional (avoid flat/bright)

### Blueprint Overlays
- Use **sparingly** (SystemDiagram, architectural concepts only)
- Opacity: 0.1 max
- Purpose: Reinforce "backend infrastructure" metaphor
- Avoid: Decorative noise, overuse on every section

---

## 6. Component Standards

### Buttons
```css
Primary:   bg-primary, text-white, hover:bg-[hsl(var(--primary-hover))]
Outline:   border-2 border-muted-foreground, hover:border-primary
Ghost:     hover:bg-primary/10, hover:text-primary
Console:   border-2 border-foreground, hover:bg-foreground hover:text-background
```

### Cards (StandardCard)
```css
Default:   bg-white, border-2 border-border
Muted:     bg-muted, border-2 border-border
Bordered:  bg-white, border-2 border-primary/20
Hover:     duration-200, hover:border-primary hover:shadow-lg
```

### Forms
- Input height: **44px** (touch-friendly)
- Focus state: 2px ring (primary color)
- Label: JetBrains Mono, 14px, 600 weight, uppercase

---

## 7. Emotional Signature

### Before Refinements
- ✅ Competence: Strong
- ✅ Authority: Strong
- ⚠️ Approachability: Weak
- ⚠️ Warmth: Weak

### After Refinements
- ✅ Competence: Maintained (JetBrains Mono, precise grid)
- ✅ Authority: Maintained (burgundy, forest green, deep blacks)
- ✅ Approachability: Improved (warmed grays, upgraded typography weight)
- ✅ Warmth: Improved ("built by operators" microcopy, subtle texture potential)

### Voice Alignment
Every design choice should feel like:
> "An engineering-driven consultancy advising Fortune 500 companies—sharp, documented, and reliable."

### What to Avoid
- ❌ Tech-bro flash (excessive gradients, neon accents)
- ❌ Generic SaaS templates (rounded everything, pastel overload)
- ❌ Corporate sterility (pure white backgrounds, excessive formality)
- ❌ Marketing fluff (vague headlines, stock photo overuse)

---

## 8. Implementation Checklist

### For Developers
- [ ] All colors use semantic tokens (no hardcoded HEX/RGB)
- [ ] Button hover states use `--primary-hover`
- [ ] Typography classes use `.heading-*` and `.text-*`
- [ ] Icons use `src/lib/icon-config.ts` sizing system
- [ ] Transitions specify properties (not `transition-all`)
- [ ] Logos use `.logo-navigation` and `.logo-footer` classes
- [ ] All interactive elements have `:focus-visible` states

### For Content Editors
- [ ] Headlines use JetBrains Mono (`.heading-section`)
- [ ] Body copy max-width: 70ch
- [ ] CTAs use "Start Assessment" or "Book Assessment" (consistent)
- [ ] No section over 8 seconds of cognitive scanning
- [ ] Every scroll segment ends with CTA or insight

### For QA
- [ ] Contrast ratios pass WCAG 2.1 AA (use WebAIM checker)
- [ ] Keyboard navigation works (Tab through all interactive elements)
- [ ] Hover states trigger in 200ms or less
- [ ] Mobile typography scales correctly (40px H1, 17px body)
- [ ] Logo sizing consistent (40px nav, 48px footer)

---

## 9. File Structure Reference

```
src/
├── index.css                    # Design tokens, typography scale
├── lib/
│   └── icon-config.ts           # Icon sizing system
├── components/
│   ├── ui/
│   │   ├── button.tsx           # Button variants
│   │   └── standard-card.tsx    # Card component
│   ├── Navigation.tsx           # 40px logo
│   └── Footer.tsx               # 48px logo
└── pages/
    └── DesignSystem.tsx         # Visual documentation
```

---

## 10. Maintenance & Evolution

### Monthly Review
- Audit new components for semantic token usage
- Check hover states for timing consistency
- Verify contrast ratios on new content
- Test keyboard navigation on new pages

### Quarterly Updates
- Revisit tonal ratio (60/30/10 balance)
- Assess typography scale effectiveness
- Review animation budget (no bloat)
- Update icon sizing system if needed

### When to Break the Rules
- **Never** for color contrast (accessibility non-negotiable)
- **Rarely** for typography scale (maintain hierarchy)
- **Occasionally** for motion timing (if user research supports)
- **Frequently** for whitespace (adapt to content needs)

---

## Contact for Design Questions
**Email**: hello@thecwtstudio.com  
**Subject**: "Design System Question"

---

**Last Updated**: 2025-01-09  
**Version**: 1.0  
**Maintained by**: CWT Studio Design Team
