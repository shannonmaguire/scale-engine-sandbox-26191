import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
import { EngagementTracker } from "@/components/EngagementTracker";
import { Linkedin, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import shannonHeadshot from "@/assets/shannon-headshot.jpg";
import { CTA, ROUTES } from "@/lib/canonical-constants";

// What I've Seen - VoC failure patterns
const seenPatterns = [
  {
    label: "CSV IMPORT CHAOS",
    description: "Data entering the system without validation. Nobody catches duplicates until finance asks."
  },
  {
    label: "INVOICE-DELIVERY GAP",
    description: "Operational access granted before payment collected. Revenue recognized, cash never arrives."
  },
  {
    label: "SHARED LOGIN SPRAWL",
    description: '"Everyone uses the same login." Compliance asks for an access audit. Nobody can produce one.'
  },
  {
    label: "TOOL SELECTION BY FAMILIARITY",
    description: '"We picked it because someone used it before." Architecture evaluated never.'
  }
];

// Contrarian stances (rewritten from beliefs)
const stances = [
  {
    title: "Processes fail when they depend on memory.",
    description: "If someone has to remember to do it, the system is incomplete."
  },
  {
    title: "The hard questions come first.",
    description: '"What happens when reality changes?" precedes "What fields do you need?"'
  },
  {
    title: "Revenue infrastructure installs in layers.",
    description: "Skip a layer and the next one breaks. The sequence is People → Process → Technology. Most projects fail because they start with technology."
  }
];

// How I Work - Diagnostic questions (validated from discovery calls)
const diagnosticQuestions = [
  {
    question: '"Walk me through what happens when someone purchases."',
    purpose: "Mapping where operational access outpaces commercial settlement. Clients onboarded, revenue recognized, invoice never sent."
  },
  {
    question: '"How many systems does your team check to answer one customer question?"',
    purpose: "Surfacing swivel-chairing between platforms. If it's more than one, context is fragmented."
  },
  {
    question: '"What happens when reality changes and nobody updates the CRM?"',
    purpose: "Exposing reality drift. Software assumes compliance. Humans don't comply."
  }
];

// Rules with consequences
const rules = [
  {
    rule: "Discovery before scope.",
    consequence: "Skipping this adds 6 weeks to implementation."
  },
  {
    rule: "No skipped layers.",
    consequence: "The layer you skip becomes the layer that breaks."
  },
  {
    rule: "Fixed scope, not hourly.",
    consequence: "Hourly incentivizes inefficiency."
  },
  {
    rule: "Build → Document → Handoff.",
    consequence: "Undocumented systems die with their builder."
  },
  {
    rule: "You own everything.",
    consequence: "No vendor lock-in. No dependency."
  }
];

const About = () => {
  usePerformanceMonitoring();
  useScrollDepth();

  return (
    <div className="min-h-screen">
      <EngagementTracker />
      <SEOHead 
        title="About Shannon Maguire | Revenue Systems Architect | CWT Studio" 
        description="Shannon Maguire finds where revenue systems are failing—then installs enforcement so they can't fail again. For teams where broken systems erode customer trust." 
        keywords={[
          'about CWT Studio', 
          'revenue infrastructure', 
          'system architect', 
          'Shannon Maguire',
          'high-trust teams'
        ]}
        includeOrganizationSchema={true}
        personSchema={{
          name: 'Shannon Maguire',
          jobTitle: 'Principal System Architect, CWT Studio | Managing Partner, CloudRoute',
          description: "Finds where revenue systems are failing—then installs enforcement so they cannot fail again. Every system documented. Every handoff clean.",
          sameAs: ['https://www.linkedin.com/in/shannonmaguire'],
          image: 'https://cwtstudio.com/assets/shannon-headshot.jpg'
        }}
        faqSchema={[
          {
            question: 'Who is Shannon Maguire?',
            answer: "Shannon Maguire is the founder and revenue systems architect at CWT Studio, finding where revenue systems fail and installing enforcement so they cannot fail again."
          },
          {
            question: 'What industries does CWT Studio serve?',
            answer: 'Legal tech, healthcare, compliance/cybersecurity, and B2B SaaS.'
          },
          {
            question: 'What is the relationship between CWT Studio and CloudRoute?',
            answer: 'For enterprise implementations, CWT partners with CloudRoute (ISV Partner). For lighter stacks, CWT handles directly.'
          }
        ]}
      />
      
      <Breadcrumbs />
      
      {/* Founder */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <div className="system-status mb-8">FOUNDER</div>
          <div className="grid md:grid-cols-[240px,1fr] gap-8 md:gap-12 items-start">
            <div className="w-full max-w-[200px] sm:max-w-[240px] mx-auto md:mx-0">
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
              
              <Button asChild variant="outline" size="default" className="mt-4 w-full">
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
                Principal System Architect, CWT Studio | Managing Partner, CloudRoute
              </p>

              <div className="space-y-4">
                <p className="text-xl text-foreground leading-relaxed">
                  Former Salesforce AE. I watched implementations fail because sales sold what the business couldn't absorb. Now I architect what gets sold—systems that survive the first quarter of actual use.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Salesforce implementations through CloudRoute (ISV Partner). HubSpot and lighter stacks direct. Every system documented. Every handoff clean.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div>
                  <div className="text-2xl text-primary font-mono tabular-nums">6</div>
                  <div className="text-sm text-muted-foreground">years, same methodology</div>
                </div>
                <div>
                  <div className="text-2xl text-primary font-mono tabular-nums">42</div>
                  <div className="text-sm text-muted-foreground">systems installed</div>
                </div>
                <div>
                  <div className="text-2xl text-primary font-mono tabular-nums">0</div>
                  <div className="text-sm text-muted-foreground">failed migrations</div>
                </div>
              </div>

              {/* Micro-testimonial */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="bg-card border-l-2 border-primary p-4">
                  <blockquote className="text-muted-foreground italic">
                    "Shannon sees the whole board. She caught dependencies our internal team missed."
                  </blockquote>
                  <p className="text-sm text-muted-foreground mt-2">
                    — Operations Director, Healthcare SaaS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What I've Seen */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-3xl">
          <div className="system-status mb-4">PATTERN RECOGNITION</div>
          <h2 className="heading-section mb-8">What I've Seen</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {seenPatterns.map((pattern, index) => (
              <div key={index} className="bg-card p-6 border-l-2 border-primary">
                <div className="text-label text-primary mb-3 font-mono">{pattern.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pattern.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contrarian Stances */}
      <Section className="border-b border-border">
        <div className="max-w-3xl">
          <div className="system-status mb-4">POSITIONS</div>
          <h2 className="heading-section mb-8">Where I Disagree</h2>

          <div className="space-y-4">
            {stances.map((stance, index) => (
              <div key={index} className="bg-card p-6 border-l-2 border-primary">
                <h3 className="text-foreground font-semibold mb-2">{stance.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stance.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* How I Work */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-3xl">
          <div className="system-status mb-4">DIAGNOSTIC</div>
          <h2 className="heading-section mb-4">How I Work</h2>
          <p className="text-muted-foreground mb-8">
            Every engagement starts with the same questions. They surface where the system is actually failing—not where you think it's failing.
          </p>

          <div className="space-y-6">
            {diagnosticQuestions.map((item, index) => (
              <div key={index} className="flex gap-4">
                <CheckSquare className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-mono text-foreground mb-1">{item.question}</p>
                  <p className="text-sm text-muted-foreground">{item.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Rules */}
      <Section className="border-b border-border">
        <div className="max-w-3xl">
          <div className="system-status mb-4">OPERATING PRINCIPLES</div>
          <h2 className="heading-section mb-8">Rules</h2>

          <div className="space-y-3">
            {rules.map((item, index) => (
              <div key={index} className="bg-card p-4 border-l-2 border-primary">
                <div className="flex items-start gap-4">
                  <span className="text-label text-primary font-mono flex-shrink-0">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="text-foreground font-medium">{item.rule}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.consequence}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="muted">
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
