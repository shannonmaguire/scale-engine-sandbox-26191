import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { RevenueArchitectureDiagram } from "@/components/RevenueArchitectureDiagram";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
import { EngagementTracker } from "@/components/EngagementTracker";
import CookieBanner from "@/components/CookieBanner";
import { CheckCircle, ArrowRight, AlertCircle, Database, Zap, FileText, BarChart3 } from "lucide-react";
import { CTA, ROUTES, METRICS, TIMELINES } from "@/lib/canonical-constants";

const Home = () => {
  usePerformanceMonitoring();
  useScrollDepth();

  const infrastructureFailures = [
    "Revenue forecasting built from spreadsheet assumptions rather than system data",
    "Sales operations concentrated in single-founder dependency",
    "Pipeline administration consuming 15-20 hours weekly on manual updates",
    "CRM underperforming due to incomplete process mapping and data fragmentation",
    "No handoff documentation—systems knowledge exists only in individual memory"
  ];

  const icpTriggers = [
    { label: "Forecast Blind", description: "Board asks for pipeline projections. You extrapolate from memory." },
    { label: "Manual Operations", description: "Weekly pipeline updates consume 15+ hours of administrative overhead." },
    { label: "Founder Dependency", description: "Revenue operations knowledge concentrated in one person's head." },
    { label: "CRM Underperforming", description: "Salesforce exists but doesn't reflect how deals actually move." }
  ];

  const proofSnapshots = [
    {
      client: "Cybersecurity SaaS ($4.2M ARR)",
      before: "20 hrs/week manual pipeline updates",
      after: "Automated tracking—real-time visibility",
      metric: "95% time reduction"
    },
    {
      client: "Legal Tech Platform ($2.8M ARR)",
      before: "Forecast built from spreadsheets",
      after: "Board-ready forecast with confidence intervals",
      metric: "3-day → 30-min reporting"
    },
    {
      client: "Compliance Software ($3.5M ARR)",
      before: "One founder owns all ops knowledge",
      after: "Documented systems anyone can execute",
      metric: "Zero single points of failure"
    }
  ];

  const pipeline = [
    {
      phase: "01",
      title: "Infrastructure Assessment",
      duration: TIMELINES.assessment,
      output: "Revenue Infrastructure Scorecard + 90-day roadmap",
      description: "Paid diagnostic audit mapping current state against industry benchmarks. Delivers prioritized implementation sequence. (Start with free 5-min Health Check)"
    },
    {
      phase: "02", 
      title: "Sprint",
      duration: "8-12 weeks",
      output: "Installed infrastructure + handoff documentation",
      description: "Fixed-scope implementation. CRM configuration, automation build, reporting dashboards, process documentation."
    },
    {
      phase: "03",
      title: "Fractional Ops",
      duration: "6+ months",
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
        description="We design how your revenue systems work. Then we build them. 90-day implementations for legal, compliance, and healthcare teams."
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
            We design how your revenue systems work. Then we build them.
          </h1>

          <p className="text-description text-muted-foreground mb-6 max-w-2xl">
            Outbound. Acquisition. Operations. For legal, compliance, and healthcare teams.
          </p>

          <p className="font-mono text-sm text-foreground/60 mb-10">
            // assessment → sprint → operations
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <ConversionOptimizedButton
              to={ROUTES.assessment}
              ctaName="Hero - Free Health Check"
              location="Homepage Hero"
              size="lg"
            >
              {CTA.takeHealthCheck}
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
            Operational failures without infrastructure:
          </p>

          <div className="grid gap-4">
            {infrastructureFailures.map((failure, index) => (
              <div key={index} className="flex items-start gap-4 p-4 border-l-2 border-destructive/30 bg-card/50">
                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" strokeWidth={2} />
                <p className="text-base text-foreground leading-relaxed">{failure}</p>
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

      {/* Exclusion Filter - Do Not Engage If */}
      <Section className="border-t border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-destructive" />
            <h2 className="heading-section">Do Not Engage If</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-destructive/40 p-6 bg-destructive/5">
              <div className="font-mono text-sm uppercase tracking-widest text-destructive mb-3">
                No Reversibility
              </div>
              <p className="text-base text-foreground leading-relaxed">
                Permanent infrastructure only.
              </p>
            </div>
            <div className="border border-destructive/40 p-6 bg-destructive/5">
              <div className="font-mono text-sm uppercase tracking-widest text-destructive mb-3">
                No Feature Comparisons
              </div>
              <p className="text-base text-foreground leading-relaxed">
                Not a vendor RFP.
              </p>
            </div>
            <div className="border border-destructive/40 p-6 bg-destructive/5">
              <div className="font-mono text-sm uppercase tracking-widest text-destructive mb-3">
                Existing Systems Only
              </div>
              <p className="text-base text-foreground leading-relaxed">
                No ground-zero builds.
              </p>
            </div>
            <div className="border border-destructive/40 p-6 bg-destructive/5">
              <div className="font-mono text-sm uppercase tracking-widest text-destructive mb-3">
                No Validation
              </div>
              <p className="text-base text-foreground leading-relaxed">
                Diagnosis only.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 border-2 border-destructive/50 bg-destructive/5">
            <p className="text-base text-foreground font-mono font-medium">
              Not all systems are eligible for intervention.
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

      {/* Proof Section - Before → After Snapshots */}
      <Section className="border-t border-border">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Proof</h2>
          </div>

          <div className="grid gap-8">
            {proofSnapshots.map((snapshot, index) => (
              <div key={index} className="border border-border p-8">
                <div className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6">
                  {snapshot.client}
                </div>

                <div className="grid md:grid-cols-[1fr,auto,1fr] gap-6 items-center">
                  {/* Before */}
                  <div>
                    <div className="font-mono text-sm uppercase tracking-widest text-destructive mb-3 font-semibold">
                      Before
                    </div>
                    <p className="text-base text-[hsl(var(--foreground-subtle))]">
                      {snapshot.before}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="w-6 h-6 text-primary hidden md:block" strokeWidth={2} />

                  {/* After */}
                  <div>
                    <div className="font-mono text-sm uppercase tracking-widest text-primary mb-3 font-semibold">
                      After
                    </div>
                    <p className="text-base font-medium text-foreground">
                      {snapshot.after}
                    </p>
                  </div>
                </div>

                {/* Metric */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-mono text-xl font-bold text-primary">
                    {snapshot.metric}
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

      {/* Pipeline - Assessment → Sprint → Fractional Ops */}
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

      {/* Final CTA */}
      <Section className="border-t border-border text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading-section mb-6">Start With Free Health Check</h2>
          <p className="text-description text-muted-foreground mb-4">
            5-minute self-assessment identifies your revenue systems gaps. Then book our {TIMELINES.assessment} Infrastructure Assessment for detailed roadmap.
          </p>
          <p className="text-description text-muted-foreground mb-10 italic">
            Assessment fee credits 100% toward Sprint engagement.
          </p>

          <ConversionOptimizedButton
            to={ROUTES.assessment}
            ctaName="Final CTA - Free Health Check"
            location="Final CTA Section"
            size="lg"
          >
            {CTA.takeHealthCheck}
          </ConversionOptimizedButton>
        </div>
      </Section>
    </div>
  );
};

export default Home;
