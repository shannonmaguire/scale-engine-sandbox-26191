import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { HelpCircle } from "lucide-react";

interface ChecklistItemProps {
  id: string;
  label: string;
  description?: string;
  helpText?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export const ChecklistItem = ({
  id,
  label,
  description,
  helpText,
  checked,
  onChange,
  disabled = false
}: ChecklistItemProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div
      className={cn(
        "group relative flex items-start gap-3 p-3 rounded-md border-l-2 transition-all cursor-pointer bg-card",
        checked && "border-l-primary bg-muted/30",
        !checked && "border-l-transparent hover:bg-accent/50",
        disabled && "opacity-50 cursor-not-allowed"
      )}
      onClick={() => {
        if (!disabled) {
          onChange(!checked);
        }
      }}
      role="button"
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => {
        if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onChange(!checked);
        }
      }}
      aria-pressed={checked}
      aria-label={label}
    >
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onChange}
        disabled={disabled}
        className="mt-0.5 pointer-events-none w-5 h-5"
        tabIndex={-1}
      />
      <div className="flex-1 min-w-0 space-y-1.5">
        <div
          className={cn(
            "font-mono font-semibold text-sm",
            checked && "text-accent line-through",
            !checked && "text-foreground"
          )}
        >
          {label}
        </div>
        
        {description && (
          <p className={cn(
            "text-xs text-muted-foreground leading-relaxed",
            checked && "opacity-60"
          )}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
