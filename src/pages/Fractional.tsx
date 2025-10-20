import { Button } from "@/components/ui/button";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { RotateCcw, Target, BarChart3, Settings, Users, Clock, CheckCircle } from "lucide-react";
import { ICON_SIZES, ICON_STROKE } from "@/lib/icon-config";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
const Fractional = () => {
  const services = [{
    icon: BarChart3,
    title: "Monthly Reviews",
    description: "Performance analysis. Pipeline health. Optimization opportunities."
  }, {
    icon: Settings,
    title: "Infrastructure Optimization",
    description: "Continuous improvement. Process refinement. System tuning."
  }, {
    icon: Target,
    title: "Strategic Alignment",
    description: "Quarterly planning. Align ops with business objectives."
  }, {
    icon: Users,
    title: "Team Development",
    description: "Ongoing training. Documentation. Best practices."
  }];
  const deliverables = ["Monthly operating review with scorecard", "Quarterly strategic planning sessions", "Continuous infrastructure optimization", "Tool evaluation and integration", "Team training and enablement", "Executive reporting with insights"];
  const timeline = [{
    period: "Month 1",
    focus: "Baseline & Strategic Planning",
    activities: "Current state assessment, priority alignment, stakeholder onboarding"
  }, {
    period: "Month 2-3",
    focus: "Infrastructure Optimization",
    activities: "System enhancements, process refinement, training deployment"
  }, {
    period: "Month 4+",
    focus: "Scale Enablement",
    activities: "Growth preparation, advanced automation, strategic executive partnership"
  }];
  return <div className="min-h-screen">
      <SEOHead title="Fractional Revenue Operations | CWT Studio Continuous Optimization" description="Ongoing fractional operations support for teams that need their systems maintained, optimized, and performance-driven." keywords={['fractional revenue operations', 'continuous system optimization', 'backend systems maintenance', 'Salesforce managed services', 'monthly operations rhythm']} canonicalUrl="/fractional" />
      <script type="application/ld+json">
        {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Fractional Revenue Operations",
        "provider": {
          "@type": "ProfessionalService",
          "name": "CWT Studio"
        },
        "serviceType": "Ongoing Revenue Operations Management",
        "description": "Monthly operations rhythm with continuous optimization, system health monitoring, and performance iteration",
        "offers": {
          "@type": "Offer",
          "priceRange": "$4500-$10000",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "unitText": "per month"
          }
        },
        "areaServed": ["United States", "Canada"]
      })}
      </script>
      
      <Breadcrumbs />
      
      <Section>
        {/* Hero */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="system-status mb-6">
            CONTINUOUS OPTIMIZATION
          </div>
          <h1 className="heading-page mb-6">
            Fractional Ops
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Ongoing fractional operations support for teams that need their systems maintained, optimized, and performance-driven.
          </p>
        </div>

        {/* Value Proposition */}
        <div className="mt-24">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <RotateCcw className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="heading-section mb-4">Post-Sprint Operations</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Your infrastructure is installed. Now scale it. Monthly ops rhythm to optimize, iterate, and compound performance.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mt-24">
          <h2 className="heading-section mb-8 text-foreground">What's Included</h2>
          <div className="grid md:grid-cols-2 gutter-standard">
            {services.map((service, index) => <StandardCard key={index} variant="bordered" equalHeight>
                <StandardCardHeader>
                  <StandardCardTitle className="flex items-center gap-3 text-primary">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon size={ICON_SIZES.medium} strokeWidth={ICON_STROKE.default} className="text-primary" />
                    </div>
                    {service.title}
                  </StandardCardTitle>
                </StandardCardHeader>
                <StandardCardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </StandardCardContent>
              </StandardCard>)}
          </div>
        </div>

        {/* Deliverables */}
        <div className="mt-24">
          <h2 className="heading-subsection mb-8">Monthly Deliverables</h2>
          <div className="space-y-3">
            {deliverables.map((item, index) => <div key={index} className="flex items-center">
                <CheckCircle size={ICON_SIZES.small} strokeWidth={ICON_STROKE.default} className="text-primary mr-3 flex-shrink-0" aria-hidden="true" />
                <span className="text-foreground">{item}</span>
              </div>)}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <h2 className="heading-subsection mb-8">How It Works</h2>
          <div className="space-y-6">
            {timeline.map((phase, index) => <div key={index} className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <h3 className="font-mono font-bold text-lg">{phase.focus}</h3>
                      <Badge className="text-xs bg-muted text-muted-foreground w-fit">
                        {phase.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{phase.activities}</p>
                  </div>
                </div>
                
                {/* Connection line */}
                {index < timeline.length - 1 && <div className="absolute left-6 top-12 w-px h-6 bg-border" />}
              </div>)}
          </div>
        </div>

        {/* Pricing with Mobile Optimization */}
        <div className="mt-24">
          <div className="bg-card border border-border rounded-lg p-6 sm:p-8 text-center">
            <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
            <h2 className="heading-subsection mb-2">Monthly Price</h2>
            <p className="text-2xl sm:text-3xl font-bold text-primary mb-2 tabular-nums">$4.5–10K/month</p>
            <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">USD</p>
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border">
              <p className="text-xs sm:text-sm text-muted-foreground font-mono">
                <span className="text-primary font-semibold">Six-month minimum commitment</span> required for engagement
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                e.g. Monthly ops rhythm for a $4M ARR SaaS firm post-sprint.
              </p>
            </div>
          </div>
          
          {/* Recent Outcome */}
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <div className="w-1 h-full bg-accent rounded-full mt-1" />
                <div>
                  <p className="text-xs font-mono font-bold text-accent mb-2">RECENT OUTCOME</p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Subscription Legal | Fractional Ops:</strong> Reclaimed $500/hr partner time through subscription model automation. 
                    Live dashboards now track subscribers, usage patterns, and churn risk in real-time. 
                    Atlanta pilot validated unit economics for geographic expansion. Framework proven and ready to scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="mt-24">
          <div className="space-y-4">
            <Button variant="ghost" size="sm" asChild>
              
            </Button>
            
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="heading-subsection mb-4">Requirements</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Completed Sprint or equivalent install
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Operational infrastructure in production
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Internal stakeholder for collaboration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Six-month minimum commitment
                </li>
              </ul>
              
              
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h3 className="heading-subsection mb-4">Ready to Scale Your Systems?</h3>
            <p className="text-muted-foreground mb-6">Six-month minimum commitment • $4.5–10K/month</p>
            <Button size="lg" asChild>
              <Link to="/contact?interest=fractional&source_page=fractional">
                Apply for Fractional Ops
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Requires completed Sprint or equivalent system installation
            </p>
          </div>
        </div>
      </Section>
    </div>;
};
export default Fractional;