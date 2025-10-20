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
      title: "Advanced",
      message: "Your systems operate at an exceptional level with capacity for sustained growth and complexity.",
      color: "text-green-600",
      bg: "bg-green-500/10"
    };
    if (score >= 71) return {
      icon: TrendingUp,
      title: "Established",
      message: "Your foundation supports current operations with defined paths toward optimization.",
      color: "text-blue-600",
      bg: "bg-blue-500/10"
    };
    if (score >= 41) return {
      icon: AlertCircle,
      title: "Developing",
      message: "Your systems demonstrate early structure with substantial opportunity for systematic improvement.",
      color: "text-yellow-600",
      bg: "bg-yellow-500/10"
    };
    return {
      icon: AlertCircle,
      title: "Foundational",
      message: "Your systems require structural development across operational, technical, and process dimensions.",
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
          {score >= 86 && "Your performance places you among the top 15% of assessed organizations."}
          {score >= 71 && score < 86 && "Your systems exceed 60% of comparable implementations."}
          {score >= 41 && score < 71 && "Targeted improvements position you within the upper performance tier."}
          {score < 41 && "Each improvement point correlates directly with operational efficiency gains."}
        </div>
      )}
    </div>
  );
};
