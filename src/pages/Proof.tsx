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
    challenge: "A digital education platform with thousands of members was running on enthusiasm, not infrastructure. Their product was strong, their audience loyal—but behind the scenes, every process was breaking. Sales inquiries stalled in inboxes. Customer service looped in circles. No one owned follow-up, and daily operations depended on individual memory instead of systems.",
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
    whyItWorked: "Strong product and loyal audience were already in place—the fracture was operational. Backend infrastructure rebuilt to match frontend strength, restoring momentum without new tools or headcount."
  }, {
    id: 2,
    industry: "Creator Technology",
    vertical: "Financial Intelligence SaaS",
    size: "Pre-launch MVP",
    timeline: "6 months",
    challenge: "Creator Wealth Tools was built to turn fragmented creator income into financial intelligence. Creators tracked brand deals, UGC, affiliate payouts, and course sales manually across PayPal, Stripe, Shopify, and Google Sheets. Creators required a unified income intelligence layer—not another finance app—that consolidates what they earn, when, from whom, and where the next opportunity lies.",
    pullQuote: "Financial intelligence for serious creators",
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
    whyItWorked: "Every creator acknowledged the financial chaos problem, and conversion rates confirmed the offer resonated. Market timing and integration depth required more engineering than available, so the validated frameworks now power CWT Studio's Financial Intelligence service line."
  }, {
    id: 3,
    industry: "Compliance Advisory",
    vertical: "Federal Cybersecurity",
    size: "Founder + contractors",
    timeline: "90 Days",
    challenge: "Strong subject matter credibility but no repeatable acquisition system. Deals arrived sporadically via freelance platforms, with no ICP focus, no outbound process, and no CRM discipline. Every deal required founder time, with no path to scale beyond personal network and referrals.",
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
    challenge: "Boutique legal practice sought to break free from the traditional billable-hour model and reposition as a premium, subscription-first service. The foundation was in place — MemberSpace, Stripe, Acuity, and Clio — but growth decisions were consuming partner time at $500/hr, and the subscription model had not yet crossed into repeatable traction.",
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
    challenge: "Independent seller operating in a peer-to-peer resale channel sought to convert casual sales into a repeatable, data-driven revenue system. All growth organic—no ads, no paid traffic. CWT Studio systemized the operation to test how far structure alone can scale a single-operator storefront without brand spend or ad budget.",
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
      <SEOHead title="Revenue System Case Studies | E-Commerce, Compliance & Legal Firms" description="Deployed systems for creator platforms, e-commerce resale, financial intelligence SaaS, compliance advisory, and subscription legal. Real infrastructure, measured outcomes, documented proof." keywords={['revenue system case studies', 'backend infrastructure results', 'e-commerce systemization', 'peer-to-peer resale optimization', 'compliance outbound engine', 'legal subscription pipeline']} canonicalUrl="/proof" />
      
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
            What Makes Systems Work
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card border rounded-lg p-5">
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

            <div className="bg-card border rounded-lg p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-foreground mb-1.5 text-sm">Process Debt Kills Growth</h3>
                  <p className="text-xs text-muted-foreground">
                    Manual workflows consume founder capacity that strong products cannot overcome. Systems restore time allocation to strategic decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-5">
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

            <div className="bg-card border rounded-lg p-5">
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
            Build Your System
          </h2>
          <p className="text-description mb-8 max-w-2xl mx-auto">
            Every system begins with a deep assessment—auditing infrastructure, identifying gaps, and designing a 90-day roadmap based on what the analysis reveals.
          </p>
          <ConversionOptimizedButton to="/assessment" ctaName="Proof Page - Start Assessment" location="Proof Page CTA" size="lg">
            Start $1,800 Assessment
          </ConversionOptimizedButton>
          <p className="text-xs text-muted-foreground mt-4 font-mono">Fixed scope, fixed price · $1,800 fully credits to Sprint</p>
        </div>
      </Section>
    </div>;
};
export default Proof;