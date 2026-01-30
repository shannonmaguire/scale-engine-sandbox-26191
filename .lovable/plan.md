

# Consolidate Entry Points to /assessment

## Summary
Consolidate three redundant entry points (/diagnostic, /start, /assessment) into a single canonical route at `/assessment`. This eliminates funnel fragmentation while preserving vertical SEO pages (/diagnostic/healthcare, /diagnostic/law) with redirects to proper contact tracking.

## Current State Analysis

### Redundant Routes (Same Offer, Different Pages)
| Route | Pricing | Naming | Status |
|-------|---------|--------|--------|
| `/assessment` | No price shown | "Revenue Infrastructure Assessment" | Primary page, nav CTA |
| `/diagnostic` | $2,000 USD | "Revenue Infrastructure Diagnostic" | Standalone, indexed |
| `/start` | No price shown | "Revenue Infrastructure Assessment" | Standalone, noindexed |

### Vertical Pages (SEO Value)
| Route | Purpose | Action |
|-------|---------|--------|
| `/diagnostic/healthcare` | Healthcare SEO keywords | Keep as redirect to `/assessment` with preserved query params |
| `/diagnostic/law` | Legal SEO keywords | Keep as redirect to `/assessment` with preserved query params |

## Changes

### 1. Route Consolidation in `src/App.tsx`

**Remove standalone page imports:**
```typescript
// DELETE these imports
const Start = lazy(() => import("@/pages/Start"));
const Diagnostic = lazy(() => import("@/pages/Diagnostic"));
const DiagnosticHealthcare = lazy(() => import("@/pages/DiagnosticHealthcare"));
const DiagnosticLaw = lazy(() => import("@/pages/DiagnosticLaw"));
```

**Convert to redirects:**
```typescript
// Replace standalone routes with redirects
<Route path="/start" element={<Navigate to="/assessment" replace />} />
<Route path="/start-here" element={<Navigate to="/assessment" replace />} />
<Route path="/diagnostic" element={<Navigate to="/assessment" replace />} />
<Route path="/diagnostic/healthcare" element={<Navigate to="/assessment?vertical=healthcare" replace />} />
<Route path="/diagnostic/law" element={<Navigate to="/assessment?vertical=law" replace />} />
```

**Update standalone page detection:**
```typescript
// Update isStandalonePage check - only /upwork remains standalone
const isStandalonePage = location.pathname === '/upwork';
```

### 2. Delete Redundant Page Files

Remove these files entirely:
- `src/pages/Start.tsx`
- `src/pages/Diagnostic.tsx`
- `src/pages/DiagnosticHealthcare.tsx`
- `src/pages/DiagnosticLaw.tsx`

### 3. Update `public/sitemap.xml`

Remove entries for consolidated routes:
```xml
<!-- REMOVE these entries -->
<url>
  <loc>https://cwtstudio.com/diagnostic</loc>
  ...
</url>
<url>
  <loc>https://cwtstudio.com/diagnostic/healthcare</loc>
  ...
</url>
<url>
  <loc>https://cwtstudio.com/diagnostic/law</loc>
  ...
</url>
```

### 4. Update `public/robots.txt`

Clean up rules for removed routes:
```txt
# REMOVE these lines
Allow: /diagnostic
Allow: /diagnostic/healthcare
Allow: /diagnostic/law

# KEEP blocking utility pages
Disallow: /upwork
Disallow: /start
```

### 5. Update `/upwork` Page CTA

Update `src/pages/Upwork.tsx` to point to `/assessment`:
```typescript
// Change CTA from /contact?source=upwork&interest=diagnostic
// To: /assessment?source=upwork
<Link to="/assessment?source=upwork">
```

## Result

```text
BEFORE (4 entry points, confusion)
┌─────────────────┐
│   /assessment   │ ← Nav CTA
├─────────────────┤
│   /diagnostic   │ ← Indexed, $2,000
├─────────────────┤
│     /start      │ ← Executive gate
├─────────────────┤
│ /diagnostic/*   │ ← Vertical SEO
└─────────────────┘

AFTER (1 canonical entry point)
┌─────────────────┐
│   /assessment   │ ← All traffic
├─────────────────┤
│ /diagnostic     │ → 301 redirect
│ /start          │ → 301 redirect
│ /diagnostic/*   │ → 301 redirect (w/ query params)
└─────────────────┘
```

## Technical Notes

- All existing `/assessment` CTAs remain unchanged
- The `/upwork` page stays as a standalone proposal gate (different audience)
- Query params from vertical pages preserved for analytics attribution
- No SEO penalty—redirects consolidate link equity to `/assessment`

## Files Changed
1. `src/App.tsx` - Route consolidation
2. `src/pages/Upwork.tsx` - CTA update
3. `public/sitemap.xml` - Remove dead entries
4. `public/robots.txt` - Clean up rules
5. Delete: `src/pages/Start.tsx`, `src/pages/Diagnostic.tsx`, `src/pages/DiagnosticHealthcare.tsx`, `src/pages/DiagnosticLaw.tsx`

