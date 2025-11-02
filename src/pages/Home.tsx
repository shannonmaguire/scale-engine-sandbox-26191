import { Button } from "@/components/ui/button";
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
import { FeaturedCaseStudy } from "@/components/FeaturedCaseStudy";
import { ArrowRight, CheckCircle, BarChart3, Target, Award, TrendingUp, Shield } from "lucide-react";
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
    timeline: "2 weeks",
    note: "Fixed scope, fixed price",
    cta: "Start Assessment",
    link: "/assessment"
  }, {
    title: "Sprint",
    description: "8–12-week implementation sprint where we install the infrastructure that compounds: CRM, RevOps architecture, automation, and documentation.",
    timeline: "8-12 weeks",
    note: "Custom pricing after Assessment",
    cta: "Start Your Sprint",
    link: "/sprint"
  }, {
    title: "Fractional Ops",
    description: "Ongoing fractional operations support for teams that need their systems maintained, optimized, and performance-driven.",
    timeline: "6+ months",
    note: "Custom engagement pricing",
    cta: "Apply Now",
    link: "/fractional"
  }];
  const proofStats = [{
    number: "5",
    label: "Systems Deployed"
  }, {
    number: ">40%",
    label: "Open Rates",
    subLabel: "vs 15-25% avg"
  }, {
    number: "107%",
    label: "Peak Growth Rate"
  }, {
    number: "$500K+",
    label: "Pipeline Activated"
  }];
  const beforeAfter = {
    before: [
      "Manual pipeline updates consuming 20+ hrs/week",
      "One founder owns all sales ops knowledge",
      "Forecast built from memory and best-guess spreadsheets",
      "Custom workflows that break when people leave"
    ],
    after: [
      "Automated pipeline tracking—real-time visibility",
      "Documented systems anyone on the team can run",
      "Board-ready forecast with confidence intervals",
      "Repeatable workflows that compound over time"
    ]
  };
  const assessmentDeliverables = ["Revenue Infrastructure Scorecard—tech, ops, pipeline", "Industry benchmarks and peer comparisons", "Prioritized 90-day roadmap with implementation sequence", "Executive presentation with leadership alignment"];
  return <div className="min-h-screen">
      <EngagementTracker />
      <CookieBanner />
      <SEOHead
        title="Backend Revenue Systems | CWT Studio"
        description="Install backend systems that scale without founder dependency. 90-day implementation for legal, compliance, cybersecurity, and B2B SaaS."
        keywords={[
          'backend revenue systems',
          'revenue infrastructure',
          'Salesforce optimization',
          '90-day system installation',
          'RevOps consulting',
          'high-trust industries'
        ]}
        canonicalUrl="/"
      />
      
      {/* Hero */}
      <Section className="min-h-[90vh] flex items-center py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            {/* Stat Line - Immediate Proof */}
            <div className="inline-flex items-center gap-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="font-mono text-sm text-primary font-semibold">42 systems delivered</span>
              <span className="w-1 h-1 bg-primary/40 rounded-full"></span>
              <span className="font-mono text-sm text-primary font-semibold">90-day average</span>
            </div>
            
            <h1 className="heading-page mb-4">
              The Competitive Advantage Is the Backend
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Install backend systems that scale without founder dependency. Documented infrastructure, repeatable execution, measurable outcomes in 90 days.
            </p>
            
            {/* CTA Hierarchy - Start Assessment is Primary */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <ConversionOptimizedButton
                to="/assessment"
                ctaName="Hero - Start Your Assessment"
                location="Homepage Hero"
                size="lg"
              >
                Start Your Assessment
              </ConversionOptimizedButton>
              <ConversionOptimizedButton
                to="/proof"
                ctaName="Hero - View Proof"
                location="Homepage Hero"
                variant="outline"
                showArrow={false}
                size="lg"
              >
                View Proof
              </ConversionOptimizedButton>
            </div>
            
            {/* Social Proof Bar - Rotating Client Quotes */}
            <div className="border-l-2 border-primary/30 pl-4 py-2">
              <p className="text-sm text-muted-foreground italic mb-2">
                "Revenue infrastructure built in 8 weeks. Manual pipeline updates went from 20 hours to zero."
              </p>
              <p className="text-xs text-primary font-mono font-semibold">
                — VP Revenue, Cybersecurity SaaS ($4.2M ARR)
              </p>
            </div>
          </div>
          
          <div>
            <SystemDiagram />
          </div>
        </div>
      </Section>

      {/* Who This Is For */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-6">You Hit $2-5M ARR. Then Everything Broke.</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              You're spending 20+ hours a week manually managing pipeline, sales ops is held together by one founder, 
              and your forecast is a best-guess spreadsheet. Here's what changes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Before Card */}
            <div className="relative border-2 border-destructive/20 bg-card rounded-lg p-8">
              <div className="absolute -top-3 left-6 bg-background px-3 py-1 border border-destructive/20 rounded-md">
                <span className="font-mono text-xs uppercase tracking-wider text-destructive">Before</span>
              </div>
              
              <ul className="space-y-4 mt-4">
                {beforeAfter.before.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-destructive" />
                    </div>
                    <span className="text-base text-foreground/80 leading-5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* After Card */}
            <div className="relative border-2 border-primary/30 bg-card rounded-lg p-8">
              <div className="absolute -top-3 left-6 bg-background px-3 py-1 border border-primary/30 rounded-md">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">After</span>
              </div>
              
              <ul className="space-y-4 mt-4">
                {beforeAfter.after.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" strokeWidth={2.5} />
                    </div>
                    <span className="text-base font-medium leading-5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Case Study */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <FeaturedCaseStudy />
        </div>
      </Section>

      {/* Services */}
      <Section variant="muted">
        <div className="flex items-center justify-between mb-8">
          <h2 className="heading-section text-left">How We Work</h2>
          <Button asChild variant="ghost" size="sm">
            <Link to="/resources" className="font-mono text-sm text-primary hover:text-primary/80">
              Browse Resources →
            </Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border-l-4 border-primary pl-6 flex flex-col">
              <div className="font-mono text-sm text-muted-foreground mb-2">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="heading-subsection mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              
              <div className="space-y-1 mb-4">
                <div className="text-sm font-mono">
                  <span className="text-muted-foreground">Timeline: </span>
                  <span>{service.timeline}</span>
                </div>
                {service.note && (
                  <div className="text-sm font-mono">
                    <span className="text-muted-foreground">{service.note}</span>
                  </div>
                )}
              </div>
              
              <div className="flex-grow" />
              
              <Button asChild className="w-full" size="sm" variant={index === 0 ? "default" : "outline"}>
                <Link to={service.link}>{service.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Assessment Details */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="heading-section mb-6">Assessment Deliverables</h2>
          
          <ul className="space-y-3 mb-8">
            {assessmentDeliverables.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Target className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <ConversionOptimizedButton
              to="/assessment"
              ctaName="Assessment - Start Now"
              location="Assessment Deliverables Section"
            >
              Start Your Assessment
            </ConversionOptimizedButton>
            <ConversionOptimizedButton
              to="/sample-report"
              ctaName="Assessment - View Sample Report"
              location="Assessment Deliverables Section"
              variant="outline"
              showArrow={false}
            >
              Sample Report
            </ConversionOptimizedButton>
          </div>
        </div>
      </Section>

      {/* Proof */}
      <Section variant="muted">
        <h2 className="heading-section mb-8">By the Numbers</h2>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {proofStats.map((stat, index) => (
            <div key={index} className="border-l-4 border-primary pl-6">
              <div className="text-3xl font-bold font-mono text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
              {stat.subLabel && (
                <div className="text-xs text-muted-foreground">{stat.subLabel}</div>
              )}
            </div>
          ))}
        </div>
        
        <ConversionOptimizedButton
          to="/proof"
          ctaName="By Numbers - See Proof"
          location="By Numbers Section"
        >
          See Full Case Studies
        </ConversionOptimizedButton>
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
