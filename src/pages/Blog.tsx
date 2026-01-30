import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { usePublishedPosts, type BlogPost as BlogPostType } from "@/hooks/useBlogPosts";
import { Search, ArrowRight, Loader2 } from "lucide-react";

// Legacy posts for backwards compatibility (used if database is empty)
const legacyPosts = [
  {
    id: "legacy-1",
    slug: "90-day-revenue-system-installation",
    title: "The 90-Day Revenue System Installation: A Deployment Framework",
    excerpt: "Revenue system installation for Salesforce-driven businesses operates on fixed 90-day deployment cycles.",
    author: "Shannon Maguire",
    published_at: "2024-01-15",
    read_time: "12 min",
    category: "System Installation",
    tags: ["90-day sprint", "revenue systems"],
    featured: true,
    published: true,
  },
  {
    id: "legacy-2",
    slug: "salesforce-technical-debt-competitive-advantage",
    title: "Salesforce Technical Debt as Competitive Intelligence",
    excerpt: "Technical debt in Salesforce orgs encodes business evolution patterns that inform strategic decisions.",
    author: "Shannon Maguire",
    published_at: "2024-01-10",
    read_time: "10 min",
    category: "Salesforce Ecosystem",
    tags: ["technical debt", "Salesforce"],
    featured: false,
    published: true,
  },
  {
    id: "legacy-3",
    slug: "breaking-points-2-5m-arr",
    title: "What Breaks First in $2-5M ARR Companies",
    excerpt: "Between $2M and $5M ARR, every SaaS company hits the same breaking points.",
    author: "Shannon Maguire",
    published_at: "2024-01-08",
    read_time: "14 min",
    category: "Revenue Operations",
    tags: ["scaling", "breaking points"],
    featured: false,
    published: true,
  },
];

const Blog = () => {
  useScrollDepth();
  const [searchTerm, setSearchTerm] = useState("");
  
  const { data: dbPosts, isLoading } = usePublishedPosts();
  
  const allPosts = useMemo(() => {
    if (dbPosts && dbPosts.length > 0) {
      return dbPosts;
    }
    return legacyPosts as unknown as BlogPostType[];
  }, [dbPosts]);
  
  const filteredPosts = useMemo(() => {
    if (!searchTerm) return allPosts;
    return allPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allPosts, searchTerm]);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="The CWT Standard | CWT Studio" 
        description="Technical frameworks for revenue infrastructure deployment. Documented systems. Proven frameworks." 
        keywords={['systems architecture blog', 'revenue systems insights', 'Salesforce optimization']} 
      />
      
      <Breadcrumbs />
      
      {/* Header */}
      <Section className="border-b border-border">
        <div className="max-w-3xl">
          <div className="system-status mb-4">ARTICLES</div>
          <h1 className="heading-page mb-4">The CWT Standard</h1>
          <p className="text-description max-w-2xl">
            Technical frameworks for revenue infrastructure deployment. Documented from real implementations.
          </p>
          
          {/* Search */}
          <div className="mt-8 max-w-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Search articles..." 
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)} 
                className="pl-10 font-mono text-sm" 
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Loading */}
      {isLoading && (
        <Section>
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        </Section>
      )}

      {/* Articles */}
      {!isLoading && (
        <Section variant="muted" className="border-b border-border">
          <div className="max-w-3xl">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground font-mono">No articles found.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSearchTerm("")}
                >
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="space-y-0 divide-y divide-border">
                {filteredPosts.map((post) => (
                  <Link 
                    key={post.id} 
                    to={`/blog/${post.slug}`} 
                    className="block py-8 first:pt-0 last:pb-0 group"
                  >
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2 text-sm text-muted-foreground font-mono">
                          <span>{formatDate(post.published_at)}</span>
                          <span>•</span>
                          <span>{post.read_time}</span>
                        </div>
                        
                        <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        
                        <p className="text-muted-foreground leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                      
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-4">Get System Updates</h2>
          <p className="text-muted-foreground mb-8">
            New frameworks, case studies, and implementation guides.
          </p>
          <Button asChild size="lg">
            <Link to="/resources">
              Explore Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Blog;
