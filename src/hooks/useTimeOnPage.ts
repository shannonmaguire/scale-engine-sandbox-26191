import { useEffect, useRef } from 'react';
import { trackEvent } from './usePageTracking';

interface UseTimeOnPageOptions {
  enabled?: boolean;
  trackIntervals?: number[]; // Track at specific time intervals (in seconds)
}

/**
 * Track how long users spend on a page
 * Useful for engagement analysis and content optimization
 */
export const useTimeOnPage = ({
  enabled = true,
  trackIntervals = [10, 30, 60, 120, 300], // 10s, 30s, 1m, 2m, 5m
}: UseTimeOnPageOptions = {}) => {
  const startTimeRef = useRef<number>(Date.now());
  const trackedIntervalsRef = useRef<Set<number>>(new Set());
  const intervalIdRef = useRef<number>();

  useEffect(() => {
    if (!enabled) return;

    startTimeRef.current = Date.now();
    trackedIntervalsRef.current = new Set();

    // Check time on page every second
    intervalIdRef.current = window.setInterval(() => {
      const timeOnPage = Math.floor((Date.now() - startTimeRef.current) / 1000);

      // Track milestone intervals
      for (const interval of trackIntervals) {
        if (
          timeOnPage >= interval &&
          !trackedIntervalsRef.current.has(interval)
        ) {
          trackedIntervalsRef.current.add(interval);
          trackEvent('Time on Page Milestone', {
            seconds: interval,
            page: window.location.pathname,
          });
        }
      }
    }, 1000);

    // Track final time on page when leaving
    const handleBeforeUnload = () => {
      const finalTime = Math.floor((Date.now() - startTimeRef.current) / 1000);
      trackEvent('Page Exit', {
        timeOnPage: finalTime,
        page: window.location.pathname,
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [enabled, trackIntervals]);

  const getTimeOnPage = () => {
    return Math.floor((Date.now() - startTimeRef.current) / 1000);
  };

  return { getTimeOnPage };
};
