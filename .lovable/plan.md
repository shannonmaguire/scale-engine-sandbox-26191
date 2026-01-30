
# Convert Resources Page to Article-Style Content

## Overview
Transform the Resources page from downloadable PDFs into readable article-style content, using the existing blog infrastructure and database-backed CMS.

---

## Current State
- **7 PDF resources** at `/resources` with direct download links
- PDFs stored in `/public/pdfs/`
- Each resource has: title, description, category, file path

## Target State
- **7 readable articles** displayed inline or linked as dedicated pages
- Content managed through the same CMS as blog posts
- No downloads - content is accessible directly on the site
- Resources become part of the content library

---

## Implementation Options

### Option A: Merge Resources into Blog (Recommended)
Convert each resource into a blog post with a "Resources" category:

**Advantages:**
- Single CMS for all content
- Consistent styling and rendering
- SEO benefits (indexable content)
- Unified content management

**Changes Required:**
1. Add "Resources" category to blog categories
2. Create 7 new blog posts (one per resource) via the admin CMS
3. Update Resources page to display filtered blog posts (category = "Resources")
4. Remove or archive the PDF files

### Option B: Separate Resources Content
Keep Resources as its own section with dedicated pages:

**Advantages:**
- Clear separation between blog and resources
- Different URL structure (`/resources/roi-calculator`)

**Changes Required:**
1. Create a new `resources` database table
2. Create resource content pages
3. Build a resource detail page component
4. More infrastructure to maintain

---

## Recommended Approach: Option A

### Database Changes
None required - the existing `blog_posts` table works as-is.

### Frontend Changes

#### 1. Update Blog Categories
**File:** `src/pages/Blog.tsx`

Add "Resources" to the categories array so resource articles can be filtered:
```tsx
const categories = ["All", "Revenue Infrastructure", "System Installation", "Fractional Ops", "Salesforce Ecosystem", "Revenue Operations", "Resources"];
```

#### 2. Simplify Resources Page
**File:** `src/pages/Resources.tsx`

Transform from download grid to a curated list linking to resource articles:
- Keep the page header and structure
- Replace download cards with article preview cards
- Link each card to `/blog/[resource-slug]`
- Optionally embed short excerpts directly on the page

#### 3. Seed Resource Content
Using the admin panel at `/admin/blog`, create 7 new posts:

| Title | Slug | Category |
|-------|------|----------|
| 90-Day Roadmap Template | `90-day-roadmap-template` | Resources |
| Discovery Questions Library | `discovery-questions-library` | Resources |
| ROI Calculator | `roi-calculator` | Resources |
| Service Selection Guide | `service-selection-guide` | Resources |
| Technical Assessment Framework | `technical-assessment-framework` | Resources |
| Vendor Handoff SOP | `vendor-handoff-sop` | Resources |
| Website Readiness Checklist | `website-readiness-checklist` | Resources |

Each post will contain the full content of the original PDF, written in Markdown.

#### 4. Remove PDF Download Links
- Delete download icons and `<a download>` elements
- Replace with "Read Article" links

#### 5. Optional: Archive PDFs
The PDF files in `/public/pdfs/` can be:
- Kept as secondary download option (if you want both)
- Removed entirely (cleaner)

---

## Content Migration Strategy

Since I cannot read the PDF contents directly, you have two options:

1. **Manual entry**: Use the admin panel to create each resource article and paste the content
2. **Provide content**: Share the text content from each PDF and I can seed the database

---

## Updated Resources Page Layout

```text
┌─────────────────────────────────────────────────────────────┐
│ RESOURCES                                                   │
│ Resources                                                   │
│ Templates, frameworks, and guides for revenue               │
│ infrastructure planning and implementation.                 │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ │
│ │ PLANNING        │ │ ASSESSMENT      │ │ ANALYSIS        │ │
│ │ 90-Day Roadmap  │ │ Discovery       │ │ ROI Calculator  │ │
│ │ Template        │ │ Questions       │ │                 │ │
│ │                 │ │ Library         │ │ [description]   │ │
│ │ [description]   │ │ [description]   │ │                 │ │
│ │                 │ │                 │ │ Read Article →  │ │
│ │ Read Article →  │ │ Read Article →  │ │                 │ │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘ │
│          ...remaining 4 resource cards...                   │
├─────────────────────────────────────────────────────────────┤
│ NEXT STEP                                                   │
│ Need a custom assessment?                                   │
│ [Book Assessment →]                                         │
└─────────────────────────────────────────────────────────────┘
```

---

## Implementation Steps

1. Add "Resources" to blog categories in `Blog.tsx`
2. Update `Resources.tsx` to link to blog posts instead of downloads
3. Seed the 7 resource articles via admin panel (content needed from you)
4. Test navigation from Resources → individual articles
5. Optionally remove PDF files from `/public/pdfs/`

---

## What I Need From You

Before implementation, I need the actual content for each resource. You can either:
- **Paste the text** from each PDF so I can seed the database
- **Enter via admin panel** at `/admin/blog` yourself after I update the frontend

Let me know if you'd like to proceed with this approach, and how you'd like to handle the content migration.
