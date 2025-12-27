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
    { rule: "We assess before we build.", stake: "Starting without a diagnosis costs 3x more to fix." },
    { rule: "Fixed price, not hourly.", stake: "Hourly billing incentivizes slow work." },
    { rule: "90-day cycles max.", stake: "Long projects mask the fact that nothing's moving." },
    { rule: "You own everything.", stake: "No lock-in. No dependencies. You can fire us anytime." }
  ];

  return (
    <div className="min-h-screen">
      <EngagementTracker />
      <SEOHead 
        title="About Shannon Maguire | Revenue Systems Architect | CWT Studio" 
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
        faqSchema={[
          {
            question: 'Who is Shannon Maguire?',
            answer: 'Shannon Maguire is the founder and revenue systems architect at CWT Studio. She specializes in fixing broken sales systems for regulated industries including legal, healthcare, compliance, and B2B SaaS companies.'
          },
          {
            question: 'What industries does CWT Studio serve?',
            answer: 'CWT Studio specializes in legal tech, healthcare, compliance/cybersecurity, and B2B SaaS companies—industries where system failure carries real financial, legal, and compliance consequences.'
          },
          {
            question: 'How does CWT Studio work with clients?',
            answer: 'We assess before we build, use fixed pricing (not hourly), limit projects to 90-day cycles, and ensure complete ownership transfer. When we leave, you own everything with no vendor lock-in.'
          },
          {
            question: 'What is the relationship between CWT Studio and CloudRoute?',
            answer: 'CWT Studio handles revenue operations strategy, process design, and automation architecture. CloudRoute provides Salesforce implementation, platform configuration, and integration engineering. One contract, one team.'
          }
        ]}
      />
      
      <Breadcrumbs />
      
      {/* Founder Section */}
      <Section className="border-b border-border">
      <div className="max-w-4xl">
          <div className="system-status mb-8">FOUNDER</div>
          <div className="grid md:grid-cols-[240px,1fr] gap-8 md:gap-12 items-start">
            {/* Photo - LCP element with explicit dimensions for CLS prevention */}
            <div className="w-full max-w-[240px] mx-auto md:mx-0">
              <img 
                src={shannonHeadshot} 
                alt="Shannon Maguire, Founder & Revenue Systems Architect" 
                className="w-full aspect-[3/4] object-cover object-top border border-border"
                width={240}
                height={320}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              
              <Button asChild variant="outline" size="sm" className="mt-4 w-full">
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
                I fix broken sales systems. Mostly for industries where getting it wrong is expensive—legal, healthcare, compliance, SaaS.
              </p>

              <p className="text-description text-muted-foreground mb-4">
                System failures in these industries carry real consequences: missed compliance, lost deals, founders who can't step back.
              </p>

              <p className="text-description text-muted-foreground mb-8">
                I assess before I build. Fixed-price work. 90-day max projects. Everything gets documented. When I leave, you own it all.
              </p>

              <div className="grid grid-cols-1 gap-3 pt-6 border-t border-border">
                <div className="flex items-baseline gap-3">
                  <div className="text-label text-primary font-mono">42</div>
                  <div className="text-sm text-muted-foreground">systems installed. Zero failed migrations.</div>
                </div>
                <div className="flex items-baseline gap-3">
                  <div className="text-label text-primary font-mono">8</div>
                  <div className="text-sm text-muted-foreground">years. Same methodology. Every engagement documented.</div>
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

          <div className="space-y-3 md:space-y-4">
            {rulesOfEngagement.map((item, index) => (
              <div key={index} className="flex items-start gap-3 md:gap-4 bg-card p-4 md:p-6 border-l-2 border-primary">
                <span className="text-label text-primary font-mono">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p className="text-description text-foreground font-medium">{item.rule}</p>
                  <p className="text-sm text-muted-foreground mt-1 italic">{item.stake}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Partner Network */}
      <Section className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-8">Who Does the Work</h2>

          <p className="text-description text-muted-foreground mb-10">
            I lead strategy and design. CloudRoute does the Salesforce heavy lifting. One contract, one team.
          </p>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-card p-4 md:p-6 border-l-2 border-primary">
              <div className="text-label text-primary mb-3">CWT Studio</div>
              <div className="space-y-2 text-description text-muted-foreground">
                <div>Revenue operations strategy</div>
                <div>Process design</div>
                <div>Automation architecture</div>
              </div>
            </div>

            <div className="bg-card p-4 md:p-6 border-l-2 border-accent">
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
          <h2 className="heading-section mb-6">Find Out What's Breaking</h2>
          <p className="text-description text-muted-foreground mb-10">
            Book an assessment. We'll map what's broken and what it's costing you.
          </p>

          <ConversionOptimizedButton 
            to={ROUTES.assessment}
            ctaName="About - Book Assessment" 
            location="About CTA Section"
            size="lg"
          >
            {CTA.bookAssessment}
          </ConversionOptimizedButton>
        </div>
      </Section>
    </div>
  );
};

export default About;
