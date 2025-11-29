import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
import { EngagementTracker } from "@/components/EngagementTracker";
import { Linkedin, CheckCircle, X } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import shannonHeadshot from "@/assets/shannon-headshot.jpg";

const About = () => {
  usePerformanceMonitoring();
  useScrollDepth();

  const whatWeDo = [
    "Audit revenue infrastructure to identify failure points before they manifest under load",
    "Install CRM architecture, automation logic, and reporting frameworks in 90-day cycles",
    "Document every system, process, and workflow for handoff and operational continuity",
    "Work directly with founders—no account management layer, no delegation to juniors"
  ];

  const whatWeDont = [
    "18-month transformation roadmaps with quarterly milestones and delayed value delivery",
    "Strategy consulting without implementation—decks that outline problems without solving them",
    "Generic frameworks that ignore operational constraints, regulatory requirements, or existing technical debt",
    "Ongoing retainers for advisory services—we build systems, not dependencies"
  ];

  const principlePoints = [
    {
      label: "Fixed Scope",
      description: "Every engagement has defined deliverables, timeline boundaries, and success criteria established before work begins."
    },
    {
      label: "Measurable Baselines",
      description: "Systems performance measured against baseline metrics—pipeline velocity, data quality, automation coverage, manual effort reduction."
    },
    {
      label: "Documented Handoff",
      description: "Process SOPs, field definitions, automation logic maps, and admin protocols documented for internal team execution."
    }
  ];

  return (
    <div className="min-h-screen">
      <EngagementTracker />
      <SEOHead 
        title="About | CWT Studio" 
        description="Shannon Maguire installs revenue infrastructure for regulated and high-trust industries where system failure carries financial, legal, and compliance consequences." 
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
          <div className="grid md:grid-cols-[280px,1fr] gap-12 items-start">
            {/* Photo & Credentials */}
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 -z-10 translate-x-2 translate-y-2" />
                <img 
                  src={shannonHeadshot} 
                  alt="Shannon Maguire, Founder & Revenue Systems Architect" 
                  className="w-full aspect-[3/4] object-cover object-top border-2 border-border shadow-lg relative"
                />
              </div>
              
              {/* Credential Badges */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between px-3 py-2 bg-primary/5 border border-primary/20 rounded">
                  <span className="font-mono text-xs uppercase tracking-wider text-foreground">Deployments</span>
                  <span className="font-mono text-sm font-bold text-primary">42+</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2 bg-primary/5 border border-primary/20 rounded">
                  <span className="font-mono text-xs uppercase tracking-wider text-foreground">Experience</span>
                  <span className="font-mono text-sm font-bold text-primary">8+ Years</span>
                </div>
                <div className="px-3 py-2 bg-primary/5 border border-primary/20 rounded text-center">
                  <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">Regulated Industries</span>
                </div>
              </div>

              {/* LinkedIn Button */}
              <Button asChild variant="outline" size="sm" className="mt-6 w-full">
                <a 
                  href="https://www.linkedin.com/in/shanmag/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4" strokeWidth={2} />
                  <span className="font-mono text-xs">Connect on LinkedIn</span>
                </a>
              </Button>
            </div>

            {/* Bio Content */}
            <div className="pt-2">
              <h1 className="heading-section mb-2">Shannon Maguire</h1>
              <div className="font-mono text-sm uppercase tracking-widest text-primary mb-8">
                Founder & Revenue Systems Architect
              </div>

              <p className="text-description text-foreground leading-relaxed mb-6">
                Installs revenue infrastructure for regulated and high-trust industries where system failure carries financial, legal, and compliance consequences.
              </p>

              {/* Specializations as Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full font-mono text-xs text-foreground">Legal</span>
                <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full font-mono text-xs text-foreground">Compliance</span>
                <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full font-mono text-xs text-foreground">Cybersecurity</span>
                <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full font-mono text-xs text-foreground">Healthcare</span>
                <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full font-mono text-xs text-foreground">B2B SaaS</span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-primary pl-4 italic">
                "Fixed-scope implementations. 90-day cycles. Documented handoffs. No ongoing dependencies."
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* What We Do / Don't Do */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10">
            {/* What We Do */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-primary" />
                <h2 className="heading-subsection">What We Do</h2>
              </div>
              
              <div className="space-y-4">
                {whatWeDo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-sm text-foreground/90 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Don't Do */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-muted-foreground" />
                <h2 className="heading-subsection">What We Don't Do</h2>
              </div>
              
              <div className="space-y-4">
                {whatWeDont.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The 90-Day Principle */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">The 90-Day Principle</h2>
          </div>

          <p className="text-description text-muted-foreground mb-10 max-w-2xl">
            All implementations operate on 90-day delivery cycles. This constraint forces prioritization, eliminates scope creep, and produces measurable outcomes within a single fiscal quarter.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {principlePoints.map((point, index) => (
              <div key={index} className="border border-border p-6">
                <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4 font-semibold">
                  {point.label}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Partnership Model */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Partnership Model</h2>
          </div>

          <div className="border border-primary/30 bg-card p-8">
            <div className="grid md:grid-cols-[1fr,auto,1fr] gap-8 items-start">
              {/* CWT Studio */}
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4 font-semibold">
                  CWT Studio
                </div>
                <div className="space-y-2 text-sm text-foreground/90">
                  <div>• Revenue operations strategy</div>
                  <div>• Process design and documentation</div>
                  <div>• Automation architecture</div>
                  <div>• Direct founder engagement</div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-full bg-border" />

              {/* CloudRoute */}
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
                  CloudRoute (Salesforce Partner)
                </div>
                <div className="space-y-2 text-sm text-foreground/90">
                  <div>• Platform configuration and build</div>
                  <div>• Certified technical implementation</div>
                  <div>• Integration engineering</div>
                  <div>• Enterprise-grade deployment</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                This model combines operational pragmatism with platform-certified technical delivery. CWT Studio leads strategy and design. CloudRoute executes enterprise-grade Salesforce implementation. Single contract, unified accountability.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 mb-8 font-mono text-xs uppercase tracking-widest">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
            <span className="text-primary font-semibold">Ready to Start</span>
          </div>

          <h2 className="heading-section mb-6">Start Assessment</h2>
          <p className="text-description text-muted-foreground mb-10 max-w-2xl mx-auto">
            2-week diagnostic to map revenue infrastructure against industry benchmarks. Delivers prioritized 90-day roadmap with implementation sequence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConversionOptimizedButton 
              to="/assessment" 
              ctaName="About - Start Assessment" 
              location="About CTA Section"
              size="lg"
            >
              Start Assessment
            </ConversionOptimizedButton>
            <ConversionOptimizedButton 
              to="/proof" 
              ctaName="About - View Proof" 
              location="About CTA Section" 
              variant="outline"
              showArrow={false}
              size="lg"
            >
              View Proof
            </ConversionOptimizedButton>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
