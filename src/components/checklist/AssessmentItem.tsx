import * as React from "react";
import { cn } from "@/lib/utils";
import { HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export type AssessmentAnswer = "yes" | "partial" | "no" | null;

interface AssessmentItemProps {
  id: string;
  label: string;
  description?: string;
  helpText?: string;
  value: AssessmentAnswer;
  onChange: (value: AssessmentAnswer) => void;
  disabled?: boolean;
}

export const AssessmentItem = ({
  id,
  label,
  description,
  helpText,
  value,
  onChange,
  disabled = false
}: AssessmentItemProps) => {
  return (
    <div className="py-7 border-b border-black/5 last:border-0 transition-all duration-200">
      <div className="space-y-5">
        {/* Question Label */}
        <div className="flex items-start justify-between gap-3">
          <label htmlFor={id} className="font-mono text-[15px] font-medium text-foreground leading-relaxed flex-1">
            {label}
          </label>
          {helpText && (
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Help"
                  >
                    <HelpCircle className="w-4 h-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left" className="max-w-xs">
                  <p className="text-sm font-sans">{helpText}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="font-sans text-[15px] text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}

        {/* Answer Buttons - Technical Style */}
        <div className="flex flex-wrap sm:flex-nowrap gap-3">
          <button
            type="button"
            onClick={() => !disabled && onChange("yes")}
            disabled={disabled}
            className={cn(
              "flex-1 px-4 py-3 font-mono text-sm font-medium transition-all duration-200",
              value === "yes"
                ? "bg-primary/10 text-primary border-2 border-primary"
                : "bg-transparent text-foreground/60 border-2 border-border hover:border-primary/40",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            [ YES ]
          </button>
          <button
            type="button"
            onClick={() => !disabled && onChange("partial")}
            disabled={disabled}
            className={cn(
              "flex-1 px-4 py-3 font-mono text-sm font-medium transition-all duration-200",
              value === "partial"
                ? "bg-accent/10 text-accent border-2 border-accent"
                : "bg-transparent text-foreground/60 border-2 border-border hover:border-accent/40",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            [ PARTIAL ]
          </button>
          <button
            type="button"
            onClick={() => !disabled && onChange("no")}
            disabled={disabled}
            className={cn(
              "flex-1 px-4 py-3 font-mono text-sm font-medium transition-all duration-200",
              value === "no"
                ? "bg-destructive/10 text-destructive border-2 border-destructive"
                : "bg-transparent text-foreground/60 border-2 border-border hover:border-destructive/40",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            [ NO ]
          </button>
        </div>
      </div>
    </div>
  );
};
