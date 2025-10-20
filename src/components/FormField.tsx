import { ReactNode } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  touched?: boolean;
  required?: boolean;
  placeholder?: string;
  helpText?: string;
  icon?: ReactNode;
  success?: boolean;
  className?: string;
  rows?: number;
}

/**
 * Enhanced form field with validation states, icons, and progressive disclosure
 * Optimized for conversion and accessibility
 */
export const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  touched,
  required = false,
  placeholder,
  helpText,
  icon,
  success = false,
  className,
  rows = 3,
}: FormFieldProps) => {
  const hasError = !!(error && touched);
  const showSuccess = success && touched && !error && value.length > 0;

  return (
    <div className={cn("space-y-2 fade-in-up", className)}>
      <Label 
        htmlFor={id} 
        className="font-mono text-sm font-medium flex items-center gap-2"
      >
        {icon && <span className="text-primary">{icon}</span>}
        {label}
        {required && <span className="text-destructive">*</span>}
      </Label>

      <div className="relative">
        {type === "textarea" ? (
          <Textarea
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            placeholder={placeholder}
            required={required}
            rows={rows}
            className={cn(
              "font-mono transition-all duration-200",
              hasError && "border-destructive focus:ring-destructive",
              showSuccess && "border-primary focus:ring-primary"
            )}
            aria-describedby={[
              hasError && `${id}-error`,
              helpText && `${id}-help`,
            ].filter(Boolean).join(' ')}
            aria-invalid={hasError}
          />
        ) : (
          <Input
            id={id}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            placeholder={placeholder}
            required={required}
            className={cn(
              "font-mono transition-all duration-200 pr-10",
              hasError && "border-destructive focus:ring-destructive",
              showSuccess && "border-primary focus:ring-primary"
            )}
            aria-describedby={[
              hasError && `${id}-error`,
              helpText && `${id}-help`,
            ].filter(Boolean).join(' ')}
            aria-invalid={hasError}
          />
        )}

        {/* Status icon */}
        {(hasError || showSuccess) && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {hasError && (
              <AlertCircle className="w-4 h-4 text-destructive animate-shake" aria-hidden="true" />
            )}
            {showSuccess && (
              <CheckCircle2 className="w-4 h-4 text-primary animate-scale-in" aria-hidden="true" />
            )}
          </div>
        )}
      </div>

      {/* Error message with aria-live for screen readers */}
      {hasError && (
        <p
          id={`${id}-error`}
          className="text-xs text-destructive flex items-center gap-1 animate-fade-in-up"
          role="alert"
          aria-live="polite"
          aria-atomic="true"
        >
          <AlertCircle className="w-3 h-3" aria-hidden="true" />
          {error}
        </p>
      )}
      
      {/* Success message */}
      {showSuccess && (
        <p
          className="text-xs text-primary flex items-center gap-1 animate-fade-in-up"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
          Valid
        </p>
      )}

      {/* Help text */}
      {helpText && !hasError && (
        <p
          id={`${id}-help`}
          className="text-xs text-muted-foreground font-mono"
        >
          {helpText}
        </p>
      )}
    </div>
  );
};
