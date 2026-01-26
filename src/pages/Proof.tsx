import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { Section } from "@/components/ui/section";
import { CaseStudyCarousel } from "@/components/proof/CaseStudyCarousel";
import { PartnerLogos } from "@/components/TrustIndicators";
import { useState } from "react";

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

// Current patterns from active engagements
const currentPatterns = [
  {
    category: "MEDICAL DEVICES",
    title: "Teams losing forecast accuracy during regulatory handoffs",
    description: "Deals stall as compliance reviews aren't linked into the pipeline"
  },
  {
    category: "OPS",
    title: "Deals stalling post-demo because ownership isn't enforced",
    description: "Handoff from sales to ops breaks when there's no system holding it"
  },
  {
    category: "PROFESSIONAL SERVICES",
    title: "Revenue closes but delivery systems fail to operationalize",
    description: "Sales close, ops scrambles, clients churn"
  },
  {
    category: "PARTNER-LED SALESFORCE",
    title: "RevOps → Finance boundary breaks at scale",
    description: "Everyone looks clean until 5 errors accumulate"
  },
  {
    category: "SAAS STARTUPS",
    title: "Companies selling enforcement systems that lack their own internal system of enforcement",
    description: "The product is polished but the back office is held together by manual processes"
  },
  {
    category: "EQUIPMENT / KIT",
    title: "Growth exposing cracks in fragmented systems before they break",
    description: "Things work today, but volume will surface what manual processes are hiding"
  },
  {
    category: "HEALTH SERVICES",
    title: "Operational access granted before commercials are settled",
    description: "Revenue recognized in paper while payment collection is unmoored"
  },
  {
    category: "MULTI SYSTEM ENGINEERING",
    title: "Systems drift between CRM, finance, and operations platforms",
    description: "Reality diverges in one system but isn't reflected everywhere without human intervention"
  }
];

const Proof = () => {
  const [expandedStudy, setExpandedStudy] = useState<number | null>(null);
  
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

  // Featured case studies for above-the-fold preview
  const featuredStudies = caseStudies.slice(0, 4);

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
      <Section noPadding className="border-b border-border">
        <div className="section-spacing-half">
          <div className="system-status mb-8">CASE STUDIES</div>
          <h1 className="heading-page mb-4">What We Fixed</h1>
          <p className="text-description text-muted-foreground max-w-2xl">
            Real results from teams that fixed what was breaking.
          </p>
        </div>
      </Section>

      {/* Featured Case Studies - Lead with human problem */}
      <Section className="border-b border-border">
        <h2 className="heading-section mb-8">The Short Version</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setExpandedStudy(expandedStudy === study.id ? null : study.id)}
              className="text-left bg-card border border-border p-6 hover:border-primary/50 transition-colors active:scale-[0.98] active:bg-card/80"
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
              
              {/* Human problem first */}
              <div className="text-sm text-foreground mb-3">
                {study.humanProblem}
              </div>
              
              <div className="flex items-center gap-4 text-xs font-mono pt-3 border-t border-border">
                <div>
                  <span className="text-muted-foreground">{study.beforeMetric.label}: </span>
                  <span className="text-foreground">{study.beforeMetric.value}</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div>
                  <span className="text-muted-foreground">{study.afterMetric.label}: </span>
                  <span className="text-foreground">{study.afterMetric.value}</span>
                </div>
              </div>
              
              {expandedStudy === study.id && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="text-sm mb-3">
                    <span className="font-medium text-foreground">What we did: </span>
                  </div>
                  <ul className="space-y-1 mb-3">
                    {study.system.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm text-muted-foreground italic">
                    "{study.patternRestored}"
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground text-center mt-6">
          Click any card to see what we actually did
        </p>
      </Section>

      {/* What We're Seeing Right Now - Pattern Grid */}
      <Section className="border-b border-border">
        <div className="system-status mb-6">PATTERNS</div>
        <h2 className="heading-section mb-2">What We're Seeing Right Now</h2>
        <p className="text-description text-muted-foreground mb-8">
          Anonymized signals from active engagements across medical devices, CPG, SaaS, and services.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentPatterns.map((pattern, index) => (
            <div 
              key={index}
              className="bg-card border border-border p-6 hover:border-primary/30 transition-colors"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
                {pattern.category}
              </div>
              <div className="text-sm font-medium text-foreground mb-2 leading-snug">
                {pattern.title}
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed">
                {pattern.description}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Full Case Studies - Carousel for deep dives */}
      <Section className="border-b border-border">
        <h2 className="heading-section mb-2">All 8 Case Studies</h2>
        <p className="text-description text-muted-foreground mb-8">
          The full story with details.
        </p>
        <CaseStudyCarousel caseStudies={caseStudies} />
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
