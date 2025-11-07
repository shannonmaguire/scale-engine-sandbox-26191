import { cn } from "@/lib/utils";

interface Step {
  id: string;
  title: string;
  completed: boolean;
}

interface ProgressStepperProps {
  steps: Step[];
  currentStep: number;
  totalItems: number;
  onStepClick?: (stepIndex: number) => void;
}

export const ProgressStepper = ({ steps, currentStep, totalItems, onStepClick }: ProgressStepperProps) => {
  const completedSteps = steps.filter(s => s.completed).length;
  const progressPercent = ((currentStep + 1) / steps.length) * 100;
  
  return (
    <div className="w-full space-y-4 py-6 border-b border-black/5">
      {/* Linear Progress Bar */}
      <div className="relative">
        <div className="h-1 bg-black/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
      
      {/* Info Line */}
      <div className="flex items-center justify-between text-[13px]">
        <span className="font-mono text-muted-foreground">
          {totalItems} questions · {steps.length} categories · ~3 min
        </span>
        <span className="font-mono font-medium text-foreground">
          Step {currentStep + 1}/{steps.length}
        </span>
      </div>
      
      {/* Category Navigation - Minimal underline style */}
      <div className="relative">
        <div className="flex items-center gap-6 overflow-x-auto pb-2 scroll-smooth [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-muted-foreground/30">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = step.completed;
            const isPast = index < currentStep;
            const isClickable = (isPast || isCompleted) && onStepClick;

            return (
              <button
                key={step.id}
                onClick={() => isClickable && onStepClick(index)}
                disabled={!isClickable}
                className={cn(
                  "relative font-mono text-[13px] whitespace-nowrap transition-all duration-200 pb-1",
                  isActive && "text-foreground font-semibold",
                  !isActive && (isCompleted || isPast) && "text-muted-foreground hover:text-foreground",
                  !isActive && !isCompleted && !isPast && "text-muted-foreground/50",
                  isClickable && "cursor-pointer"
                )}
              >
                {step.title}
                {isCompleted && <span className="ml-1.5 text-primary">✓</span>}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
                )}
              </button>
            );
          })}
        </div>
        {/* Fade gradient on right edge to indicate scrollable content */}
        <div className="absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
