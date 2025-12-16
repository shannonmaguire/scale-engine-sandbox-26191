import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { RevenueArchitectureDiagram } from "@/components/RevenueArchitectureDiagram";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
import { EngagementTracker } from "@/components/EngagementTracker";
import CookieBanner from "@/components/CookieBanner";
import { CheckCircle, ArrowRight, AlertCircle, XCircle } from "lucide-react";
import { CTA, ROUTES, METRICS, TIMELINES } from "@/lib/canonical-constants";

const Home = () => {
  usePerformanceMonitoring();
  useScrollDepth();

  // Failure mechanics: cause → effect → cost
  const infrastructureFailures = [
    {
      failure: "Forecasting from spreadsheets assumes stable deal velocity.",
      effect: "Velocity variance compounds under scale.",
      cost: "Board loses confidence in projections within 2 quarters."
    },
    {
      failure: "Operations knowledge concentrated in founder memory.",
      effect: "Every deal requires founder intervention.",
      cost: "Founder becomes bottleneck. Growth ceiling installed."
    },
    {
      failure: "Pipeline updates require manual CRM entry.",
      effect: "Data freshness degrades. Stage accuracy drops.",
      cost: "15-20 hours weekly on administrative reconciliation."
    },
    {
      failure: "CRM structure doesn't match actual sales process.",
      effect: "Reps work around system. Data fragments.",
      cost: "Reporting becomes fiction. Decisions made on noise."
    },
    {
      failure: "No handoff documentation exists.",
      effect: "Knowledge leaves when people leave.",
      cost: "Every transition resets institutional learning to zero."
    }
  ];

  const icpTriggers = [
    { label: "Forecast Blind", description: "Board asks for pipeline projections. You extrapolate from memory." },
    { label: "Manual Operations", description: "Weekly pipeline updates consume 15+ hours of administrative overhead." },
    { label: "Founder Dependency", description: "Revenue operations knowledge concentrated in one person's head." },
    { label: "CRM Underperforming", description: "Salesforce exists but doesn't reflect how deals actually move." }
  ];

  // Diagnostic proof: failure → constraint → correction → pattern
  const proofSnapshots = [
    {
      client: "Cybersecurity SaaS ($4.2M ARR)",
      failure: "Pipeline administration consumed founder bandwidth.",
      constraint: "No Salesforce admin on staff. No budget for FTE.",
      correction: "Automated status tracking. Removed manual stage updates.",
      pattern: "Time-to-close predictability restored in 6 weeks."
    },
    {
      client: "Legal Tech Platform ($2.8M ARR)",
      failure: "Forecast built from spreadsheet extrapolation.",
      constraint: "Historical data scattered across 3 systems.",
      correction: "Unified pipeline with weighted probability model.",
      pattern: "Board-ready forecast with confidence intervals. 3-day → 30-min."
    },
    {
      client: "Compliance Software ($3.5M ARR)",
      failure: "One founder owned all operations knowledge.",
      constraint: "No documentation. No process maps.",
      correction: "Documented systems with role-based access.",
      pattern: "Zero single points of failure. Founder exits day-to-day ops."
    }
  ];

  // Subtractive clarity: what each phase eliminates
  const pipeline = [
    {
      phase: "01",
      title: "Infrastructure Assessment",
      duration: TIMELINES.assessment,
      eliminates: "Unknown system state. Scope ambiguity. Priority disagreement.",
      output: "Revenue Infrastructure Scorecard + 90-day roadmap",
      description: "Paid diagnostic audit mapping current state against industry benchmarks. Delivers prioritized implementation sequence."
    },
    {
      phase: "02", 
      title: "Sprint",
      duration: "8-12 weeks",
      eliminates: "Manual dependency. Data fragmentation. Undocumented processes.",
      output: "Installed infrastructure + handoff documentation",
      description: "Fixed-scope implementation. CRM configuration, automation build, reporting dashboards, process documentation."
    },
    {
      phase: "03",
      title: "Fractional Ops",
      duration: "6+ months",
      eliminates: "Cognitive load. Optimization debt. Performance drift.",
      output: "Ongoing optimization + performance management",
      description: "Post-implementation support. System maintenance, metric monitoring, continuous improvement cycles."
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

      {/* Hero Section — Systems Audit Opening */}
      <Section className="min-h-[85vh] flex items-center relative overflow-hidden">
        {/* Technical grid background */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{
               backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
               backgroundSize: '24px 24px'
             }} 
        />
        
        <div className="relative z-10 max-w-4xl">
          {/* Version badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 mb-8 font-mono text-xs uppercase tracking-widest">
            <span className="text-primary font-semibold">v2.0</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">{METRICS.deployments}</span>
          </div>

          <h1 className="heading-page mb-6 leading-[1.1]">
            Revenue systems are load-bearing. Growth reveals where they crack.
          </h1>

          <p className="text-description text-muted-foreground mb-6 max-w-2xl">
            Forecasting collapses. Manual processes multiply. Founder dependency compounds. Infrastructure is risk containment.
          </p>

          <p className="font-mono text-sm text-foreground/60 mb-10">
            // for legal, compliance, and healthcare teams
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

      {/* Category Explanation - Why Infrastructure Precedes Growth */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Why Infrastructure Precedes Growth</h2>
          </div>

          <p className="text-description text-muted-foreground mb-10">
            What fails, why it fails, what it costs:
          </p>

          <div className="grid gap-6">
            {infrastructureFailures.map((item, index) => (
              <div key={index} className="border-l-2 border-destructive/30 bg-card/50 p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-destructive mb-2">Failure</div>
                    <p className="text-sm text-foreground">{item.failure}</p>
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Effect</div>
                    <p className="text-sm text-muted-foreground">{item.effect}</p>
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Cost</div>
                    <p className="text-sm text-foreground font-medium">{item.cost}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ICP Filter - You're a Fit If */}
      <Section className="border-t border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">You're a Fit If…</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {icpTriggers.map((trigger, index) => (
              <div key={index} className="border border-border p-6 hover:border-primary/50 transition-colors">
                <div className="font-mono text-sm uppercase tracking-widest text-primary mb-3 font-semibold">
                  {trigger.label}
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {trigger.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Exclusion Filter - Do Not Engage If (Organizational Maturity Filters) */}
      <Section className="border-t border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-destructive" />
            <h2 className="heading-section">Do Not Engage If</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-destructive/40 p-6 bg-destructive/5">
              <div className="font-mono text-sm uppercase tracking-widest text-destructive mb-3">
                Decision Cycles Exceed 30 Days
              </div>
              <p className="text-base text-foreground leading-relaxed">
                Infrastructure changes require rapid iteration. Slow approval chains stall implementation.
              </p>
            </div>
            <div className="border border-destructive/40 p-6 bg-destructive/5">
              <div className="font-mono text-sm uppercase tracking-widest text-destructive mb-3">
                No Single Ops Owner
              </div>
              <p className="text-base text-foreground leading-relaxed">
                Ownership ambiguity fragments scope. Someone must approve changes without committee.
              </p>
            </div>
            <div className="border border-destructive/40 p-6 bg-destructive/5">
              <div className="font-mono text-sm uppercase tracking-widest text-destructive mb-3">
                Unwilling to Consolidate Tools
              </div>
              <p className="text-base text-foreground leading-relaxed">
                Tool sprawl creates data fragmentation. Redundant systems get deprecated.
              </p>
            </div>
            <div className="border border-destructive/40 p-6 bg-destructive/5">
              <div className="font-mono text-sm uppercase tracking-widest text-destructive mb-3">
                Ground-Zero Builds
              </div>
              <p className="text-base text-foreground leading-relaxed">
                Existing systems only. No revenue infrastructure from scratch.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 border-2 border-destructive/50 bg-destructive/5">
            <p className="text-base text-foreground font-mono font-medium">
              Not all systems are eligible for intervention. We walk away early.
            </p>
          </div>
        </div>
      </Section>

      {/* Technical Architecture Diagram */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-5xl">
          <RevenueArchitectureDiagram />
        </div>
      </Section>

      {/* Proof Section — Diagnostic Patterns */}
      <Section className="border-t border-border">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Proof: Repeatable Corrections</h2>
          </div>

          <div className="grid gap-8">
            {proofSnapshots.map((snapshot, index) => (
              <div key={index} className="border border-border p-8">
                <div className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6">
                  {snapshot.client}
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-destructive mb-2">
                      What Broke
                    </div>
                    <p className="text-sm text-foreground">{snapshot.failure}</p>
                  </div>

                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      Constraint
                    </div>
                    <p className="text-sm text-muted-foreground">{snapshot.constraint}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                      Correction
                    </div>
                    <p className="text-sm text-foreground">{snapshot.correction}</p>
                  </div>

                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                      Pattern
                    </div>
                    <p className="text-sm font-medium text-foreground">{snapshot.pattern}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
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

      {/* Pipeline - Subtractive Clarity */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Implementation Pipeline</h2>
          </div>

          <div className="space-y-6">
            {pipeline.map((phase, index) => (
              <div key={index} className="border border-border bg-card p-8">
                <div className="flex items-start gap-6">
                  {/* Phase number */}
                  <div className="font-mono text-4xl font-bold text-primary/30 leading-none">
                    {phase.phase}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <h3 className="heading-subsection">{phase.title}</h3>
                      <div className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
                        {phase.duration}
                      </div>
                    </div>

                    {/* What gets eliminated */}
                    <div className="flex items-start gap-2 mb-4 p-3 bg-destructive/5 border border-destructive/20">
                      <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-destructive">Eliminates: </span>
                        <span className="text-sm text-foreground">{phase.eliminates}</span>
                      </div>
                    </div>

                    <p className="text-base text-foreground/80 mb-4 leading-relaxed">
                      {phase.description}
                    </p>

                    <div className="flex items-center gap-2 text-base font-mono text-primary">
                      <CheckCircle className="w-4 h-4" strokeWidth={2} />
                      <span className="font-semibold">{phase.output}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Operating Principle */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Operating Principle</h2>
          </div>
          <p className="text-description text-foreground mb-4">
            Revenue infrastructure should be predictable. Predictable systems are stable. Stable systems compound.
          </p>
          <p className="text-base text-muted-foreground">
            Excitement in revenue operations indicates instability. The goal is boring, repeatable execution.
          </p>
        </div>
      </Section>

      {/* Final CTA — Diagnostic Gravity */}
      <Section className="border-t border-border text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading-section mb-6">Measure Your System State</h2>
          <p className="text-description text-muted-foreground mb-10">
            5-minute diagnostic. Results are immediate. What you see may not be comfortable.
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