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
    if (score >= 31) return {
      icon: Trophy,
      title: "Optimized",
      message: "Your environment is technically mature and ready to absorb growth. The focus now shifts to scale plays: outbound programs, new verticals, and advanced experimentation across your stack.",
      color: "text-green-600",
      bg: "bg-green-500/10"
    };
    if (score >= 21) return {
      icon: TrendingUp,
      title: "Structured",
      message: "Your foundation is strong. Data, CRM, and execution have structure, and the main gaps sit in optimization and scale. You are ready for outbound engines, deeper analytics, and stronger automation layers.",
      color: "text-blue-600",
      bg: "bg-blue-500/10"
    };
    if (score >= 11) return {
      icon: AlertCircle,
      title: "Emerging",
      message: "You have pieces in place, yet the system leaks. Data hygiene, automations, and reporting exist in pockets rather than as a connected whole. The next step is to standardize your core workflows and fix the highest-impact breaks.",
      color: "text-yellow-600",
      bg: "bg-yellow-500/10"
    };
    return {
      icon: AlertCircle,
      title: "Foundational",
      message: "Your systems are carrying more risk than you see day to day. Data quality, pipeline structure, and execution discipline all need a clean reset before growth efforts will stick. The next step is a focused architecture review and a minimum viable operating system.",
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
      {score < 36 && (
        <div className="text-sm text-muted-foreground font-mono">
          {score >= 31 && "Your performance places you among the top 15% of assessed organizations."}
          {score >= 21 && score < 31 && "Your systems exceed 60% of comparable implementations."}
          {score >= 11 && score < 21 && "Targeted improvements position you within the upper performance tier."}
          {score < 11 && "Each improvement point correlates directly with operational efficiency gains."}
        </div>
      )}
    </div>
  );
};
