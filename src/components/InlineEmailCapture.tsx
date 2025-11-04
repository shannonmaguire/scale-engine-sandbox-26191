import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
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
      <Card className="p-6 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-green-600" />
          <div>
            <p className="font-medium text-green-900 dark:text-green-400">Report will be sent to {email}</p>
            <p className="text-sm text-green-700 dark:text-green-500 mt-1">Check your inbox in a few minutes</p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className={`p-6 ${variant === "primary" ? "border-primary/20 bg-primary/5" : ""}`}>
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Mail className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>
          <form onSubmit={handleSubmit} className="flex gap-2">
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
        </div>
      </div>
    </Card>
  );
};
