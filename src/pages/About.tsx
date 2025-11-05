import { Button } from "@/components/ui/button";
import { StandardCard } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
import { EngagementTracker } from "@/components/EngagementTracker";
import { Linkedin } from "lucide-react";
import { ICON_SIZES, ICON_STROKE } from "@/lib/icon-config";
import { Breadcrumbs } from "@/components/Breadcrumbs";
const About = () => {
  usePerformanceMonitoring();
  useScrollDepth();
  return <div className="min-h-screen">
      <EngagementTracker />
      <SEOHead 
        title="About CWT Studio | Backend Revenue Systems Architects" 
        description="We install revenue infrastructure for high-trust industries. 90-day implementations with documented systems and measurable outcomes." 
        keywords={[
          'about CWT Studio', 
          'backend revenue systems', 
          'revenue infrastructure architects', 
          'Salesforce optimization experts', 
          'high-trust industries',
          'Shannon Maguire'
        ]} 
      />
      
      <Breadcrumbs />
      
      <Section>
        {/* Hero */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="heading-page mb-6">
            Backend Revenue Systems
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Revenue infrastructure for regulated industries where system failures carry direct financial and compliance consequences. Fixed-scope implementations, 90-day delivery cycles.
          </p>
        </div>

        {/* Shannon */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="border border-border rounded-lg p-8">
            <h2 className="text-2xl font-mono font-bold mb-2">Shannon Maguire</h2>
            <p className="text-primary font-mono mb-6">Founder</p>
            
            <p className="text-foreground leading-relaxed mb-6">
              Revenue systems architect specializing in legal, compliance, cybersecurity, and B2B SaaS. Builds infrastructure engineered for scale, load tolerance, and documented handoff.
            </p>
            
            <Button asChild variant="outline" size="sm">
              <a 
                href="https://www.linkedin.com/in/shanmag/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Linkedin size={ICON_SIZES.small} strokeWidth={ICON_STROKE.default} className="mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* How We Work */}
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-subsection mb-6">How We Work</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-mono font-semibold mb-4">What We Do</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Audit current systems and find what breaks under load</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Install fixes in 90-day cycles with measurable outcomes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Work directly with founders—no account managers</span>
                </li>
              </ul>
            </div>
            
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-mono font-semibold mb-4">What We Don't Do</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>18-month transformation roadmaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>Strategy decks without implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>Generic frameworks that ignore your constraints</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Who This Is For */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-subsection mb-8 text-center">You're a Fit If</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-l-4 border-primary bg-card rounded-r-lg p-6">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Revenue growing but systems breaking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Need fixes in weeks, not quarters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Salesforce exists but isn't delivering value</span>
                </li>
              </ul>
            </div>
            
            <div className="border-l-4 border-muted-foreground bg-card rounded-r-lg p-6">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1">✗</span>
                  <span>Want 18-month transformation plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✗</span>
                  <span>Need strategy consulting only</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✗</span>
                  <span>Systems working—just optimizing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <div className="system-status mb-6">
            READY TO START
          </div>
          <h2 className="heading-section mb-8">Infrastructure Implementation</h2>
          <p className="text-description text-lg mb-10">
            Revenue systems engineered for load tolerance and operational continuity. Documented for transfer, measured against performance baselines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConversionOptimizedButton 
              to="/assessment" 
              ctaName="About - Start Assessment" 
              location="About CTA Section"
              size="lg"
            >
              Start Your Assessment
            </ConversionOptimizedButton>
            <ConversionOptimizedButton 
              to="/proof" 
              ctaName="About - View Proof" 
              location="About CTA Section" 
              variant="outline"
              size="lg"
            >
              View Proof
            </ConversionOptimizedButton>
          </div>
        </div>
      </Section>
    </div>;
};
export default About;
