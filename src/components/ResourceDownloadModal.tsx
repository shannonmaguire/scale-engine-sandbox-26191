import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, CheckCircle, Loader2 } from "lucide-react";
import { trackEvent } from "@/hooks/usePageTracking";
import { submitResourceDownload } from "@/lib/resource-download";

interface ResourceDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  resourceId?: string;
  resourceTitle: string;
  resourceDescription: string;
  downloadUrl?: string;
}

export const ResourceDownloadModal = ({
  isOpen,
  onClose,
  resourceId,
  resourceTitle,
  resourceDescription,
  downloadUrl
}: ResourceDownloadModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const fallbackTitle = resourceTitle || "Resource";

    trackEvent("resource_download_request", {
      resource: fallbackTitle,
      resourceId,
      location: window.location.pathname,
      emailPreview: `${email.slice(0, 3)}***`,
    });

    try {
      await submitResourceDownload({
        email,
        resourceId,
        resourceTitle: fallbackTitle,
        downloadUrl,
        page: window.location.pathname,
      });

      trackEvent("resource_download_submitted", {
        resource: fallbackTitle,
        resourceId,
        location: window.location.pathname,
      });

      setIsSubmitted(true);

      if (downloadUrl) {
        window.open(downloadUrl, "_blank", "noopener,noreferrer");
      }

      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (err) {
      console.error("Resource download submission failed", err);
      trackEvent("resource_download_failed", {
        resource: fallbackTitle,
        resourceId,
        location: window.location.pathname,
      });
      setError(
        err instanceof Error
          ? err.message
          : "Unable to send your resource. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setEmail("");
    setIsSubmitted(false);
    setIsSubmitting(false);
    setError(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-mono text-2xl text-foreground">
            {isSubmitted ? "Resource Sent!" : `Download ${resourceTitle}`}
          </DialogTitle>
            <DialogDescription className="text-muted-foreground">
            {isSubmitted 
              ? "Your resource will be delivered to your inbox within a few minutes."
              : resourceDescription
            }
          </DialogDescription>
        </DialogHeader>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-mono text-sm uppercase tracking-wide">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="font-mono"
                disabled={isSubmitting}
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Get Resource
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </div>

            {error && (
              <p className="text-xs text-destructive text-center">
                {error}
              </p>
            )}

            <p className="text-xs text-muted-foreground text-center pt-2">
              Resources delivered via email within minutes. We'll occasionally share insights on revenue systems. Unsubscribe anytime.
            </p>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-accent" aria-hidden="true" />
            </div>
            <p className="text-center text-foreground">
              Your resource is on its way to <strong>{email}</strong>
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
