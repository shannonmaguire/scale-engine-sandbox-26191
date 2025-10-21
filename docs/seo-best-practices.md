# SEO Best Practices for CWT Studio

## Critical SEO Requirements

### 1. Title Tags
- **Length**: 50-60 characters max
- **Format**: `Primary Keyword | CWT Studio`
- **Include main keyword** near the beginning
- **Unique** for every page

### 2. Meta Descriptions
- **Length**: 150-160 characters max
- **Include target keyword** naturally
- **Compelling call-to-action** when appropriate
- **Accurate** reflection of page content
- **Unique** for every page

### 3. Heading Structure
- **Single H1 per page** - must match page's primary intent
- Include main keyword in H1
- H2-H6 follow logical hierarchy
- Use semantic heading structure (don't skip levels)

### 4. Image Optimization
- **Alt text**: Descriptive, include relevant keywords
- **File names**: Descriptive (e.g., `revenue-infrastructure-assessment.jpg`)
- **Format**: WebP preferred, with JPG/PNG fallback
- **Size**: Optimized for web (use lazy loading)
- **Dimensions**: Specify width/height attributes

### 5. Structured Data (Schema.org)
Use appropriate schema types:
- **Organization**: Company info on all pages
- **BreadcrumbList**: Navigation hierarchy
- **Service**: Service pages (Assessment, Sprint, Fractional)
- **FAQPage**: Pages with Q&A content
- **Article**: Blog posts
- **ProfessionalService**: About/Services pages

### 6. Semantic HTML
Use proper HTML5 semantic elements:
- `<header>` - Page/section headers
- `<nav>` - Navigation menus
- `<main>` - Main content area
- `<article>` - Independent content
- `<section>` - Thematic grouping
- `<aside>` - Sidebar/related content
- `<footer>` - Footer content

### 7. Internal Linking
- Use descriptive anchor text
- Link to relevant internal pages
- Maintain shallow site architecture (3 clicks max)
- Use breadcrumbs for navigation

### 8. URL Structure
- Keep URLs short and descriptive
- Use hyphens (not underscores)
- Include target keywords
- Avoid unnecessary parameters

### 9. Mobile Optimization
- Responsive design required
- Mobile-first approach
- Proper viewport meta tag
- Touch-friendly navigation

### 10. Page Speed
- Optimize images
- Minimize JavaScript
- Use lazy loading
- Leverage browser caching
- CDN for static assets

## SEOHead Component Usage

### Basic Implementation
```tsx
<SEOHead
  title="Page Title | CWT Studio"
  description="Compelling meta description under 160 characters."
  keywords={['keyword1', 'keyword2', 'keyword3']}
  canonicalUrl="/page-url"
/>
```

### Service Page
```tsx
<SEOHead
  title="Service Name | CWT Studio"
  description="Service description under 160 characters."
  keywords={['service keywords']}
  canonicalUrl="/service"
  type="service"
  serviceSchema={{
    name: 'Service Name',
    description: 'Detailed service description',
    provider: 'CWT Studio',
    offers: {
      price: '1800',
      priceCurrency: 'USD',
      description: 'Offer details'
    }
  }}
/>
```

### FAQ Page
```tsx
<SEOHead
  title="FAQ Title | CWT Studio"
  description="FAQ page description"
  canonicalUrl="/faq"
  faqSchema={[
    {
      question: 'Question text?',
      answer: 'Answer text.'
    }
  ]}
/>
```

### Article/Blog Post
```tsx
<SEOHead
  title="Article Title | CWT Studio"
  description="Article description"
  type="article"
  article={{
    publishedTime: '2024-01-01T00:00:00Z',
    modifiedTime: '2024-01-15T00:00:00Z',
    author: 'Shannon Maguire',
    section: 'Revenue Operations'
  }}
/>
```

## Content Guidelines

### Keyword Density
- Natural integration (don't force keywords)
- 1-2% keyword density
- Use variations and synonyms
- Focus on user intent

### Content Length
- Homepage: 500-800 words
- Service pages: 800-1200 words
- Blog posts: 1500-2500 words
- Product pages: 300-500 words

### Content Quality
- Original, valuable content
- Answer user questions
- Clear structure with subheadings
- Scannable (bullets, short paragraphs)
- Include relevant data/statistics

## Technical SEO Checklist

- [ ] robots.txt configured
- [ ] sitemap.xml generated and submitted
- [ ] SSL certificate (HTTPS)
- [ ] 404 page with helpful navigation
- [ ] Canonical tags on all pages
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card metadata
- [ ] Breadcrumb navigation
- [ ] Structured data validation (Google Rich Results Test)
- [ ] Mobile-friendly test passing
- [ ] Core Web Vitals optimized

## Local SEO (if applicable)

- [ ] Google Business Profile claimed
- [ ] NAP (Name, Address, Phone) consistent
- [ ] Local business schema markup
- [ ] Location pages for service areas
- [ ] Local citations on relevant directories

## Monitoring & Analytics

### Track These Metrics
- Organic traffic
- Keyword rankings
- Click-through rates (CTR)
- Bounce rate
- Time on page
- Conversion rates
- Core Web Vitals

### Tools to Use
- Google Search Console
- Google Analytics 4
- PageSpeed Insights
- Lighthouse
- Schema Markup Validator
- Mobile-Friendly Test

## Common SEO Mistakes to Avoid

❌ Duplicate title tags/meta descriptions
❌ Missing alt text on images
❌ Broken internal links
❌ Thin content (< 300 words)
❌ Keyword stuffing
❌ Multiple H1 tags per page
❌ Non-responsive design
❌ Slow page load times
❌ Missing schema markup
❌ Non-descriptive URLs

## Quick SEO Audit Checklist

Before publishing any page:

1. ✅ Unique, keyword-optimized title tag (50-60 chars)
2. ✅ Compelling meta description (150-160 chars)
3. ✅ Single H1 with target keyword
4. ✅ Logical heading hierarchy (H2, H3, etc.)
5. ✅ All images have alt text
6. ✅ Internal links with descriptive anchor text
7. ✅ Schema markup appropriate for page type
8. ✅ Mobile responsive
9. ✅ Fast load time (< 3 seconds)
10. ✅ Clean, descriptive URL

## Resources

- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Web.dev SEO Guide](https://web.dev/learn/seo/)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)
