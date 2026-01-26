import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, FileText, BarChart3, Target, X } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA, TIMELINES } from "@/lib/canonical-constants";

const InfrastructureAssessment = () => {
  const deliverables = [
    {
      icon: BarChart3,
      title: "System Health Report",
      description: "We score how well your tools are working: data accuracy, automation reliability, how well your systems talk to each other, and whether your team is actually using them."
    },
    {
      icon: Target,
      title: "What's Broken & What It's Costing You",
      description: "A clear list of what needs fixing, what's risky, why your team isn't adopting tools, and what happens if you don't act."
    },
    {
      icon: FileText,
      title: "Implementation Pathway",
      description: "A prioritized roadmap with two clear paths forward: a focused implementation engagement or an enterprise architecture engagement."
    }
  ];

  const process = [
    {
      phase: "Week 1",
      title: "Discovery & Audit",
      activities: [
        "System access and stakeholder interviews",
        "Configuration audit and data quality analysis",
        "Workflow documentation and bottleneck mapping",
        "Integration inventory and API assessment"
      ]
    },
    {
      phase: "Week 2",
      title: "Analysis & Roadmap",
      activities: [
        "Benchmark comparison and maturity scoring",
        "Gap prioritization and effort estimation",
        "Roadmap development and milestone sequencing",
        "Executive readout and recommendations delivery"
      ]
    }
  ];

  const included = [
    "System configuration audit (CRM, marketing automation, data infrastructure)",
    "Stakeholder interviews (3-5 key operators)",
    "Benchmark analysis against industry standards",
    "Technical debt and risk assessment",
    "Prioritized implementation roadmap",
    "Executive presentation and recommendations document",
    "30-day post-delivery Q&A support window"
  ];

  const outcomes = [
    {
      title: "Implementation Engagement",
      scope: "Your systems work but need fixes",
      description: "Workflow automation, data cleanup, integration repair, process optimization. Typically 4-8 weeks."
    },
    {
      title: "Enterprise Architecture",
      scope: "Your foundation needs rebuilding",
      description: "Complete system redesign, multi-platform integration, custom development. Typically 3-6 months."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="System Audit | CWT Studio"
        description="2-week audit. We diagnose where deals stall, forecasts fail, and customers lose trust."
        keywords={[
          'systems audit',
          'revenue systems diagnostic',
          'technical maturity assessment',
          'RevOps assessment',
          'implementation roadmap'
        ]}
        canonicalUrl="/assessment"
        serviceSchema={{
          name: 'System Audit',
          description: 'Comprehensive 2-week systems diagnostic delivering system scorecard, gap analysis, and prioritized implementation pathway.',
          offers: [
            {
              name: 'Revenue Infrastructure Scorecard',
              description: 'Quantitative audit across data, automation, integration, governance, reporting, and adoption'
            },
            {
              name: 'Gap Analysis & Risk Assessment',
              description: 'Technical debt inventory and system vulnerability mapping'
            },
            {
              name: 'Implementation Pathway',
              description: 'Clear path to implementation or enterprise architecture engagement'
            }
          ]
        }}
        faqSchema={[
          {
            question: 'What is a revenue infrastructure assessment?',
            answer: 'A comprehensive 2-week diagnostic audit of your revenue systems including CRM, marketing automation, and data infrastructure. Deliverables include a quantitative scorecard, gap analysis, risk assessment, and prioritized implementation pathway.'
          },
          {
            question: 'How is the assessment scoped?',
            answer: 'Assessment scope is determined during the initial conversation based on infrastructure complexity. This is a required entry point before any implementation engagement.'
          },
          {
            question: 'What happens after the assessment?',
            answer: 'The assessment ends in one of two outcomes: an implementation engagement for focused fixes, or an enterprise architecture engagement for foundational rebuilds.'
          },
          {
            question: 'Do I need an assessment before working with CWT Studio?',
            answer: 'Yes. We start with the assessment. This ensures accurate scoping, sets realistic expectations, and qualifies whether we are the right fit for each other.'
          }
        ]}
      />
      
      <Breadcrumbs />
      
      {/* Hero */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <div className="system-status mb-8">REVENUE INFRASTRUCTURE ASSESSMENT</div>
          
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">
            For teams where broken systems mean lost deals
          </p>
          
          <h1 className="heading-page mb-6 leading-[1.1]">
            Find Out What's Breaking
          </h1>
          
          <p className="text-description text-foreground/80 leading-relaxed max-w-2xl mb-4">
            {TIMELINES.assessment} diagnostic audit. We find what's breaking your growth—system bottlenecks, data leaks, process gaps—and a clear path to fix them.
          </p>

          <p className="text-description text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Required entry point. We start with the assessment.
          </p>

          <Button size="lg" asChild>
            <Link to="/contact?interest=assessment&source_page=assessment">
              {CTA.bookAssessment}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Exclusion Warning */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-4xl">
          <div className="border-2 border-destructive/50 bg-destructive/5 p-4 md:p-6">
            <h3 className="font-mono text-sm uppercase tracking-widest text-destructive mb-4">
              Do Not Book If
            </h3>
            <ul className="space-y-2 text-base text-foreground">
              <li className="flex items-start gap-3 min-h-[44px] py-2">
                <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                <span>Seeking validation.</span>
              </li>
              <li className="flex items-start gap-3 min-h-[44px] py-2">
                <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                <span>Unwilling to rebuild.</span>
              </li>
              <li className="flex items-start gap-3 min-h-[44px] py-2">
                <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                <span>Comparing on price.</span>
              </li>
              <li className="flex items-start gap-3 min-h-[44px] py-2">
                <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                <span>Nothing built yet.</span>
              </li>
              <li className="flex items-start gap-3 min-h-[44px] py-2">
                <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                <span>Education without ownership transfer.</span>
              </li>
              <li className="flex items-start gap-3 min-h-[44px] py-2">
                <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                <span>Addicted to optionality.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">What's Included</h2>
          </div>

          <div className="space-y-6 mb-10">
            {deliverables.map((item, index) => (
              <div key={index} className="border-l-4 border-primary pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                  <h3 className="heading-subsection">{item.title}</h3>
                </div>
                <p className="text-description text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="border border-border bg-card/50 p-8">
            <h3 className="heading-subsection mb-6">Complete Scope</h3>
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              {included.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <p className="text-description text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Process Timeline */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">{TIMELINES.assessment} Process</h2>
          </div>

          <div className="space-y-8">
            {process.map((phase, index) => (
              <div key={index} className="border border-border bg-card p-4 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-primary mb-1">
                      {phase.phase}
                    </div>
                    <h3 className="heading-subsection">{phase.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {phase.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-description text-foreground">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>


      {/* Step-Up Structure */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">What Happens Next</h2>
          </div>

          <p className="text-description text-foreground/80 mb-8 max-w-2xl">
            The assessment determines which path fits your situation. We recommend one of two engagements based on what we find:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((outcome, index) => (
              <div key={index} className="border-2 border-primary/30 bg-primary/5 p-6 md:p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                  {outcome.scope}
                </p>
                <h3 className="heading-subsection mb-4">{outcome.title}</h3>
                <p className="text-description text-muted-foreground">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-description text-muted-foreground mt-8 text-center">
            The assessment report includes a clear recommendation for which path applies to you.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 mb-8 font-mono text-sm uppercase tracking-widest">
            <span className="text-primary font-semibold">Start Here</span>
          </div>

          <h2 className="heading-section mb-6">Book Your Assessment</h2>
          <p className="text-description text-muted-foreground mb-10 max-w-2xl mx-auto">
            {TIMELINES.assessment} diagnostic audit. System scorecard, gap analysis, implementation pathway.
          </p>

          <Button size="lg" asChild>
            <Link to="/contact?interest=assessment&source_page=assessment">
              {CTA.bookAssessment}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default InfrastructureAssessment;
