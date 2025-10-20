import { useEffect, useState, useRef } from 'react';
import { trackEvent } from './usePageTracking';

export const EXIT_INTENT_STORAGE_KEY = 'cwt_exit_intent_dismissed';

const readDismissedFlag = () => {
  if (typeof window === 'undefined') return false;
  try {
    return sessionStorage.getItem(EXIT_INTENT_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
};

const setDismissedFlag = () => {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(EXIT_INTENT_STORAGE_KEY, 'true');
  } catch {
    // Ignore storage failures (e.g., Safari private mode)
  }
};

const clearDismissedFlag = () => {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.removeItem(EXIT_INTENT_STORAGE_KEY);
  } catch {
    // Ignore storage failures
  }
};

interface UseExitIntentOptions {
  sensitivity?: number;
  delay?: number;
  enabled?: boolean;
  onExitIntent?: () => void;
}

/**
 * Detect when user is about to leave the page
 * Triggers on mouse movement toward browser chrome
 * Used for exit-intent popups and conversion optimization
 */
export const useExitIntent = ({
  sensitivity = 20,
  delay = 0,
  enabled = true,
  onExitIntent,
}: UseExitIntentOptions = {}) => {
  const [hasShown, setHasShown] = useState(() => readDismissedFlag());
  const [isExiting, setIsExiting] = useState(false);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    if (!enabled || hasShown || readDismissedFlag()) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse is moving toward top of viewport (browser chrome)
      if (e.clientY <= sensitivity && e.clientY < window.innerHeight) {
        // Clear any existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // Delay before triggering
        timeoutRef.current = window.setTimeout(() => {
          setIsExiting(true);
          setHasShown(true);
          setDismissedFlag();
          onExitIntent?.();

          // Track exit intent event
          trackEvent('Exit Intent Triggered', {
            page: window.location.pathname,
            timestamp: new Date().toISOString(),
          });
        }, delay);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [enabled, hasShown, sensitivity, delay, onExitIntent]);

  const dismiss = () => {
    setDismissedFlag();
    setHasShown(true);
    setIsExiting(false);
  };

  const reset = () => {
    clearDismissedFlag();
    setHasShown(false);
    setIsExiting(false);
  };

  return { isExiting, hasShown, dismiss, reset };
};
