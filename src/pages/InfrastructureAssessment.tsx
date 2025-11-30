import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, FileText, BarChart3, Target, Clock, DollarSign, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA, ROUTES, TIMELINES, METRICS } from "@/lib/canonical-constants";
import { AssessmentComparisonTable } from "@/components/AssessmentComparisonTable";

const InfrastructureAssessment = () => {
  const deliverables = [
    {
      icon: BarChart3,
      title: "Revenue Infrastructure Scorecard",
      description: "Quantitative audit across data quality, automation maturity, integration architecture, governance standards, reporting accuracy, and user adoption metrics."
    },
    {
      icon: Target,
      title: "Gap Analysis & Risk Assessment",
      description: "Technical debt inventory, system vulnerability mapping, adoption blocker identification, and cost-of-inaction projections for each identified gap."
    },
    {
      icon: FileText,
      title: "90-Day Implementation Roadmap",
      description: "Prioritized deployment sequence with effort estimates, dependency mapping, quick-win identification, and phased rollout milestones."
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
        title="Infrastructure Assessment | 2-Week Revenue Systems Diagnostic | CWT Studio"
        description="Comprehensive 2-week revenue infrastructure audit. System scorecard, gap analysis, 90-day roadmap. Assessment fee credits 100% toward Sprint engagement."
        keywords={[
          'revenue infrastructure assessment',
          'Salesforce systems audit',
          'technical maturity diagnostic',
          'RevOps assessment',
          '90-day roadmap'
        ]}
        canonicalUrl="/infrastructure-assessment"
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
      />
      
      <Breadcrumbs />
      
      {/* Hero */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 mb-8 font-mono text-xs uppercase tracking-widest">
            <span className="text-primary font-semibold">PAID DIAGNOSTIC</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">Duration: {TIMELINES.assessment}</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">{METRICS.feeCredit}</span>
          </div>
          
          <h1 className="heading-page mb-6 leading-[1.1]">
            Infrastructure Assessment
          </h1>
          
          <p className="text-description text-foreground/80 leading-relaxed max-w-2xl mb-4">
            Comprehensive {TIMELINES.assessment} diagnostic audit of your revenue infrastructure. Delivers quantitative scorecard, gap analysis, and prioritized 90-day implementation roadmap.
          </p>

          <p className="text-description text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Required before Sprint engagement. Assessment fee credits 100% toward Sprint if you proceed within 90 days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/contact?interest=assessment&source_page=infrastructure-assessment">
                {CTA.bookAssessment}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to={ROUTES.assessment}>{CTA.takeHealthCheck}</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Free Quiz vs Paid Assessment */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Free Quiz vs Paid Assessment</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border bg-card p-6">
              <div className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Free Health Check
              </div>
              <h3 className="heading-subsection mb-4">5-Minute Self-Assessment</h3>
              <ul className="space-y-3 text-description text-muted-foreground mb-6">
                <li>• Self-guided 18-question quiz</li>
                <li>• Instant maturity score (0-36 scale)</li>
                <li>• High-level category breakdown</li>
                <li>• General recommendations</li>
                <li>• No cost, no commitment</li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link to={ROUTES.assessment}>Take Free Quiz</Link>
              </Button>
            </div>

            <div className="border-2 border-primary bg-card p-6 relative">
              <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 text-xs font-mono font-semibold uppercase">
                Recommended
              </div>
              <div className="font-mono text-sm uppercase tracking-widest text-primary mb-4">
                Infrastructure Assessment
              </div>
              <h3 className="heading-subsection mb-4">{TIMELINES.assessment} Deep Diagnostic</h3>
              <ul className="space-y-3 text-description text-foreground mb-6">
                <li>• Expert-led system audit</li>
                <li>• Quantitative scorecard with benchmarks</li>
                <li>• Detailed gap analysis and risk assessment</li>
                <li>• Custom 90-day implementation roadmap</li>
                <li>• {METRICS.feeCredit} toward Sprint</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/contact?interest=assessment&source_page=infrastructure-assessment">
                  Book Assessment
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 p-6 bg-muted/30 border border-border">
            <p className="text-description text-foreground font-mono">
              <strong>Recommended path:</strong> Start with free Health Check to identify gaps, then book Infrastructure Assessment for detailed roadmap and Sprint eligibility.
            </p>
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
              <div className="heading-subsection mb-2">$4,500 - $7,500</div>
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
            <h3 className="heading-subsection mb-4 text-center">Credit Example</h3>
            <div className="max-w-2xl mx-auto space-y-4 text-description font-mono">
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-muted-foreground">Infrastructure Assessment</span>
                <span className="text-foreground font-semibold">$6,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-muted-foreground">Sprint Engagement (base)</span>
                <span className="text-foreground">$45,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-muted-foreground">Assessment Credit Applied</span>
                <span className="text-primary font-semibold">-$6,000</span>
              </div>
              <div className="flex justify-between items-center pt-3">
                <span className="text-foreground font-bold">Net Sprint Investment</span>
                <span className="text-foreground font-bold text-xl">$39,000</span>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6 italic">
              Assessment becomes free if you proceed to Sprint within 90 days
            </p>
          </div>
        </div>
      </Section>

      {/* Service Comparison */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Compare Your Options</h2>
          </div>
          
          <p className="text-description text-muted-foreground mb-10 max-w-3xl">
            Start with the free Health Check, upgrade to the Infrastructure Assessment for a deep-dive audit, or go straight to the Sprint for full implementation.
          </p>

          <AssessmentComparisonTable />
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
          <p className="text-description text-muted-foreground mb-4 max-w-2xl mx-auto">
            {TIMELINES.assessment} diagnostic audit. System scorecard, gap analysis, 90-day roadmap. Fee credits 100% toward Sprint.
          </p>
          <p className="text-description text-muted-foreground mb-10 max-w-2xl mx-auto italic">
            Not sure yet? Start with our free 5-minute Health Check to identify your gaps.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact?interest=assessment&source_page=infrastructure-assessment">
                {CTA.bookAssessment}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to={ROUTES.assessment}>{CTA.takeHealthCheck}</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default InfrastructureAssessment;
