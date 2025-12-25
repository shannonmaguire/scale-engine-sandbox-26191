import { useEffect } from 'react';
import analytics from '@/lib/analytics';

/**
 * Send performance metric to analytics
 */
const sendMetric = (metricName: string, value: number, rating: 'good' | 'needs-improvement' | 'poor') => {
  analytics.trackPerformanceMetric(metricName, value, rating);
};

/**
 * Get performance rating based on thresholds
 */
const getPerformanceRating = (metricName: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
  const thresholds = {
    LCP: { good: 2500, poor: 4000 },
    FID: { good: 100, poor: 300 },
    CLS: { good: 0.1, poor: 0.25 },
    TTFB: { good: 800, poor: 1800 },
  };

  const threshold = thresholds[metricName as keyof typeof thresholds];
  if (!threshold) return 'good';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
};

/**
 * Monitor Core Web Vitals and performance metrics
 * Tracks LCP, FID, CLS in both dev and production
 */
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Track in all environments for debugging, but only send to analytics in prod
    const shouldSendAnalytics = !import.meta.env.DEV;

    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint (LCP) - Target: < 2.5s
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          const value = lastEntry.startTime;
          const rating = getPerformanceRating('LCP', value);
          console.log(`📊 LCP: ${value.toFixed(0)}ms (${rating})`);
          if (shouldSendAnalytics) sendMetric('LCP', value, rating);
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

        // First Input Delay (FID) - Target: < 100ms
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries() as PerformanceEventTiming[];
          entries.forEach((entry) => {
            const value = entry.processingStart - entry.startTime;
            const rating = getPerformanceRating('FID', value);
            console.log(`📊 FID: ${value.toFixed(0)}ms (${rating})`);
            if (shouldSendAnalytics) sendMetric('FID', value, rating);
          });
        });
        fidObserver.observe({ type: 'first-input', buffered: true });

        // Cumulative Layout Shift (CLS) - Target: < 0.1
        let clsScore = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries() as PerformanceEntry[];
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsScore += entry.value;
            }
          });
          const rating = getPerformanceRating('CLS', clsScore);
          console.log(`📊 CLS: ${clsScore.toFixed(3)} (${rating})`);
          if (shouldSendAnalytics) sendMetric('CLS', clsScore, rating);
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });

        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch (error) {
        console.error('Performance monitoring error:', error);
      }
    }
  }, []);
};

/**
 * Monitor page load performance with enhanced metrics
 */
export const reportWebVitals = () => {
  if (import.meta.env.DEV) return;

  if ('performance' in window && 'PerformanceObserver' in window) {
    // Report navigation timing
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (perfData) {
        const ttfb = perfData.responseStart - perfData.requestStart;
        const metrics = {
          dns: perfData.domainLookupEnd - perfData.domainLookupStart,
          tcp: perfData.connectEnd - perfData.connectStart,
          ttfb,
          download: perfData.responseEnd - perfData.responseStart,
          domInteractive: perfData.domInteractive,
          domComplete: perfData.domComplete,
          loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
        };

        // Send TTFB metric with rating
        const rating = getPerformanceRating('TTFB', ttfb);
        sendMetric('TTFB', ttfb, rating);

        console.log('📊 Performance Metrics:', metrics);
        // TODO: Send full metrics to monitoring service
      }
    });
  }
};
