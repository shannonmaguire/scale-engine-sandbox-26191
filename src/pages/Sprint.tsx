import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import { Zap, Target, BarChart3, Settings, Shield, Monitor, CheckCircle, Clock, DollarSign, Search, RotateCcw, ArrowRight } from "lucide-react";
import { ICON_SIZES } from "@/lib/icon-config";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BackButton } from "@/components/BackButton";

const Sprint = () => {
  const workstreams = [
    {
      icon: Target,
      title: "Outbound Engine",
      description: "Email sequences, lead scoring models, cadence optimization, and conversion tracking to drive pipeline velocity."
    },
    {
      icon: BarChart3,
      title: "Campaign Funnels", 
      description: "Multi-touch attribution frameworks, conversion analytics, and funnel performance optimization for clear ROI visibility."
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Platform connectivity, data synchronization, workflow orchestration, and integration architecture for seamless operations."
    },
    {
      icon: Monitor,
      title: "Revenue Dashboards",
      description: "Real-time reporting infrastructure, forecasting models, and executive performance scorecards for data-driven decisions."
    },
    {
      icon: Shield,
      title: "Pipeline Governance",
      description: "Stage definitions, progression criteria, data quality controls, and compliance frameworks to protect revenue integrity."
    }
  ];

  const timeline = [
    {
      week: "Week 1",
      title: "Foundation",
      outputs: "Infrastructure audit, data remediation, baseline metric establishment"
    },
    {
      week: "Week 2-3", 
      title: "Build",
      outputs: "Process automation implementation, dashboard architecture, integration deployment"
    },
    {
      week: "Week 4-5",
      title: "Validation", 
      outputs: "User acceptance testing, workflow optimization, training material development"
    },
    {
      week: "Week 6-7",
      title: "Deployment",
      outputs: "Production go-live, team onboarding, comprehensive process documentation"
    },
    {
      week: "Week 8",
      title: "Optimization",
      outputs: "Performance tuning, stakeholder feedback integration, operational handoff"
    }
  ];

  const prerequisites = [
    {
      title: "Completed Assessment",
      description: "Prior assessment or equivalent diagnostic work"
    },
    {
      title: "Executive Commitment",
      description: "Leadership support for process change"
    },
    {
      title: "Cross-Team Stakeholders",
      description: "Representatives from each affected team"
    },
    {
      title: "System Access",
      description: "Admin credentials for all integrated platforms"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="90-Day Revenue System Sprint | CWT Studio"
        description="8–12-week implementation sprint where we install the infrastructure that compounds: CRM, RevOps architecture, automation, and documentation that powers repeatable revenue."
        keywords={[
          '90-day system installation',
          'revenue infrastructure sprint',
          'Salesforce optimization sprint',
          'backend systems implementation',
          'outbound engine installation'
        ]}
        canonicalUrl="/sprint"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "90-Day Revenue System Sprint",
          "provider": {
            "@type": "ProfessionalService",
            "name": "CWT Studio"
          },
          "serviceType": "Revenue Infrastructure Implementation",
          "description": "Six to eight week system installation with outbound engines, dashboards, automation, and pipeline governance",
          "offers": {
            "@type": "Offer",
            "priceRange": "$9000-$18000",
            "priceCurrency": "USD"
          },
          "areaServed": ["United States", "Canada"],
          "timeToComplete": "P8W"
        })}
      </script>
      
      <Breadcrumbs />
      
      <Section>
        <BackButton to="/services">Back to All Services</BackButton>

        {/* Hero - Centered */}
        <div className="text-center spacing-element max-w-3xl mx-auto">
          <div className="system-status mb-6">RAPID DEPLOYMENT</div>
          <h1 className="heading-page mb-6">Sprint</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            8–12-week implementation sprint where we install the infrastructure that compounds: CRM, RevOps architecture, automation, and documentation that powers repeatable revenue.
          </p>
          
          {/* Key Info Pills */}
          <div className="flex flex-wrap justify-center gutter-tight text-sm mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
              <Clock size={16} className="text-primary" />
              <span className="font-mono">8-12 weeks</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
              <DollarSign size={16} className="text-primary" />
              <span className="font-mono">$9–18K</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
              <Target size={16} className="text-primary" />
              <span className="font-mono">5 workstreams</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact?interest=sprint&source_page=sprint">Start Your Sprint</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#what-we-ship">See What's Included</a>
            </Button>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="spacing-subsection">
          <div className="bg-card border border-border rounded-lg p-8 text-center max-w-4xl mx-auto">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="heading-section heading-spacing">Revenue Infrastructure, Installed Fast</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              You've identified the gaps. Now install the systems. 8–12-week implementation sprint to build complete backend revenue infrastructure—CRM, RevOps architecture, automation, and documentation. No rip-and-replace. No multi-month delays.
            </p>
          </div>
        </div>

        {/* What We Ship */}
        <div className="spacing-subsection" id="what-we-ship">
          <h2 className="heading-section heading-spacing text-center">What We Ship</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gutter-standard">
            {workstreams.map((stream, index) => (
              <StandardCard key={index} variant="bordered" equalHeight>
                <StandardCardHeader>
                  <StandardCardTitle className="flex items-center gap-3 text-primary">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stream.icon size={ICON_SIZES.medium} className="text-primary" />
                    </div>
                    {stream.title}
                  </StandardCardTitle>
                </StandardCardHeader>
                <StandardCardContent>
                  <p className="text-muted-foreground leading-relaxed">{stream.description}</p>
                </StandardCardContent>
              </StandardCard>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="spacing-subsection">
          <h2 className="heading-section heading-spacing text-center">Timeline</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((phase, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-6">
                  {/* Numbered badge - smaller */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-mono font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <div className="flex-1 bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="heading-subsection">{phase.title}</h3>
                      <Badge variant="outline" className="text-xs font-mono">
                        {phase.week}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{phase.outputs}</p>
                  </div>
                </div>
                
                {/* Stronger connection line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-5 top-10 w-px h-6 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Prerequisites */}
        <div className="spacing-subsection">
          <h2 className="heading-section heading-spacing text-center">Prerequisites</h2>
          
          <div className="grid md:grid-cols-2 gutter-standard max-w-5xl mx-auto">
            {prerequisites.map((item, index) => (
              <StandardCard key={index} variant="bordered" className="group hover:border-primary/30 transition-colors">
                <StandardCardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle size={ICON_SIZES.large} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </StandardCardContent>
              </StandardCard>
            ))}
          </div>
        </div>

        {/* Investment & Impact */}
        <div className="spacing-subsection">
          <h2 className="heading-section heading-spacing text-center">Investment & Impact</h2>
          
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left: Investment */}
              <div className="p-12 space-y-8">
                <div className="flex items-center gap-3">
                  <Zap className="w-10 h-10 text-primary" />
                  <h3 className="heading-subsection text-primary">Sprint Investment</h3>
                </div>
                
                <div>
                  <p className="text-5xl font-bold text-primary mb-2 tabular-nums">$9–18K</p>
                  <p className="text-muted-foreground text-lg">USD</p>
                </div>
                
                <div className="bg-background/50 rounded-lg p-6 border border-border">
                  <p className="text-sm font-mono">
                    <span className="text-primary font-semibold">Assessment credit:</span> Your assessment fee is fully applied to this engagement.
                  </p>
                </div>
              </div>
              
              {/* Right: Metrics */}
              <div className="bg-card/50 p-12 border-l border-border space-y-8">
                <h3 className="heading-subsection">Performance Impact</h3>
                
                <div className="space-y-10">
                  <div className="border-l-4 border-primary pl-6">
                    <div className="text-4xl font-bold text-primary mb-2 tabular-nums">90%+</div>
                    <p className="text-muted-foreground leading-relaxed">User adoption in first 30 days post-deployment</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6">
                    <div className="text-4xl font-bold text-primary mb-2 tabular-nums">50%+</div>
                    <p className="text-muted-foreground leading-relaxed">Improvement in pipeline visibility and forecast accuracy</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6">
                    <div className="text-4xl font-bold text-primary mb-2 tabular-nums">2-3x</div>
                    <p className="text-muted-foreground leading-relaxed">Faster reporting cycles and data-driven insights</p>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-border space-y-4">
                  <Button size="lg" className="w-full" asChild>
                    <Link to="/contact?interest=sprint&source_page=sprint">Start Your Sprint</Link>
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Completed Assessment required • 8-12 week timeline
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Outcome - Tighter Integration */}
          <div className="mt-6 max-w-4xl mx-auto">
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-1 h-full bg-accent rounded-full flex-shrink-0" />
                <div>
                  <p className="text-xs font-mono font-bold text-accent mb-2">RECENT OUTCOME</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Legal Boutique | Subscription Growth:</strong> Built complete subscription pipeline system in 8 weeks. 
                    Installed multi-touch outbound engine, automated workflows, and real-time dashboards. 
                    Pipeline velocity increased 3x in first 90 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Comparison - Enhanced */}
        <div className="spacing-subsection">
          <h2 className="heading-section heading-spacing text-center">How Sprint Fits</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Assessment */}
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Search size={24} className="text-primary" />
                </div>
                <h3 className="font-mono font-bold mb-2">
                  <Link to="/assessment" className="text-primary hover:underline">
                    Assessment
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Diagnostic phase. Identifies gaps and priorities.
                </p>
                <p className="text-xs font-mono text-muted-foreground">
                  Prerequisite for Sprint
                </p>
              </div>
              
              {/* Sprint - VISUALLY DOMINANT */}
              <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-mono font-bold">
                    CURRENT SERVICE
                  </span>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-3 mt-2">
                  <Zap size={24} className="text-primary" />
                </div>
                <h3 className="font-mono font-bold mb-2 text-primary">Sprint</h3>
                <p className="text-sm text-foreground mb-3">
                  Installation phase. Builds complete infrastructure.
                </p>
                <p className="text-xs font-mono text-primary font-semibold">
                  8-12 weeks • $9–18K
                </p>
              </div>
              
              {/* Fractional Ops */}
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <RotateCcw size={24} className="text-primary" />
                </div>
                <h3 className="font-mono font-bold mb-2">
                  <Link to="/fractional" className="text-primary hover:underline">
                    Fractional Ops
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Operations phase. Continuous optimization.
                </p>
                <p className="text-xs font-mono text-muted-foreground">
                  Post-Sprint operations
                </p>
              </div>
            </div>
            
            {/* Visual flow indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <div className="w-12 h-1 bg-primary/30 rounded" />
              <ArrowRight className="text-primary" size={20} />
              <div className="w-12 h-1 bg-primary rounded" />
              <ArrowRight className="text-primary" size={20} />
              <div className="w-12 h-1 bg-primary/30 rounded" />
            </div>
            <p className="text-xs text-center text-muted-foreground mt-4 font-mono">
              Assessment → Sprint → Fractional Ops
            </p>
            
            {/* Integrated navigation */}
            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Want to compare all services or start with a diagnostic?
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/assessment">Start with Assessment</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/services">Compare All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Sprint;
