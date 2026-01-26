import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
import { EngagementTracker } from "@/components/EngagementTracker";
import { CheckCircle, X, Eye, Search, Lock, ArrowRight } from "lucide-react";
import { POSITIONING, ROUTES } from "@/lib/canonical-constants";

const Home = () => {
  usePerformanceMonitoring();
  useScrollDepth();

  // What We're Seeing Right Now - Industry patterns
  const currentPatterns = [
    {
      category: "MEDICAL DEVICES",
      title: "Teams losing forecast accuracy during regulatory handoffs",
      description: "Deals stall as compliance reviews prevent clean baseline → the pipeline"
    },
    {
      category: "OPS",
      title: "Deals stalling post-demo because ownership isn't enforced",
      description: "Handoff from sales to ops breaks when there's no system holding it"
    },
    {
      category: "PROFESSIONAL SERVICES",
      title: "Revenue closes but delivery systems fail to operationalize",
      description: "Sales close, ops scrambles, clients churn"
    },
    {
      category: "PARTNER-LED SALESFORCE",
      title: "RevOps → Finance boundary breaks at scale",
      description: "Everyone looks clean until 5 errors accumulate"
    },
    {
      category: "SAAS STARTUPS",
      title: "Companies selling enforcement systems that lack their own internal system of enforcement",
      description: "The product is polished but the back office is held together by manual processes"
    },
    {
      category: "EQUIPMENT / KIT",
      title: "Growth exposing cracks in fragmented systems before they break",
      description: "Things work today, but volume will surface what manual processes are hiding"
    }
  ];

  // How We Work
  const howWeWork = [
    {
      icon: Eye,
      label: "WHAT YOU CAN'T SEE YET",
      title: "Visibility",
      description: "Most revenue problems are invisible until too late. We surface them first."
    },
    {
      icon: Search,
      label: "WHERE IT BREAKS",
      title: "Diagnosis",
      description: "We trace breakage to source—fix traffic, process breaks, and catch contact failures."
    },
    {
      icon: Lock,
      label: "WHAT HOLDS UNDER LOAD",
      title: "Enforcement",
      description: "Systems that hold under load—automation, prevention, and accountability built in."
    }
  ];

  // Fit / Not Fit
  const fitCriteria = [
    { fit: true, label: "Active pipeline, real budget, pressure" },
    { fit: true, label: "Deals stalling for reasons you can't see in dashboards" },
    { fit: true, label: "RevOps or ops function exists but can't scale" },
    { fit: false, label: "Pre-revenue or pre-product" },
    { fit: false, label: "Looking for a Salesforce admin" },
    { fit: false, label: "Comparing consultants on hourly rate" }
  ];

  // Single proof point
  const proof = {
    quote: "We went from waiting for Upwork gigs to a repeatable outbound system with 40%+ open rates.",
    attribution: "FEDERAL CYBERSECURITY (SAVIINT PIPELINE)",
    result: "$500k pipeline built in 90 days."
  };

  return (
    <div className="min-h-screen">
      <EngagementTracker />
      <SEOHead
        title="Revenue Integrity Systems | CWT Studio"
        description="Revenue infrastructure for high-trust teams—legal, healthcare, compliance, SaaS. For teams where broken systems kill deals."
        keywords={[
          'revenue infrastructure',
          'regulated industries',
          'compliant CRM',
          'revenue operations',
          'high-risk environments'
        ]}
        canonicalUrl="/"
      />

      {/* Hero */}
      <Section className="min-h-[90vh] md:min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{
               backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
               backgroundSize: '24px 24px'
             }} 
        />
        
        <div className="relative z-10 max-w-4xl">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-8">
            {POSITIONING.tagline}
          </div>

          <h1 className="heading-page mb-6 leading-[1.1]">
            {POSITIONING.primary}
          </h1>

          <p className="text-lg md:text-xl text-foreground font-medium mb-4 max-w-2xl">
            {POSITIONING.supportingLine}
          </p>

          <p className="text-base text-muted-foreground mb-8 max-w-2xl">
            {POSITIONING.targetLine}
          </p>

          <div className="flex flex-col gap-6">
            <ConversionOptimizedButton
              to={ROUTES.assessment}
              ctaName="Hero - Book System Audit"
              location="Homepage Hero"
              size="lg"
              className="w-full sm:w-auto"
            >
              <span className="hidden sm:inline text-inherit">Book a System Audit</span>
              <span className="sm:hidden text-inherit">Book Audit</span>
            </ConversionOptimizedButton>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-mono">42 systems installed</span>
                <ArrowRight className="w-3 h-3 text-primary" />
                <span className="font-mono">Zero failed migrations</span>
              </div>
              <div className="hidden sm:block text-muted-foreground/50">|</div>
              <div className="text-sm text-muted-foreground font-mono">
                Martech, RevOps, Ops, SaaS
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What We're Seeing Right Now */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-6xl">
          <h2 className="heading-section mb-10">What We're Seeing Right Now</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPatterns.map((pattern, index) => (
              <div key={index} className="border border-border bg-card p-6">
                <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
                  {pattern.category}
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                  {pattern.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {pattern.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* How We Work */}
      <Section className="border-t border-border">
        <div className="max-w-4xl">
          <h2 className="heading-section mb-10">How We Work</h2>

          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            {howWeWork.map((item, index) => (
              <div key={index} className="border border-border bg-card p-6">
                <item.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  {item.label}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Callout box */}
          <div className="border-l-2 border-primary bg-muted/50 p-6">
            <p className="text-base text-foreground italic">
              "We design for expected value—what will close, what will stall, and why. That's how CPOs and RevOps leaders think. We design systems the same way."
            </p>
          </div>
        </div>
      </Section>

      {/* Who This Is For */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-4xl">
          <h2 className="heading-section mb-10">Who This Is For</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-sm font-mono uppercase tracking-widest text-primary mb-4">Good Fit</div>
              <div className="space-y-3">
                {fitCriteria.filter(c => c.fit).map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={2} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">Not a Fit</div>
              <div className="space-y-3">
                {fitCriteria.filter(c => !c.fit).map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-muted-foreground">
                    <X className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What Happened - Proof */}
      <Section className="border-t border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-10">What Happened</h2>

          <div className="border border-border bg-card p-8">
            <blockquote className="text-xl md:text-2xl text-foreground font-medium mb-6 border-l-2 border-primary pl-6 italic">
              "{proof.quote}"
            </blockquote>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {proof.attribution}
              </div>
              <div className="text-sm text-primary font-medium">{proof.result}</div>
            </div>
          </div>

          <div className="mt-8">
            <ConversionOptimizedButton
              to="/proof"
              ctaName="Proof - See All Case Studies"
              location="Proof Section"
              variant="outline"
            >
              See All 8 Case Studies
            </ConversionOptimizedButton>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="muted" className="border-t border-border text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading-section mb-4">Find Out What's Breaking</h2>
          
          <p className="text-muted-foreground mb-8">
            2-week audit. For teams with active pipeline, real budget, and no room for system failure.
          </p>

          <ConversionOptimizedButton
            to={ROUTES.assessment}
            ctaName="Final CTA - Book Assessment"
            location="Final CTA Section"
            size="lg"
          >
            Book Assessment
          </ConversionOptimizedButton>
        </div>
      </Section>
    </div>
  );
};

export default Home;
