import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { Section } from "@/components/ui/section";


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
  
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      industry: "Healthcare",
      vertical: "AI-Assisted Wellness Clinic",
      size: "Launch stage",
      timeline: "90 Days",
      humanProblem: "New clinic, zero patients. Marketing, operations, and clinical teams weren't coordinated.",
      whatBroke: "No system to attract patients or align the team.",
      pullQuote: "We went from zero patients to a working system in 90 days",
      system: ["Landing page that converts", "Lead flow from quiz to booking to follow-up", "All teams on the same playbook"],
      beforeMetric: { label: "Patients", value: "Zero" },
      afterMetric: { label: "System deployed", value: "90 days" },
      growth: "Foundation Built",
      patternRestored: "Repeatable system ready to scale to multiple locations."
    },
    {
      id: 2,
      industry: "Creator Technology",
      vertical: "Digital Education Platform",
      size: "Thousands of members",
      timeline: "6 months",
      humanProblem: "Leads came in but nobody followed up. Everything depended on one person's memory.",
      whatBroke: "No system to track or follow up with leads.",
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
      humanProblem: "No predictable revenue. No way to find new clients. Just waiting for referrals that rarely came.",
      whatBroke: "No outreach system. No clear target audience defined.",
      pullQuote: "We went from zero pipeline to $500K in 90 days",
      system: ["Narrowed target audience from 9 segments to 3", "Built outreach that gets responses", "Documented process so anyone can run it"],
      beforeMetric: { label: "Pipeline", value: "$0" },
      afterMetric: { label: "Pipeline", value: "$500K+" },
      growth: "$500K+ Pipeline",
      patternRestored: "40%+ email open rates. Repeatable outreach without the founder."
    },
    {
      id: 4,
      industry: "Legal Services",
      vertical: "Subscription Legal",
      size: "Boutique firm",
      timeline: "90 Days",
      humanProblem: "Senior attorneys spending half their time on admin. Wanted to offer subscriptions but didn't know if the economics worked.",
      whatBroke: "Business model needed restructuring. Senior staff stuck on low-value work.",
      pullQuote: "We proved subscription legal works. Partners stopped doing admin",
      system: ["Subscription tiers with validated pricing", "Full subscriber acquisition funnel", "Dashboards for retention tracking"],
      beforeMetric: { label: "Partner time", value: "Wasted on admin" },
      afterMetric: { label: "Subscription model", value: "Live and working" },
      growth: "Model Shift",
      patternRestored: "Pricing validated. Senior staff back to client work."
    },
    {
      id: 5,
      industry: "IT Services",
      vertical: "Hardware Reseller",
      size: "Regional operation",
      timeline: "90 Days",
      humanProblem: "Manual data imports every month. No validation. Inventory records didn't match vendor records.",
      whatBroke: "No data quality checks. Records couldn't be trusted.",
      pullQuote: "Finally, one source of truth for asset records",
      system: ["Automated validation for data imports", "Inventory tracking tied to vendor records", "Finance can now trust the numbers"],
      beforeMetric: { label: "Data trust", value: "None" },
      afterMetric: { label: "Reconciliation", value: "Automated" },
      growth: "Data Integrity",
      patternRestored: "Single source of truth for all inventory and asset records."
    },
    {
      id: 6,
      industry: "B2B SaaS",
      vertical: "Project Management Platform",
      size: "$4.2M ARR, Series A",
      timeline: "90 Days",
      humanProblem: "800 free trials a month, only 6% became paying customers. Sales was calling everyone — even users who never logged in.",
      whatBroke: "No way to tell which trial users were actually interested.",
      pullQuote: "We 4x'd trial conversion by only calling people who actually use the product",
      system: ["Product usage data connected to CRM", "Leads scored by actual feature usage", "Sales playbooks for each behavior pattern"],
      beforeMetric: { label: "Trial conversion", value: "6%" },
      afterMetric: { label: "Trial conversion", value: "24%" },
      growth: "4x Conversion",
      patternRestored: "Sales focuses on engaged users. Conversion rate 4x'd."
    },
    {
      id: 7,
      industry: "Professional Services",
      vertical: "Marketing Agency",
      size: "$2.8M revenue, 12 employees",
      timeline: "90 Days",
      humanProblem: "Project information scattered across email, chat, file storage, and task boards. 15 hours a week just tracking status.",
      whatBroke: "No central system. Information scattered across too many tools.",
      pullQuote: "Cut 87% of the admin time. Client satisfaction jumped from 6.8 to 8.9",
      system: ["All project data in one place", "Standardized templates for delivery", "Client-facing dashboards"],
      beforeMetric: { label: "Admin time", value: "15hrs/week" },
      afterMetric: { label: "Admin time", value: "2hrs/week" },
      growth: "87% Time Saved",
      patternRestored: "Less time on status updates. More time on client work."
    },
    {
      id: 8,
      industry: "Creator Technology",
      vertical: "Financial Intelligence SaaS",
      size: "Pre-launch MVP",
      timeline: "6 months",
      humanProblem: "Income data scattered across multiple payment platforms and spreadsheets. No clear financial picture.",
      whatBroke: "Product idea untested. No proof that customers would pay.",
      pullQuote: "100+ signups validated the idea. 9-11% conversion rate on outreach",
      system: ["Working prototype for income tracking", "600 qualified leads identified", "Outreach system that converted"],
      beforeMetric: { label: "Validated demand", value: "Unknown" },
      afterMetric: { label: "User signups", value: "100+" },
      growth: "MVP Validated",
      patternRestored: "Demand validated with real signups. Ready to build the full product."
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
                className="bg-card border border-border p-5 flex flex-col h-full"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="text-sm font-mono text-primary leading-tight">{study.industry}</div>
                  <div className="text-sm font-bold font-mono text-primary text-right leading-tight whitespace-nowrap">{study.growth}</div>
                </div>
                
                {/* Meta */}
                <div className="text-xs text-muted-foreground mb-3 truncate">{study.vertical} • {study.timeline}</div>
                
                {/* Problem */}
                <div className="text-sm text-foreground mb-4 flex-grow min-h-[60px]">
                  {study.whatBroke}
                </div>
                
                {/* Footer */}
                <div className="flex items-center gap-2 text-xs font-mono pt-3 border-t border-border mt-auto">
                  <span className="text-muted-foreground whitespace-nowrap">{study.beforeMetric.value}</span>
                  <span className="text-primary">→</span>
                  <span className="text-foreground whitespace-nowrap">{study.afterMetric.value}</span>
                </div>
              </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-6">
            Find Out What's Breaking
          </h2>
          <p className="text-description text-muted-foreground mb-10">
            2-week diagnostic. You'll know exactly what's broken and what it's costing.
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