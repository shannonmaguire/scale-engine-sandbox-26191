import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import { Zap, Target, BarChart3, Settings, Shield, Monitor, CheckCircle, CheckCircle2, Clock, DollarSign, Search, RotateCcw, ArrowRight } from "lucide-react";
import { ICON_SIZES } from "@/lib/icon-config";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BackButton } from "@/components/BackButton";
import { Testimonials } from "@/components/Testimonials";
import { ServiceJourneyFlow } from "@/components/ServiceJourneyFlow";
import { CTA, ROUTES, TIMELINES, METRICS } from "@/lib/canonical-constants";

const Sprint = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      duration: "Week 1-2",
      description: "System audit, data model design, baseline measurement, technical requirements."
    },
    {
      phase: "Phase 2",
      title: "Build",
      duration: "Week 3-6",
      description: "Workflow configuration, automation logic, integration architecture, dashboard framework."
    },
    {
      phase: "Phase 3",
      title: "Validation",
      duration: "Week 7-8",
      description: "System testing, load simulation, edge case handling, performance verification."
    },
    {
      phase: "Phase 4",
      title: "Deployment",
      duration: "Week 9-10",
      description: "Production rollout, team onboarding, process documentation, monitoring activation."
    },
    {
      phase: "Phase 5",
      title: "Optimization",
      duration: "Week 11-12",
      description: "Performance tuning, feedback integration, handoff protocols, post-launch support."
    }
  ];

  const deliverables = [
    "Phase 1 stabilizes data. No automation until data model holds.",
    "Phase 2 builds integration architecture. CRM, marketing automation, third-party systems.",
    "Phase 3 validates under load. No production until edge cases handled.",
    "Phase 4 deploys and documents. Your team runs it. We move on."
  ];

  const outcomes = [
    { label: "Load Tolerance", description: "Infrastructure scaled to handle 3-5x current pipeline volume without performance degradation." },
    { label: "Reliable Reporting", description: "Real-time dashboards replacing manual report generation and memory-based forecasting." },
    { label: "Founder Offload", description: "Critical revenue operations executing without founder intervention or manual override." }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="90-Day Revenue System Sprint | CWT Studio"
        description="8-12 week implementation sprint: install CRM infrastructure, automation, dashboards, and documentation. Complete revenue systems."
        keywords={[
          '90-day system installation',
          'revenue infrastructure sprint',
          'Salesforce implementation',
          'backend systems deployment',
          'RevOps automation'
        ]}
        canonicalUrl="/sprint"
        type="service"
        serviceSchema={{
          name: '90-Day Revenue System Sprint',
          description: '8-12 week implementation sprint to install complete revenue infrastructure including CRM optimization, automation, dashboards, and full documentation.',
          offers: [
            {
              name: 'Foundation Phase',
              description: 'System audit, data model design, baseline measurement, technical requirements'
            },
            {
              name: 'Build Phase',
              description: 'Workflow configuration, automation logic, integration architecture, dashboard framework'
            },
            {
              name: 'Validation & Deployment',
              description: 'System testing, production rollout, team onboarding, process documentation'
            }
          ]
        }}
      />
      
      <Breadcrumbs />
      
      <Section className="border-b border-border">
      {/* Hero */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 mb-8 font-mono text-xs uppercase tracking-widest">
            <span className="text-primary font-semibold">DEPLOYMENT MANIFEST</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">Sprint v2.0</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">Duration: 90 Days</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">Scope: Fixed</span>
          </div>
          
          <h1 className="heading-page mb-6 leading-[1.1]">
            90-Day Revenue Sprint
          </h1>
          
          <p className="text-description text-foreground/80 leading-relaxed max-w-2xl mb-10">
            Engineering implementation. Fixed scope, documented handoff.
          </p>

          <Button size="lg" asChild>
            <Link to="/contact?interest=sprint&source_page=sprint">{CTA.startSprint}</Link>
          </Button>
        </div>
      </Section>

      {/* Deployment Timeline - Blueprint Style */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Deployment Sequence</h2>
          </div>

          <div className="border border-border/40 bg-card/50 p-8 font-mono text-sm leading-relaxed">
            {phases.map((phase, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-primary font-bold">├── [{String(index + 1).padStart(2, '0')}]</span>
                  <span className="text-foreground font-bold uppercase tracking-wide">{phase.title}</span>
                </div>
                <div className="ml-12 space-y-1 text-foreground/70">
                  <div>└── {phase.description}</div>
                  <div className="text-primary/70">└── Output: {phase.phase === "Phase 1" ? "Requirements specification" : 
                    phase.phase === "Phase 2" ? "Infrastructure deployed" : 
                    phase.phase === "Phase 3" ? "System validated" : 
                    phase.phase === "Phase 4" ? "Production live" : 
                    "Operations manual"}</div>
                </div>
              </div>
            ))}
            
            <div className="mt-8 pt-6 border-t border-border/40 text-xs text-muted-foreground uppercase tracking-widest">
              Fixed scope with documented handoff. No vendor lock-in.
            </div>
          </div>
        </div>
      </Section>

      {/* System Stack */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">System Stack</h2>
          </div>

          <div className="space-y-4">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                <p className="text-base text-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Expected Outcomes */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Expected Outcomes</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => (
              <div key={index} className="border border-border bg-card p-6">
                <div className="font-mono text-sm uppercase tracking-widest text-primary mb-3 font-semibold">
                  {outcome.label}
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 mb-8 font-mono text-sm uppercase tracking-widest">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
            <span className="text-primary font-semibold">Ready to Deploy</span>
          </div>

          <h2 className="heading-section mb-6">{CTA.startSprint}</h2>
          <p className="text-description text-muted-foreground mb-10 max-w-2xl mx-auto">
            {TIMELINES.sprint} deployment cycle. Assessment required. Fixed scope, documented handoff, operational infrastructure.
          </p>

          <Button size="lg" asChild>
            <Link to="/contact?interest=sprint&source_page=sprint">
              {CTA.startSprint}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Sprint;
