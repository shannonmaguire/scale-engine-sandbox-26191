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
    price: "$1,800 USD",
    note: "Fixed scope, fixed price",
    cta: "Start Assessment",
    link: "/assessment"
  }, {
    title: "Sprint",
    description: "8–12-week implementation sprint where we install the infrastructure that compounds: CRM, RevOps architecture, automation, and documentation.",
    timeline: "8-12 weeks",
    price: "From $12K USD",
    cta: "Start Your Sprint",
    link: "/sprint"
  }, {
    title: "Fractional Ops",
    description: "Ongoing fractional operations support for teams that need their systems maintained, optimized, and performance-driven.",
    price: "From $6K/month USD",
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
      <Section className="min-h-[85vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <h1 className="heading-page mb-4">
              Your Revenue Is Growing.<br />Your Infrastructure Is Breaking.
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Install backend systems that scale without founder dependency. Documented infrastructure, repeatable execution, measurable outcomes in 90 days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ConversionOptimizedButton
                to="/assessment"
                ctaName="Hero - Start Your Assessment"
                location="Homepage Hero"
                size="lg"
              >
                Start With $1,800 Assessment
              </ConversionOptimizedButton>
              <ConversionOptimizedButton
                to="/sample-report"
                ctaName="Hero - View Sample Report"
                location="Homepage Hero"
                variant="outline"
                showArrow={false}
                size="lg"
              >
                Sample Report
              </ConversionOptimizedButton>
            </div>
          </div>
          
          <div>
            <SystemDiagram />
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section variant="muted">
        <h2 className="heading-section mb-8 text-left">How We Work</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border-l-4 border-primary pl-6 flex flex-col">
              <div className="font-mono text-sm text-muted-foreground mb-2">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="heading-subsection mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              
              <div className="space-y-1 mb-4">
                {service.timeline && (
                  <div className="text-sm font-mono">
                    <span className="text-muted-foreground">Timeline: </span>
                    <span>{service.timeline}</span>
                  </div>
                )}
                <div className="text-sm font-mono">
                  <span className="text-muted-foreground">Price: </span>
                  <span className="text-primary">{service.price}</span>
                </div>
              </div>
              
              <div className="flex-grow" />
              
              <Button asChild className="w-full" size="sm">
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
              Start $1,800 Assessment
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
