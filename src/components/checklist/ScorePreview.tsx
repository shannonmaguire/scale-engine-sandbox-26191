import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Lock, TrendingUp, AlertTriangle, AlertCircle } from "lucide-react";

interface ScorePreviewProps {
  score: number;
  categoryCount: number;
  onUnlock: () => void;
}

export const ScorePreview = ({ score, categoryCount, onUnlock }: ScorePreviewProps) => {
  const getMaturityLevel = (score: number) => {
    if (score >= 31) return { label: "Optimized", color: "text-primary", bg: "bg-primary/10", border: "border-primary/30" };
    if (score >= 21) return { label: "Structured", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" };
    if (score >= 11) return { label: "Emerging", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" };
    return { label: "Foundational", color: "text-destructive", bg: "bg-destructive/10", border: "border-destructive/30" };
  };

  const getInsight = (score: number) => {
    if (score >= 31) return "Your environment is technically mature and ready to absorb growth. The focus now shifts to scale plays: outbound programs, new verticals, and advanced experimentation across your stack.";
    if (score >= 21) return "Your foundation is strong. Data, CRM, and execution have structure, and the main gaps sit in optimization and scale. You are ready for outbound engines, deeper analytics, and stronger automation layers.";
    if (score >= 11) return "You have pieces in place, yet the system leaks. Data hygiene, automations, and reporting exist in pockets rather than as a connected whole. The next step is to standardize your core workflows and fix the highest-impact breaks.";
    return "Your systems are carrying more risk than you see day to day. Data quality, pipeline structure, and execution discipline all need a clean reset before growth efforts will stick. The next step is a focused architecture review and a minimum viable operating system.";
  };

  const maturity = getMaturityLevel(score);
  const insight = getInsight(score);

  return (
    <div className="space-y-8">
      {/* Overall Score Card */}
      <Card className="p-8 border-2 border-primary/20">
        <div className="flex flex-col items-center text-center space-y-6">
          <div>
            <div className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-2">
              Technical Maturity Score
            </div>
            <div className="text-7xl font-bold text-primary mb-4">
              {score}/36
            </div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${maturity.bg} ${maturity.border} border`}>
              <span className={`font-mono text-sm font-semibold uppercase tracking-wider ${maturity.color}`}>
                {maturity.label}
              </span>
            </div>
          </div>

          <p className="text-muted-foreground max-w-xl leading-relaxed">
            {insight}
          </p>
        </div>
      </Card>

      {/* Locked Category Breakdown Preview */}
      <div className="relative">
        {/* Blurred preview content */}
        <div className="blur-sm pointer-events-none select-none">
          <div className="space-y-4">
            <h3 className="heading-subsection mb-6">Category Performance</h3>
            
            {Array.from({ length: Math.min(categoryCount, 3) }).map((_, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-mono text-sm font-semibold">Category Name</div>
                      <div className="text-xs text-muted-foreground">X of Y completed</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary">XX%</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Completed item example</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <AlertCircle className="w-4 h-4 text-destructive" />
                    <span className="text-muted-foreground">Missing item example</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Lock overlay with CTA */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-[1px]">
          <Card className="max-w-md p-8 border-2 border-primary/20 text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Lock className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <div>
              <h3 className="heading-subsection mb-3">Get Your Full Report</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Enter your email to unlock detailed category breakdowns, specific recommendations, and a downloadable PDF report.
              </p>
            </div>

            <Button 
              onClick={onUnlock}
              size="lg"
              className="w-full"
            >
              Unlock Full Report
            </Button>

            <p className="text-xs text-muted-foreground">
              Report delivered instantly via email
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};
