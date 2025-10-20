# CWT Studio Visual Consistency Guide
**Asset Guidelines & Brand Standards**

---

## Purpose
This document ensures all visual assets—photography, illustrations, icons, diagrams, and partner badges—maintain the CWT Studio aesthetic: **architectural precision with operational warmth**.

---

## 1. Photography Standards

### Preferred Subjects
- **Architecture**: Concrete, steel, glass structures with strong geometry
- **Systems**: Server rooms, cable management, infrastructure close-ups
- **Workspaces**: Minimal desks with monitors showing data dashboards
- **Abstract**: Geometric patterns, grids, industrial textures

### Avoid
- ❌ Generic stock photos (people in suits shaking hands)
- ❌ Overly warm/bright/cheerful imagery (mismatched tone)
- ❌ Faces unless for testimonials (maintain focus on systems)
- ❌ Cluttered backgrounds or busy compositions

### Technical Specs
- **Format**: `.webp` (primary), `.jpg` fallback
- **Resolution**: 2x retina (e.g., 1200px → save at 2400px)
- **Color grading**: Cool-to-neutral tones (avoid warm filters)
- **Contrast**: High contrast acceptable (reinforces precision)
- **Compression**: 80-85% quality (balance size/fidelity)

### Lighting Style
- Directional lighting (avoid flat/bright)
- Hard shadows acceptable (reinforces structure)
- Low-key or high-contrast preferred over high-key
- Natural light or industrial fixtures (no studio softbox look)

---

## 2. Illustrations & Diagrams

### System Diagrams
- **Style**: Blueprint aesthetic (thin lines, geometric shapes)
- **Colors**: Use semantic tokens only
  - Lines: `border` or `muted-gray`
  - Nodes: `teal` (data), `burgundy` (critical)
  - Background: `gray-very-light` with optional 0.1 opacity grid
- **Stroke weight**: 2px (consistent with icon system)
- **Corner radius**: 0.375rem (match UI components)

### Data Visualizations
- **Chart type**: Bar, line, area (avoid pie unless ≤4 segments)
- **Color palette**:
  - Primary data: `teal` (184 28% 44%)
  - Secondary: `muted-gray` (240 3% 61%)
  - Highlight: `burgundy` (327 82% 31%)
  - Success: `yellow-green` (75 100% 90%)
- **Labels**: JetBrains Mono, 12px, 600 weight
- **Grid lines**: Optional, 0.1 opacity, `border` color

### Abstract Illustrations (Future)
- Low-poly geometric shapes
- Isometric infrastructure diagrams
- Abstract network topologies
- Avoid: Hand-drawn, organic, whimsical styles

---

## 3. Icon System

### Source
- **Primary**: Lucide React (https://lucide.dev)
- **Fallback**: Heroicons (only if Lucide lacks specific icon)
- **Custom**: Only for brand-specific elements (CWT logo)

### Sizing (from `src/lib/icon-config.ts`)
```typescript
micro: 14px   // Inline badges, timestamps
small: 16px   // List items, body text inline
medium: 20px  // Card headers, feature lists
large: 24px   // Hero sections, page headers
xl: 32px      // Marketing hero, large CTAs
```

### Stroke Weight
```typescript
thin: 1.5     // Background elements, subtle
default: 2    // Standard UI icons
bold: 2.5     // Emphasis, CTAs
```

### Color Rules
- **Default**: `currentColor` (inherit from parent text)
- **Accent**: `text-accent` (teal) for data/interaction
- **Primary**: `text-primary` (burgundy) for CTAs
- **Muted**: `text-muted-foreground` for secondary

### Usage Example
```tsx
import { CheckCircle } from 'lucide-react';
import { ICON_SIZES, ICON_STROKE } from '@/lib/icon-config';

<CheckCircle 
  size={ICON_SIZES.medium} 
  strokeWidth={ICON_STROKE.default}
  className="text-accent"
/>
```

---

## 4. Logo Standards

### CWT Studio Logo
- **Primary**: White version (`cwt-logo-white.svg`) on dark backgrounds
- **Secondary**: Black version (`cwt-logo-black.svg`) on light backgrounds
- **Horizontal**: Use horizontal lockup when space allows
- **Symbol only**: Use mark/symbol alone at ≤24px height

### Sizing by Context
```css
.logo-navigation: 40px height     /* Navigation bar */
.logo-footer: 48px height         /* Footer */
.logo-og-image: 64px height       /* Social cards */
.logo-favicon: 32px height        /* Browser tab */
```

### Clear Space
- Minimum clear space: **1x logo height** on all sides
- Never place text closer than clear space boundary
- Backgrounds must provide sufficient contrast (4.5:1 minimum)

### Rendering
```html
<img 
  src={cwtLogo} 
  alt="CWT Studio - Backend Revenue Systems"
  className="logo-navigation"
  style={{ imageRendering: 'crisp-edges' }}
/>
```

### What NOT to Do
- ❌ Rotate, skew, or distort logo
- ❌ Change logo colors (only white/black approved)
- ❌ Add effects (drop shadows, glows, gradients)
- ❌ Place on busy backgrounds (ensure clean backdrop)

---

## 5. Partner Badges & Certifications

### Salesforce Partner Badge
- Use official Salesforce partner badge (SVG preferred)
- Maintain Salesforce brand guidelines (color, spacing)
- Size: 80-120px height (proportional to page context)
- Link: Always link to Salesforce AppExchange or partner profile

### Third-Party Logos (Tools, Integrations)
- Use grayscale versions when possible (maintain visual hierarchy)
- Align to baseline grid (no floating/misaligned logos)
- Equal spacing between logos (use CSS Grid with `gap: 2rem`)
- Hover state: Restore color or subtle opacity increase

### Layout Example
```tsx
<div className="grid grid-cols-4 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
  <img src={salesforceLogo} alt="Salesforce Partner" className="h-12 w-auto" />
  <img src={zapierLogo} alt="Zapier Integration" className="h-12 w-auto" />
  {/* ... */}
</div>
```

---

## 6. Social Media Assets

### Open Graph Images (1200x630px)
- **Background**: `gray-very-light` (40 15% 96%)
- **Logo**: White CWT logo on burgundy rectangle (200x80px)
- **Text**: Page title in JetBrains Mono, 48px, `deep-black`
- **Accent**: Thin teal line (2px) under title
- **Padding**: 80px from edges

### LinkedIn/Twitter Cards
- Same specs as OG images
- Include tagline: "Backend Revenue Systems"
- Optional: Small data visualization or geometric pattern (bottom-right)

### Thumbnail Images (Blog, Resources)
- **Size**: 800x450px (16:9 aspect ratio)
- **Style**: Architectural photo or abstract diagram
- **Overlay**: Optional dark gradient (bottom 40%) for text readability
- **Text**: Title in white, JetBrains Mono, 32px, bottom-left

---

## 7. Texture & Background Elements

### Subtle Paper Grain (Optional)
- **Opacity**: 2% maximum (imperceptible at distance)
- **Usage**: `.console-card` backgrounds only
- **Purpose**: Add warmth without compromising digital precision
- **Implementation**:
  ```css
  .console-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/textures/paper-grain.png');
    opacity: 0.02;
    mix-blend-mode: overlay;
    pointer-events: none;
  }
  ```

### Blueprint Grid
- **Opacity**: 0.1 (very subtle)
- **Size**: 24px x 24px
- **Color**: `border` or `muted-gray`
- **Usage**: Hero sections or SystemDiagram component only
- **Avoid**: Overuse (maintains clean, modern aesthetic)

---

## 8. Animation & Motion Assets

### Loading States
- **Spinner**: Custom burgundy spinner (not generic blue)
- **Skeleton screens**: `gray-very-light` base + `gray-light` shimmer
- **Progress bars**: `teal` fill on `gray-light` track

### Micro-interactions
- **Hover lifts**: -4px translate + shadow increase
- **Button press**: No animation (instant feedback)
- **Card expand**: Scale from 1 to 1.02 (subtle)

### Page Transitions
- **Fade in**: 200ms ease-out
- **Slide up**: 300ms cubic-bezier(0.4, 0, 0.2, 1)
- **Scroll reveals**: IntersectionObserver with 200ms stagger

---

## 9. Accessibility Requirements

### Alt Text Standards
- **Descriptive**: "Backend revenue system architecture diagram showing Salesforce, outbound engine, and pipeline governance"
- **Concise**: Avoid "image of" or "picture of" prefixes
- **Context**: Explain purpose, not just content
- **Decorative**: `alt=""` if purely decorative (rare)

### Color Contrast
- **Text on backgrounds**: 4.5:1 minimum (WCAG AA)
- **Large text (≥24px)**: 3:1 minimum
- **Interactive elements**: 3:1 against adjacent colors
- **Data viz**: Use shape + color (never color alone)

### Focus Indicators
- All images in links must have visible focus ring (2px, primary color)
- Keyboard navigation: Tab through all interactive images/diagrams

---

## 10. File Organization

### Directory Structure
```
src/assets/
├── logos/
│   ├── cwt-logo-white.svg
│   ├── cwt-logo-black.svg
│   ├── cwt-logo-horizontal.svg
│   └── cwt-logo-mark.svg
├── images/
│   ├── hero/
│   │   └── hero-system-diagram.jpg
│   ├── case-studies/
│   │   └── [project-name]-hero.webp
│   └── og-images/
│       └── og-home.png
├── icons/
│   └── [use Lucide React, no custom icons needed]
└── textures/
    └── paper-grain.png (optional, 2% opacity)
```

### Naming Conventions
- **Lowercase with hyphens**: `hero-system-diagram.jpg`
- **Descriptive**: `federal-compliance-case-study.webp`
- **Versioned**: `og-home-v2.png` (if iterating)
- **Avoid**: `image1.jpg`, `final-final.png`, `untitled.webp`

---

## 11. Third-Party Integrations

### Testimonial Photos
- **Size**: 96x96px (circle crop)
- **Format**: `.webp` preferred
- **Quality**: High-resolution (2x retina)
- **Style**: Professional headshots, neutral backgrounds
- **Fallback**: Initials avatar (burgundy background, white text)

### Blog Featured Images
- **Size**: 1200x630px (OG image size)
- **Style**: Match photography standards (architecture, systems)
- **Overlay**: Optional gradient for title overlay
- **Attribution**: Include photographer credit if required

---

## 12. Quality Checklist

Before publishing any visual asset:

- [ ] Matches architectural precision aesthetic (no whimsy)
- [ ] Uses semantic color tokens (no hardcoded colors)
- [ ] Passes contrast ratio checks (WCAG AA minimum)
- [ ] Optimized file size (≤200KB for hero images)
- [ ] Correct format (`.webp` primary, `.jpg/.svg` fallback)
- [ ] Descriptive alt text provided
- [ ] Consistent with existing assets (style, tone)
- [ ] Renders correctly at 2x resolution (retina)
- [ ] No copyright violations (own or licensed)

---

## 13. Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2025-01-09 | 1.0 | Initial visual consistency guide created |

---

## Contact for Asset Questions
**Email**: hello@thecwtstudio.com  
**Subject**: "Visual Assets Question"

For design system questions, see `docs/design-law.md`.
