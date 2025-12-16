import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { RevenueArchitectureDiagram } from "@/components/RevenueArchitectureDiagram";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
import { EngagementTracker } from "@/components/EngagementTracker";
import CookieBanner from "@/components/CookieBanner";
import { CheckCircle, ArrowRight } from "lucide-react";
import { CTA, ROUTES, METRICS, TIMELINES } from "@/lib/canonical-constants";

const Home = () => {
  usePerformanceMonitoring();
  useScrollDepth();

  // Compressed failure mechanics: single-line cause → cost
  const infrastructureFailures = [
    "Spreadsheet forecasting breaks at velocity variance. Board confidence lost in 2 quarters.",
    "Operations knowledge in founder memory. Every deal requires intervention. Growth ceiling installed.",
    "Manual CRM entry degrades data freshness. 15-20 hours weekly on reconciliation.",
    "CRM structure misaligned with sales process. Reporting becomes fiction.",
    "No handoff documentation. Every transition resets institutional learning to zero."
  ];

  // Merged fit/exclusion triggers - compressed
  const triggers = [
    { label: "Forecast Blind", description: "Board asks for projections. You extrapolate from memory.", fit: true },
    { label: "Manual Operations", description: "Pipeline updates consume 15+ hours weekly.", fit: true },
    { label: "Founder Dependency", description: "Revenue knowledge concentrated in one person.", fit: true },
    { label: "Decision Cycles >30 Days", description: "Slow approval chains stall implementation.", fit: false },
    { label: "No Single Ops Owner", description: "Ownership ambiguity fragments scope.", fit: false },
    { label: "Ground-Zero Builds", description: "Existing systems only. No infrastructure from scratch.", fit: false }
  ];

  // Compressed proof: What Broke → Pattern Restored
  const proofSnapshots = [
    {
      client: "Cybersecurity SaaS ($4.2M ARR)",
      broke: "Pipeline administration consumed founder bandwidth.",
      pattern: "Automated status tracking. Time-to-close predictability restored in 6 weeks."
    },
    {
      client: "Legal Tech Platform ($2.8M ARR)",
      broke: "Forecast built from spreadsheet extrapolation.",
      pattern: "Unified pipeline with weighted probability. Board-ready forecast in 30 min."
    },
    {
      client: "Compliance Software ($3.5M ARR)",
      broke: "One founder owned all operations knowledge.",
      pattern: "Documented systems. Zero single points of failure. Founder exits day-to-day."
    }
  ];

  // Simplified pipeline
  const pipeline = [
    {
      phase: "01",
      title: "Assessment",
      duration: TIMELINES.assessment,
      output: "Revenue Infrastructure Scorecard + 90-day roadmap"
    },
    {
      phase: "02", 
      title: "Sprint",
      duration: "8-12 weeks",
      output: "Installed infrastructure + handoff documentation"
    },
    {
      phase: "03",
      title: "Fractional Ops",
      duration: "6+ months",
      output: "Ongoing optimization + performance management"
    }
  ];

  return (
    <div className="min-h-screen">
      <EngagementTracker />
      <CookieBanner />
      <SEOHead
        title="Revenue Architecture | CWT Studio"
        description="Revenue systems break under growth. Forecasting collapses. Manual processes multiply. We install infrastructure that holds."
        keywords={[
          'revenue infrastructure',
          'revenue operations',
          'Salesforce implementation',
          '90-day system installation',
          'RevOps engineering'
        ]}
        canonicalUrl="/"
      />

      {/* Hero Section */}
      <Section className="min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{
               backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
               backgroundSize: '24px 24px'
             }} 
        />
        
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 mb-8 font-mono text-xs uppercase tracking-widest">
            <span className="text-primary font-semibold">v2.0</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">{METRICS.deployments}</span>
          </div>

          <h1 className="heading-page mb-6 leading-[1.1]">
            Revenue systems are load-bearing. Growth reveals where they crack.
          </h1>

          <p className="text-description text-muted-foreground mb-10 max-w-2xl">
            Forecasting collapses. Manual processes multiply. Infrastructure is risk containment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <ConversionOptimizedButton
              to={ROUTES.assessment}
              ctaName="Hero - Measure System State"
              location="Homepage Hero"
              size="lg"
            >
              Measure Your System State
            </ConversionOptimizedButton>
            <ConversionOptimizedButton
              to={ROUTES.proof}
              ctaName="Hero - See Proof"
              location="Homepage Hero"
              variant="outline"
              showArrow={false}
              size="lg"
            >
              {CTA.seeProof}
            </ConversionOptimizedButton>
          </div>
        </div>
      </Section>

      {/* Why Infrastructure Precedes Growth - Compressed */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Why Infrastructure Precedes Growth</h2>
          </div>

          <div className="space-y-4">
            {infrastructureFailures.map((failure, index) => (
              <p key={index} className="text-base text-foreground font-mono border-l-2 border-destructive/40 pl-4 py-2">
                {failure}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Merged Fit/Exclusion Section */}
      <Section className="border-t border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">System Fit</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {triggers.map((trigger, index) => (
              <div 
                key={index} 
                className={`border p-5 ${trigger.fit ? 'border-primary/30 hover:border-primary/50' : 'border-destructive/40 bg-destructive/5'} transition-colors`}
              >
                <div className={`font-mono text-xs uppercase tracking-widest mb-2 ${trigger.fit ? 'text-primary' : 'text-destructive'}`}>
                  {trigger.fit ? '✓' : '✗'} {trigger.label}
                </div>
                <p className="text-sm text-muted-foreground">{trigger.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technical Architecture Diagram */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-5xl">
          <RevenueArchitectureDiagram />
        </div>
      </Section>

      {/* Proof Section - Compressed */}
      <Section className="border-t border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Proof</h2>
          </div>

          <div className="space-y-6">
            {proofSnapshots.map((snapshot, index) => (
              <div key={index} className="border border-border p-6">
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  {snapshot.client}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-mono text-xs text-destructive mb-1">What Broke</div>
                    <p className="text-sm text-foreground">{snapshot.broke}</p>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-primary mb-1">Pattern Restored</div>
                    <p className="text-sm text-foreground">{snapshot.pattern}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <ConversionOptimizedButton
              to="/proof"
              ctaName="Proof - See Full Case Studies"
              location="Proof Section"
            >
              See Full Case Studies
            </ConversionOptimizedButton>
          </div>
        </div>
      </Section>

      {/* Pipeline - Simplified */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Implementation Pipeline</h2>
          </div>

          <div className="space-y-4">
            {pipeline.map((phase, index) => (
              <div key={index} className="flex items-start gap-6 border border-border bg-card p-6">
                <div className="font-mono text-3xl font-bold text-primary/30">{phase.phase}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="heading-subsection">{phase.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{phase.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-mono text-primary">
                    <CheckCircle className="w-4 h-4" strokeWidth={2} />
                    <span>{phase.output}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="border-t border-border text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading-section mb-6">Measure Your System State</h2>
          <p className="text-description text-muted-foreground mb-10">
            5-minute diagnostic. Results are immediate.
          </p>

          <ConversionOptimizedButton
            to={ROUTES.assessment}
            ctaName="Final CTA - Measure System State"
            location="Final CTA Section"
            size="lg"
          >
            Start Diagnostic
          </ConversionOptimizedButton>
        </div>
      </Section>
    </div>
  );
};

export default Home;
