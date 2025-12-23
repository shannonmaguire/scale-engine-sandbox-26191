import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
import { EngagementTracker } from "@/components/EngagementTracker";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import shannonHeadshot from "@/assets/shannon-headshot.jpg";
import { CTA, ROUTES } from "@/lib/canonical-constants";

const About = () => {
  usePerformanceMonitoring();
  useScrollDepth();

  const rulesOfEngagement = [
    "Assessment before Sprint.",
    "Fixed scope. No hourly.",
    "90-day cycles. Not open-ended retainers.",
    "You own everything when I leave."
  ];

  return (
    <div className="min-h-screen">
      <EngagementTracker />
      <SEOHead 
        title="About | CWT Studio" 
        description="Shannon Maguire designs and builds revenue systems for regulated and high-trust industries where system failure carries financial, legal, and compliance consequences." 
        keywords={[
          'about CWT Studio', 
          'revenue infrastructure', 
          'system architect', 
          'Shannon Maguire',
          'regulated industries'
        ]}
        includeOrganizationSchema={true}
        personSchema={{
          name: 'Shannon Maguire',
          jobTitle: 'Founder & Revenue Systems Architect',
          description: 'Revenue systems architect specializing in legal, compliance, cybersecurity, healthcare, and B2B SaaS. Fixed-scope implementations, 90-day cycles, documented handoffs.',
          sameAs: ['https://www.linkedin.com/in/shannonmaguire'],
          image: 'https://cwtstudio.com/assets/shannon-headshot.jpg'
        }}
      />
      
      <Breadcrumbs />
      
      {/* Founder Section */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <div className="grid md:grid-cols-[240px,1fr] gap-12 items-start">
            {/* Photo */}
            <div>
              <img 
                src={shannonHeadshot} 
                alt="Shannon Maguire, Founder & Revenue Systems Architect" 
                className="w-full aspect-[3/4] object-cover object-top border border-border"
              />
              
              <Button asChild variant="outline" size="sm" className="mt-6 w-full">
                <a 
                  href="https://www.linkedin.com/in/shanmag/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
            </div>

            {/* Bio */}
            <div>
              <h1 className="heading-section mb-2">Shannon Maguire</h1>
              <p className="text-label text-muted-foreground mb-8">
                Founder & Revenue Systems Architect
              </p>

              <p className="text-xl text-foreground mb-6 leading-relaxed">
                Revenue systems architect. Design and implementation for regulated industries.
              </p>

              <p className="text-description text-muted-foreground mb-4">
                Legal, compliance, cybersecurity, healthcare, B2B SaaS. Industries where system failure carries financial, legal, and operational consequences.
              </p>

              <p className="text-description text-muted-foreground mb-8">
                Architecture before implementation. Fixed-scope engagements. 90-day cycles. Documented handoffs. You own everything when I leave.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div>
                  <div className="text-label text-primary mb-1">42+</div>
                  <div className="text-sm text-muted-foreground">Deployments</div>
                </div>
                <div>
                  <div className="text-label text-primary mb-1">8+ Years</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </div>
                <div>
                  <div className="text-label text-primary mb-1">5</div>
                  <div className="text-sm text-muted-foreground">Industries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Rules of Engagement */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-8">Rules of Engagement</h2>

          <div className="space-y-4">
            {rulesOfEngagement.map((rule, index) => (
              <div key={index} className="flex items-start gap-4 bg-card p-6 border-l-2 border-primary">
                <span className="text-label text-primary font-mono">{String(index + 1).padStart(2, '0')}</span>
                <p className="text-description text-foreground">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Partner Network */}
      <Section className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-8">Partner Network</h2>

          <p className="text-description text-muted-foreground mb-10">
            CWT Studio leads strategy and architecture. CloudRoute delivers Salesforce implementation. Single contract, unified accountability.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 border-l-2 border-primary">
              <div className="text-label text-primary mb-3">CWT Studio</div>
              <div className="space-y-2 text-description text-muted-foreground">
                <div>Revenue operations strategy</div>
                <div>Process design</div>
                <div>Automation architecture</div>
              </div>
            </div>

            <div className="bg-card p-6 border-l-2 border-accent">
              <div className="text-label text-accent mb-3">CloudRoute</div>
              <div className="space-y-2 text-description text-muted-foreground">
                <div>Salesforce implementation</div>
                <div>Platform configuration</div>
                <div>Integration engineering</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-6">Start With Free Health Check</h2>
          <p className="text-description text-muted-foreground mb-10">
            5-minute self-assessment surfaces current state.
          </p>

          <ConversionOptimizedButton 
            to={ROUTES.assessment}
            ctaName="About - Free Health Check" 
            location="About CTA Section"
            size="lg"
          >
            {CTA.takeHealthCheck}
          </ConversionOptimizedButton>
        </div>
      </Section>
    </div>
  );
};

export default About;
