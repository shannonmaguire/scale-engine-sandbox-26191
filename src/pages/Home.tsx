import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
import { EngagementTracker } from "@/components/EngagementTracker";
import CookieBanner from "@/components/CookieBanner";
import { CheckCircle, ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import { CTA, ROUTES, METRICS, TIMELINES } from "@/lib/canonical-constants";

const Home = () => {
  usePerformanceMonitoring();
  useScrollDepth();

  // Fit triggers only - exclusions moved to separate section
  const fitTriggers = [
    { label: "Forecast Blind", description: "Board asks for projections. You extrapolate from memory." },
    { label: "Manual Operations", description: "Pipeline updates consume 15+ hours weekly." },
    { label: "Founder Dependency", description: "Revenue knowledge concentrated in one person." }
  ];

  // Exclusion criteria - shown separately with muted styling
  const exclusionCriteria = [
    { label: "Decision Cycles >30 Days", description: "Slow approval chains stall implementation." },
    { label: "No Single Ops Owner", description: "Ownership ambiguity fragments scope." },
    { label: "Ground-Zero Builds", description: "Existing systems only. No infrastructure from scratch." }
  ];

  // Humanized proof with emotional quotes
  const proofSnapshots = [
    {
      client: "Cybersecurity SaaS ($4.2M ARR)",
      quote: "I was spending 15 hours a week on spreadsheet reconciliation. Now I spend zero.",
      broke: "Pipeline administration consumed founder bandwidth.",
      pattern: "Automated status tracking. Time-to-close predictability restored in 6 weeks."
    },
    {
      client: "Legal Tech Platform ($2.8M ARR)",
      quote: "For the first time, I can tell the board exactly where we'll land. In 30 minutes, not 3 days.",
      broke: "Forecast built from spreadsheet extrapolation.",
      pattern: "Unified pipeline with weighted probability. Board-ready forecast in 30 min."
    },
    {
      client: "Compliance Software ($3.5M ARR)",
      quote: "I took my first real vacation in four years. The system ran without me.",
      broke: "One founder owned all operations knowledge.",
      pattern: "Documented systems. Zero single points of failure. Founder exits day-to-day."
    }
  ];

  // Simplified pipeline
  const pipeline = [
    {
      phase: "01",
      title: "Assessment",
      duration: TIMELINES.assessment,
      output: "Revenue Infrastructure Scorecard + 90-day roadmap"
    },
    {
      phase: "02", 
      title: "Sprint",
      duration: "8-12 weeks",
      output: "Installed infrastructure + handoff documentation"
    },
    {
      phase: "03",
      title: "Fractional Ops",
      duration: "6+ months",
      output: "Ongoing optimization + performance management"
    }
  ];

  // Trust badges
  const trustBadges = [
    { icon: Shield, label: "42 systems rebuilt" },
    { icon: TrendingUp, label: "23% avg forecast improvement" },
    { icon: Users, label: "Zero failed migrations" }
  ];

  return (
    <div className="min-h-screen">
      <EngagementTracker />
      <CookieBanner />
      <SEOHead
        title="Revenue Architecture | CWT Studio"
        description="Revenue systems break under growth. Forecasting collapses. Manual processes multiply. We install infrastructure that holds."
        keywords={[
          'revenue infrastructure',
          'revenue operations',
          'Salesforce implementation',
          '90-day system installation',
          'RevOps engineering'
        ]}
        canonicalUrl="/"
      />

      {/* Hero Section - Rewritten with Emotional Punch */}
      <Section className="min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{
               backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
               backgroundSize: '24px 24px'
             }} 
        />
        
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 mb-8 font-mono text-xs uppercase tracking-widest">
            <span className="text-primary font-semibold">v2.0</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">{METRICS.deployments}</span>
          </div>

          {/* Emotionally Resonant Hero Copy */}
          <h1 className="heading-page mb-6 leading-[1.1]">
            Your CRM works. Until it doesn't.
          </h1>

          <div className="space-y-3 text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl font-mono">
            <p>That forecast you built? It's wrong.</p>
            <p>The manual processes "just for now"? They're permanent.</p>
            <p className="text-foreground font-medium">Growth doesn't fix infrastructure. It breaks it.</p>
          </div>

          {/* Single Primary CTA */}
          <div className="flex flex-col gap-6">
            <ConversionOptimizedButton
              to={ROUTES.assessment}
              ctaName="Hero - Take Free Health Check"
              location="Homepage Hero"
              size="lg"
            >
              Take Free Health Check
            </ConversionOptimizedButton>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-2">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <badge.icon className="w-4 h-4 text-primary" strokeWidth={2} />
                  <span className="font-mono">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* You're a Fit If... Section */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">You're a Fit If...</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fitTriggers.map((trigger, index) => (
              <div 
                key={index} 
                className="border border-primary/30 hover:border-primary/50 p-5 transition-colors bg-card"
              >
                <div className="font-mono text-xs uppercase tracking-widest mb-2 text-primary flex items-center gap-2">
                  <CheckCircle className="w-3 h-3" strokeWidth={2} />
                  {trigger.label}
                </div>
                <p className="text-sm text-muted-foreground">{trigger.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* We're Not the Right Fit If... Section (Muted) */}
      <Section className="border-t border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-muted-foreground/30" />
            <h2 className="heading-section text-muted-foreground">We're Not the Right Fit If...</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exclusionCriteria.map((trigger, index) => (
              <div 
                key={index} 
                className="border border-border p-5 bg-muted/30"
              >
                <div className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                  {trigger.label}
                </div>
                <p className="text-sm text-muted-foreground/70">{trigger.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link 
              to="/how-we-work" 
              className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-primary/80 transition-colors"
            >
              See our full methodology
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Proof Section - Humanized with Quotes */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Proof</h2>
          </div>

          <div className="space-y-6">
            {proofSnapshots.map((snapshot, index) => (
              <div key={index} className="border border-border bg-card p-6">
                {/* Emotional Quote First */}
                <blockquote className="text-lg md:text-xl text-foreground font-medium mb-6 border-l-2 border-primary pl-4 italic">
                  "{snapshot.quote}"
                </blockquote>
                
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  {snapshot.client}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-mono text-xs text-destructive mb-1">What Broke</div>
                    <p className="text-sm text-foreground">{snapshot.broke}</p>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-primary mb-1">Pattern Restored</div>
                    <p className="text-sm text-foreground">{snapshot.pattern}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <ConversionOptimizedButton
              to="/proof"
              ctaName="Proof - See Full Case Studies"
              location="Proof Section"
            >
              See Full Case Studies
            </ConversionOptimizedButton>
          </div>
        </div>
      </Section>

      {/* Pipeline - Simplified */}
      <Section className="border-t border-border">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Implementation Pipeline</h2>
          </div>

          <div className="space-y-4">
            {pipeline.map((phase, index) => (
              <div key={index} className="flex items-start gap-6 border border-border bg-card p-6">
                <div className="font-mono text-3xl font-bold text-primary/30">{phase.phase}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="heading-subsection">{phase.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{phase.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-mono text-primary">
                    <CheckCircle className="w-4 h-4" strokeWidth={2} />
                    <span>{phase.output}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="muted" className="border-t border-border text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading-section mb-6">Find Out What's Breaking</h2>
          <p className="text-description text-muted-foreground mb-10">
            5-minute diagnostic. Immediate results. No sales pitch.
          </p>

          <ConversionOptimizedButton
            to={ROUTES.assessment}
            ctaName="Final CTA - Take Free Health Check"
            location="Final CTA Section"
            size="lg"
          >
            Take Free Health Check
          </ConversionOptimizedButton>
        </div>
      </Section>
    </div>
  );
};

export default Home;