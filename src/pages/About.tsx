import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
import { EngagementTracker } from "@/components/EngagementTracker";
import { Linkedin, CheckCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import shannonHeadshot from "@/assets/shannon-headshot.jpg";
import { CTA, ROUTES, TIMELINES } from "@/lib/canonical-constants";

const About = () => {
  usePerformanceMonitoring();
  useScrollDepth();

  const operatingBeliefs = [
    {
      label: "Systems Over Tactics",
      description: "Revenue problems are architecture problems. Fix the structure, the metrics follow."
    },
    {
      label: "Complexity Is Information",
      description: "High tolerance for complexity. Low tolerance for incoherence. The goal is clarity, not simplicity."
    },
    {
      label: "Ownership Transfer",
      description: "Every engagement ends with you owning the system. No dependencies. No retainers required."
    }
  ];

  const approach = [
    "Design how your revenue systems should work. Architecture before implementation.",
    "Build the infrastructure in 90-day cycles. CRM, automation, reporting, integrations.",
    "Document and hand off. Your team runs it. We move on."
  ];

  const principlePoints = [
    {
      label: "Fixed Scope",
      description: "Defined deliverables, timeline boundaries, success criteria. Established before work begins."
    },
    {
      label: "Measurable Baselines",
      description: "Pipeline velocity, data quality, automation coverage, manual effort reduction. Measured against baseline."
    },
    {
      label: "Documented Handoff",
      description: "SOPs, field definitions, logic maps, admin protocols. Your team executes."
    }
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
                I design how revenue systems work. Then I build them.
              </p>

              <p className="text-description text-muted-foreground mb-4">
                Legal, compliance, cybersecurity, healthcare, B2B SaaS. Industries where system failure carries financial, legal, and operational consequences.
              </p>

              <p className="text-description text-muted-foreground mb-8">
                Most consultants optimize what exists. I architect what should exist. Fixed-scope implementations. 90-day cycles. Documented handoffs. You own everything when I leave.
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

      {/* Operating Beliefs */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-8">Operating Beliefs</h2>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {operatingBeliefs.map((belief, index) => (
              <div key={index} className="bg-card p-6 border-l-2 border-primary">
                <div className="text-label text-primary mb-3">{belief.label}</div>
                <p className="text-description text-muted-foreground">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Approach */}
      <Section className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-8">How I Work</h2>
          
          <div className="space-y-4">
            {approach.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-card p-6 border-l-2 border-accent">
                <span className="text-label text-accent font-mono">{String(index + 1).padStart(2, '0')}</span>
                <p className="text-description text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 90-Day Cycles */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-8">90-Day Cycles</h2>

          <p className="text-description text-muted-foreground mb-10">
            Every engagement operates on 90-day delivery cycles. Forces prioritization. Eliminates scope creep. Produces measurable outcomes within a fiscal quarter.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {principlePoints.map((point, index) => (
              <div key={index} className="bg-card p-6 border-l-2 border-primary">
                <div className="text-label text-primary mb-3">
                  {point.label}
                </div>
                <p className="text-description text-muted-foreground">
                  {point.description}
                </p>
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
            5-minute self-assessment identifies your gaps. Then book our {TIMELINES.assessment} Infrastructure Assessment—complete diagnostic audit with 90-day roadmap.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConversionOptimizedButton 
              to={ROUTES.assessment}
              ctaName="About - Free Health Check" 
              location="About CTA Section"
              size="lg"
            >
              {CTA.takeHealthCheck}
            </ConversionOptimizedButton>
            <ConversionOptimizedButton 
              to={ROUTES.proof}
              ctaName="About - View Proof" 
              location="About CTA Section" 
              variant="outline"
              showArrow={false}
              size="lg"
            >
              {CTA.seeProof}
            </ConversionOptimizedButton>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
