import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, FileText, BarChart3, Target, Clock, DollarSign, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA, ROUTES, TIMELINES, METRICS } from "@/lib/canonical-constants";

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
      title: "90-Day Fix Plan",
      description: "A prioritized roadmap: what to tackle first, how long each fix takes, what depends on what, and quick wins you can implement immediately."
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
    "90-day prioritized implementation roadmap",
    "Executive presentation and recommendations document",
    "30-day post-delivery Q&A support window"
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Revenue Systems Assessment | 2-Week Diagnostic | CWT Studio"
        description="Comprehensive 2-week revenue infrastructure audit. System scorecard, gap analysis, 90-day roadmap. Assessment fee credits 100% toward Sprint."
        keywords={[
          'revenue infrastructure assessment',
          'Salesforce systems audit',
          'technical maturity diagnostic',
          'RevOps assessment',
          '90-day roadmap'
        ]}
        canonicalUrl="/assessment"
        serviceSchema={{
          name: 'Infrastructure Assessment',
          description: 'Comprehensive 2-week revenue infrastructure diagnostic delivering system scorecard, gap analysis, and prioritized 90-day implementation roadmap.',
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
              name: '90-Day Implementation Roadmap',
              description: 'Prioritized deployment sequence with effort estimates and milestones'
            }
          ]
        }}
        faqSchema={[
          {
            question: 'What is a revenue infrastructure assessment?',
            answer: 'A comprehensive 2-week diagnostic audit of your revenue systems including CRM, marketing automation, and data infrastructure. Deliverables include a quantitative scorecard, gap analysis, risk assessment, and prioritized 90-day implementation roadmap.'
          },
          {
            question: 'How much does an infrastructure assessment cost?',
            answer: 'Assessment fees range from $1,500 to $3,000 based on infrastructure complexity. The entire fee credits 100% toward a Sprint engagement if booked within 90 days.'
          },
          {
            question: 'What is the difference between the free Health Check and paid Assessment?',
            answer: 'The free Health Check is a 5-minute self-guided quiz providing a high-level maturity score. The paid Assessment is a 2-week expert-led audit with stakeholder interviews, detailed scorecard, benchmarks, and custom 90-day roadmap.'
          },
          {
            question: 'Do I need an assessment before working with CWT Studio?',
            answer: 'Yes, we require an Infrastructure Assessment before any Sprint engagement. This ensures accurate scoping and sets realistic expectations. Start with the free Health Check to identify gaps, then book the full Assessment.'
          }
        ]}
      />
      
      <Breadcrumbs />
      
      {/* Hero */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <div className="system-status mb-8">DIAGNOSTIC</div>
          
          <h1 className="heading-page mb-6 leading-[1.1]">
            Find Out What's Breaking
          </h1>
          
          <p className="text-description text-foreground/80 leading-relaxed max-w-2xl mb-4">
            {TIMELINES.assessment} diagnostic audit. We map your revenue infrastructure, find what's broken, and build a 90-day fix plan.
          </p>

          <p className="text-description text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Required before Sprint engagement. Assessment fee credits 100% toward Sprint if you proceed within 90 days.
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
          <div className="border-2 border-destructive/50 bg-destructive/5 p-6">
            <h3 className="font-mono text-sm uppercase tracking-widest text-destructive mb-4">
              Do Not Book If
            </h3>
            <ul className="space-y-3 text-base text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">×</span>
                <span>Seeking validation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">×</span>
                <span>Unwilling to rebuild.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">×</span>
                <span>Comparing on price.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">×</span>
                <span>Nothing built yet.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">×</span>
                <span>Education without ownership transfer.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">×</span>
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
            <div className="grid sm:grid-cols-2 gap-4">
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
              <div key={index} className="border border-border bg-card p-8">
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

      {/* Investment & Credit Structure */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Investment & Credit Structure</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="border border-border bg-card p-6 text-center">
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="heading-subsection mb-2">$1,500 - $3,000</div>
              <div className="text-description text-muted-foreground">
                Assessment fee based on infrastructure complexity
              </div>
            </div>

            <div className="border border-border bg-card p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="heading-subsection mb-2">{TIMELINES.assessment}</div>
              <div className="text-description text-muted-foreground">
                From kickoff to final roadmap delivery
              </div>
            </div>

            <div className="border border-border bg-card p-6 text-center">
              <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="heading-subsection mb-2">100% Credit</div>
              <div className="text-description text-muted-foreground">
                Full fee credited toward Sprint if booked within 90 days
              </div>
            </div>
          </div>

          <div className="border-2 border-primary/30 bg-primary/5 p-8">
            <p className="text-description text-foreground text-center max-w-2xl mx-auto font-medium">
              100% credited toward Sprint within 90 days.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 mb-8 font-mono text-sm uppercase tracking-widest">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
            <span className="text-primary font-semibold">Ready to Assess</span>
          </div>

          <h2 className="heading-section mb-6">Book Your Assessment</h2>
          <p className="text-description text-muted-foreground mb-10 max-w-2xl mx-auto">
            {TIMELINES.assessment} diagnostic audit. System scorecard, gap analysis, 90-day roadmap. Fee credits 100% toward Sprint.
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
