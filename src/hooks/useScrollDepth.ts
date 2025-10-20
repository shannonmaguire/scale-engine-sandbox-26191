import { useEffect, useRef } from 'react';
import { trackScrollDepth } from './usePageTracking';

/**
 * Track scroll depth for engagement analysis
 * Fires events at 25%, 50%, 75%, and 100% scroll depth
 */
export const useScrollDepth = () => {
  const depths = useRef(new Set<number>());

  useEffect(() => {
    // Reset depths when component mounts (new page)
    depths.current.clear();
    
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      const scrollPercentage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);
      
      // Track milestones
      const milestones = [25, 50, 75, 100];
      milestones.forEach(milestone => {
        if (scrollPercentage >= milestone && !depths.current.has(milestone)) {
          depths.current.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
