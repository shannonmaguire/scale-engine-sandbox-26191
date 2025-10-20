import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/hooks/usePageTracking";
import { submitExitIntentLead } from "@/lib/exit-intent";
import { EXIT_INTENT_STORAGE_KEY } from "@/hooks/useExitIntent";

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  ctaText?: string;
  onSubmit?: (email: string) => Promise<void> | void;
}

/**
 * Exit-intent popup for capturing abandoning visitors
 * Appears when user shows intent to leave the page
 */
export const ExitIntentPopup = ({
  isOpen,
  onClose,
  title = "Wait! Before You Go...",
  description = "Join friends and clients getting our free revenue operations guide.",
  ctaText = "Get Free Guide",
  onSubmit,
}: ExitIntentPopupProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const persistDismissal = () => {
    if (typeof window === "undefined") return;
    try {
      sessionStorage.setItem(EXIT_INTENT_STORAGE_KEY, "true");
    } catch {
      // Ignore storage write failures (e.g., Safari private mode)
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return;
    }

    setIsSubmitting(true);
    setError(null);
    
    trackEvent('Exit Intent Email Captured', {
      email: email.substring(0, 3) + '***', // Privacy-safe tracking
      source: 'exit_intent_popup',
    });

    try {
      await submitExitIntentLead(email);
      await onSubmit?.(email);

      persistDismissal();
      setIsSubmitted(true);

      // Auto-close after success
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      console.error("Exit intent submission failed", err);
      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    persistDismissal();
    trackEvent('Exit Intent Popup Closed', {
      hasSubmitted: isSubmitted,
      source: 'exit_intent_popup',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={handleClose}
      />

      {/* Popup */}
      <div
        className={cn(
          "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50",
          "w-[90vw] max-w-md",
          "bg-card border-2 border-primary rounded-lg shadow-2xl",
          "transition-all duration-300",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors focus-visible-primary"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {!isSubmitted ? (
            <>
              <div className="mb-6">
                <h3 className="text-2xl font-mono font-bold text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-muted-foreground">
                  {description}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="your.email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="font-mono h-12"
                    autoFocus
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 font-mono hover-lift hover-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : ctaText}
                </Button>
              </form>

              {error && (
                <p className="text-xs text-destructive text-center mt-2">
                  {error}
                </p>
              )}

              <p className="text-xs text-muted-foreground text-center mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </>
          ) : (
            <div className="text-center py-8 fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-mono font-bold text-foreground mb-2">
                You're all set!
              </h3>
              <p className="text-muted-foreground">
                Check your inbox for the guide.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
