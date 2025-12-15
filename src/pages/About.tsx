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
import { CTA, ROUTES, PRIME_DIRECTIVE, NORTH_STAR } from "@/lib/canonical-constants";

const About = () => {
  usePerformanceMonitoring();
  useScrollDepth();

  const threeRoles = [
    {
      role: "Diagnostician",
      description: "Identifies failure points, misalignment, leakage, and false assumptions."
    },
    {
      role: "Architect",
      description: "Designs the system that resolves those failures at scale."
    },
    {
      role: "Operator",
      description: "Installs and runs the system until it is stable and repeatable."
    }
  ];

  const cwtIsNot = [
    "An ideas shop",
    "A funnel factory",
    "A marketing agency",
    "A \"growth partner\"",
    "A flexible freelancer collective"
  ];

  const clientFilter = [
    "Founders comparing multiple agencies simultaneously",
    "Clients who want education without ownership transfer",
    "Businesses unwilling to expose real numbers",
    "Teams addicted to optionality",
    "Anyone who needs constant reassurance"
  ];

  const rulesOfEngagement = [
    "Assessment required before Sprint.",
    "Fixed scope only. No hourly.",
    "I choose clients. You choose timing.",
    "One project at a time.",
    "90-day cycles. Not open-ended retainers."
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

      {/* Prime Directive */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-8">Prime Directive</h2>
          
          <p className="text-xl text-foreground mb-8 font-medium">
            {PRIME_DIRECTIVE.statement}
          </p>
          
          <div className="space-y-3 text-description text-muted-foreground">
            <p>{PRIME_DIRECTIVE.corollaries[0]}</p>
            <p>{PRIME_DIRECTIVE.corollaries[1]}</p>
            <p>{PRIME_DIRECTIVE.corollaries[2]}</p>
          </div>
        </div>
      </Section>

      {/* Three Roles */}
      <Section className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-4">Three Roles</h2>
          <p className="text-description text-muted-foreground mb-8">
            Shannon is always one of three things — never all three at once.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {threeRoles.map((item, index) => (
              <div key={index} className="bg-card p-6 border-l-2 border-primary">
                <div className="text-label text-primary mb-3">{item.role}</div>
                <p className="text-description text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground mt-6 italic">
            Shannon does not float between roles mid-engagement. Each phase has a clear function.
          </p>
        </div>
      </Section>

      {/* What CWT Is Not */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-8">What CWT Studio Is Not</h2>
          
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {cwtIsNot.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-card p-4 border-l-2 border-destructive">
                <span className="text-destructive font-mono text-sm">✕</span>
                <span className="text-description text-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-foreground font-medium">
            CWT does not "support." CWT installs.
          </p>
        </div>
      </Section>

      {/* Systems Principle */}
      <Section className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-8">Systems Principle</h2>
          
          <p className="text-xl text-foreground mb-8 font-medium">
            If it cannot be repeated, it does not exist.
          </p>
          
          <div className="bg-card p-6 border-l-2 border-accent">
            <p className="text-description text-muted-foreground">
              Every deliverable is documented, transferable, testable, measurable, and survives Shannon's absence.
            </p>
          </div>
        </div>
      </Section>

      {/* Client Selection Filter */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-8">CWT Does Not Work With</h2>
          
          <div className="space-y-3">
            {clientFilter.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-card p-4 border-l-2 border-destructive">
                <span className="text-destructive font-mono text-sm">✕</span>
                <span className="text-description text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Rules of Engagement */}
      <Section className="border-b border-border">
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

      {/* North Star + Final Statement */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-3xl text-center">
          <h2 className="heading-section mb-8">North Star</h2>
          
          <p className="text-2xl text-foreground mb-6 font-medium">
            {NORTH_STAR.statement}
          </p>
          
          <p className="text-description text-muted-foreground mb-4">
            {NORTH_STAR.corollaries[0]}
          </p>
          <p className="text-description text-muted-foreground mb-12">
            {NORTH_STAR.corollaries[1]}
          </p>
          
          <div className="pt-8 border-t border-border">
            <p className="text-lg text-foreground font-medium">
              Shannon does not scale chaos. She replaces it.
            </p>
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
            5-minute self-assessment identifies your gaps.
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
