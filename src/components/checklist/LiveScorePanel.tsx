import { useEffect, useState } from "react";
import { ChecklistCategory } from "./InteractiveChecklist";
import { useChecklist } from "./ChecklistContext";
import { ScoreGauge } from "./ScoreGauge";
import { Button } from "@/components/ui/button";
import { FileText, RotateCcw, CheckCircle2, AlertCircle, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "@/hooks/usePageTracking";

interface LiveScorePanelProps {
  checklistId: string;
  title: string;
  categories: ChecklistCategory[];
}

export const LiveScorePanel = ({
  checklistId,
  title,
  categories
}: LiveScorePanelProps) => {
  const { checklistState, getProgress, resetChecklist, getUnansweredCount, getAnswerCounts } = useChecklist();
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);

  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);
  const overallProgress = getProgress(checklistId, totalItems);
  const unansweredCount = getUnansweredCount(checklistId, totalItems);
  const answerCounts = getAnswerCounts(checklistId);
  const answeredItems = totalItems - unansweredCount;

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleViewResults = () => {
    trackEvent("assessment_results_view", { checklistId, score: overallProgress });
    
    navigate('/assessment-results', {
      state: {
        checklistId,
        title,
        categories,
        checklistState,
        overallProgress,
        answerCounts
      }
    });
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset your assessment? This cannot be undone.")) {
      resetChecklist(checklistId);
      toast.success("Assessment reset");
      trackEvent("assessment_reset", { checklistId });
    }
  };

  const getScoreInsight = () => {
    if (overallProgress >= 86) return {
      icon: CheckCircle2,
      title: "Excellent",
      message: "Your systems operate at an advanced level",
      color: "text-green-600",
      bg: "bg-green-500/10"
    };
    if (overallProgress >= 71) return {
      icon: TrendingUp,
      title: "Strong",
      message: "Your foundation supports current operations and targeted optimization",
      color: "text-blue-600",
      bg: "bg-blue-500/10"
    };
    if (overallProgress >= 41) return {
      icon: AlertCircle,
      title: "Developing",
      message: "Your systems show early progress with substantial capacity for improvement",
      color: "text-yellow-600",
      bg: "bg-yellow-500/10"
    };
    return {
      icon: AlertCircle,
      title: "Foundational",
      message: "Your systems require structural improvements across multiple areas",
      color: "text-red-600",
      bg: "bg-red-500/10"
    };
  };

  const insight = getScoreInsight();
  const Icon = insight.icon;

  return (
    <div
      className={cn(
        "transition-all duration-200",
        isSticky && "lg:sticky lg:top-6"
      )}
    >
      <div className="bg-card border-2 border-border rounded-lg p-6 space-y-4">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Your Score
          </div>
          <ScoreGauge score={overallProgress} size="md" showLabel={false} animated={false} />
        </div>

        {/* Progress Stats */}
        <div className="pt-3 border-t border-border space-y-2">
          <div className="text-center text-sm font-mono tabular-nums text-muted-foreground">
            {answeredItems} / {totalItems} answered
          </div>
          {unansweredCount > 0 && (
            <div className="text-center text-xs text-yellow-600 font-medium">
              {unansweredCount} question{unansweredCount !== 1 ? 's' : ''} remaining
            </div>
          )}
        </div>

        {/* Answer Breakdown */}
        {answeredItems > 0 && (
          <div className="pt-3 border-t border-border space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground text-center mb-2">
              Breakdown
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div>
                <div className="font-mono font-bold text-green-600">{answerCounts.yes}</div>
                <div className="text-muted-foreground">Yes</div>
              </div>
              <div>
                <div className="font-mono font-bold text-yellow-600">{answerCounts.partial}</div>
                <div className="text-muted-foreground">Partial</div>
              </div>
              <div>
                <div className="font-mono font-bold text-red-600">{answerCounts.no}</div>
                <div className="text-muted-foreground">No</div>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="pt-3 border-t border-border space-y-2">
          <Button
            onClick={handleViewResults}
            variant="default"
            size="lg"
            className="w-full"
            disabled={answeredItems === 0}
          >
            <FileText className="w-4 h-4 mr-2" />
            View Results
          </Button>
          {unansweredCount > 0 && answeredItems > 0 && (
            <p className="text-xs text-center text-muted-foreground">
              Results are available now with partial data or upon completion for comprehensive analysis
            </p>
          )}
        </div>

        {/* Completion State */}
        {unansweredCount === 0 && totalItems > 0 && (
          <div className="pt-3 border-t border-border text-center">
            <p className="text-sm font-medium text-green-600">
              ✓ Assessment complete
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
