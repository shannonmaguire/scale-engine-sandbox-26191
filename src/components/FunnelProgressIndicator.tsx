import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface FunnelProgressIndicatorProps {
  currentStep: "health-check" | "assessment" | "sprint" | "ops";
  className?: string;
}

export const FunnelProgressIndicator = ({ currentStep, className }: FunnelProgressIndicatorProps) => {
  const steps = [
    { id: "health-check", label: "Health Check", description: "5-min quiz" },
    { id: "assessment", label: "Assessment", description: "2-week audit" },
    { id: "sprint", label: "Sprint", description: "90-day build" },
    { id: "ops", label: "Ops", description: "Ongoing support" }
  ];

  const currentIndex = steps.findIndex(step => step.id === currentStep);

  return (
    <div className={cn("w-full", className)}>
      {/* Desktop: Horizontal Stepper */}
      <div className="hidden md:flex items-center justify-between max-w-4xl mx-auto">
        {steps.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;
          const isUpcoming = index > currentIndex;

          return (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                {/* Step Circle */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono font-semibold transition-all duration-300",
                    isCompleted && "bg-success border-success text-white",
                    isCurrent && "bg-primary border-primary text-white scale-110 shadow-lg",
                    isUpcoming && "bg-background border-border text-muted-foreground"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                
                {/* Step Label */}
                <div className="mt-3 text-center">
                  <div
                    className={cn(
                      "font-mono text-sm font-semibold transition-colors",
                      (isCompleted || isCurrent) && "text-foreground",
                      isUpcoming && "text-muted-foreground"
                    )}
                  >
                    {step.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {step.description}
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-4 -mt-12 relative">
                  <div className="absolute inset-0 bg-border" />
                  <div
                    className={cn(
                      "absolute inset-0 bg-success transition-all duration-500",
                      isCompleted && "w-full",
                      !isCompleted && "w-0"
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile: Vertical Stepper */}
      <div className="md:hidden space-y-4">
        {steps.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;
          const isUpcoming = index > currentIndex;

          return (
            <div key={step.id} className="flex items-start gap-4">
              {/* Step Circle & Connector */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono font-semibold transition-all duration-300",
                    isCompleted && "bg-success border-success text-white",
                    isCurrent && "bg-primary border-primary text-white scale-110 shadow-lg",
                    isUpcoming && "bg-background border-border text-muted-foreground"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm">{index + 1}</span>
                  )}
                </div>
                
                {/* Vertical Connector */}
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-12 mt-2 relative">
                    <div className="absolute inset-0 bg-border" />
                    <div
                      className={cn(
                        "absolute inset-0 bg-success transition-all duration-500",
                        isCompleted && "h-full",
                        !isCompleted && "h-0"
                      )}
                    />
                  </div>
                )}
              </div>

              {/* Step Label */}
              <div className="flex-1 pt-2">
                <div
                  className={cn(
                    "font-mono text-sm font-semibold transition-colors",
                    (isCompleted || isCurrent) && "text-foreground",
                    isUpcoming && "text-muted-foreground"
                  )}
                >
                  {step.label}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {step.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};