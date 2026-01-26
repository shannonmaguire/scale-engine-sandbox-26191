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

// What I Believe
const beliefs = [
  {
    title: "System enforcement, not human enforcement",
    description: "If a process depends on someone remembering to do it, it will eventually fail. Systems must hold what humans cannot."
  },
  {
    title: "Discovery before configuration",
    description: "We ask the hard questions first. What happens when reality changes? Where do things slip through the cracks?"
  },
  {
    title: "Dependency order matters",
    description: "Revenue infrastructure is built in layers. Skip a layer, and growth stalls. We install in sequence."
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

// Rules - no justifications
const rules = [
  "We assess before we build.",
  "Fixed price, not hourly.",
  "You own everything."
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
                Principal System Architect, CWT Studio | Managing Partner, CloudRoute
              </p>

              <div className="space-y-4">
                <p className="text-xl text-foreground leading-relaxed">
                  CRM agnostic. I dive deeper into how the business actually runs—then design systems that hold under load.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Former Salesforce AE. Now I'm on the delivery side, architecting what the sales team sold. I've seen implementations go sideways because nobody translated business process to system logic. That's what I do—I see the whole board and make sure the system actually enforces what it's supposed to.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Enterprise Salesforce implementations through CloudRoute (ISV Partner). HubSpot and lighter stacks direct. Every system documented. Every handoff clean.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div>
                  <div className="text-2xl text-primary font-mono">8</div>
                  <div className="text-sm text-muted-foreground">years, same methodology</div>
                </div>
                <div>
                  <div className="text-2xl text-primary font-mono">42</div>
                  <div className="text-sm text-muted-foreground">systems installed</div>
                </div>
                <div>
                  <div className="text-2xl text-primary font-mono">0</div>
                  <div className="text-sm text-muted-foreground">failed migrations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What I Believe */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-3xl">
          <div className="system-status mb-4">BELIEFS</div>
          <h2 className="heading-section mb-8">What I Believe</h2>

          <div className="space-y-4">
            {beliefs.map((belief, index) => (
              <div key={index} className="bg-card p-6 border-l-2 border-primary">
                <h3 className="text-foreground font-semibold mb-2">{belief.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* How I Work */}
      <Section className="border-b border-border">
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

      {/* People → Process → Technology */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-8">People → Process → Technology</h2>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-card p-6 border-l-2 border-primary">
              <div className="text-label text-primary mb-3 font-mono">PEOPLE</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The relationships and judgment that built the business. Automation should protect this, not replace it.
              </p>
            </div>

            <div className="bg-card p-6 border-l-2 border-primary">
              <div className="text-label text-primary mb-3 font-mono">PROCESS</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The way decisions get made. We document what works before we change anything.
              </p>
            </div>

            <div className="bg-card p-6 border-l-2 border-primary">
              <div className="text-label text-primary mb-3 font-mono">TECHNOLOGY</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The tools that support execution. Last to be configured, first to be blamed.
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            This sequence determines project success.
          </p>
        </div>
      </Section>

      {/* Rules */}
      <Section className="border-b border-border">
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


      {/* CTA */}
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
