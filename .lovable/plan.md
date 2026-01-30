
# Remove Resources Page, Keep Blog

## Summary
Delete the `/resources` page and all references to it while preserving the Blog infrastructure for future use.

---

## What Gets Removed

| File/Location | Action |
|--------------|--------|
| `src/pages/Resources.tsx` | Delete file |
| `src/App.tsx` | Remove lazy import and route for `/resources` |
| `src/components/Breadcrumbs.tsx` | Remove "resources" from breadcrumb mappings |
| `src/pages/Blog.tsx` | Update CTA to link elsewhere (assessment or contact) |

---

## What Stays

- `/blog` route and page
- `/blog/:slug` route for individual posts
- `blog_posts` database table
- All blog-related components and hooks
- `/admin/blog` for content management

---

## Technical Steps

1. **Delete Resources page file**
   - Remove `src/pages/Resources.tsx`

2. **Update App.tsx**
   - Remove line 36: `const Resources = lazy(() => import("@/pages/Resources"));`
   - Remove line 117: `<Route path="/resources" element={<Resources />} />`

3. **Update Breadcrumbs.tsx**
   - Remove `"resources": "Resources"` from the mapping

4. **Update Blog.tsx CTA**
   - Change the bottom CTA from linking to `/resources` to linking to `/assessment` with adjusted copy

---

## Result
- Resources page gone
- Blog stays accessible at `/blog` (not in main nav per existing memory)
- No dead code or broken links
