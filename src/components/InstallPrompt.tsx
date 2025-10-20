import { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/hooks/usePageTracking';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      return;
    }

    // Check if user dismissed before
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    if (dismissed) {
      const dismissedTime = new Date(dismissed).getTime();
      const daysSinceDismissal = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
      
      // Don't show again for 30 days after dismissal
      if (daysSinceDismissal < 30) {
        return;
      }
    }

    const handler = (e: Event) => {
      e.preventDefault();
      const installEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(installEvent);
      
      // Show prompt after 30 seconds of browsing
      setTimeout(() => {
        setShowPrompt(true);
        trackEvent('PWA Install Prompt Shown');
      }, 30000);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    trackEvent('PWA Install Prompt Response', { outcome });

    if (outcome === 'accepted') {
      setShowPrompt(false);
    }

    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-install-dismissed', new Date().toISOString());
    trackEvent('PWA Install Prompt Dismissed');
  };

  if (!showPrompt || !deferredPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:w-96 z-50 animate-in slide-in-from-bottom duration-300">
      <div className="bg-card border border-border rounded-lg shadow-lg p-6">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Download className="h-6 w-6 text-primary" />
          </div>
          
          <div className="flex-1">
            <h3 className="font-semibold mb-1">Install CWT Partners</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Add to your home screen for quick access and offline functionality
            </p>
            
            <div className="flex gap-2">
              <Button onClick={handleInstall} size="sm">
                Install
              </Button>
              <Button onClick={handleDismiss} variant="outline" size="sm">
                Not Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
