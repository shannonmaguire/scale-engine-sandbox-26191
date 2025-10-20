import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScoreGaugeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  animated?: boolean;
}

export const ScoreGauge = ({ 
  score, 
  size = "md", 
  showLabel = true,
  animated = false 
}: ScoreGaugeProps) => {
  const [displayScore, setDisplayScore] = useState(animated ? 0 : score);

  useEffect(() => {
    if (!animated) return;
    
    const duration = 1500;
    const steps = 60;
    const increment = score / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setDisplayScore(Math.min(Math.round(increment * currentStep), score));
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [score, animated]);

  const getScoreColor = (score: number) => {
    if (score >= 86) return "text-green-600";
    if (score >= 71) return "text-blue-600";
    if (score >= 41) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 86) return "Excellent";
    if (score >= 71) return "Strong";
    if (score >= 41) return "Fair";
    return "Needs Work";
  };

  const sizes = {
    sm: { container: "w-24 h-24", text: "text-2xl", label: "text-xs" },
    md: { container: "w-32 h-32", text: "text-4xl", label: "text-sm" },
    lg: { container: "w-40 h-40", text: "text-5xl", label: "text-base" }
  };

  const colorClass = getScoreColor(score);
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (displayScore / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className={cn("relative", sizes[size].container)}>
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
            opacity="0.2"
          />
          
          {/* Progress Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className={cn(
              "transition-all duration-1000 ease-out",
              colorClass
            )}
          />
        </svg>
        
        {/* Score Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className={cn("font-mono font-bold tabular-nums", sizes[size].text, colorClass)}>
            {displayScore}
          </div>
          <div className="text-xs text-muted-foreground font-mono">%</div>
        </div>
      </div>
      
      {showLabel && (
        <div className={cn(
          "font-mono font-bold uppercase tracking-wide",
          sizes[size].label,
          colorClass
        )}>
          {getScoreLabel(score)}
        </div>
      )}
    </div>
  );
};
