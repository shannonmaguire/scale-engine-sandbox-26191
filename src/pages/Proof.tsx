import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { Section } from "@/components/ui/section";
import { CheckCircle } from "lucide-react";
import { CaseStudyCarousel } from "@/components/proof/CaseStudyCarousel";
const Proof = () => {
  const caseStudies: Array<{
    id: number;
    industry: string;
    vertical: string;
    size: string;
    timeline: string;
    challenge: string;
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
    outcomes: string[];
    whyItWorked?: string;
  }> = [{
    id: 1,
    industry: "Creator Technology",
    vertical: "Digital Education Platform",
    size: "Thousands of members",
    timeline: "6 months",
    challenge: "Digital education platform, thousands of members. Strong product, loyal audience. Operational state: sales inquiries stalled in inboxes, customer service requests unresolved, no follow-up ownership, daily operations dependent on individual memory. Gap: no process infrastructure.",
    pullQuote: "Process debt eliminated through documented infrastructure",
    system: ["Mapped every intake point across sales, support, and fulfillment", "Rebuilt pipeline with clear stages and ownership", "Designed automation that preserved brand tone while removing friction", "Connected support and sales through unified CRM workflows", "Created accountability framework between marketing, service, and fulfillment", "Established rhythm for lead progression from awareness to call booking"],
    beforeMetric: {
      label: "Stalled in inboxes",
      value: "No system"
    },
    afterMetric: {
      label: "Qualified calls/day",
      value: "2-5 daily"
    },
    growth: "Momentum Restored",
    outcomes: ["Siloed processes unified: Support and sales connected through automation without losing brand voice", "Accountability established: Clear ownership assigned between marketing, service, and fulfillment teams", "Daily momentum achieved: 2-5 qualified calls per day became the new baseline", "Live CRM dashboard: Real-time visibility into pipeline health and conversion stages", "Memory debt eliminated: Individual recall replaced with documented, repeatable systems", "**Pattern validated:** Growth wasn't blocked by market demand—it died in process debt"],
    whyItWorked: "Strong product and loyal audience were already in place—the fracture was operational. Backend infrastructure rebuilt to match frontend strength, established operational cadence without new tools or headcount."
  }, {
    id: 2,
    industry: "Creator Technology",
    vertical: "Financial Intelligence SaaS",
    size: "Pre-launch MVP",
    timeline: "6 months",
    challenge: "Creators tracked brand deals, UGC, affiliate payouts, course sales manually across PayPal, Stripe, Shopify, Google Sheets. No unified intelligence layer. Gap: fragmented income data prevented visibility into earnings patterns, timing, source analysis, and opportunity identification.",
    pullQuote: "Fragmented income data consolidated into single intelligence layer",
    system: ["Bubble.io MVP with income logging, categorization, and goal tracking", "600 qualified creator leads enriched via Apollo.io", "Cold outbound via Instantly.ai with lane-specific sequences", "ActiveCampaign nurture and segmentation with automated lead scoring", "Meta Ads testing + Typeform/Webflow waitlist capture", "Momentum Newsletter (30-32% open rates) for thought leadership + feedback loop", "Landing page design on Lovable, migrated to Bubble for live functionality"],
    beforeMetric: {
      label: "Scattered data",
      value: "Manual tracking"
    },
    afterMetric: {
      label: "User signups",
      value: "100+ validated"
    },
    growth: "MVP Validated",
    outcomes: ["100+ user signups: Validated pain point and product-market fit hypothesis", "9-11% conversion rate: Proven funnel performance from outbound to signup", "30-32% newsletter open rates: Thought leadership resonance confirmed brand authority", "Three user archetypes identified: Freelancers, UGC creators, micro-creators with digital products", "$1.80 CAD cost per lead: Efficient paid acquisition validated messaging and targeting", "**Strategic pivot:** Project paused to focus on CWT Studio—applying same operational infrastructure directly to clients"],
    whyItWorked: "Pain point validated through creator acknowledgment, offer validated through conversion rates. Market timing and integration depth required engineering resources beyond availability. Validated frameworks now power CWT Studio's Financial Intelligence service line."
  }, {
    id: 3,
    industry: "Compliance Advisory",
    vertical: "Federal Cybersecurity",
    size: "Founder + contractors",
    timeline: "90 Days",
    challenge: "Strong subject matter credibility. Operational state: deals arrived via freelance platforms, no ICP focus, no outbound process, no CRM discipline. Every deal required founder time. Gap: no repeatable acquisition system beyond personal network.",
    pullQuote: "Ad-hoc deal chasing replaced with repeatable outbound engine",
    system: ["Narrowed 9 ICPs into 3 structured lanes with targeting rules", "Apollo + SmartLead + HubSpot outbound stack", "CRM pipeline: New → Contacted → Warm → Discovery → Decision → Won/Lost", "Lane-specific cold sequences focused on artifacts (risk checklists, readiness proof)", "Sales Navigator + Apollo LinkedIn workflows with safety protocols", "Complete documentation for VA/SDR handoff"],
    beforeMetric: {
      label: "Freelance platforms",
      value: "0 systems"
    },
    afterMetric: {
      label: "Pipeline activated",
      value: "$500K+ projected"
    },
    growth: "Foundation",
    outcomes: ["Eliminated founder dependency: 3-lane ICP system now runs via documented VA workflows", "Exceeded benchmarks: >40% open rates vs. industry avg 15-25%, 0% bounce rate maintained", "Pipeline activated: First qualified opportunity sourced within 90 days from cold outbound", "Complete VA/SDR handoff: Every workflow documented and repeatable without founder involvement", "ICP clarity achieved: Narrowed 9 unfocused lanes to 3 high-conviction target segments", "**12-month projection:** $500K+ predictable pipeline based on validated open rates and targeting"],
    whyItWorked: "Tight ICP focus combined with artifact-led sequences and safety-first LinkedIn protocols. Every touch demonstrated subject matter authority through valuable deliverables rather than volume-based outreach."
  }, {
    id: 4,
    industry: "Legal Services",
    vertical: "Subscription Legal",
    size: "Boutique firm",
    timeline: "90 Days",
    challenge: "Boutique legal practice transitioning from billable-hour to subscription model. Tools deployed: MemberSpace, Stripe, Acuity, Clio. Operational state: growth decisions consuming partner time at $500/hr, subscription model not yet achieving repeatable traction. Gap: subscription economics unvalidated.",
    pullQuote: "Billable hours replaced with scalable subscription infrastructure",
    system: ["Refined subscription tiers and usage caps for profitability", "Designed attorney compensation tied to subscriber growth", "Built end-to-end subscriber funnel (signup → onboarding → usage → renewal)", "Launched Atlanta pilot campaign to validate messaging and targeting", "Created partnership/referral framework leveraging existing networks", "Configured MemberSpace, Stripe, Acuity, and Clio for subscription model", "Implemented quick-win automations to remove onboarding friction", "Delivered live dashboards for subscribers, usage, and churn risk"],
    beforeMetric: {
      label: "Billable hour model",
      value: "$500/hr consumed"
    },
    afterMetric: {
      label: "Subscription model",
      value: "Framework live"
    },
    growth: "Foundation",
    outcomes: ["Subscription economics validated: Profitable tier structure with clear usage caps and attorney compensation aligned to growth", "Atlanta pilot delivered data: Validated messaging, targeting, and acquisition economics for replication", "Real-time visibility: Live dashboards track subscribers, usage patterns, and churn risk indicators", "Attorney leverage achieved: Onboarding automation freed $500/hr partner time for client service", "Partner time reclaimed: Growth logistics shifted from manual execution to strategic oversight", "**12-month projection:** Proven subscription framework ready for geographic expansion and partnership activation"],
    whyItWorked: "Subscription model required economic validation before scale. Atlanta pilot proved unit economics, automation removed friction, and dashboards enabled data-driven expansion decisions."
  }, {
    id: 5,
    industry: "E-Commerce",
    vertical: "Peer-to-Peer Resale",
    size: "Independent seller",
    timeline: "6 months",
    challenge: "Independent seller, peer-to-peer resale channel. All growth organic—no ads, no paid traffic. Operational state: casual sales without structure. Gap: test infrastructure scaling capacity for single-operator storefront without brand spend.",
    pullQuote: "Listing velocity was the growth driver — not inventory volume",
    system: ["Listing Engine: 127 active listings built on strict taxonomy (category, color, condition, price tier)", "Daily listing cadence with fixed image framework and controlled copy templates", "Engagement Engine: Message macros, timed offer triggers, 15-minute response standardization", "Retention Engine: Physical print insert in every shipment—part art, part brand artifact", "Dashboard + iteration rules for predictable performance tracking"],
    beforeMetric: {
      label: "Previous 6 months",
      value: "$1.1K earned"
    },
    afterMetric: {
      label: "Systemized 6 months",
      value: "$2.3K (+107%)"
    },
    growth: "107% Revenue Growth",
    outcomes: ["Earnings: $2.3K (+107% vs previous 6 months)", "Sales: 108 orders (+177%)", "Listings Created: 692 (+585%)", "Views: 41.5K in 7 days (+58% from boosting)", "Sales from Boosting: 176 total", "Average Rating: 5 stars from 134 reviews", "**Pattern validated:** Listing velocity outperformed inventory volume as primary growth driver", "Standardized copy and photo framing increased conversion predictability", "Insert program lifted repeat purchases within 30 days by double-digit margin"],
    whyItWorked: "System discipline created enterprise-grade results inside a consumer marketplace. Structure outperformed intuition. Boosting only worked when paired with daily new listings. No brand spend, no ad budget—only infrastructure."
  }];
  return <div className="min-h-screen bg-background">
      <SEOHead 
        title="Revenue System Case Studies | Real Results & Proof | CWT Studio" 
        description="5 systems deployed across e-commerce, compliance, legal, and creator tech. $500K+ pipeline activated, 107% growth, documented results." 
        keywords={[
          'revenue system case studies', 
          'backend infrastructure results', 
          'Salesforce optimization proof',
          'e-commerce systemization', 
          'compliance outbound engine', 
          'legal subscription pipeline'
        ]} 
        canonicalUrl="/proof" 
      />
      
      <Breadcrumbs />
      
      {/* Minimal Hero */}
      <Section noPadding className="border-b">
        <div className="section-spacing-half">
          <h1 className="heading-page mb-3">Proof of Execution</h1>
          <p className="text-lg text-muted-foreground font-mono">
            Systems deployed under documented conditions with measured outcomes.
          </p>
        </div>
      </Section>

      {/* Case Studies Carousel - Primary Content */}
      <Section>
        <CaseStudyCarousel caseStudies={caseStudies} />
      </Section>

      {/* Quick Metrics Bar */}
      <Section variant="muted" className="py-16">
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-primary mb-1">5</div>
            <div className="text-xs text-muted-foreground">Systems Deployed</div>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-primary mb-1">$500K+</div>
            <div className="text-xs text-muted-foreground">Pipeline Activated</div>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-primary mb-1">107%</div>
            <div className="text-xs text-muted-foreground">Peak Growth Rate</div>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-primary mb-1">90 Days</div>
            <div className="text-xs text-muted-foreground">Fastest Deploy</div>
          </div>
        </div>
      </Section>

      {/* Pattern Recognition - Condensed */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section mb-8 text-center">
            System Performance Conditions
          </h2>

          <div className="grid md:grid-cols-2 gap-4 grid-auto-rows-1fr">
            <div className="bg-card border rounded-lg p-5 h-full">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-foreground mb-1.5 text-sm">ICP Before Infrastructure</h3>
                  <p className="text-xs text-muted-foreground">
                    Infrastructure performs when ideal customer profiles are defined first. Automation scales what targeting validates.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-5 h-full">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-foreground mb-1.5 text-sm">Manual Execution Consumes Strategic Capacity</h3>
                  <p className="text-xs text-muted-foreground">
                    Administrative workflows occupy founder time regardless of product performance. Automation shifts capacity allocation from execution to decision architecture.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-5 h-full">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-foreground mb-1.5 text-sm">Dashboards Drive Decisions</h3>
                  <p className="text-xs text-muted-foreground">
                    Real-time visibility enables data-informed decisions without requiring retrospective analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-5 h-full">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-foreground mb-1.5 text-sm">90-Day Validation Cycles</h3>
                  <p className="text-xs text-muted-foreground">
                    Early wins validate system design before full deployment. Documentation creates compounding momentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="section-spacing-half">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-primary">
              Ready for Similar Results?
            </span>
          </div>
          <h2 className="heading-section mb-6">
            System Implementation
          </h2>
          <p className="text-description mb-8 max-w-2xl mx-auto">
            Implementation begins with infrastructure assessment: current state audit, gap analysis, sequenced 90-day deployment roadmap.
          </p>
          <ConversionOptimizedButton to="/assessment" ctaName="Proof Page - Start Assessment" location="Proof Page CTA" size="lg">
            Start Your Assessment
          </ConversionOptimizedButton>
        </div>
      </Section>
    </div>;
};
export default Proof;