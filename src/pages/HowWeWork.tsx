import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { RevenueArchitectureDiagram } from "@/components/RevenueArchitectureDiagram";
import { CheckCircle, ArrowRight } from "lucide-react";
import { ROUTES, TIMELINES } from "@/lib/canonical-constants";

const HowWeWork = () => {
  const implementationPhases = [
    {
      phase: "01",
      title: "Discovery & Assessment",
      duration: TIMELINES.assessment,
      description: "We map your current revenue infrastructure, identify failure points, and document dependency chains.",
      deliverables: [
        "Revenue Infrastructure Scorecard",
        "System dependency map",
        "90-day repair roadmap",
        "Priority matrix"
      ]
    },
    {
      phase: "02",
      title: "Sprint Implementation",
      duration: "8-12 weeks",
      description: "We install the infrastructure components in dependency order. Each layer builds on the previous.",
      deliverables: [
        "CRM structure optimization",
        "Pipeline mechanics installation",
        "Automation workflows",
        "Complete handoff documentation"
      ]
    },
    {
      phase: "03",
      title: "Fractional Operations",
      duration: "6+ months",
      description: "Ongoing optimization and performance management. We become your embedded RevOps team.",
      deliverables: [
        "Weekly performance reviews",
        "Continuous optimization",
        "Quarterly strategic planning",
        "Training and enablement"
      ]
    }
  ];

  const principles = [
    {
      title: "Dependency Order",
      description: "Every layer builds on the previous. We don't install automation on broken foundations."
    },
    {
      title: "Documentation First",
      description: "Every process is documented before we leave. No knowledge concentration."
    },
    {
      title: "Measurable Outcomes",
      description: "Every engagement has defined success metrics. We track what matters."
    },
    {
      title: "No Vendor Lock-in",
      description: "We build systems you own. When we leave, everything still works."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="How We Work | CWT Studio"
        description="Our methodology for building revenue infrastructure that holds. Discover the six-layer architecture and implementation process."
        keywords={[
          'revenue infrastructure methodology',
          'RevOps implementation',
          'revenue operations process',
          'Salesforce implementation methodology'
        ]}
        canonicalUrl="/how-we-work"
      />

      <Breadcrumbs />

      {/* Hero */}
      <Section>
        <div className="max-w-3xl">
          <div className="system-status mb-8">
            METHODOLOGY
          </div>
          <h1 className="heading-page mb-6">
            How We Work
          </h1>
          <p className="text-description text-muted-foreground max-w-2xl">
            Revenue infrastructure is built in layers. Each depends on the one before it. 
            Skip a layer, and everything above it becomes unstable.
          </p>
        </div>
      </Section>

      {/* The Architecture */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">The Architecture</h2>
          </div>
          
          <RevenueArchitectureDiagram />
        </div>
      </Section>

      {/* Implementation Phases */}
      <Section className="border-t border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Implementation Phases</h2>
          </div>

          <div className="space-y-8">
            {implementationPhases.map((phase, index) => (
              <div key={index} className="border border-border bg-card p-8">
                <div className="flex items-start gap-6">
                  <div className="font-mono text-4xl font-bold text-primary/20">{phase.phase}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="heading-subsection">{phase.title}</h3>
                      <span className="font-mono text-xs text-muted-foreground bg-muted px-3 py-1">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-6">{phase.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-3">
                      {phase.deliverables.map((deliverable, dIndex) => (
                        <div key={dIndex} className="flex items-center gap-2 text-sm">
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
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Our Principles</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="border border-border bg-card p-6">
                <h3 className="font-mono text-sm uppercase tracking-widest text-primary mb-3">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading-section mb-6">See Where Your System Stands</h2>
          <p className="text-description text-muted-foreground mb-10">
            Take the 5-minute diagnostic to identify which layers need attention.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConversionOptimizedButton
              to={ROUTES.assessment}
              ctaName="How We Work - Take Health Check"
              location="How We Work CTA"
              size="lg"
            >
              Take Free Health Check
            </ConversionOptimizedButton>
            <ConversionOptimizedButton
              to="/proof"
              ctaName="How We Work - See Results"
              location="How We Work CTA"
              variant="outline"
              size="lg"
            >
              See Client Results
            </ConversionOptimizedButton>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HowWeWork;