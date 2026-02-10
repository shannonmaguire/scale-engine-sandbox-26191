import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { RevenueArchitectureDiagram } from "@/components/RevenueArchitectureDiagram";
import { ROUTES } from "@/lib/canonical-constants";

const HowWeWork = () => {
  const sequencingRules = [
    {
      rule: "Discovery before scope",
      consequence: "Prevents mid-project drift and protects your budget"
    },
    {
      rule: "No skipped layers",
      consequence: "Every skipped layer resurfaces as a production incident"
    },
    {
      rule: "Fixed scope, not hourly",
      consequence: "You pay for the outcome, not the clock"
    },
    {
      rule: "Build → Document → Handoff",
      consequence: "Your team can operate it without us on Day 91"
    },
    {
      rule: "Your team runs it",
      consequence: "Dependency on the builder is a system failure"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="How We Work | CWT Studio"
        description="Systems architecture methodology. Layer sequencing and dependency order for regulated industries."
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
      <Section className="border-b border-border">
        <div className="max-w-3xl">
          <div className="system-status mb-8">METHODOLOGY</div>
          <h1 className="heading-page mb-6">How We Work</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Skip a layer, and growth exposes the gap.
          </p>
        </div>
      </Section>

      {/* Architecture */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-5xl">
          <div className="system-status mb-6">ARCHITECTURE</div>
          <h2 className="heading-section mb-10">Layer Dependencies</h2>
          <RevenueArchitectureDiagram />
        </div>
      </Section>

      {/* Sequencing Rules */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <div className="system-status mb-6">CONSTRAINTS</div>
          <h2 className="heading-section mb-4">Operating Rules</h2>
          <p className="text-base text-muted-foreground mb-10 max-w-2xl">
            Violate any of these. The project fails.
          </p>

          <div className="space-y-4">
            {sequencingRules.map((item, index) => (
              <div key={index} className="border border-border bg-card p-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <div className="font-mono text-sm font-medium text-foreground flex-shrink-0">
                  {item.rule}
                </div>
                <div className="hidden sm:block text-muted-foreground">→</div>
                <div className="text-sm text-muted-foreground">
                  {item.consequence}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="muted" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading-section mb-8">Find Out What's Breaking</h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConversionOptimizedButton
              to={ROUTES.diagnostic}
              ctaName="How We Work - Book Diagnostic"
              location="How We Work CTA"
              size="lg"
            >
              Book Diagnostic
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
