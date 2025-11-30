import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const AssessmentComparisonTable = () => {
  const features = [
    {
      category: "Duration",
      free: "5 minutes",
      assessment: "2 weeks",
      sprint: "90 days"
    },
    {
      category: "Depth",
      free: "18-question quiz",
      assessment: "Full infrastructure audit",
      sprint: "Complete rebuild"
    },
    {
      category: "Score Breakdown",
      free: <Check className="w-5 h-5 text-success mx-auto" />,
      assessment: <Check className="w-5 h-5 text-success mx-auto" />,
      sprint: <Check className="w-5 h-5 text-success mx-auto" />
    },
    {
      category: "Root Cause Analysis",
      free: "—",
      assessment: <Check className="w-5 h-5 text-success mx-auto" />,
      sprint: <Check className="w-5 h-5 text-success mx-auto" />
    },
    {
      category: "System Architecture Map",
      free: "—",
      assessment: "Partial",
      sprint: "Complete"
    },
    {
      category: "Implementation Toolkit",
      free: "—",
      assessment: <Check className="w-5 h-5 text-success mx-auto" />,
      sprint: <Check className="w-5 h-5 text-success mx-auto" />
    },
    {
      category: "Live Deployment",
      free: "—",
      assessment: "—",
      sprint: <Check className="w-5 h-5 text-success mx-auto" />
    },
    {
      category: "Documented Handoff",
      free: "—",
      assessment: "—",
      sprint: <Check className="w-5 h-5 text-success mx-auto" />
    }
  ];

  return (
    <div className="w-full">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-6 font-mono text-sm uppercase tracking-wider text-muted-foreground">
                Feature
              </th>
              <th className="text-center py-4 px-6">
                <div className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  Free Health Check
                </div>
                <div className="text-2xl font-bold text-success">Free</div>
              </th>
              <th className="text-center py-4 px-6 bg-surface-muted">
                <div className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  Infrastructure Assessment
                </div>
                <div className="text-2xl font-bold text-foreground">$4,500–$7,500</div>
                <div className="text-xs text-muted-foreground mt-1">100% credit to Sprint</div>
              </th>
              <th className="text-center py-4 px-6">
                <div className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  90-Day Sprint
                </div>
                <div className="text-2xl font-bold text-primary">$9K–$15K</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-b border-border">
                <td className="py-4 px-6 font-medium text-foreground">
                  {feature.category}
                </td>
                <td className="py-4 px-6 text-center text-muted-foreground">
                  {feature.free}
                </td>
                <td className="py-4 px-6 text-center bg-surface-muted text-foreground">
                  {feature.assessment}
                </td>
                <td className="py-4 px-6 text-center text-foreground">
                  {feature.sprint}
                </td>
              </tr>
            ))}
            <tr>
              <td className="py-6 px-6"></td>
              <td className="py-6 px-6 text-center">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/self-assessment">Take Free Quiz</Link>
                </Button>
              </td>
              <td className="py-6 px-6 text-center bg-surface-muted">
                <Button asChild className="w-full">
                  <Link to="/infrastructure-assessment">Book Assessment</Link>
                </Button>
              </td>
              <td className="py-6 px-6 text-center">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/sprint">View Sprint Details</Link>
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-6">
        {/* Free Health Check Card */}
        <Card className="p-6">
          <div className="text-center mb-4">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Free Health Check
            </div>
            <div className="text-3xl font-bold text-success mb-1">Free</div>
            <div className="text-sm text-muted-foreground">5 minutes</div>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success flex-shrink-0" />
              <span className="text-sm">18-question quiz</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success flex-shrink-0" />
              <span className="text-sm">Score breakdown</span>
            </li>
          </ul>
          <Button asChild variant="outline" className="w-full">
            <Link to="/self-assessment">Take Free Quiz</Link>
          </Button>
        </Card>

        {/* Infrastructure Assessment Card */}
        <Card className="p-6 bg-surface-muted border-primary">
          <div className="text-center mb-4">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Infrastructure Assessment
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">$4,500–$7,500</div>
            <div className="text-xs text-success">100% credit to Sprint</div>
            <div className="text-sm text-muted-foreground mt-1">2 weeks</div>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success flex-shrink-0" />
              <span className="text-sm">Full infrastructure audit</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success flex-shrink-0" />
              <span className="text-sm">Root cause analysis</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success flex-shrink-0" />
              <span className="text-sm">Partial system map</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success flex-shrink-0" />
              <span className="text-sm">Implementation toolkit</span>
            </li>
          </ul>
          <Button asChild className="w-full">
            <Link to="/infrastructure-assessment">Book Assessment</Link>
          </Button>
        </Card>

        {/* 90-Day Sprint Card */}
        <Card className="p-6">
          <div className="text-center mb-4">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
              90-Day Sprint
            </div>
            <div className="text-3xl font-bold text-primary mb-1">$9K–$15K</div>
            <div className="text-sm text-muted-foreground">90 days</div>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success flex-shrink-0" />
              <span className="text-sm">Complete rebuild</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success flex-shrink-0" />
              <span className="text-sm">Full system architecture</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success flex-shrink-0" />
              <span className="text-sm">Live deployment</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success flex-shrink-0" />
              <span className="text-sm">Documented handoff</span>
            </li>
          </ul>
          <Button asChild variant="outline" className="w-full">
            <Link to="/sprint">View Sprint Details</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
};