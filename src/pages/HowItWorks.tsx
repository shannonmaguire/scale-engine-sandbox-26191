import { Section } from "@/components/ui/section";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { CheckCircle, ArrowRight, Database, Zap, Target, FileText, BarChart3, Shield, Settings, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const deliverables = [
    {
      icon: Database,
      title: "Systems Architecture",
      description: "Revenue infrastructure mapped, documented, and optimized for scale. CRM configuration, data flows, integration points."
    },
    {
      icon: Zap,
      title: "Outbound Engine",
      description: "Prospecting sequences, cadence automation, performance tracking. Built to scale without adding headcount."
    },
    {
      icon: Settings,
      title: "CRM Remediation",
      description: "Clean data models, accurate pipeline stages, reliable forecasting. Fix what's broken, remove what's unused."
    },
    {
      icon: FileText,
      title: "Operational Framework",
      description: "SOPs, playbooks, and process documentation. Your team knows what to do and when to do it."
    },
    {
      icon: Target,
      title: "Pipeline Governance",
      description: "Stage definitions, exit criteria, velocity metrics. No more deals stuck in limbo or phantom pipeline."
    },
    {
      icon: BarChart3,
      title: "Founder-Level Reporting",
      description: "Revenue dashboards that show actual performance, not vanity metrics. Forecast vs. actuals, velocity, conversion."
    },
    {
      icon: GitBranch,
      title: "Documentation",
      description: "Complete handoff package: system architecture, process maps, training materials, update procedures."
    },
    {
      icon: Shield,
      title: "Performance Baselines",
      description: "Metrics snapshot on Day 1 vs. Day 90. Track improvement, measure ROI, prove value."
    }
  ];

  const timeline = [
    {
      week: "Weeks 1-2",
      phase: "Foundation",
      title: "Assessment & Planning",
      description: "Complete systems audit, identify breakage points, map current vs. target state. Create 90-day deployment plan.",
      outputs: ["Revenue Infrastructure Scorecard", "90-day roadmap", "System architecture documentation"]
    },
    {
      week: "Weeks 3-4",
      phase: "Build",
      title: "Core Infrastructure",
      description: "Install foundational systems: CRM remediation, data model cleanup, pipeline governance, baseline reporting.",
      outputs: ["Clean CRM configuration", "Pipeline stage definitions", "Initial dashboards"]
    },
    {
      week: "Weeks 5-7",
      phase: "Validation",
      title: "Automation & Integration",
      description: "Deploy outbound engine, connect integrations, automate manual workflows, build operational playbooks.",
      outputs: ["Outbound sequences live", "Integration flows active", "SOPs documented"]
    },
    {
      week: "Weeks 8-10",
      phase: "Deployment",
      title: "Training & Handoff",
      description: "Team training, documentation transfer, support handoff. Ensure adoption and operational continuity.",
      outputs: ["Team trained", "Documentation delivered", "Support handoff complete"]
    },
    {
      week: "Weeks 11-12",
      phase: "Optimization",
      title: "Performance Measurement",
      description: "Measure Day 90 performance vs. baseline, identify optimization opportunities, document results.",
      outputs: ["Performance comparison report", "Optimization roadmap", "Case study (if applicable)"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="How It Works | 90-Day Revenue Sprint Methodology | CWT Studio"
        description="90-day revenue infrastructure deployment. Assessment → Sprint → Deliverables → Handoff. Fixed scope, measurable outcomes, documented for operational transfer."
        keywords={[
          '90-day revenue sprint',
          'revenue infrastructure methodology',
          'Sprint implementation process',
          'revenue operations deployment'
        ]}
        canonicalUrl="/how-it-works"
      />

      <Breadcrumbs />

      {/* Hero */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="system-status mb-6">
            SPRINT METHODOLOGY
          </div>
          <h1 className="heading-page mb-6">
            How the 90-Day Revenue Sprint Works
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Fixed-scope revenue infrastructure deployment. Assessment identifies breakage points. Sprint installs fixes in 90-day cycles. Fractional Ops maintains performance after handoff.
          </p>
          <div className="flex gap-4 justify-center">
            <ConversionOptimizedButton
              to="/assessment"
              ctaName="How It Works - Start Assessment"
              location="how-it-works-hero"
              size="lg"
            >
              Start Your Sprint
            </ConversionOptimizedButton>
            <ConversionOptimizedButton
              to="/proof"
              ctaName="How It Works - View Proof"
              location="how-it-works-hero"
              variant="outline"
              size="lg"
            >
              View Proof
            </ConversionOptimizedButton>
          </div>
        </div>
      </Section>

      {/* The Sprint Method Overview */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-section mb-12 text-center">The Sprint Method</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <StandardCard variant="bordered" className="text-center">
              <StandardCardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-mono font-bold text-primary">1</span>
                </div>
                <StandardCardTitle>Assessment Required</StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  2-week diagnostic to scope your Sprint. $4,500+, credits 100% toward Sprint implementation.
                </p>
                <Badge variant="outline" className="text-xs">Entry Point</Badge>
              </StandardCardContent>
            </StandardCard>

            <StandardCard variant="bordered" className="text-center border-primary/40">
              <StandardCardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-3xl font-mono font-bold text-white">2</span>
                </div>
                <StandardCardTitle>90-Day Sprint</StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Install 8 core deliverables: systems architecture through performance baselines. Flagship product.
                </p>
                <Badge className="text-xs">Core Offering</Badge>
              </StandardCardContent>
            </StandardCard>

            <StandardCard variant="bordered" className="text-center">
              <StandardCardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-mono font-bold text-accent">3</span>
                </div>
                <StandardCardTitle>Fractional Ops</StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Optional post-Sprint support. Monthly optimization, performance monitoring, strategic planning.
                </p>
                <Badge variant="outline" className="text-xs">Optional</Badge>
              </StandardCardContent>
            </StandardCard>
          </div>

          <div className="mt-12 p-6 bg-card border-l-4 border-primary rounded-r-lg">
            <p className="font-mono font-bold text-foreground mb-2">One Product. Perfectly Executed.</p>
            <p className="text-sm text-muted-foreground">
              Assessment qualifies and scopes. Sprint delivers. Fractional Ops maintains. No multi-service confusion—just one flagship product with optional ongoing support.
            </p>
          </div>
        </div>
      </Section>

      {/* Sprint Deliverables */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">8 Core Sprint Deliverables</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every Sprint installs these foundational systems. No optional add-ons. No tiered packages. One scope, fully delivered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((deliverable, index) => {
              const Icon = deliverable.icon;
              return (
                <StandardCard key={index} variant="bordered" className="hover:border-primary/40 transition-colors">
                  <StandardCardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <StandardCardTitle className="text-lg mb-2">{deliverable.title}</StandardCardTitle>
                        <p className="text-sm text-muted-foreground">
                          {deliverable.description}
                        </p>
                      </div>
                    </div>
                  </StandardCardHeader>
                </StandardCard>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 90-Day Timeline */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">90-Day Implementation Timeline</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fixed 12-week deployment cycle. Each phase builds on the previous, with measurable outputs at every stage.
            </p>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Timeline indicator */}
                  <div className="flex-shrink-0">
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg">
                      <div className="font-mono text-xs text-primary uppercase tracking-wider">{item.week}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="text-xs">{item.phase}</Badge>
                      <h3 className="font-mono font-bold text-lg">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    
                    <div>
                      <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Key Outputs:</div>
                      <div className="flex flex-wrap gap-2">
                        {item.outputs.map((output, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs bg-muted px-3 py-1 rounded-full">
                            <CheckCircle className="w-3 h-3 text-primary" />
                            {output}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Assessment as Required First Step */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border-2 border-primary/20 rounded-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-mono font-bold text-xl mb-2">Assessment Required to Start</h3>
                <p className="text-muted-foreground">
                  Every Sprint begins with a 2-week Assessment. This isn't sold separately—it's the qualification and scoping phase.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6 pb-6 border-b">
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">What It Covers</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Complete systems audit
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Breakage point identification
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    90-day deployment roadmap
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Revenue Infrastructure Scorecard
                  </li>
                </ul>
              </div>

              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Investment</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    $4,500+ (based on complexity)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    100% credits toward Sprint
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    2-week turnaround
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Qualifies you for Sprint
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <ConversionOptimizedButton
                to="/assessment"
                ctaName="How It Works - Start Assessment CTA"
                location="how-it-works-assessment-section"
                size="lg"
              >
                Start Sprint Assessment
              </ConversionOptimizedButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Post-Sprint Support */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-4">After Your Sprint: Fractional Ops</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your 90-Day Sprint installed the infrastructure. Fractional Ops keeps it optimized, maintained, and compounding. Optional ongoing support available only after Sprint completion.
          </p>
          <div className="flex gap-4 justify-center">
            <ConversionOptimizedButton
              to="/fractional"
              ctaName="How It Works - Learn About Fractional Ops"
              location="how-it-works-fractional-section"
              variant="outline"
            >
              Learn About Post-Sprint Support
              <ArrowRight className="ml-2 h-4 w-4" />
            </ConversionOptimizedButton>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <div className="system-status mb-6">
            READY TO START
          </div>
          <h2 className="heading-section mb-4">Start Your 90-Day Revenue Sprint</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Begin with Assessment. Scope your Sprint. Install revenue infrastructure in 90 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConversionOptimizedButton
              to="/assessment"
              ctaName="How It Works - Final CTA Assessment"
              location="how-it-works-final-cta"
              size="lg"
            >
              Start Assessment
            </ConversionOptimizedButton>
            <ConversionOptimizedButton
              to="/sprint"
              ctaName="How It Works - Final CTA Sprint Details"
              location="how-it-works-final-cta"
              variant="outline"
              size="lg"
            >
              View Sprint Details
            </ConversionOptimizedButton>
          </div>
          <p className="text-xs text-muted-foreground mt-4 font-mono">
            2-week Assessment • $4,500+ • 100% credits to Sprint
          </p>
        </div>
      </Section>
    </div>
  );
};

export default HowItWorks;
