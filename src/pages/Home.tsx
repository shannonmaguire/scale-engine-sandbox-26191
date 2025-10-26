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
    before: ["Founder-led sales chaos", "Disconnected tooling", "Unreliable pipeline data"],
    after: ["Backend Revenue System", "Predictable pipeline", "Forecast you can defend"]
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
            <h1 className="heading-page mb-4">
              Your Revenue System Broke at 50 Customers. Fix It in 90 Days.
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Stop losing deals to operational chaos. Install backend systems that scale without founder dependency—documented infrastructure, repeatable execution, measurable outcomes.
            </p>
            
            {/* Pricing & urgency */}
            <div className="mb-6 p-4 border border-primary/30 rounded-lg bg-primary/5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-sm font-mono text-muted-foreground mb-1">2-Week Assessment</p>
                  <p className="text-3xl font-bold font-mono text-primary">$1,200</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono text-muted-foreground">Assessment fee fully credited to Sprint if you proceed</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
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
                ctaName="Hero - See Results"
                location="Homepage Hero"
                variant="outline"
                size="lg"
              >
                See Client Results
              </ConversionOptimizedButton>
            </div>
            
            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>$500K+ pipeline activated</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>107% peak growth rate</span>
              </div>
            </div>
          </div>
          
          <div>
            <SystemDiagram />
          </div>
        </div>
      </Section>

      {/* Why Now? Section */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-6">5 Signs Your Backend Is About to Collapse</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              You've hit $2-5M in revenue. Growth is stalling. The systems that got you here won't get you there.
            </p>
          </div>
          
          {/* Signs grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="border-l-4 border-destructive pl-6">
              <div className="font-mono text-sm text-destructive mb-2 uppercase tracking-wide">Sign #1</div>
              <h3 className="text-lg font-semibold mb-2">Founder-Led Sales Chaos</h3>
              <p className="text-sm text-muted-foreground">Every deal still requires your personal attention. Team can't close without you.</p>
            </div>
            
            <div className="border-l-4 border-destructive pl-6">
              <div className="font-mono text-sm text-destructive mb-2 uppercase tracking-wide">Sign #2</div>
              <h3 className="text-lg font-semibold mb-2">Unreliable Pipeline Data</h3>
              <p className="text-sm text-muted-foreground">You can't defend your forecast. Revenue numbers are guesswork, not projections.</p>
            </div>
            
            <div className="border-l-4 border-destructive pl-6">
              <div className="font-mono text-sm text-destructive mb-2 uppercase tracking-wide">Sign #3</div>
              <h3 className="text-lg font-semibold mb-2">Disconnected Tooling</h3>
              <p className="text-sm text-muted-foreground">Data lives in spreadsheets, Slack, and someone's memory. Nothing syncs.</p>
            </div>
            
            <div className="border-l-4 border-destructive pl-6">
              <div className="font-mono text-sm text-destructive mb-2 uppercase tracking-wide">Sign #4</div>
              <h3 className="text-lg font-semibold mb-2">Manual Everything</h3>
              <p className="text-sm text-muted-foreground">Proposals, follow-ups, reporting—all copy-paste. Hours wasted on repetitive tasks.</p>
            </div>
            
            <div className="border-l-4 border-destructive pl-6">
              <div className="font-mono text-sm text-destructive mb-2 uppercase tracking-wide">Sign #5</div>
              <h3 className="text-lg font-semibold mb-2">Team Bottlenecks</h3>
              <p className="text-sm text-muted-foreground">New hires take months to ramp. Processes exist only in your head.</p>
            </div>
            
            <div className="border-l-4 border-primary pl-6 bg-primary/5 p-4 -ml-6">
              <div className="font-mono text-sm text-primary mb-2 uppercase tracking-wide">The Fix</div>
              <h3 className="text-lg font-semibold mb-2">Backend Revenue System</h3>
              <p className="text-sm text-muted-foreground">Predictable pipeline. Documented processes. Scalable execution.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Who This Is For */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-6">Built for High-Trust Industries</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Legal, compliance, cybersecurity, and B2B SaaS teams who need backend infrastructure 
              that scales without founder dependency.
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
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-md mb-4">
              <span className="text-sm font-mono text-primary uppercase tracking-wide">Featured Result</span>
            </div>
            <h2 className="heading-section mb-4">Compliance Advisory: $500K+ Pipeline Activated</h2>
          </div>
          
          <div className="border border-primary/30 rounded-lg p-8 bg-card">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold font-mono text-primary mb-2">8 weeks</div>
                <div className="text-sm text-muted-foreground">Implementation Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-mono text-primary mb-2">$500K+</div>
                <div className="text-sm text-muted-foreground">Pipeline Activated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-mono text-primary mb-2">107%</div>
                <div className="text-sm text-muted-foreground">Peak Growth Rate</div>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                <p className="text-sm text-muted-foreground">Cybersecurity compliance firm with founder-dependent sales. Pipeline visibility was zero. No forecasting capability.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Solution</h3>
                <p className="text-sm text-muted-foreground">Built Salesforce Revenue Cloud with automated outbound sequences, HubSpot integration, and executive dashboards.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Outcome</h3>
                <p className="text-sm text-muted-foreground">Outbound engine running autonomously. Team closing deals without founder intervention. Reliable 90-day forecast.</p>
              </div>
            </div>
            
            <ConversionOptimizedButton
              to="/proof"
              ctaName="Featured Case Study - See More"
              location="Featured Case Study Section"
            >
              See All Case Studies
            </ConversionOptimizedButton>
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
