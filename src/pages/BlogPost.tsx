import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Share2, Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { NinetyDaySystemArticle } from "@/components/blog/NinetyDaySystemArticle";
import { SalesforceTechnicalDebtArticle } from "@/components/blog/SalesforceTechnicalDebtArticle";
import { BreakagePointsArticle } from "@/components/blog/BreakagePointsArticle";

// Sample blog posts data (in production, this would come from a CMS or API)
const blogPosts = [
  {
    id: 1,
    slug: "90-day-revenue-system-installation",
    title: "The 90-Day Revenue System Installation: A Deployment Framework",
    excerpt: "How we install documented, repeatable revenue systems for Salesforce-driven businesses in 90 days. No 18-month transformation projects. Just measurable outcomes and operational leverage.",
    author: "Shannon Maguire",
    publishedAt: "2024-01-15",
    readTime: "12 min read",
    category: "System Installation",
    tags: ["90-day sprint", "revenue systems", "implementation", "frameworks"],
    featured: true
  },
  {
    id: 2,
    slug: "salesforce-technical-debt-competitive-advantage",
    title: "Why Salesforce Technical Debt Is Actually a Competitive Advantage",
    excerpt: "Most Salesforce orgs are messy. That's not a bug — it's an opportunity. How technical debt becomes your edge when you have the right cleanup framework.",
    author: "Shannon Maguire",
    publishedAt: "2024-01-10",
    readTime: "10 min read",
    category: "Salesforce Ecosystem",
    tags: ["technical debt", "Salesforce", "competitive advantage", "cleanup"],
    featured: false
  },
  {
    id: 3,
    slug: "breaking-points-2-5m-arr",
    title: "What Breaks First in $2-5M ARR Companies",
    excerpt: "Between $2M and $5M ARR, every SaaS company hits the same breaking points. Not because they're bad at execution—because manual processes that worked at $500K become systemic bottlenecks at scale.",
    author: "Shannon Maguire",
    publishedAt: "2024-01-08",
    readTime: "14 min read",
    category: "Revenue Operations",
    tags: ["scaling", "breaking points", "infrastructure", "operations"],
    featured: false
  },
  {
    id: 4,
    slug: "revenue-operations-automation-playbook",
    title: "The Revenue Operations Automation Playbook",
    excerpt: "Stop treating automation like a nice-to-have. Learn how to build automated revenue operations that scale with your business and deliver predictable outcomes.",
    author: "Shannon Maguire",
    publishedAt: "2024-01-06",
    readTime: "15 min read",
    category: "Revenue Operations",
    tags: ["automation", "RevOps", "scalability", "playbook"],
    featured: false
  },
  {
    id: 5,
    slug: "data-migration-without-chaos",
    title: "Data Migration Without the Chaos: A Structured Approach",
    excerpt: "Data migrations fail because teams skip the infrastructure work. Here's how to move data between systems without losing weekends or your sanity.",
    author: "Shannon Maguire",
    publishedAt: "2024-01-05",
    readTime: "11 min read",
    category: "Data Engineering",
    tags: ["data migration", "infrastructure", "systems", "methodology"],
    featured: false
  },
  {
    id: 6,
    slug: "fractional-cto-when-and-why",
    title: "Fractional CTO: When Your Business Needs Strategic Tech Leadership",
    excerpt: "You don't need a full-time CTO to solve technical debt and build systems. Here's when fractional technical leadership makes sense and how to make it work.",
    author: "Shannon Maguire",
    publishedAt: "2024-01-03",
    readTime: "9 min read",
    category: "Leadership",
    tags: ["fractional CTO", "technical leadership", "strategy", "consulting"],
    featured: false
  },
  {
    id: 7,
    slug: "api-integration-patterns-that-scale",
    title: "API Integration Patterns That Actually Scale",
    excerpt: "Most API integrations break under load. Learn the architectural patterns that keep your integrations running smoothly as you grow from dozens to millions of requests.",
    author: "Shannon Maguire",
    publishedAt: "2023-12-28",
    readTime: "13 min read",
    category: "System Architecture",
    tags: ["API", "integrations", "scalability", "architecture"],
    featured: false
  },
  {
    id: 8,
    slug: "salesforce-implementation-mistakes",
    title: "The 5 Most Expensive Salesforce Implementation Mistakes",
    excerpt: "Years of cleanup work traces back to five preventable mistakes made during implementation. Here's what they are and how to avoid them.",
    author: "Shannon Maguire",
    publishedAt: "2023-12-22",
    readTime: "10 min read",
    category: "Salesforce Ecosystem",
    tags: ["Salesforce", "implementation", "mistakes", "best practices"],
    featured: false
  },
  {
    id: 9,
    slug: "building-business-intelligence-infrastructure",
    title: "Building Business Intelligence That People Actually Use",
    excerpt: "BI dashboards fail when they're built backward. Start with the decisions you need to make, then build the data pipeline to support them.",
    author: "Shannon Maguire",
    publishedAt: "2023-12-18",
    readTime: "14 min read",
    category: "Business Intelligence",
    tags: ["BI", "data analytics", "decision making", "infrastructure"],
    featured: false
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Render the actual blog content based on slug
  const renderBlogContent = () => {
    if (slug === "90-day-revenue-system-installation") {
      return <NinetyDaySystemArticle />;
    }
    
    if (slug === "salesforce-technical-debt-competitive-advantage") {
      return <SalesforceTechnicalDebtArticle />;
    }

    if (slug === "breaking-points-2-5m-arr") {
      return <BreakagePointsArticle />;
    }
    
    // Default fallback for other posts
    return (
      <div className="prose-blog">
        <p className="text-lg text-foreground/80 leading-relaxed mb-6">
          {post.excerpt}
        </p>
        <p className="text-foreground/90 leading-relaxed">
          Full article content coming soon...
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${post.title} | CWT Studio Insights`}
        description={post.excerpt}
        keywords={[...post.tags, 'revenue systems blog', 'backend infrastructure insights']}
        ogImage="https://cwtstudio.com/og-image.jpg"
        canonicalUrl={`https://cwtstudio.com/blog/${post.slug}`}
      />
      
      {/* Article Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          author: {
            '@type': 'Person',
            name: post.author
          },
          datePublished: post.publishedAt,
          publisher: {
            '@type': 'Organization',
            name: 'CWT Studio',
            logo: {
              '@type': 'ImageObject',
              url: 'https://cwtstudio.com/favicon.ico'
            }
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://cwtstudio.com/blog/${post.slug}`
          },
          keywords: post.tags.join(', ')
        })}
      </script>
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-6 py-4">
          <Button asChild variant="ghost" size="sm">
            <Link to="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-20 max-w-3xl">
            <div className="flex flex-wrap gap-3 mb-10">
              <Badge variant="outline" className="font-mono border-2 border-primary text-primary px-4 py-1.5 text-sm">
                {post.category}
              </Badge>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-mono text-xs px-3 py-1.5">
                  #{tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="font-mono font-bold text-foreground mb-10 leading-[1.1]"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', letterSpacing: '-0.02em' }}>
              {post.title}
            </h1>
            
            <p className="text-foreground/70 mb-12 leading-relaxed font-medium"
               style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', maxWidth: '65ch' }}>
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground font-mono pb-10 border-b border-border">
              <div className="flex items-center gap-2.5">
                <User className="h-5 w-5" />
                <span className="font-semibold text-foreground">{post.author}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="h-5 w-5" />
                <time>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</time>
              </div>
              <div className="flex items-center gap-2.5">
                <BookOpen className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="article-body">
            {renderBlogContent()}
          </div>

          {/* Article Footer */}
          <footer className="mt-24 max-w-3xl">
            {/* Main CTA Section */}
            <div className="border border-border rounded-lg p-10 sm:p-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="font-mono font-bold text-2xl sm:text-3xl text-foreground mb-4 leading-tight">
                    Have questions about this framework?
                  </h3>
                  <p className="text-foreground/70 text-base sm:text-lg leading-relaxed">
                    Let's discuss how this could work for your organization.
                  </p>
                </div>
                
                <Button asChild size="lg" className="flex-shrink-0 h-12 px-8">
                  <Link to="/contact">
                    Discuss This Topic
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Share Section */}
            <div className="mt-8 pt-8 border-t border-border/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground font-mono uppercase tracking-wider">Share Article</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="hover:bg-primary/10 hover:text-primary h-10 w-10 p-0 transition-all border border-border/50 hover:border-primary/30"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </article>

      {/* Related Articles */}
      <section className="border-t border-border">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="font-mono font-bold text-foreground text-3xl mb-3">
                More Revenue Systems Insights
              </h2>
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {blogPosts
                .filter(p => p.slug !== slug)
                .slice(0, 3)
                .map((article) => (
                  <Link
                    key={article.id}
                    to={`/blog/${article.slug}`}
                    className="group bg-background border border-border rounded-lg p-6 hover:border-primary/30 hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="font-mono text-xs">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground font-mono">
                        {article.readTime}
                      </span>
                    </div>
                    
                    <h3 className="font-mono font-bold text-foreground text-xl mb-3 group-hover:text-primary transition-colors leading-tight">
                      {article.title}
                    </h3>
                    
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                      <Calendar className="h-4 w-4" />
                      <time>{new Date(article.publishedAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</time>
                    </div>
                  </Link>
                ))}
            </div>

            {/* View All CTA */}
            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="px-8 h-12">
                <Link to="/blog">
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Book Assessment CTA */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-5 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm font-mono uppercase tracking-wider text-primary font-bold">Next Step</span>
            </div>
            
            <h2 className="font-mono font-bold text-foreground mb-8 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.02em' }}>
              Ready to Install Your Own Revenue System?
            </h2>
            <p className="text-foreground/70 mb-12 leading-relaxed max-w-2xl mx-auto font-medium"
                style={{ fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)' }}>
              Every system starts with a deep technical assessment. Book yours in 48 hours and receive a prioritized 90-day roadmap tailored to your infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-base h-14 px-10 shadow-xl hover:shadow-2xl transition-all">
                <Link to="/assessment">
                  Start Technical Assessment
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base h-14 px-10 border-2 hover:bg-background/80 backdrop-blur transition-all">
                <Link to="/sample-report">
                  View Sample Report
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
