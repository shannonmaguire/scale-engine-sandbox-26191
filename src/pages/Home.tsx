import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
import { EngagementTracker } from "@/components/EngagementTracker";
import { CheckCircle, X } from "lucide-react";
import { POSITIONING, ROUTES } from "@/lib/canonical-constants";

const Home = () => {
  usePerformanceMonitoring();
  useScrollDepth();

  // What We're Seeing Right Now - Industry patterns (VoC-grounded)
  const currentPatterns = [
    {
      category: "DATA STRUCTURE",
      title: "Data imported manually. Zero validation.",
      description: "Data enters without governance."
    },
    {
      category: "INTEGRATION GAP",
      title: "Financial tools don't sync.",
      description: "15 hours/week reconciling. Nobody trusts the numbers."
    },
    {
      category: "BILLING / DELIVERY GAP",
      title: "Client onboarded. Invoice never sent.",
      description: "Access granted before payment collected."
    },
    {
      category: "CREDENTIAL CHAOS",
      title: "Shared logins. No audit trail.",
      description: "Former contractor still has system access."
    },
    {
      category: "PARTNER HANDOFF",
      title: "Deals registered. Then silence.",
      description: "Sales can't scope technical work. Pipeline stalls."
    },
    {
      category: "TRIAL CONVERSION",
      title: "800 trials a month, 6% convert.",
      description: "No way to tell who's actually using the product."
    },
    {
      category: "SCATTERED OPERATIONS",
      title: "Projects live across 4+ disconnected tools.",
      description: "15 hours/week figuring out what's happening."
    },
    {
      category: "TOOL SELECTION",
      title: "We picked it because someone used it before.",
      description: "Nobody evaluated fit."
    }
  ];


  // Fit / Not Fit
  const fitCriteria = [
    { fit: true, label: "Active pipeline, real budget, pressure" },
    { fit: true, label: "Deals stalling for reasons you can't see in dashboards" },
    { fit: true, label: "RevOps or ops function exists but can't scale" },
    { fit: false, label: "Pre-revenue or pre-product" },
    { fit: false, label: "Looking for platform administration" },
    { fit: false, label: "Comparing consultants on hourly rate" }
  ];

  // Single proof point
  const proof = {
    quote: "We went from zero outbound to a repeatable system with 40%+ open rates.",
    attribution: "FEDERAL CYBERSECURITY",
    result: "$500k pipeline built in 90 days."
  };

  return (
    <div className="min-h-screen">
      <EngagementTracker />
      <SEOHead
        title="Systems Architecture | CWT Studio"
        description="Revenue systems break. We find where. 2-week audit for legal, healthcare, compliance, and SaaS teams."
        keywords={[
          'systems architecture',
          'revenue systems audit',
          'regulated industries',
          'compliant CRM',
          'revenue operations'
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

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground font-mono">
              <span>42 systems assessed</span>
              <span className="text-primary">•</span>
              <span>Zero failed migrations</span>
              <span className="text-primary">•</span>
              <span>6 years, same methodology</span>
            </div>
          </div>
        </div>
      </Section>

      {/* What We're Seeing Right Now */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-5xl">
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


      {/* Who This Is For */}
      <Section className="border-t border-border">
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
            2-week audit. Active pipeline required.
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
