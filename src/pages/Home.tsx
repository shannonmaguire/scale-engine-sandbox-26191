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
        title="Backend Revenue Systems | CWT Studio Infrastructure Architects"
        description="Install backend revenue systems for high-trust industries. Salesforce optimization, outbound engines, pipeline governance in 90 days."
        keywords={[
          'backend revenue systems',
          'revenue infrastructure',
          'Salesforce optimization',
          '90-day system installation',
          'high-trust industries',
          'legal compliance cybersecurity'
        ]}
      />
      
      {/* Hero Section */}
      <Section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gutter-content items-center">
            <div className="text-left md:text-left"  >
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-mono text-sm uppercase tracking-wider text-primary">
                  Win on infrastructure.
                </span>
              </div>
              
              <h1 className="heading-page mb-6 leading-tight">
                The Competitive Advantage Is the Backend
              </h1>
              
              <p className="text-description mb-8">
                Install revenue infrastructure that compounds through documented systems and repeatable execution, delivering measurable outcomes in 90 days.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
              <ConversionOptimizedButton
                  to="/assessment"
                  ctaName="Hero - Start Your Assessment"
                  location="Homepage Hero"
                  className="btn-console-accent rounded-2xl"
                >
                  Start Your Assessment
                </ConversionOptimizedButton>
                <ConversionOptimizedButton
                  to="/sample-report"
                  ctaName="Hero - View Sample Report"
                  location="Homepage Hero"
                  variant="outline"
                  className="btn-console-secondary rounded-2xl"
                  showArrow={false}
                >
                  View Sample Report
                </ConversionOptimizedButton>
              </div>
              
              {/* Enhanced Trust signals with quantified proof */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg hover-lift">
                    <Award className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-mono text-sm font-semibold text-foreground">Documented Systems</div>
                      <div className="text-xs text-muted-foreground">Every workflow repeatable</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg hover-lift">
                    <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-mono text-sm font-semibold text-foreground">90-Day Sprints</div>
                      <div className="text-xs text-muted-foreground">Assessment to deployment</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg hover-lift">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-mono text-sm font-semibold text-foreground">24hr Response</div>
                      <div className="text-xs text-muted-foreground">Guaranteed</div>
                    </div>
                  </div>
                </div>
                
                {/* Trust Strip */}
                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-sm text-center text-muted-foreground font-mono">
                    Trusted by founders and operators in legal, compliance, cybersecurity, and B2B SaaS
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <SystemDiagram />
            </div>
          </div>
      </Section>

      {/* The System Section */}
      <Section id="system" variant="muted" className="pt-20">
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="system-status">
                Service Catalog
              </div>
            </div>
            <h2 className="heading-section mb-8 text-foreground">How We Work</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gutter-content">
            {services.map((service, index) => <StandardCard key={index} equalHeight className="hover-lift group">
                <StandardCardHeader>
                  <div className="w-8 h-8 bg-primary/10 flex items-center justify-center mb-4 transition-all group-hover:bg-primary/20">
                    <span className="text-primary font-mono font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="heading-subsection mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="space-y-2 min-h-[72px]">
                    {service.timeline ? (
                      <div className="text-sm">
                        <span className="text-muted-foreground font-mono">Timeline: </span>
                        <span className="font-medium tabular-nums">{service.timeline}</span>
                      </div>
                    ) : <div className="text-sm h-5"></div>}
                    
                    <div className="text-sm">
                      <span className="text-muted-foreground font-mono">Price: </span>
                      <span className="font-medium text-primary tabular-nums">{service.price}</span>
                    </div>
                    
                    {service.note ? (
                      <p className="text-xs text-muted-foreground font-mono">{service.note}</p>
                    ) : <div className="text-xs h-4"></div>}
                  </div>
                </StandardCardHeader>
                
                <StandardCardContent>
                  <div className="space-y-3">
                    <Button asChild className="w-full">
                      <Link to={service.link}>{service.cta}</Link>
                    </Button>
                    
                    {/* Anonymized Proof */}
                    <div className="min-h-[60px]">
                      {index === 0 && (
                        <p className="text-xs text-muted-foreground italic border-l-2 border-accent/30 pl-3">
                          "Cybersecurity advisory identified 14 compliance gaps in first assessment"
                        </p>
                      )}
                      {index === 1 && (
                        <p className="text-xs text-muted-foreground italic border-l-2 border-accent/30 pl-3">
                          "Legal boutique installed subscription pipeline system in 90 days"
                        </p>
                      )}
                      {index === 2 && (
                        <p className="text-xs text-muted-foreground italic border-l-2 border-accent/30 pl-3">
                          "SaaS company reduced reporting overhead by 60% with monthly ops rhythm"
                        </p>
                      )}
                    </div>
                  </div>
                </StandardCardContent>
              </StandardCard>)}
          </div>
          
      </Section>

      {/* What Changes Section */}
      <Section className="pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-section mb-8 text-foreground">What Changes</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-mono text-lg font-bold mb-4 text-muted-foreground">Current State</h3>
                  <ul className="space-y-3">
                    {beforeAfter.before.map((item, index) => <li key={index} className="flex items-center text-muted-foreground font-mono text-sm">
                        <div className="w-1 h-1 bg-muted-foreground mr-3" />
                        {item}
                      </li>)}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-mono text-lg font-bold mb-4 text-primary">Installed System</h3>
                  <ul className="space-y-3">
                    {beforeAfter.after.map((item, index) => <li key={index} className="flex items-center font-mono text-sm">
                        <CheckCircle className="w-3 h-3 text-primary mr-3" aria-hidden="true" />
                        {item}
                      </li>)}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <ConversionOptimizedButton
                  to="/assessment"
                  ctaName="Transformation - Start Assessment"
                  location="Transformation Section"
                  variant="warm"
                >
                  Start Assessment
                </ConversionOptimizedButton>
              </div>
            </div>
            
              <div className="lg:pl-12">
              <div className="assessment-panel">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 bg-accent-data rounded-full animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-wider text-accent-data">
                      System Health
                    </span>
                  </div>
                  <BarChart3 className="w-16 h-16 text-accent-data mx-auto mb-4" />
                  <h3 className="heading-subsection mb-2">Backend Revenue System</h3>
                  <p className="text-muted-foreground font-mono text-sm mb-6">Predictable, scalable, defendable</p>
                  
                  {/* Inline metrics */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="metric-display">
                      <div className="text-2xl font-bold accent-data">98%</div>
                      <div className="text-xs text-muted-foreground">UPTIME</div>
                    </div>
                    <div className="metric-display">
                      <div className="text-2xl font-bold accent-data">4x</div>
                      <div className="text-xs text-muted-foreground">EFFICIENCY</div>
                    </div>
                    <div className="metric-display">
                      <div className="text-2xl font-bold accent-data">100%</div>
                      <div className="text-xs text-muted-foreground">ADOPTION</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Section>

      {/* Meet You Where You Are Section */}
      <Section variant="muted">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-6 text-foreground">We Meet You Where You Are</h2>
            <p className="text-description max-w-3xl mx-auto">
              Every company operates under different constraints—stage, timeline, existing infrastructure. We work with what you have and build what you need without requiring complete replacement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gutter-content">
            <StandardCard>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-mono font-bold">START</span>
                </div>
                <h3 className="heading-subsection mb-3">Early-Stage</h3>
                <p className="text-muted-foreground text-sm">
                  Founder-led sales with basic tools—diagnostics focus on what matters now.
                </p>
              </div>
            </StandardCard>
            
            <StandardCard>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-mono font-bold">GROW</span>
                </div>
                <h3 className="heading-subsection mb-3">Scaling</h3>
                <p className="text-muted-foreground text-sm">
                  Fast growth with disconnected tools—optimize existing infrastructure while building what's missing.
                </p>
              </div>
            </StandardCard>
            
            <StandardCard>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary font-mono font-bold">SCALE</span>
                </div>
                <h3 className="heading-subsection mb-3">Enterprise</h3>
                <p className="text-muted-foreground text-sm">
                  Complex systems with legacy debt—diagnostics identify what works and what requires fixing.
                </p>
              </div>
            </StandardCard>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground font-mono text-sm mb-6">
              Diagnostics determine requirements without assumptions or templates.
            </p>
            <ConversionOptimizedButton
              to="/assessment"
              ctaName="Stage Match - Start Assessment"
              location="Stage Matching Section"
            >
              Start Assessment
            </ConversionOptimizedButton>
          </div>
      </Section>

      {/* Assessment Details Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-section mb-4 text-center">What You Get</h2>
              <p className="text-description mx-auto text-center">Every Assessment includes</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-4">
                  {assessmentDeliverables.map((item, index) => <div key={index} className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" aria-hidden="true" />
                      <span className="text-foreground font-mono text-sm">{item}</span>
                    </div>)}
                </div>
                
                <div className="mt-8">
                  <ConversionOptimizedButton
                    to="/sample-report"
                    ctaName="Assessment - View Sample Report"
                    location="Assessment Deliverables Section"
                  >
                    View Sample Report
                  </ConversionOptimizedButton>
                </div>
              </div>
              
              <div className="relative">
                <div className="assessment-panel">
                  <div className="space-y-4">
                    <div className="terminal-prompt">Assessment Output</div>
                    <div className="h-3 bg-muted w-3/4 rounded" />
                    <div className="h-3 bg-muted w-1/2 rounded" />
                    <div className="inline-graph my-4" />
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="metric-display">
                        <div className="text-lg font-bold accent-data">87</div>
                        <div className="text-xs">SCORE</div>
                      </div>
                      <div className="metric-display">
                        <div className="text-lg font-bold accent-data">12</div>
                        <div className="text-xs">GAPS</div>
                      </div>
                      <div className="metric-display">
                        <div className="text-lg font-bold accent-data">90d</div>
                        <div className="text-xs">ROADMAP</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 system-badge bg-primary text-primary-foreground">
                    Sample Report
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Section>

      {/* Proof Section */}
      <Section variant="muted">
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="system-status">
                Performance Metrics
              </div>
            </div>
            <h2 className="heading-section">By the Numbers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Real deployments with measured outcomes and validated results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-card border-2 border-primary/20 p-8 rounded-lg text-center hover-lift">
              <div className="text-5xl font-bold font-mono text-primary mb-2">2</div>
              <div className="text-sm font-mono text-muted-foreground uppercase tracking-wide">Case Studies</div>
              <div className="text-xs text-muted-foreground mt-2">Federal + Legal Sectors</div>
            </div>
            
            <div className="bg-card border-2 border-primary/20 p-8 rounded-lg text-center hover-lift">
              <div className="text-5xl font-bold font-mono text-primary mb-2">&gt;40%</div>
              <div className="text-sm font-mono text-muted-foreground uppercase tracking-wide">Open Rates</div>
              <div className="text-xs text-muted-foreground mt-2">Industry avg: 15-25%</div>
            </div>
            
            <div className="bg-card border-2 border-primary/20 p-8 rounded-lg text-center hover-lift">
              <div className="text-5xl font-bold font-mono text-primary mb-2">90</div>
              <div className="text-sm font-mono text-muted-foreground uppercase tracking-wide">Day Foundation</div>
              <div className="text-xs text-muted-foreground mt-2">Assessment to operational system</div>
            </div>
            
            <div className="bg-card border-2 border-primary/20 p-8 rounded-lg text-center hover-lift">
              <div className="text-5xl font-bold font-mono text-primary mb-2">100%</div>
              <div className="text-sm font-mono text-muted-foreground uppercase tracking-wide">Documentation</div>
              <div className="text-xs text-muted-foreground mt-2">Every workflow repeatable</div>
            </div>
          </div>
          
          <div className="text-center">
            <ConversionOptimizedButton
              to="/proof"
              ctaName="By Numbers - See Proof"
              location="By Numbers Section"
            >
              See Full Case Studies
            </ConversionOptimizedButton>
          </div>
      </Section>

      {/* Infrastructure for High-Trust Industries */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-section mb-6">
              Revenue Infrastructure for Complex Industries
            </h2>
            <p className="text-description mb-8">
              Healthcare, cybersecurity, law, and compliance require backend infrastructure designed for long cycles and high-trust relationships.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConversionOptimizedButton
                to="/services"
                ctaName="Complex Industries - Our Services"
                location="Complex Industries Section"
              >
                Our Services
              </ConversionOptimizedButton>
              <ConversionOptimizedButton
                to="/proof"
                ctaName="Complex Industries - See Proof"
                location="Complex Industries Section"
                variant="outline"
              >
                See Proof
              </ConversionOptimizedButton>
            </div>
        </div>
      </Section>

      {/* Final CTA - Removed in favor of Footer CTA */}
      
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
