import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { StandardCard } from "@/components/ui/standard-card";
import SEOHead from "@/components/SEOHead";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { Search, Clock, ArrowRight, TrendingUp, Filter } from "lucide-react";

// Sample blog posts data - Real content structure
const blogPosts = [{
  id: 1,
  slug: "90-day-revenue-system-installation",
  title: "The 90-Day Revenue System Installation: A Deployment Framework",
  excerpt: "Revenue system installation for Salesforce-driven businesses operates on fixed 90-day deployment cycles. The framework produces documented processes, configured infrastructure, and operator training within defined constraints that prevent scope expansion.",
  content: "Revenue systems installation requires...",
  author: "Shannon Maguire",
  publishedAt: "2024-01-15",
  readTime: "12 min read",
  category: "System Installation",
  tags: ["90-day sprint", "revenue systems", "implementation", "frameworks"],
  featured: true
}, {
  id: 2,
  slug: "salesforce-technical-debt-competitive-advantage",
  title: "Salesforce Technical Debt as Competitive Intelligence",
  excerpt: "Technical debt in Salesforce orgs encodes business evolution patterns that inform strategic decisions. The cleanup framework extracts operational intelligence from accumulated configuration layers before refactoring infrastructure.",
  content: "Technical debt in Salesforce...",
  author: "Shannon Maguire",
  publishedAt: "2024-01-10",
  readTime: "10 min read",
  category: "Salesforce Ecosystem",
  tags: ["technical debt", "Salesforce", "competitive advantage", "cleanup"],
  featured: false
}, {
  id: 3,
  slug: "revenue-operations-automation-playbook",
  title: "Revenue Operations Automation Architecture",
  excerpt: "Automated revenue operations require architectural planning that prioritizes process validation before implementation. The playbook documents automation patterns that maintain performance under increased transaction volume.",
  content: "Automation strategies...",
  author: "Shannon Maguire",
  publishedAt: "2024-01-08",
  readTime: "15 min read",
  category: "Revenue Infrastructure",
  tags: ["automation", "RevOps", "scalability", "playbook"],
  featured: false
}, {
  id: 4,
  slug: "data-migration-without-chaos",
  title: "Data Migration Infrastructure Framework",
  excerpt: "Data migration failures trace to insufficient infrastructure preparation before execution. The structured approach sequences validation testing, schema mapping, and rollback protocols across staged deployment phases.",
  content: "Data migration framework...",
  author: "Shannon Maguire",
  publishedAt: "2024-01-05",
  readTime: "11 min read",
  category: "System Installation",
  tags: ["data migration", "infrastructure", "systems", "methodology"],
  featured: false
}, {
  id: 5,
  slug: "fractional-cto-when-and-why",
  title: "Fractional Technical Leadership: Deployment Conditions",
  excerpt: "Fractional CTO engagement addresses technical infrastructure gaps when full-time executive hiring exceeds operational requirements. The model provides strategic architecture planning and system oversight without permanent overhead expansion.",
  content: "Fractional leadership...",
  author: "Shannon Maguire",
  publishedAt: "2024-01-03",
  readTime: "9 min read",
  category: "Fractional Ops",
  tags: ["fractional CTO", "technical leadership", "strategy", "consulting"],
  featured: false
}, {
  id: 6,
  slug: "api-integration-patterns-that-scale",
  title: "API Integration Architecture for Volume Scaling",
  excerpt: "Integration architecture must account for transaction volume increases spanning multiple orders of magnitude. The documented patterns address rate limiting, error handling, and connection pooling before performance degradation occurs.",
  content: "API integration architecture...",
  author: "Shannon Maguire",
  publishedAt: "2023-12-28",
  readTime: "13 min read",
  category: "Revenue Infrastructure",
  tags: ["API", "integrations", "scalability", "architecture"],
  featured: false
}, {
  id: 7,
  slug: "salesforce-implementation-mistakes",
  title: "High-Cost Salesforce Implementation Errors",
  excerpt: "Implementation errors during initial Salesforce deployment create compounding technical debt that requires extensive remediation cycles. Analysis of cleanup projects identifies five recurring configuration decisions that generate the majority of downstream costs.",
  content: "Implementation best practices...",
  author: "Shannon Maguire",
  publishedAt: "2023-12-22",
  readTime: "10 min read",
  category: "Salesforce Ecosystem",
  tags: ["Salesforce", "implementation", "mistakes", "best practices"],
  featured: false
}, {
  id: 8,
  slug: "building-business-intelligence-infrastructure",
  title: "Business Intelligence Infrastructure Design",
  excerpt: "Business intelligence systems succeed when decision requirements inform data architecture rather than available metrics determining dashboard design. The framework maps operational decisions to required data sources before infrastructure implementation begins.",
  content: "BI infrastructure design...",
  author: "Shannon Maguire",
  publishedAt: "2023-12-18",
  readTime: "14 min read",
  category: "Revenue Infrastructure",
  tags: ["BI", "data analytics", "decision making", "infrastructure"],
  featured: false
}];
const categories = ["All", "Revenue Infrastructure", "System Installation", "Fractional Ops", "Salesforce Ecosystem"];
const Blog = () => {
  useScrollDepth();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) || post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);
  
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);
  return <div className="min-h-screen bg-background">
      <SEOHead title="The CWT Standard | CWT Studio" description="Documented systems. Proven frameworks. Zero abstractions. Learn how to install backend revenue systems for high-trust industries." keywords={['revenue systems blog', 'backend infrastructure insights', 'Salesforce optimization frameworks', 'system installation guides', 'revenue operations insights']} />
      
      {/* Coming Soon Banner */}
      
      
      {/* Page Header */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 tracking-widest uppercase">
              THE CWT STANDARD
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Technical frameworks for revenue infrastructure deployment, documented from real deployment records and field implementation.
            </p>
          </div>
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
                {categories.map(category => <Button key={category} variant={selectedCategory === category ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory(category)} className="font-mono text-xs uppercase tracking-wide">
                    {category}
                  </Button>)}
              </div>
            </div>
            
            <div className="relative w-full lg:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <Input type="text" placeholder="Search articles..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10 w-full lg:w-80 font-mono text-sm" aria-label="Search blog articles" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === "All" && !searchTerm && <section className="container mx-auto px-6 py-16">
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
                        {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
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
                        <span>{featuredPost.readTime}</span>
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
                  <div className="border border-border p-6 rounded-lg">
                    <h3 className="font-mono text-lg font-bold text-foreground mb-4">
                      Topics Covered
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag) => <Badge key={tag} variant="outline" className="text-sm font-medium px-3 py-2">
                          #{tag}
                        </Badge>)}
                    </div>
                  </div>
                </aside>
              </div>
            </article>
          </StandardCard>
        </section>}

      {/* Editorial Sections */}
      <section className="container mx-auto px-6 py-16">
        {/* Section Groups by Category */}
        {categories.filter(cat => cat !== 'All').map(category => {
        const categoryPosts = regularPosts.filter(post => selectedCategory === 'All' || selectedCategory === category).filter(post => post.category === category);
        if (categoryPosts.length === 0) return null;
        return <div key={category} className="mb-20 last:mb-0">
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
                {categoryPosts.map((post) => <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
                    <StandardCard equalHeight variant="default" className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                      <article className="h-full flex flex-col">
                        <header className="flex-1">
                          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/30">
                            <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold whitespace-nowrap bg-primary/10 px-2 py-1 rounded">
                              {post.category}
                            </span>
                            <span className="text-sm text-muted-foreground">•</span>
                            <time className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
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
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map(tag => <span key={tag} className="text-xs font-mono text-muted-foreground uppercase tracking-wider whitespace-nowrap bg-muted/50 px-2 py-1 rounded hover:bg-primary/10 hover:text-primary transition-colors">
                                #{tag}
                              </span>)}
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm font-mono font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap mt-2">
                            Continue Reading
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </footer>
                      </article>
                    </StandardCard>
                  </Link>)}
              </div>
            </div>;
        })}
        
        {/* Show all posts when filtering */}
        {(selectedCategory !== 'All' || searchTerm) && <div className="mb-20">
            <div className="mb-10">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-mono font-black text-foreground uppercase tracking-wide">
                  {searchTerm ? `Search Results for "${searchTerm}"` : selectedCategory}
                </h2>
                <div className="h-px bg-border flex-1"></div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map(post => <Link key={post.id} to={`/blog/${post.slug}`} className="group block fade-in-up">
                  <StandardCard equalHeight variant="default" className="h-full transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
                    <article className="h-full flex flex-col">
                      <header className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-sm font-mono uppercase tracking-wide text-primary font-bold whitespace-nowrap">
                            {post.category}
                          </span>
                          <span className="text-sm text-muted-foreground">|</span>
                          <time className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                          </time>
                        </div>
                        
                        <h3 className="font-mono font-semibold text-xl text-foreground leading-tight mb-4 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-base text-foreground leading-relaxed mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </header>
                      
                      <footer className="flex flex-col gap-4 pt-6 border-t border-border mt-auto">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                          <span className="whitespace-nowrap">By {post.author}</span>
                          <span className="text-border">•</span>
                          <div className="flex items-center gap-2 whitespace-nowrap">
                            <Clock className="h-4 w-4 flex-shrink-0" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map(tag => <span key={tag} className="text-sm font-mono text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                              #{tag}
                            </span>)}
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm font-mono font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          Read Article
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </footer>
                    </article>
                  </StandardCard>
                </Link>)}
            </div>
          </div>}

        {filteredPosts.length === 0 && <div className="text-center py-12 border-t border-border">
            <p className="text-muted-foreground font-mono italic">
              No articles found in our archives matching your search criteria.
            </p>
          </div>}
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-gradient-to-br from-muted/30 via-background to-muted/20 border-y border-border/50">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
              <Badge variant="outline" className="mb-6 font-mono text-xs uppercase tracking-widest border-primary/30 text-primary px-4 py-1.5">
                Newsletter
              </Badge>
              
              <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-4">
                Subscribe to The CWT Standard
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Get the latest revenue operations insights and frameworks delivered weekly to your inbox.
              </p>
              
              <div className="form-group-horizontal max-w-lg mx-auto mb-6">
                <Input type="email" placeholder="Your email address" className="flex-1 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background/80 backdrop-blur-sm" />
                <Button className="font-semibold whitespace-nowrap hover:shadow-lg transition-all">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Join <span className="font-bold text-primary">2,000+</span> professionals • Weekly insights • Unsubscribe anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-card via-background to-card border-y-2 border-primary/20">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 font-mono text-xs uppercase tracking-widest border-primary/30 text-primary px-4 py-1.5">
              Ready to Get Started?
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-mono font-bold text-foreground mb-6 leading-tight">
              Interested in Installing Your Own System?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Every system starts with a deep assessment. Book yours in 48 hours and get a prioritized 90-day roadmap tailored to your infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="font-mono group hover:shadow-lg transition-all text-base">
                <Link to="/assessment">
                  Start Assessment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-mono hover:bg-primary/10 hover:border-primary transition-all text-base">
                <Link to="/sample-report">
                  View Sample Report
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Blog;