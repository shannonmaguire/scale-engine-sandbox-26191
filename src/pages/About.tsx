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

  // Rules - no justifications
  const rules = [
    "We assess before we build.",
    "Fixed price, not hourly.",
    "90-day cycles max.",
    "You own everything."
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
          description: 'Revenue systems architect specializing in legal, compliance, cybersecurity, healthcare, and B2B SaaS.',
          sameAs: ['https://www.linkedin.com/in/shannonmaguire'],
          image: 'https://cwtstudio.com/assets/shannon-headshot.jpg'
        }}
        faqSchema={[
          {
            question: 'Who is Shannon Maguire?',
            answer: 'Shannon Maguire is the founder and revenue systems architect at CWT Studio, specializing in fixing broken sales systems for regulated industries.'
          },
          {
            question: 'What industries does CWT Studio serve?',
            answer: 'Legal tech, healthcare, compliance/cybersecurity, and B2B SaaS.'
          },
          {
            question: 'What is the relationship between CWT Studio and CloudRoute?',
            answer: 'For Salesforce projects, CWT partners with CloudRoute (Salesforce ISV Partner). For non-Salesforce work, CWT handles directly.'
          }
        ]}
      />
      
      <Breadcrumbs />
      
      {/* Founder */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <div className="system-status mb-8">FOUNDER</div>
          <div className="grid md:grid-cols-[240px,1fr] gap-8 md:gap-12 items-start">
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

            <div>
              <h1 className="heading-section mb-2">Shannon Maguire</h1>
              <p className="text-label text-muted-foreground mb-8">
                Founder & Revenue Systems Architect
              </p>

              <div className="space-y-4">
                <p className="text-xl text-foreground leading-relaxed">
                  I design revenue infrastructure for regulated industries—legal, healthcare, compliance, and SaaS.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Before CWT Studio, I spent two years in enterprise SaaS—started as a BDR, got promoted to Account Executive in the SMB space. That's where I saw how broken most revenue systems actually are. Not the tools. The way people implement them.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Now I audit systems and install infrastructure that holds up under scrutiny.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  For Salesforce projects, I partner with CloudRoute (Salesforce Platinum Partner). Everything else I handle directly.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-border">
                <div className="flex items-baseline gap-3">
                  <div className="text-label text-primary font-mono">42</div>
                  <div className="text-sm text-muted-foreground">systems installed</div>
                </div>
                <div className="flex items-baseline gap-3">
                  <div className="text-label text-primary font-mono">0</div>
                  <div className="text-sm text-muted-foreground">failed migrations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Rules - No justifications */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-8">Rules</h2>

          <div className="space-y-3">
            {rules.map((rule, index) => (
              <div key={index} className="flex items-center gap-4 bg-card p-4 border-l-2 border-primary">
                <span className="text-label text-primary font-mono">{String(index + 1).padStart(2, '0')}</span>
                <p className="text-foreground font-medium">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Salesforce Partner - Condensed */}
      <Section className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-8">Salesforce Projects</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card p-6 border-l-2 border-primary">
              <div className="text-label text-primary mb-2">CWT Studio</div>
              <div className="text-sm text-muted-foreground">Strategy & design</div>
            </div>

            <div className="bg-card p-6 border-l-2 border-accent">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-label text-accent">CloudRoute</div>
                <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded font-mono">ISV Partner</span>
              </div>
              <div className="text-sm text-muted-foreground">Platform implementation</div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            HubSpot and non-Salesforce work handled directly.
          </p>
        </div>
      </Section>

      {/* CTA - No paragraph */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-8">Find Out What's Breaking</h2>

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
