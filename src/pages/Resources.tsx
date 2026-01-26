import SEOHead from "@/components/SEOHead";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const resources = [
  {
    title: "90-Day Roadmap Template",
    description: "A structured template for planning your first 90 days of revenue system implementation. Includes milestones, dependencies, and checkpoint criteria.",
    file: "/pdfs/90-day-roadmap-template.pdf",
    category: "Planning"
  },
  {
    title: "Discovery Questions Library",
    description: "The diagnostic questions we use to map existing systems. Covers CRM, marketing automation, data flows, and team ownership.",
    file: "/pdfs/discovery-questions-library.pdf",
    category: "Assessment"
  },
  {
    title: "ROI Calculator",
    description: "Estimate the revenue impact of system improvements. Includes models for pipeline velocity, conversion rates, and operational efficiency.",
    file: "/pdfs/roi-calculator.pdf",
    category: "Analysis"
  },
  {
    title: "Service Selection Guide",
    description: "Framework for determining which engagement model fits your situation. Assessment-only, Sprint implementation, or Fractional support.",
    file: "/pdfs/service-selection-guide.pdf",
    category: "Planning"
  },
  {
    title: "Technical Assessment Framework",
    description: "Detailed checklist for evaluating CRM health, integration integrity, and data quality. Used in our diagnostic process.",
    file: "/pdfs/technical-assessment-framework.pdf",
    category: "Assessment"
  },
  {
    title: "Vendor Handoff SOP",
    description: "Standard operating procedure for transitioning from assessment to implementation partner. Includes documentation requirements and milestone definitions.",
    file: "/pdfs/vendor-handoff-sop.pdf",
    category: "Operations"
  },
  {
    title: "Website Readiness Checklist",
    description: "Pre-launch checklist for revenue-focused websites. Covers lead capture, analytics, CRM integration, and conversion tracking.",
    file: "/pdfs/website-readiness-checklist.pdf",
    category: "Implementation"
  }
];

const Resources = () => {
  return (
    <>
      <SEOHead
        title="Systems Architecture Resources & Templates | CWT Studio"
        description="Templates, frameworks, and guides for systems architecture. 90-day roadmaps, audit frameworks, ROI calculators, and implementation checklists."
        keywords={["systems architecture templates", "revenue operations resources", "CRM audit framework", "sales operations guides", "marketing operations templates", "systems planning"]}
      />

      <main className="min-h-screen bg-background">
        <Breadcrumbs />
        
        <Section>
          <div className="max-w-4xl">
            <div className="system-status mb-8">RESOURCES</div>
            <h1 className="heading-page mb-4">Resources</h1>
            <p className="text-description text-muted-foreground max-w-2xl">
              Templates, frameworks, and guides for revenue infrastructure planning and implementation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="border border-border p-6 flex flex-col"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  {resource.category}
                </span>
                <h3 className="heading-subsection mb-3">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {resource.description}
                </p>
                <a
                  href={resource.file}
                  download
                  className="inline-flex items-center gap-2 text-foreground font-mono text-sm hover:text-primary transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-border pt-16">
            <div className="max-w-2xl">
              <h2 className="heading-section mb-4">
                Need a custom assessment?
              </h2>
              <p className="text-muted-foreground mb-6">
                These resources provide frameworks for self-evaluation. For a comprehensive diagnostic of your specific systems, book an assessment.
              </p>
              <Button asChild>
                <Link to="/assessment">
                  Book Assessment
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

export default Resources;
