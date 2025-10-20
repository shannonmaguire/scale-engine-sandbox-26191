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
    label: "Cut cycle time days"
  }, {
    number: "4x",
    label: "Lifted outbound reply rate"
  }, {
    number: "100%",
    label: "Single source of truth adoption"
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
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-mono mb-4">
              <CheckCircle className="w-3 h-3" />
              TRUSTED BY 50+ B2B COMPANIES
            </div>
            <h1 className="heading-page mb-6">
              Stop Bleeding $40K+ on Tools That Don't Talk to Each Other
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Your Salesforce, CRM, and outbound stack are disconnected. We audit what you have, eliminate waste, and build systems that actually work—in 90 days.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-4 mb-8">
              <div className="font-bold text-foreground mb-2">You know you have this problem if:</div>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">→</span>
                  <span>Pipeline data changes depending on who you ask</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">→</span>
                  <span>You're paying for 8+ tools but still exporting to spreadsheets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">→</span>
                  <span>RevOps spends more time fixing data than analyzing it</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <ConversionOptimizedButton
                to="/assessment"
                ctaName="Hero - Start Your Assessment"
                location="Homepage Hero"
                size="lg"
              >
                Get Free System Audit
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
            <p className="text-xs text-muted-foreground font-mono">$1.5K assessment · 100% credit to implementation · 2-week turnaround</p>
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
          
          <ConversionOptimizedButton
            to="/sample-report"
            ctaName="Assessment - View Sample Report"
            location="Assessment Deliverables Section"
          >
            View Sample Report
          </ConversionOptimizedButton>
        </div>
      </Section>

      {/* Social Proof */}
      <Section variant="muted">
        <div className="text-center mb-12">
          <h2 className="heading-section mb-3">Client Results (Not Projections)</h2>
          <p className="text-muted-foreground">Every metric verified by third-party data sources</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border-2 border-primary/20 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold font-mono text-primary mb-2">$500K+</div>
            <div className="text-sm text-muted-foreground mb-1">Pipeline Activated</div>
            <div className="text-xs text-muted-foreground">Compliance Advisory, 90 days</div>
          </div>
          
          <div className="bg-card border-2 border-primary/20 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold font-mono text-primary mb-2">107%</div>
            <div className="text-sm text-muted-foreground mb-1">Revenue Growth</div>
            <div className="text-xs text-muted-foreground">E-Commerce, 6 months</div>
          </div>
          
          <div className="bg-card border-2 border-primary/20 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold font-mono text-primary mb-2">&gt;40%</div>
            <div className="text-sm text-muted-foreground mb-1">Open Rates</div>
            <div className="text-xs text-muted-foreground">vs 15-25% industry avg</div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto bg-card border-2 border-primary/20 rounded-lg p-6 mb-8">
          <p className="text-lg text-foreground mb-4 italic leading-relaxed">
            "We burned $85K with an agency that kept selling us new tools. CWT Studio audited what we already owned, found $40K in waste, and built a system that actually works. ROI positive in 6 weeks."
          </p>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-foreground">VP of Revenue Operations</div>
              <div className="text-sm text-muted-foreground">B2B SaaS, Series B</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-mono font-bold text-primary">$40K</div>
              <div className="text-xs text-muted-foreground">waste eliminated</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <ConversionOptimizedButton
            to="/proof"
            ctaName="By Numbers - See Proof"
            location="By Numbers Section"
            size="lg"
          >
            See All Case Studies
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
