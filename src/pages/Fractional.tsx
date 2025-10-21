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
  const whatYouGet = [
    "Monthly operating review with performance scorecard",
    "Continuous system optimization and refinement",
    "Quarterly strategic planning sessions",
    "Team training and documentation",
    "Executive reporting with actionable insights"
  ];

  return <div className="min-h-screen">
      <SEOHead title="Fractional Revenue Operations | CWT Studio" description="Ongoing operations support for teams that need their systems maintained, optimized, and performance-driven. Starting at $6K/month with six-month minimum." keywords={['fractional revenue operations', 'continuous system optimization', 'backend systems maintenance', 'Salesforce managed services']} canonicalUrl="/fractional" />
      
      <Breadcrumbs />
      
      <Section>
        {/* Hero */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="system-status mb-6">CONTINUOUS OPTIMIZATION</div>
          <h1 className="heading-page mb-6">Fractional Ops</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your infrastructure is installed. Fractional ops keeps it optimized, maintained, and compounding performance through a monthly operating rhythm.
          </p>
        </div>

        {/* What You Get */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="heading-subsection mb-6">What You Get</h2>
          <div className="space-y-3">
            {whatYouGet.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="heading-subsection mb-6">How It Works</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-bold text-lg mb-2">Month 1: Baseline & Strategic Planning</h3>
              <p className="text-muted-foreground">
                Current state assessment, priority alignment, stakeholder onboarding
              </p>
            </div>
            <div className="border-l-4 border-primary/60 pl-6">
              <h3 className="font-bold text-lg mb-2">Months 2-3: Infrastructure Optimization</h3>
              <p className="text-muted-foreground">
                System enhancements, process refinement, training deployment
              </p>
            </div>
            <div className="border-l-4 border-primary/30 pl-6">
              <h3 className="font-bold text-lg mb-2">Month 4+: Scale Enablement</h3>
              <p className="text-muted-foreground">
                Growth preparation, advanced automation, strategic executive partnership
              </p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="max-w-3xl mx-auto mb-16">
          <StandardCard variant="bordered" className="border-primary/30">
            <StandardCardContent className="p-8 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="heading-subsection mb-2">Monthly Investment</h2>
              <p className="text-3xl font-bold text-primary mb-2 tabular-nums">From $6K/month</p>
              <p className="text-sm text-muted-foreground mb-6">Six-month minimum commitment</p>
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 text-left">
                <p className="text-xs font-mono font-bold text-accent mb-2">RECENT OUTCOME</p>
                <p className="text-sm text-muted-foreground">
                  <strong>Subscription Legal:</strong> Reclaimed $500/hr partner time through subscription model automation. 
                  Live dashboards now track subscribers, usage patterns, and churn risk in real-time. 
                  Atlanta pilot validated unit economics for geographic expansion.
                </p>
              </div>
            </StandardCardContent>
          </StandardCard>
        </div>

        {/* Requirements */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="heading-subsection mb-6">Requirements</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-muted-foreground">Completed Sprint or equivalent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-muted-foreground">Infrastructure in production</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-muted-foreground">Internal stakeholder</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-muted-foreground">Six-month commitment</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/10 to-background border-2 border-primary rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Systems?</h3>
            <p className="text-muted-foreground mb-6">Six-month minimum • From $6K/month</p>
            <Button size="lg" asChild>
              <Link to="/contact?interest=fractional&source_page=fractional">
                Apply for Fractional Ops
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>;
};
export default Fractional;