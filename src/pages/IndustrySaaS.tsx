import IndustryLandingTemplate from "@/components/IndustryLandingTemplate";
import SEOHead from "@/components/SEOHead";

const IndustrySaaS = () => {
  return (
    <>
      <SEOHead
        title="SaaS Revenue Operations & Automation | CWT Studio"
        description="CWT Studio helps SaaS teams deploy business automation, Salesforce workflows, and modern web and mobile product experiences with Creator Wealth Tools."
        keywords={[
          'SaaS business automation',
          'Salesforce for SaaS companies',
          'Creator Wealth Tools SaaS',
          'SaaS web and mobile development',
          'revenue operations for SaaS'
        ]}
        canonicalUrl="/industry/saas"
      />
      <IndustryLandingTemplate
      industry={{
        name: "SaaS Companies",
        tagline: "Scale Your SaaS Revenue Operations Without Breaking Your Systems",
        description: "Purpose-built revenue infrastructure for high-growth SaaS companies. We install the systems, automation, and processes that turn your sales engine into a predictable revenue machine.",
        metaDescription: "Revenue operations consulting for SaaS companies. Optimize your sales tech stack, improve data quality, and build scalable processes. Expert Salesforce and HubSpot implementation.",
      }}
      painPoints={[
        "Sales and CS teams working in disconnected systems, leading to data silos and poor handoffs",
        "Revenue leaders making decisions based on incomplete or inaccurate pipeline data",
        "Manual processes consuming 15-20 hours/week of your ops team's time",
        "Tech stack bloat with overlapping tools that don't integrate properly",
        "Inability to accurately forecast revenue or understand pipeline health",
        "Customer churn signals missed due to fragmented data across multiple platforms",
      ]}
      solutions={[
        {
          title: "Revenue Systems Architecture",
          description: "We audit your entire tech stack, identify redundancies and gaps, and design an integrated system that supports your growth trajectory. From Salesforce to billing to customer success platforms - everything connected.",
          metrics: "40% reduction in tool overhead",
        },
        {
          title: "Data Infrastructure & Automation",
          description: "Build reliable data pipelines that eliminate manual work. Automated lead routing, deal scoring, renewal workflows, and revenue recognition - all running 24/7 without human intervention.",
          metrics: "15-20 hours saved weekly",
        },
        {
          title: "Forecasting & Analytics Framework",
          description: "Implement predictive analytics and real-time dashboards that give you complete visibility into pipeline health, forecast accuracy, and revenue performance. Make data-driven decisions with confidence.",
          metrics: "±5% forecast accuracy",
        },
      ]}
      caseStudy={{
        company: "a Series B SaaS Company",
        results: [
          "Reduced sales cycle by 23% through automated lead scoring and routing",
          "Increased forecast accuracy from 72% to 94% with improved pipeline visibility",
          "Eliminated 18 hours/week of manual data entry and reporting",
          "Integrated 7 disparate systems into a unified revenue operations platform",
          "Improved customer retention by 15% with proactive churn detection",
          "Scaled from $10M to $30M ARR without adding ops headcount",
        ],
      }}
      ctaText="Get Your Free SaaS Operations Assessment"
    />
    </>
  );
};

export default IndustrySaaS;
