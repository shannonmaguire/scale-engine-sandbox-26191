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

const systemTips = {
  yes: "System stability improves when data quality rules are enforced.",
  partial: "Incremental implementation reduces technical debt over time.",
  no: "Foundation gaps create compounding operational friction."
};

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

        {/* Pill Button Options */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => !disabled && onChange("yes")}
            disabled={disabled}
            className={cn(
              "px-5 py-2 rounded-full font-sans text-[14px] font-medium transition-all duration-200",
              "border border-black/10",
              value === "yes" 
                ? "bg-primary text-primary-foreground shadow-sm" 
                : "bg-white hover:bg-[#F8F8F8] text-foreground",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            Yes
          </button>
          
          <button
            type="button"
            onClick={() => !disabled && onChange("partial")}
            disabled={disabled}
            className={cn(
              "px-5 py-2 rounded-full font-sans text-[14px] font-medium transition-all duration-200",
              "border border-black/10",
              value === "partial" 
                ? "bg-primary text-primary-foreground shadow-sm" 
                : "bg-white hover:bg-[#F8F8F8] text-foreground",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            Partially
          </button>
          
          <button
            type="button"
            onClick={() => !disabled && onChange("no")}
            disabled={disabled}
            className={cn(
              "px-5 py-2 rounded-full font-sans text-[14px] font-medium transition-all duration-200",
              "border border-black/10",
              value === "no" 
                ? "bg-primary text-primary-foreground shadow-sm" 
                : "bg-white hover:bg-[#F8F8F8] text-foreground",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            No
          </button>
        </div>

        {/* System Tip - Shows when answer is selected */}
        {value && (
          <p className="font-mono text-[13px] text-[#666] italic animate-fade-in">
            {systemTips[value]}
          </p>
        )}
      </div>
    </div>
  );
};
