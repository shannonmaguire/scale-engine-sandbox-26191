import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent } from './usePageTracking';

export type FunnelStage = 
  | 'awareness'
  | 'interest'
  | 'consideration'
  | 'intent'
  | 'conversion';

interface FunnelStep {
  stage: FunnelStage;
  page: string;
  timestamp: string;
}

/**
 * Track user progress through conversion funnel
 */
export const useConversionFunnel = () => {
  const location = useLocation();

  useEffect(() => {
    const stage = getFunnelStage(location.pathname);
    trackFunnelStep(stage, location.pathname);
  }, [location]);

  return {
    trackFunnelConversion,
    getFunnelProgress,
  };
};

/**
 * Determine funnel stage from page path
 */
const getFunnelStage = (path: string): FunnelStage => {
  const stageMap: Record<string, FunnelStage> = {
    '/': 'awareness',
    '/about': 'interest',
    '/services': 'interest',
    '/salesforce': 'consideration',
    '/salesforce/delivery': 'consideration',
    '/salesforce/partners': 'consideration',
    '/proof': 'consideration',
    '/fractional': 'consideration',
    '/sprint': 'intent',
    '/systems': 'intent',
    '/ae-technical-support': 'intent',
    '/contact': 'intent',
  };

  return stageMap[path] || 'awareness';
};

/**
 * Track funnel step progression
 */
const trackFunnelStep = (stage: FunnelStage, page: string) => {
  const funnelData = getFunnelData();
  
  const step: FunnelStep = {
    stage,
    page,
    timestamp: new Date().toISOString(),
  };
  
  funnelData.push(step);
  localStorage.setItem('conversion_funnel', JSON.stringify(funnelData));
  
  trackEvent('Funnel Step', {
    stage,
    page,
    stepNumber: funnelData.length,
    timeInFunnel: calculateTimeInFunnel(funnelData),
  });
};

/**
 * Track final conversion event
 */
export const trackFunnelConversion = (conversionType: string, value?: number) => {
  const funnelData = getFunnelData();
  
  trackEvent('Funnel Conversion', {
    conversionType,
    value,
    totalSteps: funnelData.length,
    timeToConversion: calculateTimeInFunnel(funnelData),
    journeyPath: funnelData.map(step => step.page).join(' -> '),
  });
  
  // Clear funnel after conversion
  localStorage.removeItem('conversion_funnel');
};

/**
 * Get funnel progress percentage
 */
export const getFunnelProgress = (): number => {
  const funnelData = getFunnelData();
  const stages: FunnelStage[] = ['awareness', 'interest', 'consideration', 'intent', 'conversion'];
  
  const currentStage = funnelData[funnelData.length - 1]?.stage || 'awareness';
  const stageIndex = stages.indexOf(currentStage);
  
  return Math.round(((stageIndex + 1) / stages.length) * 100);
};

/**
 * Get funnel data from localStorage
 */
const getFunnelData = (): FunnelStep[] => {
  const stored = localStorage.getItem('conversion_funnel');
  return stored ? JSON.parse(stored) : [];
};

/**
 * Calculate total time in funnel (seconds)
 */
const calculateTimeInFunnel = (steps: FunnelStep[]): number => {
  if (steps.length < 2) return 0;
  
  const firstStep = new Date(steps[0].timestamp);
  const lastStep = new Date(steps[steps.length - 1].timestamp);
  
  return Math.round((lastStep.getTime() - firstStep.getTime()) / 1000);
};
