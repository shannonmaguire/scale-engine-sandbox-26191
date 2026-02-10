import { Section } from "@/components/ui/section";

import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { CTA, TIMELINES } from "@/lib/canonical-constants";

const InfrastructureAssessment = () => {
  const deliverables = [
    {
      title: "System Health Report",
      description: "Data accuracy, automation reliability, integration health, adoption rates."
    },
    {
      title: "What's Broken & What It's Costing You",
      description: "Gaps, risks, adoption failures, cost of inaction."
    },
    {
      title: "Implementation Pathway",
      description: "Two paths: focused implementation or enterprise architecture."
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
    "System configuration audit (sales tools, marketing automation, data infrastructure)",
    "Stakeholder interviews (3-5 key operators)",
    "Benchmark analysis against industry standards",
    "Technical debt and risk assessment",
    "Prioritized implementation roadmap",
    "Executive presentation and recommendations document",
    "30-day post-delivery Q&A support window"
  ];

  // VoC-grounded qualification patterns
  const qualificationPatterns = [
    {
      category: "DATA GOVERNANCE",
      question: "Do you manually import data into your systems via spreadsheet?",
      signal: "Asset records, serial numbers, product data entering the system without validation."
    },
    {
      category: "INTEGRATION",
      question: "Are your financial systems disconnected from your CRM?",
      signal: "Financial tools don't sync. Manual reconciliation."
    },
    {
      category: "ACCESS CONTROL",
      question: "Do team members share system credentials?",
      signal: "Shared logins, no audit trail, unclear who has access to what."
    },
    {
      category: "FOLLOW-UP",
      question: "Do leads come in without a clear owner or follow-up system?",
      signal: "Everything depends on memory. Deals go cold while the team argues about whose turn it was."
    },
    {
      category: "TOOL SPRAWL",
      question: "Do projects live across 4+ disconnected tools?",
      signal: "No single source of truth. 15 hours a week just figuring out what's happening."
    },
    {
      category: "BILLING GAP",
      question: "Do clients get onboarded before invoices are sent?",
      signal: "Operational access granted before payment collected. Revenue recognized, cash never arrives."
    }
  ];

  const outcomes = [
    {
      title: "Focused Implementation",
      scope: "Direct Delivery",
      badge: null as string | null,
      description: "Streamlined systems. 4-8 weeks."
    },
    {
      title: "Enterprise Architecture",
      scope: "Architect-Led Build",
      badge: null as string | null,
      description: "Full-scale system rebuild. 3-6 months. I remain your architect."
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
          
          <h1 className="heading-page mb-6 leading-[1.1]">
            Find Out What's Breaking
          </h1>
          
          <p className="text-description text-foreground/80 leading-relaxed max-w-2xl mb-10">
            {TIMELINES.assessment} diagnostic. System bottlenecks, data leaks, process gaps.
          </p>

          <ConversionOptimizedButton
            to="/contact?interest=assessment&source_page=assessment"
            ctaName="Assessment - Book Assessment Hero"
            location="Assessment Hero"
            size="lg"
          >
            {CTA.bookAssessment}
          </ConversionOptimizedButton>
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
              <li className="min-h-[44px] py-2">Seeking validation.</li>
              <li className="min-h-[44px] py-2">Unwilling to rebuild.</li>
              <li className="min-h-[44px] py-2">Comparing on price.</li>
              <li className="min-h-[44px] py-2">Nothing built yet.</li>
              <li className="min-h-[44px] py-2">Education without ownership transfer.</li>
              <li className="min-h-[44px] py-2">Addicted to optionality.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Qualification Patterns - VoC Based */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <h2 className="heading-section mb-10">Recognize Any of These?</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {qualificationPatterns.map((pattern, index) => (
              <div key={index} className="border border-border bg-card p-5">
                <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
                  {pattern.category}
                </div>
                <p className="text-base font-medium text-foreground mb-2">
                  {pattern.question}
                </p>
                <p className="text-sm text-muted-foreground">
                  {pattern.signal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <h2 className="heading-section mb-10">What's Included</h2>

          <div className="space-y-6 mb-10">
            {deliverables.map((item, index) => (
              <div key={index} className="border-l-4 border-primary pl-6">
                <h3 className="heading-subsection mb-3">{item.title}</h3>
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
                  <span className="font-mono text-primary text-sm flex-shrink-0">—</span>
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
          <h2 className="heading-section mb-10">{TIMELINES.assessment} Process</h2>

          <div className="space-y-8">
            {process.map((phase, index) => (
              <div key={index} className="border border-border bg-card p-4 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-2xl text-primary font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
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
                      <span className="font-mono text-primary text-sm flex-shrink-0">—</span>
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
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <div className="system-status mb-6">OUTCOMES</div>
          <h2 className="heading-section mb-4">What Happens Next</h2>

          <p className="text-description text-foreground/80 mb-8 max-w-2xl">
            We recommend one of two paths based on findings:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((outcome, index) => (
              <div key={index} className="border-2 border-primary/30 bg-primary/5 p-6 md:p-8 relative">
                {outcome.badge && (
                  <div className="absolute -top-3 right-4 bg-primary text-primary-foreground text-xs font-mono px-2 py-1">
                    {outcome.badge}
                  </div>
                )}
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
      <Section variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 mb-8 font-mono text-sm uppercase tracking-widest">
            <span className="text-primary font-semibold">Start Here</span>
          </div>

          <h2 className="heading-section mb-6">Book Your Assessment</h2>
          <p className="text-description text-muted-foreground mb-10 max-w-2xl mx-auto">
            {TIMELINES.assessment} diagnostic audit. System scorecard, gap analysis, implementation pathway.
          </p>

          <ConversionOptimizedButton
            to="/contact?interest=assessment&source_page=assessment"
            ctaName="Assessment - Book Assessment CTA"
            location="Assessment CTA"
            size="lg"
          >
            {CTA.bookAssessment}
          </ConversionOptimizedButton>
        </div>
      </Section>
    </div>
  );
};

export default InfrastructureAssessment;
