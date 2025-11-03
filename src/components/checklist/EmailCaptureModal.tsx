import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

interface EmailCaptureModalProps {
  open: boolean;
  onEmailSubmit: (email: string) => void;
  onSkip?: () => void;
}

export const EmailCaptureModal = ({ open, onEmailSubmit, onSkip }: EmailCaptureModalProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    onEmailSubmit(email);
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md" onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            Get Your Full Assessment Report
          </DialogTitle>
          <DialogDescription>
            Enter your email to continue and receive your personalized technical maturity report with detailed recommendations.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className={error ? "border-destructive" : ""}
              autoFocus
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>

          <div className="flex gap-2">
            <Button type="submit" className="flex-1">
              Continue Assessment
            </Button>
            {onSkip && (
              <Button type="button" variant="outline" onClick={onSkip}>
                Skip
              </Button>
            )}
          </div>

          <p className="text-xs text-muted-foreground text-center">
            We'll email you the full report. No spam, unsubscribe anytime.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
