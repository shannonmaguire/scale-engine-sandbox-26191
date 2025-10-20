import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";

// Simplified scorecard - just categories, scores, and issues
const scorecard = [
  {
    category: "Technology Stack",
    score: 6.5,
    issues: "Legacy integrations causing performance bottlenecks. Multiple redundant tools increasing costs."
  },
  {
    category: "Data Quality",
    score: 7.2,
    issues: "18% duplicate records. Inconsistent naming conventions across objects."
  },
  {
    category: "Automation",
    score: 5.8,
    issues: "Manual processes in lead routing and follow-up. No automated data validation."
  },
  {
    category: "Security",
    score: 8.1,
    issues: "MFA not enforced for all users. Some sensitive fields lack field-level encryption."
  },
  {
    category: "User Adoption",
    score: 6.9,
    issues: "23% of licensed users inactive. Training materials outdated."
  }
];

// Simplified roadmap - just priorities with clear outcomes
const priorities = [
  {
    priority: 1,
    title: "Automate Lead Routing",
    description: "Implement territory-based lead assignment with real-time notifications. Reduce manual routing from 4 hours/day to zero.",
    metrics: "Expected time savings: 20 hrs/week • ROI timeline: 6 weeks"
  },
  {
    priority: 2,
    title: "Data Cleanup Sprint",
    description: "Deduplicate records, standardize naming conventions, enforce validation rules. Clean foundation for automation.",
    metrics: "18% duplicate rate → 2% • Estimated 2-week effort"
  },
  {
    priority: 3,
    title: "Consolidate Tech Stack",
    description: "Replace 3 redundant tools with native Salesforce features. Reduce subscription costs and simplify workflows.",
    metrics: "$42K annual savings • 4-week implementation"
  },
  {
    priority: 4,
    title: "Enforce Security Protocols",
    description: "Enable MFA for all users, implement field-level encryption for sensitive data, audit access permissions.",
    metrics: "Security score 8.1 → 9.5 • 3-week rollout"
  }
];

const techStack = [
  { name: "Salesforce Sales Cloud", issue: "Underutilized automation features" },
  { name: "HubSpot Marketing", issue: "Redundant with Salesforce Marketing features" },
  { name: "Zapier", issue: "Band-aid for missing native integrations" },
  { name: "DocuSign", issue: "Working well, keep as-is" },
  { name: "Custom API Integration", issue: "Outdated authentication, needs refresh" }
];

const findings = [
  {
    type: "issue",
    title: "Manual lead routing wasting 20 hours per week",
    detail: "Sales ops manually assigns leads based on territory rules that could be automated."
  },
  {
    type: "issue", 
    title: "Three overlapping tools doing the same job",
    detail: "Paying for HubSpot, Zapier, and Salesforce features that overlap by 70%."
  },
  {
    type: "strength",
    title: "Strong foundation for automation",
    detail: "Clean data model and well-defined processes make automation straightforward."
  },
  {
    type: "strength",
    title: "Team is ready for change",
    detail: "Sales and ops teams actively requesting more automation and better workflows."
  }
];

export default function SampleReport() {
  const overallScore = (scorecard.reduce((sum, item) => sum + item.score, 0) / scorecard.length).toFixed(1);

  return (
    <>
      <SEOHead
        title="Sample Assessment Report | Salesforce Health Check"
        description="Example of a detailed Salesforce assessment report showing system health, priority roadmap, and actionable recommendations."
        canonicalUrl="https://cwtechnology.io/sample-report"
      />

      <div className="min-h-screen bg-background">
        {/* Simple header */}
        <div className="border-b bg-muted/30">
          <div className="container-standard py-8">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Link>
            </Button>
            <h1 className="heading-hero mb-2">Sample Assessment Report</h1>
            <p className="text-muted-foreground">TechCorp SaaS - Salesforce Health Check</p>
          </div>
        </div>

        <div className="container-standard py-12 max-w-4xl">
          {/* Executive Summary */}
          <section className="mb-16">
            <h2 className="heading-section mb-6">Executive Summary</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Your Salesforce instance is functional but has clear opportunities for improvement. Overall health score: <span className="text-foreground font-semibold">{overallScore}/10</span>.
              </p>
              <p>
                The main issue is manual processes that waste time and slow down your team. You're also paying for redundant tools that overlap with native Salesforce features.
              </p>
              <p>
                The good news: Your data model is solid and your team wants better automation. We can make meaningful improvements in 90 days with minimal disruption.
              </p>
              <p className="font-semibold text-foreground">
                Expected impact: Save 20+ hours/week, reduce tool costs by $42K/year, improve data quality from 82% to 98%.
              </p>
            </div>
          </section>

          {/* Scorecard */}
          <section className="mb-16">
            <h2 className="heading-section mb-6">Infrastructure Scorecard</h2>
            <div className="space-y-4">
              {scorecard.map((item, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 py-4">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="heading-subsection">{item.category}</h3>
                    <span className="text-2xl font-mono font-semibold text-primary">{item.score}/10</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.issues}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Priority Roadmap */}
          <section className="mb-16">
            <h2 className="heading-section mb-6">90-Day Priority Roadmap</h2>
            <div className="space-y-6">
              {priorities.map((item) => (
                <div key={item.priority} className="border-l-4 border-primary pl-6 py-4">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="text-3xl font-mono font-bold text-primary/40 leading-none">
                      {item.priority}
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-subsection mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <p className="text-xs font-mono text-muted-foreground">{item.metrics}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Stack */}
          <section className="mb-16">
            <h2 className="heading-section mb-6">Technology Stack Analysis</h2>
            <div className="space-y-3">
              {techStack.map((tool, index) => (
                <div key={index} className="border-l-2 border-border pl-4 py-2">
                  <div className="font-semibold text-foreground">{tool.name}</div>
                  <div className="text-sm text-muted-foreground">{tool.issue}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Findings */}
          <section className="mb-16">
            <h2 className="heading-section mb-6">Key Findings</h2>
            <div className="space-y-4">
              {findings.map((finding, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 py-3">
                  <h3 className="font-semibold text-foreground mb-1">{finding.title}</h3>
                  <p className="text-sm text-muted-foreground">{finding.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Next Steps */}
          <section className="mb-16">
            <h2 className="heading-section mb-6">Next Steps</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                This is a sample report showing the level of detail you'll receive. Your actual assessment will be customized to your specific Salesforce instance and business needs.
              </p>
              <p>
                To get your personalized assessment, complete our interactive checklist. It takes about 10 minutes and gives you an immediate health score plus a detailed report like this one.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="flex gap-4 pt-8 border-t">
            <Button asChild size="lg" className="flex-1">
              <Link to="/self-assessment">Get Your Assessment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1">
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
