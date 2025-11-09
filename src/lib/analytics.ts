/**
 * Enterprise Analytics Integration Layer
 * Supports Google Analytics 4, Microsoft Clarity, and custom analytics
 */

// Analytics configuration
const ANALYTICS_CONFIG = {
  GA4_MEASUREMENT_ID: (import.meta.env.VITE_GA4_MEASUREMENT_ID ?? "").trim(),
  CLARITY_PROJECT_ID: (import.meta.env.VITE_CLARITY_PROJECT_ID ?? "").trim(),
  DEBUG_MODE: import.meta.env.DEV,
};

// Initialize Google Analytics 4
export const initializeGA4 = (measurementId?: string) => {
  const sanitizedId = measurementId?.trim();
  if (typeof window === 'undefined' || !sanitizedId) return;

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${sanitizedId}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  const dataLayer = window.dataLayer;
  function gtag(...args: unknown[]) {
    dataLayer.push(args);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', sanitizedId, {
    send_page_view: false, // We'll send manually for SPA
    cookie_flags: 'SameSite=None;Secure',
  });

  console.log('✅ Google Analytics 4 initialized');
};

// Initialize Microsoft Clarity
type ClarityFunction = ((...args: unknown[]) => void) & { q?: unknown[][] };

export const initializeClarity = (projectId?: string) => {
  const sanitizedId = projectId?.trim();
  if (typeof window === 'undefined' || !sanitizedId) return;

  const clarityWindow = window as Window & { clarity?: ClarityFunction };

  if (!clarityWindow.clarity) {
    const clarityFn: ClarityFunction = (...args) => {
      (clarityFn.q = clarityFn.q || []).push(args);
    };
    clarityWindow.clarity = clarityFn;
  }

  const existingScript = document.querySelector<HTMLScriptElement>(
    `script[data-clarity="${sanitizedId}"]`,
  );
  if (existingScript) {
    console.log('ℹ️ Microsoft Clarity already initialized');
    return;
  }

  const scriptElement = document.createElement('script');
  scriptElement.async = true;
  scriptElement.src = `https://www.clarity.ms/tag/${sanitizedId}`;
  scriptElement.dataset.clarity = sanitizedId;

  const firstScript = document.getElementsByTagName('script')[0];
  firstScript?.parentNode?.insertBefore(scriptElement, firstScript);

  console.log('✅ Microsoft Clarity initialized');
};

// Track page view
export const trackPageView = (path: string, title?: string) => {
  // Google Analytics 4
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title || document.title,
      page_location: window.location.href,
    });
  }

  // Microsoft Clarity
  if (window.clarity) {
    window.clarity('set', 'page', path);
  }

  if (ANALYTICS_CONFIG.DEBUG_MODE) {
    console.log('📊 Page View:', { path, title });
  }
};

// Track custom event
export const trackAnalyticsEvent = (
  eventName: string,
  properties?: Record<string, unknown>
) => {
  // Google Analytics 4
  if (window.gtag) {
    window.gtag('event', eventName, properties ?? {});
  }

  // Microsoft Clarity
  if (window.clarity) {
    window.clarity('event', eventName);
  }

  if (ANALYTICS_CONFIG.DEBUG_MODE) {
    console.log('📊 Event:', eventName, properties);
  }
};

// Track conversion
export const trackConversion = (
  conversionName: string,
  value?: number,
  currency: string = 'USD'
) => {
  const conversionData: Record<string, unknown> = {
    event_category: 'conversion',
    event_label: conversionName,
  };

  if (typeof value === 'number') {
    conversionData.value = value;
    conversionData.currency = currency;
  }

  trackAnalyticsEvent('conversion', conversionData);
};

// Track CTA click with enhanced data
export const trackCTAClick = (
  ctaName: string,
  location: string,
  destination: string,
  variant?: string
) => {
  trackAnalyticsEvent('cta_click', {
    cta_name: ctaName,
    cta_location: location,
    cta_destination: destination,
    cta_variant: variant,
    event_category: 'engagement',
  });
};

// Track form submission
export const trackFormSubmission = (
  formName: string,
  formData?: Record<string, unknown>
) => {
  trackAnalyticsEvent('form_submission', {
    form_name: formName,
    event_category: 'lead_generation',
    ...(formData ?? {}),
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number, page: string) => {
  trackAnalyticsEvent('scroll_depth', {
    scroll_depth: depth,
    page_path: page,
    event_category: 'engagement',
  });
};

// Track time on page
export const trackTimeOnPage = (seconds: number, page: string) => {
  trackAnalyticsEvent('time_on_page', {
    time_seconds: seconds,
    page_path: page,
    event_category: 'engagement',
  });
};

// Track A/B test variant
export const trackABTestVariant = (testName: string, variant: string) => {
  // Google Analytics custom dimension
  if (window.gtag) {
    window.gtag('set', 'user_properties', {
      [`test_${testName}`]: variant,
    });
  }

  trackAnalyticsEvent('ab_test_variant', {
    test_name: testName,
    variant: variant,
    event_category: 'experimentation',
  });
};

// Track user segment
export const trackUserSegment = (segment: string) => {
  if (window.gtag) {
    window.gtag('set', 'user_properties', {
      user_segment: segment,
    });
  }

  if (window.clarity) {
    window.clarity('set', 'segment', segment);
  }

  trackAnalyticsEvent('user_segment_assigned', {
    segment: segment,
    event_category: 'personalization',
  });
};

// Track error
export const trackError = (
  errorMessage: string,
  errorStack?: string,
  severity: 'low' | 'medium' | 'high' = 'medium'
) => {
  trackAnalyticsEvent('error', {
    error_message: errorMessage,
    error_stack: errorStack,
    severity: severity,
    event_category: 'error',
  });
};

// Track performance metric
export const trackPerformanceMetric = (
  metricName: string,
  value: number,
  rating: 'good' | 'needs-improvement' | 'poor'
) => {
  trackAnalyticsEvent('performance_metric', {
    metric_name: metricName,
    metric_value: value,
    metric_rating: rating,
    event_category: 'performance',
  });
};

// Identify user (for authenticated users)
export const identifyUser = (userId: string, traits?: Record<string, unknown>) => {
  if (window.gtag && ANALYTICS_CONFIG.GA4_MEASUREMENT_ID) {
    window.gtag('config', ANALYTICS_CONFIG.GA4_MEASUREMENT_ID, {
      user_id: userId,
    });
  }

  if (window.clarity) {
    window.clarity('identify', userId, traits);
  }

  if (ANALYTICS_CONFIG.DEBUG_MODE) {
    console.log('👤 User Identified:', userId, traits);
  }
};

// Initialize all analytics services
export const initializeAnalytics = () => {
  // Check for user consent (from cookie banner)
  const hasConsent = localStorage.getItem('cookie-consent') === 'accepted';
  
  if (!hasConsent && !ANALYTICS_CONFIG.DEBUG_MODE) {
    console.log('⏸ Analytics paused - awaiting consent');
    return;
  }

  // Initialize GA4
  if (ANALYTICS_CONFIG.GA4_MEASUREMENT_ID) {
    initializeGA4(ANALYTICS_CONFIG.GA4_MEASUREMENT_ID);
  }

  // Initialize Clarity
  if (ANALYTICS_CONFIG.CLARITY_PROJECT_ID) {
    initializeClarity(ANALYTICS_CONFIG.CLARITY_PROJECT_ID);
  }

  if (ANALYTICS_CONFIG.DEBUG_MODE) {
    console.log('📊 Analytics initialized in debug mode');
  }
};

// TypeScript declarations
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    clarity?: ClarityFunction;
  }
}

export default {
  initialize: initializeAnalytics,
  trackPageView,
  trackEvent: trackAnalyticsEvent,
  trackConversion,
  trackCTAClick,
  trackFormSubmission,
  trackScrollDepth,
  trackTimeOnPage,
  trackABTestVariant,
  trackUserSegment,
  trackError,
  trackPerformanceMetric,
  identifyUser,
};
