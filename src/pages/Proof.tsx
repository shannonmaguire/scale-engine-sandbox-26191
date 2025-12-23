import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { Section } from "@/components/ui/section";
import { CaseStudyCarousel } from "@/components/proof/CaseStudyCarousel";
import { TIMELINES } from "@/lib/canonical-constants";
import { useState } from "react";

const Proof = () => {
  const [expandedStudy, setExpandedStudy] = useState<number | null>(null);
  
  const caseStudies = [
    {
      id: 1,
      industry: "Healthcare",
      vertical: "AI-Assisted Wellness Clinic",
      size: "Launch stage",
      timeline: "90 Days",
      whatBroke: "No patient acquisition system. No funnel. Misaligned ops/marketing/tech teams.",
      pullQuote: "Zero to operational in 90 days",
      system: ["Multi-variant landing page system", "Lead flow: ScoreApp → CRM → SMS → AI voice → booking", "Design system unifying brand", "Sprint cadences and internal operating system"],
      beforeMetric: { label: "Patient acquisition", value: "No system" },
      afterMetric: { label: "Infrastructure deployed", value: "90 days" },
      growth: "Foundation",
      patternRestored: "Sprint structure aligned teams. Infrastructure built for multi-location scale."
    },
    {
      id: 2,
      industry: "Creator Technology",
      vertical: "Digital Education Platform",
      size: "Thousands of members",
      timeline: "6 months",
      whatBroke: "Sales stalled in inboxes. No follow-up ownership. Operations dependent on memory.",
      pullQuote: "Process debt eliminated",
      system: ["Mapped every intake point", "Rebuilt pipeline with ownership", "Automation preserving brand tone", "Unified CRM workflows"],
      beforeMetric: { label: "Stalled in inboxes", value: "No system" },
      afterMetric: { label: "Qualified calls/day", value: "2-5 daily" },
      growth: "Momentum Restored",
      patternRestored: "Backend infrastructure rebuilt. Operational cadence established without new tools."
    },
    {
      id: 3,
      industry: "Compliance Advisory",
      vertical: "Federal Cybersecurity",
      size: "Founder + contractors",
      timeline: "90 Days",
      whatBroke: "Deals via freelance platforms. No ICP focus. No outbound process.",
      pullQuote: "Repeatable outbound engine installed",
      system: ["Narrowed 9 ICPs to 3 structured lanes", "Apollo + SmartLead + HubSpot stack", "Lane-specific cold sequences", "Complete VA/SDR handoff documentation"],
      beforeMetric: { label: "Freelance platforms", value: "0 systems" },
      afterMetric: { label: "Pipeline activated", value: "$500K+ projected" },
      growth: "$500K+ Pipeline",
      patternRestored: "Tight ICP focus. Artifact-led sequences. 40%+ open rates."
    },
    {
      id: 4,
      industry: "Legal Services",
      vertical: "Subscription Legal",
      size: "Boutique firm",
      timeline: "90 Days",
      whatBroke: "Billable-hour model consuming $500/hr partner time. Subscription economics unvalidated.",
      pullQuote: "Subscription infrastructure deployed",
      system: ["Refined subscription tiers", "End-to-end subscriber funnel", "Atlanta pilot campaign", "Live dashboards for subscribers and churn"],
      beforeMetric: { label: "Billable hour model", value: "$500/hr consumed" },
      afterMetric: { label: "Subscription model", value: "Framework live" },
      growth: "Model Shift",
      patternRestored: "Unit economics proven. Automation freed partner time."
    },
    {
      id: 5,
      industry: "E-Commerce",
      vertical: "Peer-to-Peer Resale",
      size: "Independent seller",
      timeline: "6 months",
      whatBroke: "Casual sales. No structure. No listing cadence. No engagement system.",
      pullQuote: "Listing velocity drove growth",
      system: ["127 active listings on strict taxonomy", "Daily listing cadence", "Message macros, offer triggers", "Physical insert in every shipment"],
      beforeMetric: { label: "Previous 6 months", value: "$1.1K earned" },
      afterMetric: { label: "Systemized 6 months", value: "$2.3K" },
      growth: "+107%",
      patternRestored: "Structure outperformed intuition. Listing velocity beat inventory volume."
    },
    {
      id: 6,
      industry: "B2B SaaS",
      vertical: "Project Management Platform",
      size: "$4.2M ARR, Series A",
      timeline: "90 Days",
      whatBroke: "800+ trials/month, 6% conversion. Reps calling cold trials with zero usage data.",
      pullQuote: "Usage signals transformed pipeline",
      system: ["Product usage tracking integrated with Salesforce", "PQL scoring by feature adoption", "Automated routing by usage milestones", "Sales playbooks by usage pattern"],
      beforeMetric: { label: "Trial conversion", value: "6%" },
      afterMetric: { label: "PQL conversion", value: "24%" },
      growth: "4x Conversion",
      patternRestored: "Usage data transformed spray-and-pray into contextual conversations."
    },
    {
      id: 7,
      industry: "Professional Services",
      vertical: "Marketing Agency",
      size: "$2.8M revenue, 12 employees",
      timeline: "90 Days",
      whatBroke: "Project chaos across email, Slack, Drive, Trello. 15+ hrs/week hunting status.",
      pullQuote: "Unified delivery infrastructure",
      system: ["Centralized ClickUp with standardized templates", "Automated client reporting dashboard", "SOP library for repeatable workflows", "Resource capacity planning"],
      beforeMetric: { label: "Admin overhead", value: "15hrs/week" },
      afterMetric: { label: "Unified delivery", value: "2hrs/week" },
      growth: "87% Time Saved",
      patternRestored: "Unified system replaced memory-based tracking. NPS rose from 6.8 to 8.9."
    },
    {
      id: 8,
      industry: "Creator Technology",
      vertical: "Financial Intelligence SaaS",
      size: "Pre-launch MVP",
      timeline: "6 months",
      whatBroke: "Fragmented income data across PayPal, Stripe, Shopify, Sheets.",
      pullQuote: "Fragmented data consolidated",
      system: ["Bubble.io MVP with income logging", "600 enriched creator leads", "Cold outbound via Instantly.ai", "Newsletter with 30-32% open rates"],
      beforeMetric: { label: "Scattered data", value: "Manual tracking" },
      afterMetric: { label: "User signups", value: "100+ validated" },
      growth: "MVP Validated",
      patternRestored: "Pain point validated. 9-11% conversion rate."
    }
  ];

  // Featured case studies for above-the-fold preview
  const featuredStudies = caseStudies.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Proof | CWT Studio" 
        description="8 systems deployed. $500K+ pipeline activated. 107% growth. 4x conversion. Documented results across healthcare, compliance, legal, e-commerce, and SaaS." 
        keywords={[
          'revenue system case studies', 
          'infrastructure results',
          'CRM implementation proof',
          'pipeline activation',
          'systemization results'
        ]} 
        canonicalUrl="/proof" 
      />
      
      <Breadcrumbs />
      
      {/* Hero - Compact */}
      <Section noPadding className="border-b border-border">
        <div className="section-spacing-half">
          <h1 className="heading-page mb-4">Proof</h1>
          <p className="text-description text-muted-foreground max-w-2xl">
            8 systems deployed. Measured outcomes. Before, during, after—documented.
          </p>
        </div>
      </Section>

      {/* Metrics Bar - Above the fold */}
      <Section variant="muted" className="py-8 border-b border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary font-mono">$500K+</div>
            <div className="text-sm text-muted-foreground mt-1">Pipeline Activated</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary font-mono">4x</div>
            <div className="text-sm text-muted-foreground mt-1">Conversion Lift</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary font-mono">87%</div>
            <div className="text-sm text-muted-foreground mt-1">Time Reclaimed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary font-mono">90</div>
            <div className="text-sm text-muted-foreground mt-1">Days to Deploy</div>
          </div>
        </div>
      </Section>

      {/* Featured Case Studies - Above the fold, immediately visible */}
      <Section className="border-b border-border">
        <h2 className="heading-section mb-8">Results at a Glance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setExpandedStudy(expandedStudy === study.id ? null : study.id)}
              className="text-left bg-card border border-border p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="text-sm font-mono text-primary mb-1">{study.industry}</div>
                  <div className="text-xs text-muted-foreground">{study.vertical}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold font-mono text-primary">{study.growth}</div>
                  <div className="text-xs text-muted-foreground">{study.timeline}</div>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground mb-3">
                <span className="font-medium text-foreground">Broke:</span> {study.whatBroke}
              </div>
              
              <div className="flex items-center gap-4 text-xs font-mono pt-3 border-t border-border">
                <div>
                  <span className="text-muted-foreground">Before: </span>
                  <span className="text-foreground">{study.beforeMetric.value}</span>
                </div>
                <div className="text-primary">→</div>
                <div>
                  <span className="text-muted-foreground">After: </span>
                  <span className="text-primary font-semibold">{study.afterMetric.value}</span>
                </div>
              </div>
              
              {expandedStudy === study.id && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="text-sm mb-3">
                    <span className="font-medium text-foreground">Pattern Restored: </span>
                    <span className="text-muted-foreground">{study.patternRestored}</span>
                  </div>
                  <ul className="space-y-1">
                    {study.system.map((item, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </button>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground text-center mt-6">
          Click any card to expand details
        </p>
      </Section>

      {/* Full Case Studies - Carousel for deep dives */}
      <Section className="border-b border-border">
        <h2 className="heading-section mb-2">All Case Studies</h2>
        <p className="text-description text-muted-foreground mb-8">
          Complete breakdowns with system details.
        </p>
        <CaseStudyCarousel caseStudies={caseStudies} />
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-6">
            Start With Free Health Check
          </h2>
          <p className="text-description text-muted-foreground mb-10">
            5-minute quiz identifies gaps. Then book {TIMELINES.assessment} Assessment—complete diagnostic with 90-day roadmap.
          </p>
          <ConversionOptimizedButton 
            to="/self-assessment" 
            ctaName="Proof Page - Free Health Check" 
            location="Proof Page CTA" 
            size="lg"
          >
            Take Free Health Check
          </ConversionOptimizedButton>
        </div>
      </Section>
    </div>
  );
};

export default Proof;