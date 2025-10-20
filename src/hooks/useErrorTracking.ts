import { useEffect } from 'react';
import { trackEvent } from './usePageTracking';
import analytics from '@/lib/analytics';

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  page: string;
  userAgent: string;
  timestamp: string;
}

/**
 * Advanced error tracking and reporting
 */
export const useErrorTracking = () => {
  useEffect(() => {
    // Global error handler
    const handleError = (event: ErrorEvent) => {
      trackError({
        message: event.message,
        stack: event.error?.stack,
        page: window.location.pathname,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      });
    };

    // Promise rejection handler
    const handleRejection = (event: PromiseRejectionEvent) => {
      trackError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        page: window.location.pathname,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      });
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);

  return { trackError: trackCustomError };
};

/**
 * Track error with full context
 */
const trackError = (error: ErrorInfo) => {
  // Log in development
  if (import.meta.env.DEV) {
    console.error('🚨 Error Tracked:', error);
  }

  // Track to analytics
  const severity = determineSeverity(error);
  analytics.trackError(error.message, error.stack, severity);

  // Store in localStorage for diagnostics
  const errors = getStoredErrors();
  errors.push(error);
  
  // Keep only last 20 errors
  if (errors.length > 20) {
    errors.shift();
  }
  
  localStorage.setItem('error_log', JSON.stringify(errors));
};

/**
 * Track custom errors manually
 */
export const trackCustomError = (message: string, context?: Record<string, any>) => {
  trackError({
    message,
    page: window.location.pathname,
    userAgent: navigator.userAgent,
    timestamp: new Date().toISOString(),
    ...context,
  });
};

/**
 * Get stored errors for debugging
 */
export const getStoredErrors = (): ErrorInfo[] => {
  const stored = localStorage.getItem('error_log');
  return stored ? JSON.parse(stored) : [];
};

/**
 * Determine error severity
 */
const determineSeverity = (error: ErrorInfo): 'low' | 'medium' | 'high' => {
  const message = error.message.toLowerCase();
  
  if (message.includes('network') || message.includes('fetch')) {
    return 'medium';
  }
  
  if (message.includes('syntax') || message.includes('reference')) {
    return 'high';
  }
  
  return 'low';
};

/**
 * Clear error log
 */
export const clearErrorLog = () => {
  localStorage.removeItem('error_log');
};
