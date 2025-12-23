import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { Section } from "@/components/ui/section";
import { CheckCircle } from "lucide-react";
import { CaseStudyCarousel } from "@/components/proof/CaseStudyCarousel";
import { CTA, ROUTES, TIMELINES } from "@/lib/canonical-constants";
const Proof = () => {
  const caseStudies: Array<{
    id: number;
    industry: string;
    vertical: string;
    size: string;
    timeline: string;
    whatBroke: string;
    pullQuote: string;
    system: string[];
    beforeMetric: {
      label: string;
      value: string;
    };
    afterMetric: {
      label: string;
      value: string;
    };
    growth: string;
    patternRestored: string;
  }> = [{
    id: 1,
    industry: "Healthcare",
    vertical: "AI-Assisted Wellness Clinic",
    size: "Launch stage",
    timeline: "90 Days",
    whatBroke: "No patient acquisition system. No funnel. Misaligned ops/marketing/tech teams. No tracking.",
    pullQuote: "Zero to operational in 90 days",
    system: ["Multi-variant landing page system", "Lead flow: ScoreApp → CRM → SMS → AI voice → booking", "Design system unifying brand", "Sprint cadences and internal operating system"],
    beforeMetric: { label: "Patient acquisition", value: "No system" },
    afterMetric: { label: "Infrastructure deployed", value: "90 days" },
    growth: "Foundation",
    patternRestored: "Sprint structure aligned teams. Infrastructure built for multi-location scale."
  }, {
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
  }, {
    id: 3,
    industry: "Creator Technology",
    vertical: "Financial Intelligence SaaS",
    size: "Pre-launch MVP",
    timeline: "6 months",
    whatBroke: "Fragmented income data across PayPal, Stripe, Shopify, Sheets. No unified intelligence.",
    pullQuote: "Fragmented data consolidated",
    system: ["Bubble.io MVP with income logging", "600 enriched creator leads", "Cold outbound via Instantly.ai", "Newsletter with 30-32% open rates"],
    beforeMetric: { label: "Scattered data", value: "Manual tracking" },
    afterMetric: { label: "User signups", value: "100+ validated" },
    growth: "MVP Validated",
    patternRestored: "Pain point validated. 9-11% conversion rate. Frameworks now power CWT services."
  }, {
    id: 4,
    industry: "Compliance Advisory",
    vertical: "Federal Cybersecurity",
    size: "Founder + contractors",
    timeline: "90 Days",
    whatBroke: "Deals via freelance platforms. No ICP focus. No outbound process. No CRM discipline.",
    pullQuote: "Repeatable outbound engine installed",
    system: ["Narrowed 9 ICPs to 3 structured lanes", "Apollo + SmartLead + HubSpot stack", "Lane-specific cold sequences", "Complete VA/SDR handoff documentation"],
    beforeMetric: { label: "Freelance platforms", value: "0 systems" },
    afterMetric: { label: "Pipeline activated", value: "$500K+ projected" },
    growth: "Foundation",
    patternRestored: "Tight ICP focus. Artifact-led sequences. 40%+ open rates vs. 15-25% industry avg."
  }, {
    id: 5,
    industry: "Legal Services",
    vertical: "Subscription Legal",
    size: "Boutique firm",
    timeline: "90 Days",
    whatBroke: "Billable-hour model consuming $500/hr partner time. Subscription economics unvalidated.",
    pullQuote: "Subscription infrastructure deployed",
    system: ["Refined subscription tiers", "End-to-end subscriber funnel", "Atlanta pilot campaign", "Live dashboards for subscribers and churn"],
    beforeMetric: { label: "Billable hour model", value: "$500/hr consumed" },
    afterMetric: { label: "Subscription model", value: "Framework live" },
    growth: "Foundation",
    patternRestored: "Unit economics proven. Automation freed partner time. Ready for expansion."
  }, {
    id: 6,
    industry: "E-Commerce",
    vertical: "Peer-to-Peer Resale",
    size: "Independent seller",
    timeline: "6 months",
    whatBroke: "Casual sales. No structure. No listing cadence. No engagement system.",
    pullQuote: "Listing velocity drove growth",
    system: ["127 active listings on strict taxonomy", "Daily listing cadence", "Message macros, offer triggers, 15-min response", "Physical insert in every shipment"],
    beforeMetric: { label: "Previous 6 months", value: "$1.1K earned" },
    afterMetric: { label: "Systemized 6 months", value: "$2.3K (+107%)" },
    growth: "107% Revenue Growth",
    patternRestored: "Structure outperformed intuition. Listing velocity beat inventory volume."
  }, {
    id: 7,
    industry: "B2B SaaS (Composite)",
    vertical: "Project Management Platform",
    size: "$4.2M ARR, Series A",
    timeline: "90 Days",
    whatBroke: "800+ trials/month, 6% conversion. Reps calling cold trials with zero usage data.",
    pullQuote: "Usage signals transformed pipeline",
    system: ["Product usage tracking integrated with Salesforce", "PQL scoring by feature adoption", "Automated routing by usage milestones", "Sales playbooks by usage pattern"],
    beforeMetric: { label: "Trial volume", value: "800/mo, 6% convert" },
    afterMetric: { label: "Qualified pipeline", value: "150 PQLs, 24% convert" },
    growth: "4x Conversion Rate",
    patternRestored: "Usage data transformed spray-and-pray into contextual conversations."
  }, {
    id: 8,
    industry: "Professional Services (Composite)",
    vertical: "Marketing Agency",
    size: "$2.8M revenue, 12 employees",
    timeline: "90 Days",
    whatBroke: "Project chaos across email, Slack, Drive, Trello. 15+ hrs/week hunting status.",
    pullQuote: "Unified delivery infrastructure",
    system: ["Centralized ClickUp with standardized templates", "Automated client reporting dashboard", "SOP library for repeatable workflows", "Resource capacity planning"],
    beforeMetric: { label: "Admin overhead", value: "15hrs/week hunting" },
    afterMetric: { label: "Unified delivery", value: "2hrs/week" },
    growth: "87% Time Reclaimed",
    patternRestored: "Unified system replaced memory-based tracking. NPS rose from 6.8 to 8.9."
  }];
  return <div className="min-h-screen bg-background">
      <SEOHead 
        title="Revenue System Case Studies | Real Results & Proof | CWT Studio" 
        description="8 systems deployed across healthcare, e-commerce, compliance, legal, and creator tech. $500K+ pipeline activated, 107% growth, documented results." 
        keywords={[
          'revenue system case studies', 
          'backend infrastructure results', 
          'Salesforce optimization proof',
          'healthcare patient acquisition',
          'e-commerce systemization', 
          'compliance outbound engine', 
          'legal subscription pipeline'
        ]} 
        canonicalUrl="/proof" 
      />
      
      <Breadcrumbs />
      
      {/* Hero */}
      <Section noPadding className="border-b border-border">
        <div className="section-spacing-half">
          <h1 className="heading-page mb-4">Proof</h1>
          <p className="text-description text-muted-foreground">
            8 deployed systems with measured outcomes.
          </p>
        </div>
      </Section>

      {/* What Works */}
      <Section className="border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-section mb-10">What Works</h2>

          <div className="grid gap-6">
            <div className="bg-card border-l-2 border-primary p-6">
              <h3 className="heading-subsection mb-3">ICP Before Infrastructure</h3>
              <p className="text-description text-muted-foreground">
                Infrastructure performs when ideal customer profiles are defined first.
              </p>
            </div>

            <div className="bg-card border-l-2 border-primary p-6">
              <h3 className="heading-subsection mb-3">Automation Shifts Capacity</h3>
              <p className="text-description text-muted-foreground">
                Administrative workflows occupy founder time. Automation moves capacity from execution to strategy.
              </p>
            </div>

            <div className="bg-card border-l-2 border-primary p-6">
              <h3 className="heading-subsection mb-3">Dashboards Drive Decisions</h3>
              <p className="text-description text-muted-foreground">
                Real-time visibility enables data-informed decisions without retrospective analysis.
              </p>
            </div>

            <div className="bg-card border-l-2 border-primary p-6">
              <h3 className="heading-subsection mb-3">90-Day Validation Cycles</h3>
              <p className="text-description text-muted-foreground">
                Rapid implementation cycles with measurable outcomes outperform extended planning phases.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Metrics */}
      <Section variant="muted" className="py-12 border-t border-border">
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="heading-subsection text-primary mb-1">8</div>
            <div className="text-description text-muted-foreground">Case Studies</div>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div className="text-center">
            <div className="heading-subsection text-primary mb-1">$500K+</div>
            <div className="text-description text-muted-foreground">Pipeline Activated</div>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div className="text-center">
            <div className="heading-subsection text-primary mb-1">90 Days</div>
            <div className="text-description text-muted-foreground">Fastest Deploy</div>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div className="text-center">
            <div className="heading-subsection text-primary mb-1">300%</div>
            <div className="text-description text-muted-foreground">Peak Conversion Lift</div>
          </div>
        </div>
      </Section>

      {/* Case Studies Carousel */}
      <Section className="border-t border-border">
        <CaseStudyCarousel caseStudies={caseStudies} />
      </Section>

      {/* CTA */}
      <Section className="border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-6">
            Start With Free Health Check
          </h2>
          <p className="text-description text-muted-foreground mb-10">
            5-minute quiz identifies gaps. Then book {TIMELINES.assessment} Infrastructure Assessment—complete diagnostic with 90-day roadmap.
          </p>
          <ConversionOptimizedButton to="/self-assessment" ctaName="Proof Page - Free Health Check" location="Proof Page CTA" size="lg">
            Take Free Health Check
          </ConversionOptimizedButton>
        </div>
      </Section>
    </div>;
};
export default Proof;
