import { ScoreGauge } from "./ScoreGauge";
import { Trophy, TrendingUp, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResultsHeroProps {
  score: number;
  totalItems: number;
  completedItems: number;
}

export const ResultsHero = ({ score, totalItems, completedItems }: ResultsHeroProps) => {
  const getScoreInsight = (score: number) => {
    if (score >= 86) return {
      icon: Trophy,
      title: "Outstanding Performance!",
      message: "You're operating at an exceptional level. Your systems are well-positioned for scale.",
      color: "text-green-600",
      bg: "bg-green-500/10"
    };
    if (score >= 71) return {
      icon: TrendingUp,
      title: "Strong Foundation",
      message: "You're doing great! A few optimizations will take you to the next level.",
      color: "text-blue-600",
      bg: "bg-blue-500/10"
    };
    if (score >= 41) return {
      icon: AlertCircle,
      title: "Room for Improvement",
      message: "You're on the right track. Some focused improvements will make a big difference.",
      color: "text-yellow-600",
      bg: "bg-yellow-500/10"
    };
    return {
      icon: AlertCircle,
      title: "Time to Level Up",
      message: "Your systems need attention. Let's identify the quick wins that will move the needle.",
      color: "text-red-600",
      bg: "bg-red-500/10"
    };
  };

  const insight = getScoreInsight(score);
  const Icon = insight.icon;

  return (
    <div className="space-y-8 text-center">
      {/* Celebratory Header */}
      <div className="space-y-4">
        <div className={cn(
          "inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-sm font-bold uppercase tracking-wide",
          insight.bg,
          insight.color
        )}>
          <Icon className="w-5 h-5" />
          {insight.title}
        </div>
        
        <h2 className="heading-section">Your Technical Maturity Score</h2>
        <p className="text-description mx-auto">
          {insight.message}
        </p>
      </div>

      {/* Score Display */}
      <div className="flex justify-center">
        <ScoreGauge score={score} size="lg" showLabel={true} animated={true} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
        <div className={cn(
          "p-6 rounded-lg border-2",
          insight.bg,
          "border-current",
          insight.color
        )}>
          <div className="text-3xl font-mono font-bold tabular-nums">{completedItems}</div>
          <div className="text-sm text-muted-foreground mt-1 font-mono">Items Completed</div>
        </div>
        
        <div className={cn(
          "p-6 rounded-lg border-2",
          insight.bg,
          "border-current",
          insight.color
        )}>
          <div className="text-3xl font-mono font-bold tabular-nums">{totalItems - completedItems}</div>
          <div className="text-sm text-muted-foreground mt-1 font-mono">Opportunities</div>
        </div>
        
        <div className={cn(
          "p-6 rounded-lg border-2",
          insight.bg,
          "border-current",
          insight.color
        )}>
          <div className="text-3xl font-mono font-bold tabular-nums">{score >= 100 ? '🏆' : `${100 - score}%`}</div>
          <div className="text-sm text-muted-foreground mt-1 font-mono">To Perfect</div>
        </div>
      </div>

      {/* Comparison (Optional Enhancement) */}
      {score < 100 && (
        <div className="text-sm text-muted-foreground font-mono">
          {score >= 86 && "You're in the top 15% of teams. Keep it up!"}
          {score >= 71 && score < 86 && "You're performing better than 60% of similar companies."}
          {score >= 41 && score < 71 && "With some focused work, you can join the top performers."}
          {score < 41 && "Every point of improvement translates to real business impact."}
        </div>
      )}
    </div>
  );
};
