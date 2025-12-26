import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
import { EngagementTracker } from "@/components/EngagementTracker";
import { CheckCircle, ArrowRight, Shield, TrendingUp, Users, Mail, BarChart3, UserX } from "lucide-react";
import { CTA, ROUTES, METRICS, TIMELINES } from "@/lib/canonical-constants";
const Home = () => {
  usePerformanceMonitoring();
  useScrollDepth();

  // Plain English fit triggers
  const fitTriggers = [
    { label: "Your forecast is a guess", description: "You make up numbers for board meetings because your data is scattered across 5 tools." },
    { label: "You're doing sales admin", description: "You spend 10+ hours a week on spreadsheets, status updates, and chasing down deal info." },
    { label: "Everything runs through you", description: "If you get sick, revenue stops. You're the only one who knows where things are." }
  ];

  // Plain English exclusions
  const exclusionCriteria = [
    { label: "Decisions take forever", description: "If every change needs 6 approvals, we'll both be frustrated." },
    { label: "No one owns operations", description: "We need one person who can make decisions and give access." },
    { label: "You're starting from zero", description: "We fix broken systems. We don't build your first CRM from scratch." }
  ];

  // Humanized proof with emotional quotes - no jargon
  const proofSnapshots = [
    {
      client: "Cybersecurity SaaS ($4.2M ARR)",
      quote: "I was spending 15 hours a week on spreadsheet reconciliation. Now I spend zero.",
      broke: "Founder was buried in spreadsheets instead of selling.",
      pattern: "Automated the busywork. Founder got 15 hours back every week."
    },
    {
      client: "Legal Tech Platform ($2.8M ARR)",
      quote: "For the first time, I can tell the board exactly where we'll land. In 30 minutes, not 3 days.",
      broke: "Forecast was a guess cobbled together from spreadsheets.",
      pattern: "Built a real forecast. Board meetings stopped being stressful."
    },
    {
      client: "Compliance Software ($3.5M ARR)",
      quote: "I took my first real vacation in four years. The system ran without me.",
      broke: "Founder was the only one who knew how anything worked.",
      pattern: "Documented everything. Trained the team. Founder can step away."
    }
  ];

  // What We Actually Do - plain English
  const whatWeDo = [
    {
      icon: Mail,
      title: "Stop Leads From Dying",
      description: "Leads come in. Nobody follows up. Deals rot in inboxes. We build the follow-up system so every lead gets worked."
    },
    {
      icon: BarChart3,
      title: "Make Your Sales Data Useful",
      description: "Your CRM is a graveyard. We connect your tools, automate updates, and give you a forecast you can actually trust."
    },
    {
      icon: UserX,
      title: "Get Founders Out of the Weeds",
      description: "You're the only one who knows how things work. We document, automate, and train so you can step back."
    }
  ];

  // Simplified pipeline
  const pipeline = [
    {
      phase: "01",
      title: "Assessment",
      duration: TIMELINES.assessment,
      output: "We find what's broken and map the fix"
    },
    {
      phase: "02", 
      title: "Sprint",
      duration: "8-12 weeks",
      output: "We install the systems and train your team"
    },
    {
      phase: "03",
      title: "Ongoing Support",
      duration: "Optional",
      output: "We stick around to optimize and manage"
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
      <SEOHead
        title="Revenue Operations Consulting | CRM Implementation | CWT Studio"
        description="Fix broken sales systems: leads dying in inboxes, forecasts that are guesses, founders stuck in admin. Revenue ops for legal, healthcare, and B2B SaaS."
        keywords={[
          'revenue operations consulting',
          'CRM implementation',
          'sales operations fix',
          'Salesforce help',
          'revenue ops',
          'sales system broken'
        ]}
        canonicalUrl="/"
      />

      {/* Hero Section - Plain English Pain Points */}
      <Section className="min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{
               backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
               backgroundSize: '24px 24px'
             }} 
        />
        
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 mb-8 font-mono text-xs uppercase tracking-widest">
            <span className="text-primary font-semibold">Revenue Ops</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">{METRICS.deployments}</span>
          </div>

          {/* Plain English Hero Copy */}
          <h1 className="heading-page mb-6 leading-[1.1]">
            Your leads are dying in inboxes.<br/>
            Your forecast is a guess.<br/>
            <span className="text-primary">We fix that.</span>
          </h1>

          <div className="space-y-3 text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            <p>Deals stall because nobody followed up.</p>
            <p>You spend hours updating spreadsheets instead of selling.</p>
            <p className="text-foreground font-medium">We fix your sales systems so they actually work.</p>
          </div>

          {/* Single Primary CTA */}
          <div className="flex flex-col gap-6">
            <ConversionOptimizedButton
              to={ROUTES.assessment}
              ctaName="Hero - Find Out What's Breaking"
              location="Homepage Hero"
              size="lg"
            >
              Find Out What's Breaking
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

      {/* What We Actually Do - Plain English */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">What We Actually Do</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((service, index) => (
              <div 
                key={index} 
                className="border border-border bg-card p-6"
              >
                <service.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* You're a Fit If... Section - Conversational */}
      <Section className="border-t border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">This Is For You If...</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fitTriggers.map((trigger, index) => (
              <div 
                key={index} 
                className="border border-primary/30 hover:border-primary/50 p-5 transition-colors bg-card"
              >
                <div className="font-semibold mb-2 text-foreground flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" strokeWidth={2} />
                  {trigger.label}
                </div>
                <p className="text-sm text-muted-foreground">{trigger.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* We're Not the Right Fit If... Section (Muted) */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-muted-foreground/30" />
            <h2 className="heading-section text-muted-foreground">Not For You If...</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exclusionCriteria.map((trigger, index) => (
              <div 
                key={index} 
                className="border border-border p-5 bg-background/50"
              >
                <div className="font-medium mb-2 text-muted-foreground">
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
              See how we work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Proof Section - Human Stories */}
      <Section className="border-t border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">What Actually Happened</h2>
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
                    <div className="font-semibold text-sm text-destructive mb-1">The Problem</div>
                    <p className="text-sm text-foreground">{snapshot.broke}</p>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-primary mb-1">What We Did</div>
                    <p className="text-sm text-foreground">{snapshot.pattern}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <ConversionOptimizedButton
              to="/proof"
              ctaName="Proof - See All Case Studies"
              location="Proof Section"
            >
              See All Case Studies
            </ConversionOptimizedButton>
          </div>
        </div>
      </Section>

      {/* Pipeline - Plain English */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">How It Works</h2>
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
                  <p className="text-sm text-muted-foreground">{phase.output}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="border-t border-border text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading-section mb-6">Find Out What's Breaking</h2>
          <p className="text-description text-muted-foreground mb-10">
            Book an assessment. Find out exactly where your revenue system is leaking deals.
          </p>

          <ConversionOptimizedButton
            to={ROUTES.assessment}
            ctaName="Final CTA - Find Out What's Breaking"
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