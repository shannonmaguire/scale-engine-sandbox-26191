
# Fix Blog Post Header Alignment

## Problem
The "← ALL ARTICLES" back button and the "REVENUE OPERATIONS" category badge are appearing side-by-side instead of stacked vertically. This breaks the visual hierarchy and doesn't match the site's interior page standards.

## Root Cause
The `system-status` CSS class uses `inline-flex`, and the Button component doesn't force a line break after it. When rendered inside the same `max-w-3xl` container, they flow inline instead of stacking.

## Solution
Restructure the BlogPost header to follow the canonical interior page pattern:

1. **Remove the back button from the hero section** - Place it in the Breadcrumbs area or make it a subtle inline element
2. **OR wrap elements properly** - Ensure each element is on its own line with block-level containers

### Recommended Approach
Follow the pattern from other interior pages:
- `system-status` badge first (as the section identifier)
- `heading-page` (H1) below
- Description text
- Metadata (author, date, read time)

The "Back to Blog" navigation is already handled by Breadcrumbs at the top of the page, so the redundant back button can be removed entirely for a cleaner look.

## Changes Required

### File: `src/pages/BlogPost.tsx`

**Current structure (lines 147-169):**
```tsx
<Section className="border-b border-border">
  <div className="max-w-3xl">
    <Button asChild variant="ghost" size="sm" className="mb-8 -ml-3">
      <Link to="/blog" className="flex items-center gap-2">
        <ArrowLeft className="h-4 w-4" />
        All Articles
      </Link>
    </Button>
    
    <div className="system-status mb-4">{post.category?.toUpperCase()}</div>
    
    <h1 className="heading-page mb-6">{post.title}</h1>
    ...
  </div>
</Section>
```

**New structure:**
```tsx
<Section className="border-b border-border">
  <div className="max-w-3xl">
    <div className="system-status mb-8">{post.category?.toUpperCase()}</div>
    
    <h1 className="heading-page mb-6">{post.title}</h1>
    
    <p className="text-description max-w-2xl mb-8">{post.excerpt}</p>
    
    <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
      <span>{post.author}</span>
      <span>•</span>
      <span>{formatDate(post.published_at)}</span>
      <span>•</span>
      <span>{post.read_time}</span>
    </div>
  </div>
</Section>
```

## Key Changes
1. Remove the redundant "All Articles" back button (Breadcrumbs already provide navigation)
2. Change `system-status` margin from `mb-4` to `mb-8` to match canonical pattern (32px spacing)
3. Remove the duplicate bottom border on the metadata section (the Section already has `border-b`)

## Visual Result
The header will now match other interior pages:
- `REVENUE OPERATIONS` badge at top
- "The Twice Rule" heading below
- Excerpt text
- Author • Date • Read time metadata

No alignment issues, no redundant navigation elements.
