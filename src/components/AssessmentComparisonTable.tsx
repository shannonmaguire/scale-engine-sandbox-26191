import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ROUTES, CTA } from "@/lib/canonical-constants";

const AssessmentComparisonTable = () => {
  const features = [
    {
      category: "Overview",
      items: [
        { feature: "Duration", freeHealth: "5 minutes", infrastructure: "2 weeks" },
        { feature: "Format", freeHealth: "Self-guided quiz", infrastructure: "Expert-led audit" },
        { feature: "Investment", freeHealth: "Free", infrastructure: "$4,500-$7,500" },
        { feature: "Sprint Credit", freeHealth: false, infrastructure: "100% credited to Sprint" },
      ]
    },
    {
      category: "Assessment Depth",
      items: [
        { feature: "Question depth", freeHealth: "18 yes/partial/no questions", infrastructure: "50+ structured interview questions" },
        { feature: "System access review", freeHealth: false, infrastructure: true },
        { feature: "Configuration audit", freeHealth: false, infrastructure: true },
        { feature: "Data quality analysis", freeHealth: false, infrastructure: true },
        { feature: "Integration review", freeHealth: false, infrastructure: true },
        { feature: "Workflow documentation", freeHealth: false, infrastructure: true },
      ]
    },
    {
      category: "Scoring & Analysis",
      items: [
        { feature: "Overall maturity score", freeHealth: "0-36 scale", infrastructure: "0-100 scale with benchmarks" },
        { feature: "Category breakdown", freeHealth: "6 categories (high-level)", infrastructure: "12+ dimensions (detailed)" },
        { feature: "Benchmark comparison", freeHealth: false, infrastructure: "Industry + size cohort benchmarks" },
        { feature: "Gap prioritization", freeHealth: "General recommendations", infrastructure: "Effort-weighted prioritization matrix" },
      ]
    },
    {
      category: "Deliverables",
      items: [
        { feature: "Email report (PDF)", freeHealth: true, infrastructure: true },
        { feature: "Technical debt inventory", freeHealth: false, infrastructure: true },
        { feature: "Risk assessment", freeHealth: false, infrastructure: true },
        { feature: "Cost-of-inaction projections", freeHealth: false, infrastructure: true },
        { feature: "90-day implementation roadmap", freeHealth: false, infrastructure: "Prioritized with milestones" },
        { feature: "Executive presentation", freeHealth: false, infrastructure: true },
      ]
    },
    {
      category: "Support",
      items: [
        { feature: "Q&A support window", freeHealth: false, infrastructure: "30 days post-delivery" },
        { feature: "Stakeholder interviews", freeHealth: false, infrastructure: "3-5 key operators" },
        { feature: "Follow-up consultation", freeHealth: false, infrastructure: "Included in delivery" },
      ]
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Header */}
          <thead>
            <tr className="border-b-2 border-border">
              <th className="text-left p-6 font-mono text-sm uppercase tracking-widest text-muted-foreground w-1/3">
                Feature
              </th>
              <th className="p-6 text-center border-l border-border w-1/3">
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Free Health Check
                </div>
                <div className="heading-subsection mb-3">5-Minute Quiz</div>
                <Button variant="outline" size="sm" asChild className="w-full max-w-[200px]">
                  <Link to={ROUTES.assessment}>{CTA.takeHealthCheck}</Link>
                </Button>
              </th>
              <th className="p-6 text-center border-l-2 border-primary bg-primary/5 w-1/3">
                <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                  Infrastructure Assessment
                </div>
                <div className="heading-subsection mb-3">2-Week Diagnostic</div>
                <Button size="sm" asChild className="w-full max-w-[200px]">
                  <Link to="/contact?interest=assessment&source_page=comparison-table">
                    {CTA.bookAssessment}
                  </Link>
                </Button>
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {features.map((section, sectionIdx) => (
              <tbody key={sectionIdx}>
                {/* Category Header Row */}
                <tr className="border-t-2 border-border bg-muted/30">
                  <td colSpan={3} className="p-4 font-mono text-xs uppercase tracking-widest text-foreground font-semibold">
                    {section.category}
                  </td>
                </tr>

                {/* Feature Rows */}
                {section.items.map((item, itemIdx) => (
                  <tr key={itemIdx} className="border-b border-border hover:bg-muted/20 transition-colors">
                    <td className="p-4 text-description text-foreground">
                      {item.feature}
                    </td>
                    <td className="p-4 text-center border-l border-border align-middle">
                      {typeof item.freeHealth === 'boolean' ? (
                        item.freeHealth ? (
                          <Check className="w-5 h-5 text-primary mx-auto" strokeWidth={3} />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/30 mx-auto" strokeWidth={2} />
                        )
                      ) : (
                        <span className="text-description text-muted-foreground block">
                          {item.freeHealth}
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center border-l-2 border-primary bg-primary/5 align-middle">
                      {typeof item.infrastructure === 'boolean' ? (
                        item.infrastructure ? (
                          <Check className="w-5 h-5 text-primary mx-auto" strokeWidth={3} />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/30 mx-auto" strokeWidth={2} />
                        )
                      ) : (
                        <span className="text-description text-foreground font-medium block">
                          {item.infrastructure}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom CTA Note */}
      <div className="mt-8 p-6 bg-muted/30 border border-border text-center">
        <p className="text-description text-foreground font-mono">
          <strong>Recommended path:</strong> Start with free Health Check to identify gaps, then book Infrastructure Assessment for detailed roadmap and Sprint eligibility.
        </p>
      </div>
    </div>
  );
};

export default AssessmentComparisonTable;