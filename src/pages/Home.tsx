import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { useExitIntent } from "@/hooks/useExitIntent";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { SocialProof } from "@/components/SocialProof";
import { ChatWidget } from "@/components/ChatWidget";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
import { EngagementTracker } from "@/components/EngagementTracker";
import CookieBanner from "@/components/CookieBanner";
import { OptimizedImage } from "@/components/OptimizedImage";
import { X, Check, Target, FileText, TrendingUp, Shield, Zap, Clock } from "lucide-react";
import { ICON_SIZES, ICON_STROKE } from "@/lib/icon-config";
import { useState } from "react";

const Home = () => {
  // Performance monitoring
  usePerformanceMonitoring();
  
  // Track scroll depth for engagement
  useScrollDepth();
  
  // Exit intent popup state
  const [showExitPopup, setShowExitPopup] = useState(false);
  
  useExitIntent({
    enabled: true,
    onExitIntent: () => setShowExitPopup(true),
  });

  const beforeAfter = {
    before: ["Founder-led sales chaos", "Disconnected tooling", "Unreliable pipeline data"],
    after: ["Backend Revenue System", "Predictable pipeline", "Forecast you can defend"]
  };

  const assessmentDeliverables = [
    {
      icon: Target,
      title: "Revenue Infrastructure Scorecard",
      description: "Complete audit of tech, ops, and pipeline health"
    },
    {
      icon: TrendingUp,
      title: "Industry Benchmarks",
      description: "See how you stack up against peers"
    },
    {
      icon: FileText,
      title: "90-Day Roadmap",
      description: "Prioritized implementation sequence"
    },
    {
      icon: Shield,
      title: "Executive Presentation",
      description: "Alignment deck for leadership"
    }
  ];

  const services = [{
    title: "Assessment",
    description: "2-week diagnostic to map backend revenue systems with baseline KPIs and prioritized recommendations.",
    price: "$1,500–$2,500",
    timeline: "2 weeks",
    cta: "Start Assessment",
    link: "/assessment"
  }, {
    title: "Sprint",
    description: "8–12-week implementation sprint where we install the infrastructure that compounds.",
    timeline: "8-12 weeks",
    price: "$9–18K",
    cta: "Start Your Sprint",
    link: "/sprint"
  }, {
    title: "Fractional Ops",
    description: "Ongoing fractional operations support for teams that need systems maintained and optimized.",
    price: "$4.5–10K/month",
    timeline: "Ongoing",
    cta: "Apply Now",
    link: "/fractional"
  }];

  return <div className="min-h-screen">
      <EngagementTracker />
      <CookieBanner />
      <SEOHead
        title="Backend Revenue Systems | CWT Studio"
        description="Install backend revenue systems. Salesforce optimization, outbound engines, pipeline governance in 90 days."
        keywords={[
          'backend revenue systems',
          'revenue infrastructure',
          'Salesforce optimization',
          '90-day system installation'
        ]}
      />
      
      {/* Hero - Pain → Transformation */}
      <Section className="min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge variant="outline" className="mb-6">
              <Clock className="w-3 h-3 mr-1" />
              Limited spots • Book your assessment in December
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Pipeline Is Lying<br />
              <span className="text-primary">Your Forecast Is Guesswork</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Stop firefighting. Install backend revenue systems that turn chaos into predictable growth—in 90 days.
            </p>

            {/* Before → After */}
            <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="border border-destructive/20 bg-destructive/5 rounded-lg p-6 text-left">
                <div className="flex items-center gap-2 mb-4">
                  <X className="w-5 h-5 text-destructive" />
                  <span className="font-semibold text-sm uppercase tracking-wider">You Today</span>
                </div>
                <ul className="space-y-2">
                  {beforeAfter.before.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-primary/20 bg-primary/5 rounded-lg p-6 text-left">
                <div className="flex items-center gap-2 mb-4">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm uppercase tracking-wider">You in 90 Days</span>
                </div>
                <ul className="space-y-2">
                  {beforeAfter.after.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConversionOptimizedButton
                to="/assessment"
                ctaName="Hero - Start Assessment"
                location="Homepage Hero"
                size="lg"
                className="text-lg px-8 py-6"
              >
                Get Your Free Assessment
              </ConversionOptimizedButton>
              <ConversionOptimizedButton
                to="/sample-report"
                ctaName="Hero - View Sample Report"
                location="Homepage Hero"
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
                showArrow={false}
              >
                See Sample Report
              </ConversionOptimizedButton>
            </div>
          </div>
        </div>
      </Section>

      {/* What You Get - Assessment Deliverables */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You Get in Your Assessment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete diagnostic of your revenue infrastructure in 2 weeks—no fluff, just actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {assessmentDeliverables.map((item, i) => (
              <div key={i} className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-background border border-primary/20 rounded-lg p-6 mb-6">
              <div className="text-sm text-muted-foreground mb-1">Investment</div>
              <div className="text-3xl font-bold text-primary">$1,500–$2,500</div>
              <div className="text-xs text-muted-foreground mt-1">2-week turnaround</div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConversionOptimizedButton
                to="/assessment"
                ctaName="Assessment - Book Now"
                location="Assessment Deliverables"
                size="lg"
              >
                Book Your Assessment
              </ConversionOptimizedButton>
              <Button asChild variant="ghost" size="lg">
                <Link to="/sample-report">View Sample Report</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Founder Credibility */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[200px,1fr] gap-8 items-center">
            <div className="mx-auto md:mx-0">
              <OptimizedImage
                src="/src/assets/shannon-founder.png"
                alt="Shannon Greenberg, Founder of CWT Studio"
                className="w-40 h-40 rounded-full object-cover border-4 border-primary/20"
                width={160}
                height={160}
              />
            </div>
            <div>
              <Badge variant="outline" className="mb-3">Founder</Badge>
              <h2 className="text-2xl font-bold mb-3">Shannon Greenberg</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Former Salesforce consultant turned fractional RevOps operator. I've built backend systems for Series A–C SaaS companies, cutting sales cycles by 50% and turning messy pipelines into forecasts leadership can actually trust.
              </p>
              <p className="text-sm text-muted-foreground italic">
                "Most companies have tools. Few have systems. I install the systems."
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" size="sm">
                  <Link to="/about">More About Shannon</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* How We Work */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">How We Work</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Start with an assessment. Scale with a sprint. Maintain with fractional ops.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-6 flex flex-col hover:border-primary/50 transition-colors">
                <div className="font-mono text-xs text-muted-foreground mb-3">
                  STEP {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-4 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Timeline</span>
                    <span className="font-mono">{service.timeline}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Investment</span>
                    <span className="font-mono font-semibold text-primary">{service.price}</span>
                  </div>
                </div>
                
                <Button asChild className="w-full" size="sm">
                  <Link to={service.link}>{service.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Social Proof - Real Results */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Real Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="border-l-4 border-primary pl-6 text-left">
              <div className="text-4xl font-bold text-primary mb-2">60 → 30</div>
              <div className="text-sm text-muted-foreground">Days cut from sales cycle for Series B SaaS</div>
            </div>
            
            <div className="border-l-4 border-primary pl-6 text-left">
              <div className="text-4xl font-bold text-primary mb-2">4x</div>
              <div className="text-sm text-muted-foreground">Outbound reply rate increase with proper infrastructure</div>
            </div>
            
            <div className="border-l-4 border-primary pl-6 text-left">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Team adoption of single source of truth</div>
            </div>
          </div>

          <ConversionOptimizedButton
            to="/proof"
            ctaName="Results - View Case Studies"
            location="Results Section"
            variant="outline"
          >
            Read Full Case Studies
          </ConversionOptimizedButton>
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="muted" className="text-center">
        <div className="max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-6">
            <Zap className="w-3 h-3 mr-1" />
            December availability
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Stop Guessing.<br />Start Growing.
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Book your 2-week assessment and get the roadmap that turns your revenue chaos into a system you can scale.
          </p>

          <ConversionOptimizedButton
            to="/assessment"
            ctaName="Final CTA - Book Assessment"
            location="Final CTA Section"
            size="lg"
            className="text-lg px-8 py-6"
          >
            Book Your Assessment
          </ConversionOptimizedButton>
        </div>
      </Section>

      {/* Exit Intent Popup */}
      <ExitIntentPopup
        isOpen={showExitPopup}
        onClose={() => setShowExitPopup(false)}
        title="Wait! Get Our Free Guide"
        description="Join friends and clients getting our comprehensive revenue operations assessment framework."
        ctaText="Send Me The Guide"
      />
      
      {/* Social Proof Notifications */}
      <SocialProof />
      
      {/* Chat Widget */}
      <ChatWidget />
    </div>;
};
export default Home;
