import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { usePostBySlug, usePublishedPosts } from "@/hooks/useBlogPosts";
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { CTA, ROUTES } from "@/lib/canonical-constants";

// Legacy article components
import { NinetyDaySystemArticle } from "@/components/blog/NinetyDaySystemArticle";
import { SalesforceTechnicalDebtArticle } from "@/components/blog/SalesforceTechnicalDebtArticle";
import { BreakagePointsArticle } from "@/components/blog/BreakagePointsArticle";

const LEGACY_SLUGS = [
  "90-day-revenue-system-installation",
  "salesforce-technical-debt-competitive-advantage",
  "breaking-points-2-5m-arr",
];

const legacyPostsMetadata: Record<string, {
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
}> = {
  "90-day-revenue-system-installation": {
    title: "The 90-Day Revenue System Installation: A Deployment Framework",
    excerpt: "How we install documented, repeatable revenue systems for Salesforce-driven businesses in 90 days.",
    author: "Shannon Maguire",
    publishedAt: "2024-01-15",
    readTime: "12 min",
    category: "System Installation",
    tags: ["90-day sprint", "revenue systems"],
  },
  "salesforce-technical-debt-competitive-advantage": {
    title: "Why Salesforce Technical Debt Is Actually a Competitive Advantage",
    excerpt: "Most Salesforce orgs are messy. That's not a bug — it's an opportunity.",
    author: "Shannon Maguire",
    publishedAt: "2024-01-10",
    readTime: "10 min",
    category: "Salesforce Ecosystem",
    tags: ["technical debt", "Salesforce"],
  },
  "breaking-points-2-5m-arr": {
    title: "What Breaks First in $2-5M ARR Companies",
    excerpt: "Between $2M and $5M ARR, every SaaS company hits the same breaking points.",
    author: "Shannon Maguire",
    publishedAt: "2024-01-08",
    readTime: "14 min",
    category: "Revenue Operations",
    tags: ["scaling", "breaking points"],
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const isLegacySlug = slug && LEGACY_SLUGS.includes(slug);
  const { data: dbPost, isLoading } = usePostBySlug(isLegacySlug ? undefined : slug);
  const { data: allPosts } = usePublishedPosts();

  const legacyMeta = slug ? legacyPostsMetadata[slug] : null;
  
  const post = dbPost || (legacyMeta ? {
    title: legacyMeta.title,
    excerpt: legacyMeta.excerpt,
    author: legacyMeta.author,
    published_at: legacyMeta.publishedAt,
    read_time: legacyMeta.readTime,
    category: legacyMeta.category,
    tags: legacyMeta.tags,
    content: "",
    slug: slug!,
  } : null);

  if (!isLegacySlug && isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!post && !isLoading) {
    return <Navigate to="/blog" replace />;
  }

  if (!post) return null;

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
    if (dbPost?.content) {
      return <MarkdownRenderer content={dbPost.content} />;
    }
    return (
      <div className="prose-blog">
        <p className="text-muted-foreground leading-relaxed">
          {post.excerpt}
        </p>
      </div>
    );
  };

  const relatedPosts = allPosts?.filter(p => p.slug !== slug).slice(0, 3) || [];

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title={`${post.title} | CWT Studio`}
        description={post.excerpt}
        keywords={post.tags || []}
        canonicalUrl={`/blog/${slug}`}
        type="article"
        article={{
          publishedTime: post.published_at || undefined,
          author: post.author,
          section: post.category,
        }}
      />
      
      <Breadcrumbs />
      
      {/* Article Header */}
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

      {/* Article Content */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-3xl">
          {renderBlogContent()}
        </div>
      </Section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <Section className="border-b border-border">
          <div className="max-w-3xl">
            <div className="system-status mb-4">MORE ARTICLES</div>
            <h2 className="heading-section mb-8">Continue Reading</h2>

            <div className="space-y-0 divide-y divide-border">
              {relatedPosts.map((article) => (
                <Link
                  key={article.id}
                  to={`/blog/${article.slug}`}
                  className="block py-6 first:pt-0 last:pb-0 group"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-muted-foreground font-mono mb-2">
                        {article.read_time}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-4">Find Out What's Breaking</h2>
          <p className="text-muted-foreground mb-8">
            Every system starts with a deep technical assessment.
          </p>
          <ConversionOptimizedButton 
            to={ROUTES.assessment}
            ctaName="Blog Post - Book Assessment" 
            location="Blog Post CTA"
            size="lg"
          >
            {CTA.bookAssessment}
          </ConversionOptimizedButton>
        </div>
      </Section>
    </div>
  );
};

export default BlogPost;
