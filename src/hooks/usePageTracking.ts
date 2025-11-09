import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import analytics from '@/lib/analytics';

/**
 * Track page views and route changes
 * This is a placeholder for analytics integration (Google Analytics, Mixpanel, etc.)
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view with analytics service
    analytics.trackPageView(location.pathname + location.search, document.title);
  }, [location]);
};

/**
 * Track custom events with enhanced data
 */
export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  analytics.trackEvent(eventName, {
    ...properties,
    url: window.location.href,
    path: window.location.pathname,
    referrer: document.referrer,
    userAgent: navigator.userAgent,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track CTA clicks for conversion optimization
 */
export const trackCTAClick = (ctaName: string, location: string, destination: string, variant?: string) => {
  analytics.trackCTAClick(ctaName, location, destination, variant);
};

/**
 * Track scroll depth for engagement analysis
 */
export const trackScrollDepth = (depth: number) => {
  analytics.trackScrollDepth(depth, window.location.pathname);
};
