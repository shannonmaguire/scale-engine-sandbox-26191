import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { trackEvent } from "@/hooks/usePageTracking";

interface InlineEmailCaptureProps {
  onEmailSubmit: (email: string) => void;
  title: string;
  subtitle: string;
  ctaText?: string;
  variant?: "primary" | "secondary";
}

export const InlineEmailCapture = ({ 
  onEmailSubmit, 
  title, 
  subtitle, 
  ctaText = "Send Report",
  variant = "primary" 
}: InlineEmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    try {
      await onEmailSubmit(email);
      setSubmitted(true);
      toast.success("Report will be emailed to you shortly!");
      trackEvent("inline_email_captured", { variant });
    } catch (error) {
      toast.error("Failed to save email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
        <Mail className="h-5 w-5 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-400">
          Report will be sent to {email}
        </AlertTitle>
        <AlertDescription className="text-green-700 dark:text-green-500">
          Check your inbox in a few minutes
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert className={variant === "primary" ? "border-primary/20 bg-primary/5" : ""}>
      <Mail className="h-5 w-5 text-primary" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {subtitle}
        <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="max-w-xs"
            disabled={isSubmitting}
          />
          <Button type="submit" disabled={isSubmitting}>
            <Send className="h-4 w-4 mr-2" />
            {ctaText}
          </Button>
        </form>
      </AlertDescription>
    </Alert>
  );
};
