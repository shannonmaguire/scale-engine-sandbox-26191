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

const Sprint = () => {
  const whatYouGet = [
    "Outbound engine with email sequences and lead scoring",
    "Campaign funnels with multi-touch attribution",
    "System integrations and data synchronization",
    "Revenue dashboards and forecasting models",
    "Pipeline governance and data quality controls",
    "Complete process documentation and training"
  ];

  const timeline = [
    {
      week: "Week 1",
      title: "Foundation",
      outputs: "Infrastructure audit, data cleanup, baseline metrics"
    },
    {
      week: "Week 2-3", 
      title: "Build",
      outputs: "Process automation, dashboard architecture, integrations"
    },
    {
      week: "Week 4-5",
      title: "Validation", 
      outputs: "Testing, workflow optimization, training materials"
    },
    {
      week: "Week 6-7",
      title: "Deployment",
      outputs: "Production launch, team onboarding, documentation"
    },
    {
      week: "Week 8",
      title: "Optimization",
      outputs: "Performance tuning, feedback integration, handoff"
    }
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
          name: 'Revenue System Sprint',
          description: '8-12 week implementation sprint to install complete revenue infrastructure including CRM optimization, automation, dashboards, and full documentation.',
          provider: 'CWT Studio'
        }}
      />
      
      <Breadcrumbs />
      
      <Section>
        {/* Hero */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="system-status mb-6">RAPID DEPLOYMENT</div>
          <h1 className="heading-page mb-6">Sprint</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            8–12-week implementation sprint to install complete revenue infrastructure: CRM, automation, dashboards, and documentation that powers repeatable revenue.
          </p>
          
          {/* Key Info Pills */}
          <div className="flex flex-wrap justify-center gap-3 text-sm mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
              <Clock size={16} className="text-primary" />
              <span className="font-mono">8-12 weeks</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
              <CheckCircle2 size={16} className="text-primary" />
              <span className="font-mono">Custom pricing*</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
              <CheckCircle2 size={16} className="text-primary" />
              <span className="font-mono text-xs">Requires Assessment</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact?interest=sprint&source_page=sprint">Start Your Sprint</Link>
            </Button>
          </div>
        </div>

        {/* Service Journey Flow */}
        <div className="max-w-4xl mx-auto mb-16">
          <ServiceJourneyFlow 
            steps={[
              { name: "Assessment", href: "/assessment", completed: true },
              { name: "Sprint", href: "/sprint", current: true },
              { name: "Fractional Ops", href: "/fractional" }
            ]}
          />
        </div>

        {/* What You Get */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="heading-subsection mb-8">What You Get</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 items-stretch">
            {whatYouGet.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 sm:p-6 border border-border rounded-lg bg-card">
                <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground text-sm sm:text-base leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="heading-subsection mb-6">Timeline</h2>
          <div className="space-y-4">
            {timeline.map((phase, index) => (
              <div key={index} className="border-l-2 sm:border-l-4 border-primary pl-4 sm:pl-6 py-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="font-bold text-base sm:text-lg">{phase.title}</h3>
                  <Badge variant="outline" className="text-xs font-mono self-start sm:self-auto">
                    {phase.week}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base">{phase.outputs}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prerequisites */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="heading-subsection mb-6">Prerequisites</h2>
          <div className="grid gap-2 sm:gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0" />
              <span className="text-muted-foreground text-sm sm:text-base">Completed Assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0" />
              <span className="text-muted-foreground text-sm sm:text-base">Executive commitment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0" />
              <span className="text-muted-foreground text-sm sm:text-base">Cross-team stakeholders</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0" />
              <span className="text-muted-foreground text-sm sm:text-base">System admin access</span>
            </div>
          </div>
        </div>

        {/* Investment Approach */}
        <div className="max-w-3xl mx-auto mb-16">
          <StandardCard variant="bordered" className="border-primary/30">
            <StandardCardContent className="p-8 text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="heading-subsection mb-2">Custom Pricing</h2>
              <p className="text-muted-foreground mb-6">Pricing determined after Assessment phase. <strong>Assessment fee ($4,500+) credits 100% toward Sprint.</strong></p>
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 text-left">
                <p className="text-xs font-mono font-bold text-accent mb-2">RECENT OUTCOME</p>
                <p className="text-sm text-muted-foreground">
                  <strong>Legal Boutique:</strong> Built complete subscription pipeline system in 8 weeks. 
                  Installed multi-touch outbound engine, automated workflows, and real-time dashboards. 
                  Pipeline velocity increased 3x in first 90 days.
                </p>
              </div>
            </StandardCardContent>
          </StandardCard>
        </div>

        {/* Client Testimonials */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="heading-subsection mb-8">Client Results</h2>
          <Testimonials 
            testimonials={[
              {
                quote: "CWT Studio built our entire subscription pipeline in 8 weeks. The outbound engine, automated workflows, and real-time dashboards transformed how we track revenue. Our pipeline velocity tripled in the first 90 days.",
                author: "Founding Partner",
                role: "Founding Partner",
                company: "Legal Boutique",
                outcome: "Multi-touch outbound engine installed. Automated workflows eliminated manual tracking. Pipeline velocity increased 3x in first 90 days."
              }
            ]}
          />
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/10 to-background border-2 border-primary rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Install Your Infrastructure?</h3>
            <p className="text-muted-foreground mb-6">8-12 weeks • Custom pricing • Requires completed Assessment</p>
            <Button size="lg" asChild>
              <Link to="/contact?interest=sprint&source_page=sprint">Start Your Sprint</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Sprint;
