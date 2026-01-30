import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { StandardCard } from "@/components/ui/standard-card";
import SEOHead from "@/components/SEOHead";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { usePublishedPosts, type BlogPost as BlogPostType } from "@/hooks/useBlogPosts";
import { Search, Clock, ArrowRight, Filter, Loader2 } from "lucide-react";

// Legacy posts for backwards compatibility (used if database is empty)
const legacyPosts = [
  {
    id: "legacy-1",
    slug: "90-day-revenue-system-installation",
    title: "The 90-Day Revenue System Installation: A Deployment Framework",
    excerpt: "Revenue system installation for Salesforce-driven businesses operates on fixed 90-day deployment cycles. The framework produces documented processes, configured infrastructure, and operator training within defined constraints that prevent scope expansion.",
    author: "Shannon Maguire",
    published_at: "2024-01-15",
    read_time: "12 min read",
    category: "System Installation",
    tags: ["90-day sprint", "revenue systems", "implementation", "frameworks"],
    featured: true,
    published: true,
  },
  {
    id: "legacy-2",
    slug: "salesforce-technical-debt-competitive-advantage",
    title: "Salesforce Technical Debt as Competitive Intelligence",
    excerpt: "Technical debt in Salesforce orgs encodes business evolution patterns that inform strategic decisions. The cleanup framework extracts operational intelligence from accumulated configuration layers before refactoring infrastructure.",
    author: "Shannon Maguire",
    published_at: "2024-01-10",
    read_time: "10 min read",
    category: "Salesforce Ecosystem",
    tags: ["technical debt", "Salesforce", "competitive advantage", "cleanup"],
    featured: false,
    published: true,
  },
  {
    id: "legacy-3",
    slug: "breaking-points-2-5m-arr",
    title: "What Breaks First in $2-5M ARR Companies",
    excerpt: "Between $2M and $5M ARR, every SaaS company hits the same breaking points. Not because they're bad at execution—because manual processes that worked at $500K become systemic bottlenecks at scale.",
    author: "Shannon Maguire",
    published_at: "2024-01-08",
    read_time: "14 min read",
    category: "Revenue Operations",
    tags: ["scaling", "breaking points", "infrastructure", "operations"],
    featured: false,
    published: true,
  },
];

const categories = ["All", "Revenue Infrastructure", "System Installation", "Fractional Ops", "Salesforce Ecosystem", "Revenue Operations", "Resources"];

const Blog = () => {
  useScrollDepth();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const { data: dbPosts, isLoading, error } = usePublishedPosts();
  
  // Use database posts if available, otherwise fall back to legacy
  const allPosts = useMemo(() => {
    if (dbPosts && dbPosts.length > 0) {
      return dbPosts;
    }
    // Return legacy posts with proper typing
    return legacyPosts as unknown as BlogPostType[];
  }, [dbPosts]);
  
  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (post.tags || []).some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allPosts, searchTerm, selectedCategory]);
  
  const featuredPost = allPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatShortDate = (dateString: string | null) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="The CWT Standard | CWT Studio" 
        description="Documented systems. Proven frameworks. Zero abstractions. Systems architecture insights for high-trust industries." 
        keywords={['systems architecture blog', 'revenue systems insights', 'Salesforce optimization frameworks', 'system installation guides', 'revenue operations insights']} 
      />
      
      {/* Page Header */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-12">
          <h1 className="heading-page mb-4">
            The CWT Standard
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Technical frameworks for revenue infrastructure deployment, documented from real deployment records and field implementation.
          </p>
        </div>
      </section>

      {/* Improved Navigation */}
      <section className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-primary" />
                <span className="font-mono text-sm font-semibold text-foreground">Filter:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button 
                    key={category} 
                    variant={selectedCategory === category ? "default" : "outline"} 
                    size="sm" 
                    onClick={() => setSelectedCategory(category)} 
                    className="font-mono text-xs uppercase tracking-wide"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="relative w-full lg:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <Input 
                type="text" 
                placeholder="Search articles..." 
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)} 
                className="pl-10 w-full lg:w-80 font-mono text-sm" 
                aria-label="Search blog articles" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Loading State */}
      {isLoading && (
        <div className="container mx-auto px-6 py-16 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="container mx-auto px-6 py-16 text-center">
          <p className="text-muted-foreground">Failed to load posts. Showing cached content.</p>
        </div>
      )}

      {/* Featured Article */}
      {!isLoading && featuredPost && selectedCategory === "All" && !searchTerm && (
        <section className="container mx-auto px-6 py-16">
          <div className="mb-8">
            <Badge variant="default" className="font-mono text-sm uppercase tracking-wide px-4 py-1.5">
              Featured Article
            </Badge>
          </div>
          
          <StandardCard variant="bordered" className="max-w-6xl mx-auto p-8 md:p-12 hover:shadow-lg transition-shadow border-primary/20">
            <article>
              <div className="grid lg:grid-cols-5 gap-10">
                <div className="lg:col-span-3">
                  <header className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Badge variant="secondary" className="font-mono text-sm uppercase tracking-wide px-3 py-1.5">
                        {featuredPost.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">•</span>
                      <time className="text-sm font-mono text-muted-foreground">
                        {formatDate(featuredPost.published_at)}
                      </time>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground leading-tight mb-6 hover:text-primary transition-colors cursor-pointer">
                      <Link to={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 text-base text-muted-foreground mb-10 pb-6 border-b border-border/50">
                      <span className="font-semibold text-foreground">By {featuredPost.author}</span>
                      <span className="text-border">•</span>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>{featuredPost.read_time}</span>
                      </div>
                    </div>
                    
                    <Button asChild size="lg" className="font-mono group">
                      <Link to={`/blog/${featuredPost.slug}`} className="flex items-center gap-2">
                        Read Full Article
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </Link>
                    </Button>
                  </header>
                </div>
                
                <aside className="lg:col-span-2">
                  <div className="space-y-4">
                    <h3 className="font-mono text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Topics Covered
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {(featuredPost.tags || []).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs font-normal hover:bg-accent/50 transition-colors">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </article>
          </StandardCard>
        </section>
      )}

      {/* Editorial Sections */}
      {!isLoading && (
        <section className="container mx-auto px-6 py-16">
          {/* Section Groups by Category */}
          {categories.filter(cat => cat !== 'All').map(category => {
            const categoryPosts = regularPosts.filter(post => 
              selectedCategory === 'All' || selectedCategory === category
            ).filter(post => post.category === category);
            
            if (categoryPosts.length === 0) return null;
            
            return (
              <div key={category} className="mb-20 last:mb-0">
                {/* Section Header */}
                <div className="mb-10">
                  <div className="flex items-center gap-6">
                    <h2 className="text-3xl md:text-4xl font-mono font-black text-foreground uppercase tracking-wide">
                      {category}
                    </h2>
                    <div className="h-1 bg-gradient-to-r from-primary/50 to-transparent flex-1 rounded-full"></div>
                    <span className="font-mono text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {categoryPosts.length} {categoryPosts.length === 1 ? 'Article' : 'Articles'}
                    </span>
                  </div>
                </div>
                
                {/* Articles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryPosts.map((post) => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
                      <StandardCard equalHeight variant="default" className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                        <article className="h-full flex flex-col">
                          <header className="flex-1">
                            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/30">
                              <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold whitespace-nowrap bg-primary/10 px-2 py-1 rounded">
                                {post.category}
                              </span>
                              <span className="text-sm text-muted-foreground">•</span>
                              <time className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                                {formatShortDate(post.published_at)}
                              </time>
                            </div>
                            
                            <h3 className="font-mono font-bold text-xl md:text-2xl text-foreground leading-tight mb-4 group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            
                            <p className="text-base text-foreground leading-relaxed mb-6 line-clamp-3">
                              {post.excerpt}
                            </p>
                          </header>
                          
                          <footer className="flex flex-col gap-4 pt-6 border-t border-border/50 mt-auto">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                              <span className="whitespace-nowrap font-medium">By {post.author}</span>
                              <span className="text-border">•</span>
                              <div className="flex items-center gap-2 whitespace-nowrap">
                                <Clock className="h-4 w-4 flex-shrink-0 text-primary" />
                                <span>{post.read_time}</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {(post.tags || []).slice(0, 3).map(tag => (
                                <span key={tag} className="text-xs font-mono text-muted-foreground uppercase tracking-wider whitespace-nowrap bg-muted/50 px-2 py-1 rounded">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center gap-2 text-sm font-mono font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap mt-2">
                              Continue Reading
                              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </footer>
                        </article>
                      </StandardCard>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          
          {/* Show filtered results */}
          {(selectedCategory !== 'All' || searchTerm) && regularPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground font-mono">No articles found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </section>
      )}

      {/* Subscribe CTA */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-6">
              Get Revenue System Updates
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe for new frameworks, case studies, and implementation guides. No spam, just documented systems.
            </p>
            <Button asChild size="lg" className="font-mono">
              <Link to="/resources">
                Explore Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
