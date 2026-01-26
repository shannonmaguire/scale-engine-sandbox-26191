import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { RevenueArchitectureDiagram } from "@/components/RevenueArchitectureDiagram";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { ROUTES, TIMELINES } from "@/lib/canonical-constants";

const HowWeWork = () => {
  const phases = [
    {
      phase: "01",
      title: "Assessment",
      duration: TIMELINES.assessment,
      deliverables: ["Infrastructure Scorecard", "Dependency map", "90-day roadmap"]
    },
    {
      phase: "02",
      title: "Sprint",
      duration: "8-12 weeks",
      deliverables: ["CRM optimization", "Automation workflows", "Handoff documentation"]
    },
    {
      phase: "03",
      title: "Fractional",
      duration: "6+ months",
      deliverables: ["Weekly reviews", "Continuous optimization", "Training"]
    }
  ];

  const principles = [
    "Dependency order",
    "Documentation first",
    "Measurable outcomes",
    "No vendor lock-in"
  ];

  const diagnosticQuestions = [
    {
      question: "Walk me through the steps when someone purchases.",
      description: "Mapping where operational access outpaces commercial settlement. Clients get onboarded. Revenue gets recognized. Invoice never sent."
    },
    {
      question: "How many systems does your team check to answer one customer question?",
      description: "Surfacing swivel-chairing between platforms. Two databases that don't talk to each other means context is always fragmented."
    },
    {
      question: "What happens when reality changes and nobody updates the CRM?",
      description: "Exposing reality drift. Software assumes compliance. Humans don't comply. Data diverges from truth without human intervention."
    },
    {
      question: "Where does your pre-sale system break down post-sale?",
      description: "Pre-sale tools work fine until service complexity hits. That's where recurring revenue breaks."
    }
  ];

  const criticalPatterns = [
    {
      title: "Pre-sale / post-sale break",
      description: "HubSpot works for marketing. Service complexity exposes the gaps. That's where recurring revenue dies."
    },
    {
      title: "Reality drift",
      description: "CRM data diverges from truth without human intervention. One system updated, adjacent systems stale."
    },
    {
      title: "Platform by familiarity",
      description: "One person knew the tool. Nobody knew the architecture. Six months later, $50K mistake."
    },
    {
      title: "Operational access before payment",
      description: "Clients get onboarded. Revenue recognized. Invoice never sent. No enforcement."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="How We Work | CWT Studio"
        description="Systems architecture methodology. Discovery, enforcement, and dependency order for regulated industries."
        keywords={[
          'systems architecture methodology',
          'RevOps implementation',
          'revenue operations process',
          'regulated industries'
        ]}
        canonicalUrl="/how-we-work"
      />

      <Breadcrumbs />

      {/* Hero */}
      <Section>
        <div className="max-w-3xl">
          <div className="system-status mb-8">METHODOLOGY</div>
          <h1 className="heading-page mb-6">How We Work</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Revenue infrastructure is built in layers. Each layer depends on the one before it. Skip a layer, and growth stalls.
          </p>
        </div>
      </Section>

      {/* Architecture */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-5xl">
          <h2 className="heading-section mb-10">The Architecture</h2>
          <RevenueArchitectureDiagram />
        </div>
      </Section>

      {/* Questions We Ask */}
      <Section className="border-t border-border">
        <div className="max-w-4xl">
          <div className="system-status mb-6">DIAGNOSTIC</div>
          <h2 className="heading-section mb-4">Questions We Ask</h2>
          <p className="text-base text-muted-foreground mb-10 max-w-2xl">
            Every engagement starts with four questions. The answers expose system state faster than any dashboard.
          </p>

          <div className="space-y-6">
            {diagnosticQuestions.map((item, index) => (
              <div key={index} className="border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="font-mono text-2xl font-bold text-primary/30">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-sm font-medium text-foreground mb-2">
                      "{item.question}"
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What We Look For */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-4xl">
          <div className="system-status mb-6">CRITICAL PATTERNS</div>
          <h2 className="heading-section mb-4">What We Look For</h2>
          <p className="text-base text-muted-foreground mb-10 max-w-2xl">
            These are the four patterns that predict revenue system failure. If any of these exist, growth will expose them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {criticalPatterns.map((pattern, index) => (
              <div key={index} className="border border-border bg-card p-6">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0 mt-1" strokeWidth={2} />
                  <h3 className="font-mono text-sm font-semibold text-foreground uppercase tracking-wide">
                    {pattern.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground pl-7">
                  {pattern.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Phases */}
      <Section className="border-t border-border">
        <div className="max-w-4xl">
          <h2 className="heading-section mb-10">Implementation Phases</h2>

          <div className="space-y-6">
            {phases.map((phase, index) => (
              <div key={index} className="border border-border bg-card p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="font-mono text-3xl font-bold text-primary/20">{phase.phase}</div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <h3 className="heading-subsection">{phase.title}</h3>
                      <span className="font-mono text-xs text-muted-foreground bg-muted px-3 py-1 self-start sm:self-auto">
                        {phase.duration}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 md:gap-4">
                      {phase.deliverables.map((deliverable, dIndex) => (
                        <div key={dIndex} className="flex items-center gap-2 text-sm py-1">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2} />
                          <span className="font-mono">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-4xl">
          <h2 className="heading-section mb-10">Principles</h2>

          <div className="flex flex-wrap gap-4">
            {principles.map((principle, index) => (
              <div key={index} className="border border-border bg-card px-4 py-2">
                <span className="font-mono text-sm text-primary">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading-section mb-8">Find Out What's Breaking</h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConversionOptimizedButton
              to={ROUTES.assessment}
              ctaName="How We Work - Book Assessment"
              location="How We Work CTA"
              size="lg"
            >
              Book Assessment
            </ConversionOptimizedButton>
            <ConversionOptimizedButton
              to="/proof"
              ctaName="How We Work - See Results"
              location="How We Work CTA"
              variant="outline"
              size="lg"
            >
              See Results
            </ConversionOptimizedButton>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HowWeWork;
