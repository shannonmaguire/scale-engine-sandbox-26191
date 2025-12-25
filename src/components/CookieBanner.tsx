import { useState, useEffect, memo } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie, Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const COOKIE_CONSENT_KEY = "cookie_consent";
const BANNER_DELAY_MS = 4000; // 4 second delay

interface CookieConsent {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const CookieBanner = memo(() => {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookieConsent>({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false,
    timestamp: new Date().toISOString(),
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Delay showing the banner
      const timer = setTimeout(() => {
        setShowBanner(true);
        // Small delay for animation
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      }, BANNER_DELAY_MS);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (consent: CookieConsent) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    setIsVisible(false);
    setTimeout(() => {
      setShowBanner(false);
    }, 300);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    const consent: CookieConsent = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    saveConsent(consent);
  };

  const handleRejectAll = () => {
    const consent: CookieConsent = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    saveConsent(consent);
  };

  const handleSavePreferences = () => {
    saveConsent({
      ...preferences,
      necessary: true,
      timestamp: new Date().toISOString(),
    });
  };

  const handleOpenSettings = () => {
    setShowSettings(true);
  };

  const handleDismiss = () => {
    handleRejectAll();
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Slim, non-intrusive banner */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="bg-background/95 backdrop-blur-sm border-t border-border shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground text-center sm:text-left">
                We use cookies to improve your experience.{" "}
                <a href="/cookie-policy" className="text-primary hover:underline">
                  Learn more
                </a>
              </p>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleOpenSettings}
                  className="text-xs h-8"
                >
                  Customize
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleRejectAll}
                  className="text-xs h-8"
                >
                  Reject
                </Button>
                <Button
                  size="sm"
                  onClick={handleAcceptAll}
                  className="text-xs h-8"
                >
                  Accept
                </Button>
                <button
                  onClick={handleDismiss}
                  className="p-1.5 text-muted-foreground hover:text-foreground transition-colors ml-1"
                  aria-label="Dismiss cookie banner"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Cookie className="h-5 w-5" />
              Cookie Preferences
            </DialogTitle>
            <DialogDescription>
              Manage your cookie preferences. Necessary cookies are always enabled to ensure proper website functionality.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-4">
              <div className="flex items-start justify-between space-x-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <Label htmlFor="necessary" className="font-semibold">
                    Strictly Necessary Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Essential for the website to function. Cannot be disabled.
                  </p>
                </div>
                <Switch
                  id="necessary"
                  checked={true}
                  disabled
                  aria-label="Necessary cookies (always enabled)"
                />
              </div>

              <div className="flex items-start justify-between space-x-4 p-4 border rounded-lg">
                <div className="flex-1">
                  <Label htmlFor="functional" className="font-semibold">
                    Functional Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Remember your preferences and settings for a better experience.
                  </p>
                </div>
                <Switch
                  id="functional"
                  checked={preferences.functional}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, functional: checked })
                  }
                  aria-label="Toggle functional cookies"
                />
              </div>

              <div className="flex items-start justify-between space-x-4 p-4 border rounded-lg">
                <div className="flex-1">
                  <Label htmlFor="analytics" className="font-semibold">
                    Analytics Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Help us understand how visitors interact with our website to improve user experience.
                  </p>
                </div>
                <Switch
                  id="analytics"
                  checked={preferences.analytics}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, analytics: checked })
                  }
                  aria-label="Toggle analytics cookies"
                />
              </div>

              <div className="flex items-start justify-between space-x-4 p-4 border rounded-lg">
                <div className="flex-1">
                  <Label htmlFor="marketing" className="font-semibold">
                    Marketing Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Used to deliver personalized advertisements and measure campaign effectiveness.
                  </p>
                </div>
                <Switch
                  id="marketing"
                  checked={preferences.marketing}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, marketing: checked })
                  }
                  aria-label="Toggle marketing cookies"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-4 border-t">
              <Button variant="outline" onClick={() => setShowSettings(false)}>
                Cancel
              </Button>
              <Button onClick={handleSavePreferences}>
                Save Preferences
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
});

CookieBanner.displayName = "CookieBanner";

export default CookieBanner;