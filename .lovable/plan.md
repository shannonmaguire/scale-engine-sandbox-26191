

# Strip Visual Clutter Site-Wide

## The Problem

The site uses icons as visual crutches: checkmarks next to every list item, X marks for exclusions, arrow icons on every button, decorative corner accents on diagram cards, and decorative line dividers before section headings. These small decorations accumulate into noise. The best operator-grade sites let the words carry the weight.

## What Changes

### 1. Remove arrow icons from all CTA buttons
**File: `src/components/ConversionOptimizedButton.tsx`**
- Remove the `ArrowRight` icon that appends to every single CTA button site-wide
- Remove the `showArrow` prop entirely
- Buttons become text-only, which reads cleaner and more confident

### 2. Strip CheckCircle icons from the Home page
**File: `src/pages/Home.tsx`**
- "Who This Is For" section: Replace `CheckCircle` icons with plain text dashes or no prefix
- Replace `X` icons with plain text dashes or no prefix
- Let the "Good Fit" / "Not a Fit" labels do the work instead of colored icons

### 3. Strip CheckSquare icons from the About page
**File: `src/pages/About.tsx`**
- "How I Work" diagnostic questions: Remove `CheckSquare` icons, use numbered items or plain text
- Remove the `Linkedin` icon from the button (keep the text "LinkedIn")

### 4. Strip CheckCircle icons from the Assessment page
**File: `src/pages/Assessment.tsx`**
- "Complete Scope" list: Remove `CheckCircle` icons from every list item, use plain dashes or mono-spaced bullets
- "Process Timeline" activities: Remove `CheckCircle` icons, use plain text
- "Do Not Book If" section: Remove `X` icons, use plain text
- Remove `BarChart3`, `Target`, `FileText` icons from deliverable cards (the titles are clear enough)
- Remove the rounded-full number circles from the process timeline (use mono text numbers instead, consistent with the squared aesthetic)

### 5. Simplify the Architecture Diagram
**File: `src/components/RevenueArchitectureDiagram.tsx`**
- Remove the 6 layer icons (`Server`, `Database`, `GitBranch`, `Zap`, `BarChart3`, `FileText`)
- Remove the decorative corner accent marks (the 8 tiny border elements on each card)
- Remove `AlertTriangle` icon from "If skipped" sections
- Let the layer numbers, labels, and text carry the meaning

### 6. Clean up the Contact page
**File: `src/pages/Contact.tsx`**
- Remove `ArrowRight` from the submit button (use text only)
- Keep `Loader2` spinner (functional, not decorative)
- Keep `CheckCircle2` and `AlertCircle` for form status messages (functional feedback)
- Remove `Clock`, `Mail`, `MessageSquare` icons from sidebar info cards (the headings are sufficient)

### 7. Remove decorative line dividers from section headings
**Files: `src/pages/Assessment.tsx`, `src/components/RevenueArchitectureDiagram.tsx`**
- Remove the `<div className="w-12 h-px bg-primary" />` decorative lines that appear before some section headings but not others (inconsistent and adds clutter)

## What Stays
- Functional icons: Loader spinner, form validation status icons
- The `→` arrow in Proof page metric comparisons (Before → After) since it communicates data transformation
- The `→` arrow in How We Work sequencing rules (Rule → Consequence) for the same reason
- Navigation hamburger menu icon (functional)

## Result
Every page becomes text-driven. The typography, spacing, and content do the work. No decorative icons competing for attention. Matches the operator-grade, documentation-style aesthetic the site is built on.
