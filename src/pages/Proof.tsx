import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { Section } from "@/components/ui/section";
import { PartnerLogos } from "@/components/TrustIndicators";

interface CaseStudy {
  id: number;
  industry: string;
  vertical: string;
  size: string;
  timeline: string;
  humanProblem: string;
  whatBroke: string;
  pullQuote: string;
  system: string[];
  beforeMetric: { label: string; value: string };
  afterMetric: { label: string; value: string };
  growth: string;
  patternRestored: string;
}


const Proof = () => {
  
  // Case studies rewritten with human problems first
  const caseStudies = [
    {
      id: 1,
      industry: "Healthcare",
      vertical: "AI-Assisted Wellness Clinic",
      size: "Launch stage",
      timeline: "90 Days",
      humanProblem: "They had a great idea but zero way to get patients in the door. Marketing, ops, and tech were all pointing fingers.",
      whatBroke: "No patient acquisition system. Teams weren't aligned.",
      pullQuote: "We went from zero patients to a working system in 90 days",
      system: ["Built a landing page that actually converts", "Connected lead flow from quiz to booking to follow-up", "Got all teams working from the same playbook"],
      beforeMetric: { label: "Patients", value: "Zero" },
      afterMetric: { label: "System deployed", value: "90 days" },
      growth: "Foundation Built",
      patternRestored: "Now they have a repeatable system ready to scale to multiple locations."
    },
    {
      id: 2,
      industry: "Creator Technology",
      vertical: "Digital Education Platform",
      size: "Thousands of members",
      timeline: "6 months",
      humanProblem: "Leads came in. Nobody followed up. Deals went cold.",
      whatBroke: "No follow-up system. Everything depended on memory.",
      pullQuote: "Zero leads fall through now. 2-5 qualified calls a day.",
      system: ["Mapped every way leads come in", "Built ownership so nothing falls through cracks", "Automated follow-up that sounds human"],
      beforeMetric: { label: "Follow-up rate", value: "None" },
      afterMetric: { label: "Qualified calls/day", value: "2-5" },
      growth: "Pipeline Fixed",
      patternRestored: "Team knows exactly who owns what. Nothing slips through anymore."
    },
    {
      id: 3,
      industry: "Compliance Advisory",
      vertical: "Federal Cybersecurity",
      size: "Founder + contractors",
      timeline: "90 Days",
      humanProblem: "No real pipeline. No predictable revenue. Just waiting for inbound that never came.",
      whatBroke: "No outbound. No ICP. No system to generate demand.",
      pullQuote: "We went from zero pipeline to $500K in 90 days",
      system: ["Figured out exactly who to target (narrowed from 9 types to 3)", "Built cold outreach that actually gets responses", "Created handoff docs so anyone can run it"],
      beforeMetric: { label: "Pipeline", value: "$0" },
      afterMetric: { label: "Pipeline", value: "$500K+" },
      growth: "$500K+ Pipeline",
      patternRestored: "40%+ email open rates. Repeatable outbound that works without the founder."
    },
    {
      id: 4,
      industry: "Legal Services",
      vertical: "Subscription Legal",
      size: "Boutique firm",
      timeline: "90 Days",
      humanProblem: "Partners billing $500/hour were doing admin work. They wanted subscriptions but didn't know if the math worked.",
      whatBroke: "Wrong business model. Partners drowning in tasks worth $50/hr.",
      pullQuote: "We proved subscription legal works. Partners stopped doing admin",
      system: ["Built subscription tiers that actually make money", "Created the whole subscriber funnel", "Built dashboards to track who's staying and who's leaving"],
      beforeMetric: { label: "Partner time", value: "Wasted on admin" },
      afterMetric: { label: "Subscription model", value: "Live and working" },
      growth: "Model Shift",
      patternRestored: "Unit economics proven. Partners back to practicing law."
    },
    {
      id: 5,
      industry: "E-Commerce",
      vertical: "Peer-to-Peer Resale",
      size: "Independent seller",
      timeline: "6 months",
      humanProblem: "They were listing stuff whenever they felt like it. No system. Sales were random.",
      whatBroke: "No listing cadence. No follow-up. Just vibes.",
      pullQuote: "Same inventory, 2x the sales. Just from having a system",
      system: ["Created strict listing schedule", "Built message templates for common situations", "Added physical cards in every shipment for repeat buyers"],
      beforeMetric: { label: "6 months before", value: "$1.1K" },
      afterMetric: { label: "6 months after", value: "$2.3K" },
      growth: "+107%",
      patternRestored: "Repeatable process in place. Sales no longer depend on motivation."
    },
    {
      id: 6,
      industry: "B2B SaaS",
      vertical: "Project Management Platform",
      size: "$4.2M ARR, Series A",
      timeline: "90 Days",
      humanProblem: "800 trials a month, 6% converted. Sales was calling everyone, even people who never logged in.",
      whatBroke: "No way to tell who was actually using the product.",
      pullQuote: "We 4x'd trial conversion by only calling people who actually use the product",
      system: ["Connected product usage to Salesforce", "Scored leads by what features they actually use", "Built playbooks for each usage pattern"],
      beforeMetric: { label: "Trial conversion", value: "6%" },
      afterMetric: { label: "PQL conversion", value: "24%" },
      growth: "4x Conversion",
      patternRestored: "Sales stopped wasting time. Only talk to people who want to talk."
    },
    {
      id: 7,
      industry: "Professional Services",
      vertical: "Marketing Agency",
      size: "$2.8M revenue, 12 employees",
      timeline: "90 Days",
      humanProblem: "Projects lived in email, Slack, Drive, and Trello. 15 hours a week just figuring out what's happening.",
      whatBroke: "No single source of truth. Everything was scattered.",
      pullQuote: "Cut 87% of the admin time. NPS jumped from 6.8 to 8.9",
      system: ["Put everything in one place", "Built templates so projects run the same way", "Created dashboards clients can actually read"],
      beforeMetric: { label: "Admin time", value: "15hrs/week" },
      afterMetric: { label: "Admin time", value: "2hrs/week" },
      growth: "87% Time Saved",
      patternRestored: "Clients happier. Team happier. Less time hunting for status."
    },
    {
      id: 8,
      industry: "Creator Technology",
      vertical: "Financial Intelligence SaaS",
      size: "Pre-launch MVP",
      timeline: "6 months",
      humanProblem: "Creator income was scattered across PayPal, Stripe, Shopify, spreadsheets. Nobody had a clear picture.",
      whatBroke: "Great idea, no way to test if people would pay.",
      pullQuote: "100+ signups validated the idea. 9-11% conversion rate on cold outreach",
      system: ["Built MVP for income tracking", "Found and enriched 600 creator leads", "Ran cold outreach that actually converted"],
      beforeMetric: { label: "Validated demand", value: "Unknown" },
      afterMetric: { label: "User signups", value: "100+" },
      growth: "MVP Validated",
      patternRestored: "Pain point validated with real money. Ready to build the real thing."
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Case Studies | Systems Architecture Results | CWT Studio" 
        description="$500K+ pipeline activated. 4x conversion improvement. 87% admin time eliminated. What happens when systems stop breaking." 
        keywords={[
          'systems architecture case studies', 
          'CRM audit results',
          'revenue operations examples',
          'pipeline activation',
          'sales operations results'
        ]}
        canonicalUrl="/proof"
        caseStudySchema={caseStudies.map(study => ({
          name: `${study.industry} - ${study.vertical}`,
          description: study.humanProblem,
          industry: study.industry,
          result: study.growth
        }))}
      />
      
      <Breadcrumbs />
      
      {/* Hero */}
      <Section className="border-b border-border">
        <div className="system-status mb-8">CASE STUDIES</div>
        <h1 className="heading-page">What We Fixed</h1>
      </Section>

      {/* All 8 Case Studies - Single scannable grid */}
      <Section className="border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-card border border-border p-5"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="text-sm font-mono text-primary">{study.industry}</div>
                <div className="text-sm font-bold font-mono text-primary">{study.growth}</div>
              </div>
              
              <div className="text-xs text-muted-foreground mb-3">{study.vertical} • {study.timeline}</div>
              
              <div className="text-sm text-foreground mb-4 min-h-[40px]">
                {study.whatBroke}
              </div>
              
              <div className="flex items-center gap-2 text-xs font-mono pt-3 border-t border-border">
                <span className="text-muted-foreground">{study.beforeMetric.value}</span>
                <span className="text-primary">→</span>
                <span className="text-foreground">{study.afterMetric.value}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Trust Indicators */}
      <PartnerLogos className="border-b border-border" />

      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-6">
            Find Out What's Breaking
          </h2>
          <p className="text-description text-muted-foreground mb-10">
            2-week diagnostic. System scorecard, risk assessment, implementation pathway.
          </p>
          <ConversionOptimizedButton 
            to="/assessment" 
            ctaName="Proof Page - Book Assessment" 
            location="Proof Page CTA" 
            size="lg"
          >
            Book Assessment
          </ConversionOptimizedButton>
        </div>
      </Section>
    </div>
  );
};

export default Proof;
