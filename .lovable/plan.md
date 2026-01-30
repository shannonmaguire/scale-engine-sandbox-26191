
# Implementation Plan: Footer Resources Link + Mini Blog CMS

## Overview
Add the Resources page to the footer navigation and implement a database-backed blog CMS using Lovable Cloud for content management.

---

## Part 1: Footer Resources Link (Quick Fix)

### Change Required
**File:** `src/components/Footer.tsx`

Add a new list item for Resources in the Company section (after Contact):

```tsx
<li>
  <Link to="/resources" className="text-white/80 hover:text-white transition-colors text-base sm:text-sm inline-block min-h-[44px] sm:min-h-0 flex items-center">
    Resources
  </Link>
</li>
```

---

## Part 2: Database-Backed Mini Blog CMS

### Database Schema

Create a `blog_posts` table:

```text
┌─────────────────────────────────────────────────────────────┐
│                       blog_posts                            │
├─────────────────────────────────────────────────────────────┤
│ id              UUID PRIMARY KEY                            │
│ slug            TEXT UNIQUE NOT NULL                        │
│ title           TEXT NOT NULL                               │
│ excerpt         TEXT NOT NULL                               │
│ content         TEXT NOT NULL (Markdown)                    │
│ author          TEXT DEFAULT 'Shannon Maguire'              │
│ category        TEXT NOT NULL                               │
│ tags            TEXT[] (array of strings)                   │
│ read_time       TEXT (e.g., "12 min read")                  │
│ featured        BOOLEAN DEFAULT FALSE                       │
│ published       BOOLEAN DEFAULT FALSE                       │
│ published_at    TIMESTAMPTZ                                 │
│ created_at      TIMESTAMPTZ DEFAULT NOW()                   │
│ updated_at      TIMESTAMPTZ DEFAULT NOW()                   │
└─────────────────────────────────────────────────────────────┘
```

### Security (RLS Policies)
- **Public read:** Anyone can read published posts
- **Admin write:** Protected admin route for creating/editing (can use a simple password or authenticated admin role)

### Frontend Changes

#### A. Update Blog.tsx
- Replace hardcoded `blogPosts` array with a database query
- Use `@tanstack/react-query` for data fetching
- Add loading states

#### B. Update BlogPost.tsx  
- Fetch individual post by slug from database
- Render Markdown content using a lightweight parser (e.g., `react-markdown`)
- Keep existing article components as fallback for legacy posts

#### C. Create Admin Page (Optional)
- Protected route at `/admin/blog` or similar
- Form to create/edit blog posts
- Markdown preview
- Publish/unpublish toggle

### New Dependencies
- `react-markdown` - For rendering Markdown content
- `remark-gfm` - GitHub-flavored Markdown support (tables, etc.)

### Migration Strategy
1. Create database table
2. Seed existing 3 articles into database
3. Update frontend to read from database
4. Legacy component articles remain as backup

---

## Technical Considerations

### Content Format
Blog content will be stored as Markdown, which allows:
- Easy formatting without HTML
- Code blocks with syntax highlighting (future)
- Tables, lists, blockquotes
- Portable content that could move to another CMS later

### Admin Access
For a "mini" CMS, we can use one of these approaches:
1. **Simple password protection** - Environment variable with admin password
2. **Magic link** - Email-based auth for specific email addresses
3. **Full auth** - User accounts with admin role

Recommendation: Start with simple password protection, upgrade later if needed.

---

## Implementation Order

1. Add Resources link to footer (immediate)
2. Create `blog_posts` database table with RLS
3. Install `react-markdown` and `remark-gfm`
4. Create blog data fetching hooks
5. Update Blog.tsx to use database
6. Update BlogPost.tsx to render Markdown
7. Create simple admin interface
8. Migrate existing articles to database

---

## Estimated Scope
- **Footer fix:** 1 change
- **Blog CMS:** New table, 2-3 updated pages, 1 new admin page, hooks/utilities
