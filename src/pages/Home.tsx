import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
import { EngagementTracker } from "@/components/EngagementTracker";
import { CheckCircle, X, Shield, TrendingUp, Users, Mail, BarChart3, UserX } from "lucide-react";
import { CTA, ROUTES, METRICS } from "@/lib/canonical-constants";

const Home = () => {
  usePerformanceMonitoring();
  useScrollDepth();

  // Fit / Not Fit combined
  const fitCriteria = [
    { fit: true, label: "Your forecast is a guess" },
    { fit: true, label: "You're doing sales admin" },
    { fit: true, label: "Everything runs through you" },
    { fit: false, label: "Decisions take forever" },
    { fit: false, label: "No one owns operations" },
    { fit: false, label: "You're starting from zero" }
  ];

  // Single proof point
  const proof = {
    client: "Cybersecurity SaaS ($4.2M ARR)",
    quote: "I was spending 15 hours a week on spreadsheet reconciliation. Now I spend zero.",
    result: "Founder got 15 hours back every week."
  };

  // What We Do - condensed
  const whatWeDo = [
    { icon: Mail, title: "Stop Leads From Dying" },
    { icon: BarChart3, title: "Make Your Sales Data Useful" },
    { icon: UserX, title: "Get Founders Out of the Weeds" }
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
        title="Revenue Infrastructure That Compounds | CWT Studio"
        description="Revenue infrastructure that scales without breaking. For teams where system failure means lost deals, not just lost time."
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
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
            Disciplined systems. Clean execution. Compounding growth.
          </div>

          <h1 className="heading-page mb-6 leading-[1.1]">
            Growth dies when systems break.
          </h1>

          <p className="text-lg md:text-xl text-foreground font-medium mb-8 max-w-2xl">
            We build revenue infrastructure that scales without breaking. For teams where system failure means lost deals, not just lost time.
          </p>

          <div className="flex flex-col gap-6">
            <ConversionOptimizedButton
              to={ROUTES.assessment}
              ctaName="Hero - Run Assessment"
              location="Homepage Hero"
              size="lg"
            >
              Run a revenue infrastructure assessment
            </ConversionOptimizedButton>

            <div className="flex flex-wrap gap-3 md:gap-6 pt-2">
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

      {/* What We Do - No descriptions */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-4xl">
          <h2 className="heading-section mb-10">What We Do</h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {whatWeDo.map((service, index) => (
              <div key={index} className="border border-border bg-card p-6 flex items-center gap-4">
                <service.icon className="w-8 h-8 text-primary flex-shrink-0" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Fit / Not Fit - Combined */}
      <Section className="border-t border-border">
        <div className="max-w-4xl">
          <h2 className="heading-section mb-10">Fit Check</h2>

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

      {/* Proof - Single strong example */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-10">What Happened</h2>

          <div className="border border-border bg-card p-8">
            <blockquote className="text-xl md:text-2xl text-foreground font-medium mb-6 border-l-2 border-primary pl-6 italic">
              "{proof.quote}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {proof.client}
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
              More Results
            </ConversionOptimizedButton>
          </div>
        </div>
      </Section>

      {/* Final CTA - No paragraph */}
      <Section className="border-t border-border text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading-section mb-8">Find Out What's Breaking</h2>

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
