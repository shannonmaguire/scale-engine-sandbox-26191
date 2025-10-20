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

interface CookieConsent {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const CookieBanner = memo(() => {
  const [showBanner, setShowBanner] = useState(false);
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
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (consent: CookieConsent) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    setShowBanner(false);
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

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">We Value Your Privacy</h3>
                <p className="text-sm text-muted-foreground">
                  We use cookies to enhance your browsing experience, analyze site traffic, and deliver personalized content. 
                  By clicking "Accept All", you consent to our use of cookies.{" "}
                  <a href="/cookie-policy" className="text-primary hover:underline">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={handleOpenSettings}
                className="flex items-center gap-2"
              >
                <Settings className="h-4 w-4" />
                Customize
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectAll}
              >
                Reject All
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptAll}
              >
                Accept All
              </Button>
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
