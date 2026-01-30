import { Link } from "react-router-dom";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { Section } from "@/components/ui/section";
import { PartnerLogos } from "@/components/TrustIndicators";
import { ArrowRight } from "lucide-react";

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
  detailPage?: string; // Optional link to full case study
}


const Proof = () => {
  
  // Case studies rewritten with human problems first
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      industry: "Healthcare",
      vertical: "AI-Assisted Wellness Clinic",
      size: "Launch stage",
      timeline: "90 Days",
      humanProblem: "Great idea. Zero patients. Marketing, ops, and tech all pointing fingers.",
      whatBroke: "No patient acquisition system. No team alignment.",
      pullQuote: "We went from zero patients to a working system in 90 days",
      system: ["Landing page that converts", "Lead flow from quiz to booking to follow-up", "All teams on the same playbook"],
      beforeMetric: { label: "Patients", value: "Zero" },
      afterMetric: { label: "System deployed", value: "90 days" },
      growth: "Foundation Built",
      patternRestored: "Repeatable system ready to scale to multiple locations.",
      detailPage: "/proof/healthcare"
    },
    {
      id: 2,
      industry: "Creator Technology",
      vertical: "Digital Education Platform",
      size: "Thousands of members",
      timeline: "6 months",
      humanProblem: "Leads came in. Nobody followed up. Everything depended on memory.",
      whatBroke: "No follow-up system. Deals went cold.",
      pullQuote: "Zero leads fall through now. 2-5 qualified calls a day.",
      system: ["Mapped all lead entry points", "Built clear ownership structure", "Automated follow-up that sounds human"],
      beforeMetric: { label: "Follow-up rate", value: "None" },
      afterMetric: { label: "Qualified calls/day", value: "2-5" },
      growth: "Pipeline Fixed",
      patternRestored: "Team knows who owns what. Nothing slips through."
    },
    {
      id: 3,
      industry: "Compliance Advisory",
      vertical: "Federal Cybersecurity",
      size: "Founder + contractors",
      timeline: "90 Days",
      humanProblem: "Zero pipeline. No predictable revenue. Just waiting for inbound that never came.",
      whatBroke: "No outbound. No ICP. No demand system.",
      pullQuote: "We went from zero pipeline to $500K in 90 days",
      system: ["Narrowed from 9 target types to 3", "Built cold outreach that gets responses", "Handoff docs so anyone can run it"],
      beforeMetric: { label: "Pipeline", value: "$0" },
      afterMetric: { label: "Pipeline", value: "$500K+" },
      growth: "$500K+ Pipeline",
      patternRestored: "40%+ email open rates. Repeatable outbound without the founder.",
      detailPage: "/proof/cybersecurity"
    },
    {
      id: 4,
      industry: "Legal Services",
      vertical: "Subscription Legal",
      size: "Boutique firm",
      timeline: "90 Days",
      humanProblem: "$500/hour partners doing $50/hour admin work. Wanted subscriptions but didn't know if the math worked.",
      whatBroke: "Wrong business model. Partners drowning in low-value tasks.",
      pullQuote: "We proved subscription legal works. Partners stopped doing admin",
      system: ["Subscription tiers that make money", "Full subscriber funnel", "Dashboards for retention tracking"],
      beforeMetric: { label: "Partner time", value: "Wasted on admin" },
      afterMetric: { label: "Subscription model", value: "Live and working" },
      growth: "Model Shift",
      patternRestored: "Unit economics proven. Partners back to practicing law."
    },
    {
      id: 5,
      industry: "IT Services",
      vertical: "Apple Authorized Reseller",
      size: "Regional operation",
      timeline: "90 Days",
      humanProblem: "CSV uploads to Salesforce every month. Zero validation. Asset records didn't match vendor records.",
      whatBroke: "Data governance gaps. Serial numbers in Salesforce didn't tie back to anything.",
      pullQuote: "Finally, one source of truth for asset records",
      system: ["Data validation layer for imports", "Asset tracking tied to vendor records", "Finance can now trust the numbers"],
      beforeMetric: { label: "Data trust", value: "None" },
      afterMetric: { label: "Reconciliation", value: "Automated" },
      growth: "Data Integrity",
      patternRestored: "Single source of truth for physical and digital assets."
    },
    {
      id: 6,
      industry: "B2B SaaS",
      vertical: "Project Management Platform",
      size: "$4.2M ARR, Series A",
      timeline: "90 Days",
      humanProblem: "800 trials a month, 6% converted. Sales calling everyone, even people who never logged in.",
      whatBroke: "No way to tell who was actually using the product.",
      pullQuote: "We 4x'd trial conversion by only calling people who actually use the product",
      system: ["Product usage connected to Salesforce", "Leads scored by feature adoption", "Playbooks for each usage pattern"],
      beforeMetric: { label: "Trial conversion", value: "6%" },
      afterMetric: { label: "PQL conversion", value: "24%" },
      growth: "4x Conversion",
      patternRestored: "Sales stopped wasting time. Only talk to people who want to talk.",
      detailPage: "/proof/b2b-saas"
    },
    {
      id: 7,
      industry: "Professional Services",
      vertical: "Marketing Agency",
      size: "$2.8M revenue, 12 employees",
      timeline: "90 Days",
      humanProblem: "Projects lived in email, Slack, Drive, and Trello. 15 hours a week just figuring out what's happening.",
      whatBroke: "No single source of truth. Everything scattered.",
      pullQuote: "Cut 87% of the admin time. NPS jumped from 6.8 to 8.9",
      system: ["Everything in one place", "Templates for consistent project execution", "Dashboards clients can read"],
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
      humanProblem: "Creator income scattered across PayPal, Stripe, Shopify, spreadsheets. Nobody had a clear picture.",
      whatBroke: "Great idea, no way to test if people would pay.",
      pullQuote: "100+ signups validated the idea. 9-11% conversion rate on cold outreach",
      system: ["MVP for income tracking", "600 creator leads enriched", "Cold outreach that converted"],
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
          {caseStudies.map((study) => {
            const CardContent = (
              <div className="flex flex-col h-full">
                {/* Header - fixed height with consistent layout */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="text-sm font-mono text-primary leading-tight">{study.industry}</div>
                  <div className="text-sm font-bold font-mono text-primary text-right leading-tight whitespace-nowrap">{study.growth}</div>
                </div>
                
                {/* Meta - single line */}
                <div className="text-xs text-muted-foreground mb-3 truncate">{study.vertical} • {study.timeline}</div>
                
                {/* Problem description - flex grow to push footer down */}
                <div className="text-sm text-foreground mb-4 flex-grow min-h-[60px]">
                  {study.whatBroke}
                </div>
                
                {/* Footer - always at bottom */}
                <div className="flex items-center justify-between pt-3 border-t border-border mt-auto">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-muted-foreground whitespace-nowrap">{study.beforeMetric.value}</span>
                    <span className="text-primary">→</span>
                    <span className="text-foreground whitespace-nowrap">{study.afterMetric.value}</span>
                  </div>
                  {study.detailPage && (
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                  )}
                </div>
              </div>
            );

            return study.detailPage ? (
              <Link
                key={study.id}
                to={study.detailPage}
                className="bg-card border border-border p-5 hover:border-primary/50 transition-colors group flex"
              >
                {CardContent}
              </Link>
            ) : (
              <div
                key={study.id}
                className="bg-card border border-border p-5 flex"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Trust Indicators */}
      <PartnerLogos className="border-b border-border" />

      {/* CTA */}
      <Section variant="muted">
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
