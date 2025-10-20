import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import analytics from "@/lib/analytics";

interface IndustryLandingProps {
  industry: {
    name: string;
    tagline: string;
    description: string;
    metaDescription: string;
  };
  painPoints: string[];
  solutions: {
    title: string;
    description: string;
    metrics?: string;
  }[];
  caseStudy?: {
    company: string;
    results: string[];
  };
  ctaText?: string;
}

/**
 * SEO-optimized industry landing page template
 * Reusable for SaaS, Healthcare, Financial Services, etc.
 */
export const IndustryLandingTemplate = ({
  industry,
  painPoints,
  solutions,
  caseStudy,
  ctaText = "Get Your Free Assessment",
}: IndustryLandingProps) => {
  
  const handleCTAClick = () => {
    analytics.trackCTAClick(
      ctaText,
      `${industry.name} Landing Page`,
      '/contact',
      'primary'
    );
  };

  return (
    <>
      <SEOHead
        title={`${industry.name} Revenue Operations | CWT Studio`}
        description={industry.metaDescription}
        canonicalUrl={`https://cwtstudio.com/industries/${industry.name.toLowerCase().replace(/\s+/g, '-')}`}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-authority/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                {industry.name} Solutions
              </Badge>
              
              <h1 className="heading-page mb-6">
                {industry.tagline}
              </h1>
              
              <p className="text-description text-muted-foreground mb-10 max-w-2xl mx-auto">
                {industry.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="cta-primary"
                  onClick={handleCTAClick}
                >
                  <Link to="/contact">
                    {ctaText}
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline"
                  className="btn-console-secondary"
                >
                  <Link to="/sample-report">View Sample Report</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-section text-center mb-4">
                Common Challenges in {industry.name}
              </h2>
              
              <p className="text-center text-muted-foreground mb-12 text-description">
                We understand the unique operational challenges you face
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {painPoints.map((point, index) => (
                  <Card key={index} className="p-6 hover-lift">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-foreground">{point}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="heading-section text-center mb-4">
                How We Help {industry.name} Companies Scale
              </h2>
              
              <p className="text-center text-muted-foreground mb-16 text-description max-w-2xl mx-auto">
                Proven frameworks tailored to your industry's specific requirements
              </p>
              
              <div className="space-y-8">
                {solutions.map((solution, index) => (
                  <Card key={index} className="p-8 hover-lift border-l-4 border-primary">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                      <div className="flex-1">
                        <h3 className="heading-subsection mb-3">
                          {solution.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {solution.description}
                        </p>
                      </div>
                      
                      {solution.metrics && (
                        <div className="bg-success/10 px-6 py-4 rounded-lg min-w-[200px]">
                          <p className="font-mono font-bold text-foreground text-center">
                            {solution.metrics}
                          </p>
                          <p className="text-xs text-muted-foreground text-center mt-1">
                            Average improvement
                          </p>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Study (if provided) */}
        {caseStudy && (
          <section className="py-20 bg-authority text-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <Badge className="mb-6 bg-white/10 text-white border-white/20">
                  Success Story
                </Badge>
                
                <h2 className="heading-section mb-8 text-white">
                  How {caseStudy.company} Transformed Their Revenue Operations
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" aria-hidden="true" />
                      <p className="text-white/90">{result}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline"
                    className="btn-console text-white border-white hover:bg-white hover:text-authority"
                  >
                    <Link to="/proof">View More Case Studies</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-section mb-6">
                Ready to Optimize Your Revenue Operations?
              </h2>
              
              <p className="text-description text-muted-foreground mb-10">
                Schedule a free 30-minute consultation to discuss your specific challenges
                and how we can help you build scalable revenue systems.
              </p>
              
              <Button 
                asChild 
                size="lg" 
                className="cta-primary"
                onClick={handleCTAClick}
              >
                <Link to="/contact">
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              
              <p className="text-sm text-muted-foreground mt-6">
                No commitment required • Typical response time: 24 hours
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IndustryLandingTemplate;
