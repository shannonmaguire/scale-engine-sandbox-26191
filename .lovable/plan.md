

# Remove Expandable Case Study Links

## Summary
Remove the clickable/expandable functionality from case study cards on the Proof page. All cards will become static display cards without links to detailed pages.

## Changes

### 1. Update `src/pages/Proof.tsx`

**Remove imports:**
- Remove `Link` from react-router-dom import
- Remove `ArrowRight` from lucide-react import

**Remove detailPage from case studies:**
- Delete the `detailPage` property from Healthcare (id: 1), Cybersecurity (id: 3), and B2B SaaS (id: 6) entries
- Remove `detailPage?: string` from the CaseStudy interface

**Simplify card rendering:**
- Remove the conditional that checks for `study.detailPage`
- Remove the `<Link>` wrapper entirely
- Remove the ArrowRight icon from the footer
- All cards become simple `<div>` elements

### 2. Keep Routes but Remove from Navigation

The case study page files and routes can remain in place (in case you want to use them later), but they won't be accessible from the Proof page grid. Alternatively, I can also:
- Remove the routes from `src/App.tsx`
- Delete the case study page files

**Recommendation:** Keep the files and routes for now—they're not hurting anything and you may want them later. Just remove the links from the cards.

## Result

All 8 case study cards become uniform, non-clickable display cards with no visual indication of expandability.

