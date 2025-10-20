import { useEffect, useState } from 'react';
import { trackEvent } from './usePageTracking';
import analytics from '@/lib/analytics';

interface ABTestVariant<T = any> {
  name: string;
  weight?: number;
  value: T;
}

interface UseABTestOptions<T> {
  testName: string;
  variants: ABTestVariant<T>[];
  storageKey?: string;
  enabled?: boolean;
}

/**
 * A/B testing hook for conversion optimization
 * Randomly assigns users to variants and tracks results
 * Persists variant selection in sessionStorage
 */
export const useABTest = <T = any>({
  testName,
  variants,
  storageKey,
  enabled = true,
}: UseABTestOptions<T>) => {
  const [selectedVariant, setSelectedVariant] = useState<ABTestVariant<T>>(variants[0]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!enabled) {
      setIsLoading(false);
      return;
    }

    const key = storageKey || `ab_test_${testName}`;

    // Check if user already has a variant assigned
    const stored = sessionStorage.getItem(key);
    
    if (stored) {
      const variant = variants.find(v => v.name === stored);
      if (variant) {
        setSelectedVariant(variant);
        setIsLoading(false);
        return;
      }
    }

    // Calculate total weight
    const totalWeight = variants.reduce((sum, v) => sum + (v.weight || 1), 0);
    
    // Random selection based on weights
    let random = Math.random() * totalWeight;
    let selected = variants[0];

    for (const variant of variants) {
      random -= variant.weight || 1;
      if (random <= 0) {
        selected = variant;
        break;
      }
    }

    // Store selection
    sessionStorage.setItem(key, selected.name);
    setSelectedVariant(selected);

    // Track variant assignment
    analytics.trackABTestVariant(testName, selected.name);

    setIsLoading(false);
  }, [testName, variants, storageKey, enabled]);

  /**
   * Track a conversion for this A/B test
   */
  const trackConversion = (conversionName: string, value?: number) => {
    trackEvent('AB Test Conversion', {
      testName,
      variant: selectedVariant.name,
      conversionName,
      value,
      timestamp: new Date().toISOString(),
    });
  };

  return {
    variant: selectedVariant.value,
    variantName: selectedVariant.name,
    isLoading,
    trackConversion,
  };
};
