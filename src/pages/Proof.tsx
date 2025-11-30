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
    system: ["Bubble.io MVP with income logging, categorization, and goal tracking", "600 qualified creator leads enriched via Apollo.io", "Cold outbound via Instantly.ai with lane-specific sequences", "ActiveCampaign nurture and segmentation with automated lead scoring", "Meta Ads testing + Typeform/Webflow waitlist capture", "Momentum Newsletter (30-32% open rates) for thought leadership + feedback loop", "Landing page design refined in-house, migrated to Bubble for live functionality"],
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
  }, {
    id: 6,
    industry: "B2B SaaS (Composite)",
    vertical: "Project Management Platform",
    size: "$4.2M ARR, Series A",
    timeline: "90 Days",
    challenge: "Product-led growth generating high-volume signups but sales team drowning in noise. 800+ trial starts per month, but only 6% converting to paid. No signal detection—reps calling cold trials with zero product usage. Gap: trial behavior invisible to sales workflow.",
    pullQuote: "Product usage signals transformed trial chaos into qualified pipeline",
    system: ["Product usage tracking integrated with Salesforce via API", "PQL scoring model based on feature adoption thresholds", "Automated lead routing triggered by usage milestones", "Sales playbooks customized by usage pattern (power user vs. evaluator)", "Real-time usage dashboard for rep prioritization", "Automated email sequences for low-engagement trials"],
    beforeMetric: {
      label: "Trial volume",
      value: "800/mo, 6% convert"
    },
    afterMetric: {
      label: "Qualified pipeline",
      value: "150 PQLs, 24% convert"
    },
    growth: "4x Conversion Rate",
    outcomes: ["Trial-to-paid conversion increased from 6% to 24% through behavior-based targeting", "Sales team capacity freed by 60%—stopped calling unqualified cold trials", "Average sales cycle reduced by 32% through better timing and context", "Rep win rate improved 3.5x by focusing on users demonstrating product value", "Expansion revenue surfaced through usage pattern analysis (identified upsell signals)", "**Pattern validated:** Product usage signals are the strongest predictor of purchase intent in PLG motion"],
    whyItWorked: "Reps stopped interrupting evaluators and started helping buyers. Usage data transformed spray-and-pray outreach into contextual, timely conversations with users already experiencing product value."
  }, {
    id: 7,
    industry: "Professional Services (Composite)",
    vertical: "Marketing Agency",
    size: "$2.8M annual revenue, 12 employees",
    timeline: "90 Days",
    challenge: "Project delivery chaos—client work spread across email threads, Slack, Google Drive, Trello. Account managers spending 15+ hours/week hunting for project status. Client escalations caused by missed deliverables and unclear timelines. Gap: no unified system of record.",
    pullQuote: "Project chaos eliminated through unified delivery infrastructure",
    system: ["Centralized project management with ClickUp (standardized board templates)", "Automated client reporting via dashboard with live project status", "SOP library for repeatable deliverable workflows (content, design, ad ops)", "Resource capacity planning dashboard for allocation visibility", "Client communication hub replacing scattered email/Slack threads", "Automated task assignment based on project type and team capacity"],
    beforeMetric: {
      label: "Admin overhead",
      value: "15hrs/week hunting status"
    },
    afterMetric: {
      label: "Unified delivery",
      value: "2hrs/week + real-time visibility"
    },
    growth: "87% Time Reclaimed",
    outcomes: ["Account manager admin time reduced from 15 hours to 2 hours per week", "Client escalations dropped 73% through proactive status visibility", "Project delivery time decreased 18% via standardized workflows", "Team capacity increased 22% through better resource allocation", "Client retention improved—NPS score rose from 6.8 to 8.9", "**Expansion enabled:** Time reclaimed allowed agency to take on 4 new clients without additional hires"],
    whyItWorked: "Unified system of record replaced memory-based project tracking. Clients gained self-service visibility, account managers shifted from status reporting to strategic work, and standardized SOPs ensured consistent delivery quality."
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
          <h1 className="heading-page mb-6">Proof of Execution</h1>
          <p className="text-description text-muted-foreground font-mono">
            Systems deployed under documented conditions with measured outcomes.
          </p>
        </div>
      </Section>

      {/* Case Studies Carousel - Primary Content */}
      <Section>
        <CaseStudyCarousel caseStudies={caseStudies} />
      </Section>

      {/* Quick Metrics Bar */}
      <Section variant="muted" className="py-16 border-t border-border">
        <div className="text-center mb-10">
          <h2 className="text-label text-muted-foreground mb-2">
            Featured Case Studies
          </h2>
          <p className="text-description text-muted-foreground">
            From 42+ total deployments
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="heading-subsection font-mono font-bold text-primary mb-2">7</div>
            <div className="text-description text-muted-foreground">Featured Case Studies</div>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div className="text-center">
            <div className="heading-subsection font-mono font-bold text-primary mb-2">$500K+</div>
            <div className="text-description text-muted-foreground">Pipeline Activated</div>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div className="text-center">
            <div className="heading-subsection font-mono font-bold text-primary mb-2">107%</div>
            <div className="text-description text-muted-foreground">Peak Growth Rate</div>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div className="text-center">
            <div className="heading-subsection font-mono font-bold text-primary mb-2">90 Days</div>
            <div className="text-description text-muted-foreground">Fastest Deploy</div>
          </div>
        </div>
      </Section>

      {/* Pattern Recognition - Condensed */}
      <Section className="border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">System Performance Conditions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch auto-rows-fr">
            <div className="border border-border p-6 h-full">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="heading-subsection mb-3">ICP Before Infrastructure</h3>
                  <p className="text-description text-muted-foreground">
                    Infrastructure performs when ideal customer profiles are defined first. Automation scales what targeting validates.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border p-6 h-full">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="heading-subsection mb-3">Manual Execution Consumes Strategic Capacity</h3>
                  <p className="text-description text-muted-foreground">
                    Administrative workflows occupy founder time regardless of product performance. Automation shifts capacity allocation from execution to decision architecture.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border p-6 h-full">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="heading-subsection mb-3">Dashboards Drive Decisions</h3>
                  <p className="text-description text-muted-foreground">
                    Real-time visibility enables data-informed decisions without requiring retrospective analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border p-6 h-full">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="heading-subsection mb-3">90-Day Validation Cycles</h3>
                  <p className="text-description text-muted-foreground">
                    Early wins validate system design before full deployment. Documentation creates compounding momentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 mb-8 font-mono text-xs uppercase tracking-widest">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
            <span className="text-primary font-semibold">Ready for Similar Results?</span>
          </div>
          <h2 className="heading-section mb-6">
            System Implementation
          </h2>
          <p className="text-description text-muted-foreground mb-10 max-w-2xl mx-auto">
            Implementation begins with infrastructure assessment. Current state audit, gap analysis, sequenced 90-day deployment roadmap.
          </p>
          <ConversionOptimizedButton to="/assessment" ctaName="Proof Page - Start Assessment" location="Proof Page CTA" size="lg">
            Start Your Assessment
          </ConversionOptimizedButton>
        </div>
      </Section>
    </div>;
};
export default Proof;
