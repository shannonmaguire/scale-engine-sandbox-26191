import { ScoreGauge } from "./ScoreGauge";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChecklistScoreProps {
  score: number;
  category?: string;
  showRecommendation?: boolean;
}

export const ChecklistScore = ({ 
  score, 
  category = "overall",
  showRecommendation = true 
}: ChecklistScoreProps) => {
  const getScoreLevel = (score: number) => {
    if (score >= 86) return { 
      level: "excellent", 
      color: "text-green-600", 
      bg: "bg-green-500/10", 
      border: "border-green-600",
      label: "Excellent" 
    };
    if (score >= 71) return { 
      level: "good", 
      color: "text-blue-600", 
      bg: "bg-blue-500/10", 
      border: "border-blue-600",
      label: "Strong" 
    };
    if (score >= 41) return { 
      level: "fair", 
      color: "text-yellow-600", 
      bg: "bg-yellow-500/10", 
      border: "border-yellow-600",
      label: "Fair" 
    };
    return { 
      level: "needs-work", 
      color: "text-red-600", 
      bg: "bg-red-500/10", 
      border: "border-red-600",
      label: "Needs Work" 
    };
  };

  const getRecommendation = (score: number) => {
    if (score >= 86) return {
      icon: CheckCircle2,
      title: "Outstanding Performance",
      text: "You're operating at a high level. Consider fractional ops support to scale further.",
      cta: "Explore Fractional Services",
      link: "/fractional"
    };
    if (score >= 71) return {
      icon: TrendingUp,
      title: "Strong Foundation",
      text: "You're ready for optimization. Our sprint service can take you to the next level.",
      cta: "Learn About Sprint",
      link: "/sprint"
    };
    if (score >= 41) return {
      icon: AlertCircle,
      title: "Room for Improvement",
      text: "Your systems need attention. Book an assessment to identify the fix.",
      cta: "Book Assessment",
      link: "/contact?interest=assessment"
    };
    return {
      icon: AlertCircle,
      title: "Immediate Attention Needed",
      text: "Your systems need professional assessment. Let's identify quick wins together.",
      cta: "Book Free Assessment",
      link: "/contact"
    };
  };

  const scoreInfo = getScoreLevel(score);
  const recommendation = getRecommendation(score);
  const Icon = recommendation.icon;

  return (
    <div className="space-y-8">
      {/* Score Display */}
      <div className="text-center space-y-4">
        <ScoreGauge score={score} size="lg" showLabel={true} animated={true} />
        <p className="text-sm text-muted-foreground font-mono uppercase tracking-wide">
          {category} Readiness Score
        </p>
      </div>

      {/* Recommendation Card */}
      {showRecommendation && (
        <div className={cn(
          "p-8 rounded-lg border-2 space-y-6 transition-all hover:shadow-lg",
          scoreInfo.bg,
          scoreInfo.border
        )}>
          <div className="flex items-start gap-4">
            <div className={cn(
              "w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0",
              scoreInfo.bg,
              scoreInfo.color
            )}>
              <Icon className="w-7 h-7" />
            </div>
            <div className="space-y-3 flex-1">
              <h3 className={cn("font-mono font-bold text-xl", scoreInfo.color)}>
                {recommendation.title}
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                {recommendation.text}
              </p>
              <Button 
                variant="outline" 
                className={cn(
                  "mt-4 border-2",
                  scoreInfo.color,
                  scoreInfo.border,
                  "hover:bg-current/10"
                )}
                onClick={() => window.location.href = recommendation.link}
              >
                {recommendation.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Progress Breakdown */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm font-mono">
          <span className="text-muted-foreground">Overall Progress</span>
          <span className={cn("font-bold", scoreInfo.color)}>{score}%</span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden relative">
          <div
            className={cn(
              "h-full transition-all duration-1000 ease-out rounded-full",
              scoreInfo.color.replace('text', 'bg')
            )}
            style={{ width: `${score}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground font-mono text-center">
          {score === 100 && "Perfect score! 🎉"}
          {score >= 86 && score < 100 && `You're ${100 - score}% away from perfect`}
          {score >= 71 && score < 86 && `${86 - score}% to reach Excellent level`}
          {score >= 41 && score < 71 && `${71 - score}% to reach Strong level`}
          {score < 41 && `${41 - score}% to reach Fair level`}
        </p>
      </div>
    </div>
  );
};
