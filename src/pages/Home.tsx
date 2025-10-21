import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import SystemDiagram from "@/components/SystemDiagram";
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
import { ArrowRight, CheckCircle, X, Check, Target, FileText, TrendingUp, Shield, Clock, AlertCircle, Award } from "lucide-react";
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

  const services = [{
    title: "Assessment",
    description: "2-week diagnostic to map backend revenue systems with baseline KPIs and prioritized recommendations for stable growth.",
    price: "$1,500–$2,500 USD",
    note: "2-week diagnostic",
    cta: "Start Assessment",
    link: "/assessment"
  }, {
    title: "Sprint",
    description: "8–12-week implementation sprint where we install the infrastructure that compounds: CRM, RevOps architecture, automation, and documentation.",
    timeline: "8-12 weeks",
    price: "$9–18K USD",
    cta: "Start Your Sprint",
    link: "/sprint"
  }, {
    title: "Fractional Ops",
    description: "Ongoing fractional operations support for teams that need their systems maintained, optimized, and performance-driven.",
    price: "$4.5–10K/month USD",
    cta: "Apply Now",
    link: "/fractional"
  }];
  const proofStats = [{
    number: "60 → 30",
    label: "Days to close deals",
    detail: "Cut sales cycle in half"
  }, {
    number: "4x",
    label: "Outbound reply rate",
    detail: "vs industry 8-12%"
  }, {
    number: "$2.4M",
    label: "Pipeline visibility",
    detail: "Previously dark"
  }, {
    number: "100%",
    label: "Team adoption",
    detail: "Single source of truth"
  }];
  const beforeAfter = {
    before: ["Founder-led sales chaos", "Disconnected tooling", "Unreliable pipeline data"],
    after: ["Backend Revenue System", "Predictable pipeline", "Forecast you can defend"]
  };
  const assessmentDeliverables = ["Revenue Infrastructure Scorecard—tech, ops, pipeline", "Industry benchmarks and peer comparisons", "Prioritized 90-day roadmap with implementation sequence", "Executive presentation with leadership alignment"];
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
      
      {/* Hero */}
      <Section className="py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            {/* Urgency Signal */}
            <Badge variant="outline" className="mb-6 font-mono text-xs uppercase tracking-wider">
              <Clock className="w-3 h-3 mr-2" />
              Q1 2025 Planning • 2 December Spots Remaining
            </Badge>
            
            <h1 className="heading-page mb-6">
              The Competitive Advantage Is the Backend
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Install revenue infrastructure that compounds through documented systems and repeatable execution, delivering measurable outcomes in 90 days.
            </p>
            
            {/* Social Proof - Above the fold */}
            <div className="mb-8 p-4 border-l-4 border-primary bg-muted/30">
              <p className="text-sm italic text-foreground mb-2">
                "Cut our sales cycle from 60 to 30 days. Finally have pipeline data I can defend to the board."
              </p>
              <p className="text-xs font-mono text-muted-foreground">
                — VP Revenue Operations, B2B SaaS ($15M ARR)
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <ConversionOptimizedButton
                to="/assessment"
                ctaName="Hero - Start Your Assessment"
                location="Homepage Hero"
                size="lg"
              >
                Book Your Assessment
              </ConversionOptimizedButton>
              <ConversionOptimizedButton
                to="/sample-report"
                ctaName="Hero - View Sample Report"
                location="Homepage Hero"
                variant="outline"
                size="lg"
                showArrow={false}
              >
                See Sample Report
              </ConversionOptimizedButton>
            </div>
            
            {/* Trust Signals */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="font-mono">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span className="font-mono">Salesforce Certified</span>
              </div>
            </div>
          </div>
          
          <div>
            <SystemDiagram />
          </div>
        </div>
      </Section>

      {/* Transformation - Before/After */}
      <Section variant="muted" className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 font-mono text-xs uppercase tracking-wider">
              The Problem We Solve
            </Badge>
            <h2 className="heading-section mb-4">From Chaos to Compound Growth</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-background border-2 border-destructive/20 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="heading-subsection text-destructive">Before</h3>
              </div>
              <ul className="space-y-4">
                {beforeAfter.before.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* After */}
            <div className="bg-background border-2 border-primary p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="heading-subsection text-primary">After</h3>
              </div>
              <ul className="space-y-4">
                {beforeAfter.after.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section variant="muted" className="py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4 font-mono text-xs uppercase tracking-wider">
              Our Process
            </Badge>
            <h2 className="heading-section mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Three engagement models designed to meet you where you are—from diagnostic to full implementation to ongoing optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-background border-2 border-border p-8 rounded-lg flex flex-col hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-mono font-bold text-primary">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="heading-subsection">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.timeline && (
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-mono text-foreground">{service.timeline}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-mono text-primary font-bold">{service.price}</span>
                  </div>
                </div>
                
                <div className="flex-grow" />
                
                <Button asChild className="w-full" size="lg">
                  <Link to={service.link}>{service.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Assessment Details - Visual & Prominent */}
      <Section className="py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 font-mono text-xs uppercase tracking-wider">
              2-Week Diagnostic
            </Badge>
            <h2 className="heading-section mb-4">What You Get in Your Assessment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Walk away with a complete roadmap to stable, scalable revenue operations—no fluff, just the infrastructure blueprint.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <StandardCard className="hover-lift border-l-4 border-primary">
              <StandardCardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <StandardCardTitle className="heading-subsection">Revenue Infrastructure Scorecard</StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent>
                <p className="text-muted-foreground">
                  Tech, ops, and pipeline audit with baseline KPIs benchmarked against industry standards
                </p>
              </StandardCardContent>
            </StandardCard>
            
            <StandardCard className="hover-lift border-l-4 border-primary">
              <StandardCardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <StandardCardTitle className="heading-subsection">Industry Benchmarks</StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent>
                <p className="text-muted-foreground">
                  Peer comparisons showing where you stand and what top performers are doing differently
                </p>
              </StandardCardContent>
            </StandardCard>
            
            <StandardCard className="hover-lift border-l-4 border-primary">
              <StandardCardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <StandardCardTitle className="heading-subsection">90-Day Roadmap</StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent>
                <p className="text-muted-foreground">
                  Prioritized implementation sequence with clear milestones and resource requirements
                </p>
              </StandardCardContent>
            </StandardCard>
            
            <StandardCard className="hover-lift border-l-4 border-primary">
              <StandardCardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <StandardCardTitle className="heading-subsection">Executive Presentation</StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent>
                <p className="text-muted-foreground">
                  Board-ready deck with leadership alignment and investment justification
                </p>
              </StandardCardContent>
            </StandardCard>
          </div>
          
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-muted/50 rounded-lg border border-primary/20">
              <span className="font-mono text-2xl font-bold text-primary">$1,500–$2,500</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">2 weeks</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">100% satisfaction guarantee</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConversionOptimizedButton
                to="/assessment"
                ctaName="Assessment CTA - Book Now"
                location="Assessment Details Section"
                size="lg"
              >
                Book Your Assessment
              </ConversionOptimizedButton>
              <ConversionOptimizedButton
                to="/sample-report"
                ctaName="Assessment - View Sample"
                location="Assessment Details Section"
                variant="outline"
                size="lg"
                showArrow={false}
              >
                See Sample Report
              </ConversionOptimizedButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Proof - Real Results */}
      <Section className="py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 font-mono text-xs uppercase tracking-wider">
              Real Results
            </Badge>
            <h2 className="heading-section mb-4">By the Numbers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measurable outcomes from clients who installed backend revenue systems—not vanity metrics, actual operational improvements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {proofStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 p-8 bg-muted/30 rounded-lg border-2 border-primary/20 hover-lift">
                  <div className="text-4xl font-bold font-mono text-primary mb-2">{stat.number}</div>
                  <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.detail}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <ConversionOptimizedButton
              to="/proof"
              ctaName="By Numbers - See Proof"
              location="By Numbers Section"
              size="lg"
            >
              Read Full Case Studies
            </ConversionOptimizedButton>
          </div>
        </div>
      </Section>

      {/* Final CTA with Risk Reversal */}
      <Section variant="muted" className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 font-mono text-xs uppercase tracking-wider">
            Limited Availability
          </Badge>
          <h2 className="heading-section mb-6">Ready to Install Your Backend?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We take 3 new clients per quarter to ensure quality execution. December spots are filling—book your assessment now.
          </p>
          
          {/* Risk Reversal */}
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-background border-2 border-primary/20 rounded-lg mb-8">
            <Shield className="w-6 h-6 text-primary" />
            <div className="text-left">
              <div className="font-semibold text-foreground">100% Satisfaction Guarantee</div>
              <div className="text-sm text-muted-foreground">If you're not satisfied with your assessment, we'll refund it completely.</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConversionOptimizedButton
              to="/assessment"
              ctaName="Final CTA - Book Assessment"
              location="Final CTA Section"
              size="lg"
            >
              Book Your Assessment
            </ConversionOptimizedButton>
            <ConversionOptimizedButton
              to="/contact"
              ctaName="Final CTA - Contact"
              location="Final CTA Section"
              variant="outline"
              size="lg"
              showArrow={false}
            >
              Ask a Question
            </ConversionOptimizedButton>
          </div>
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
