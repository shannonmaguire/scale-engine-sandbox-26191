import { useState, useEffect } from 'react';
import { trackEvent } from './usePageTracking';

export type UserSegment = 
  | 'new-visitor'
  | 'returning-visitor'
  | 'engaged-user'
  | 'high-intent'
  | 'exit-risk';

interface UserBehavior {
  visitCount: number;
  totalTimeOnSite: number;
  pagesVisited: string[];
  ctaClicks: number;
  scrollDepth: number;
  lastVisit: string;
}

/**
 * Intelligent user segmentation based on behavior patterns
 */
export const useUserSegmentation = () => {
  const [segment, setSegment] = useState<UserSegment>('new-visitor');
  const [behavior, setBehavior] = useState<UserBehavior | null>(null);

  useEffect(() => {
    const behaviorData = getUserBehavior();
    setBehavior(behaviorData);
    
    const calculatedSegment = calculateSegment(behaviorData);
    setSegment(calculatedSegment);

    // Track segment assignment
    trackEvent('User Segment Assigned', {
      segment: calculatedSegment,
      visitCount: behaviorData.visitCount,
      totalTime: behaviorData.totalTimeOnSite,
    });
  }, []);

  return { segment, behavior, updateBehavior };
};

/**
 * Get user behavior data from localStorage
 */
const getUserBehavior = (): UserBehavior => {
  const stored = localStorage.getItem('user_behavior');
  
  if (stored) {
    const data = JSON.parse(stored);
    // Increment visit count
    data.visitCount += 1;
    data.lastVisit = new Date().toISOString();
    
    // Add current page to visited pages
    if (!data.pagesVisited.includes(window.location.pathname)) {
      data.pagesVisited.push(window.location.pathname);
    }
    
    localStorage.setItem('user_behavior', JSON.stringify(data));
    return data;
  }
  
  // New visitor
  const newBehavior: UserBehavior = {
    visitCount: 1,
    totalTimeOnSite: 0,
    pagesVisited: [window.location.pathname],
    ctaClicks: 0,
    scrollDepth: 0,
    lastVisit: new Date().toISOString(),
  };
  
  localStorage.setItem('user_behavior', JSON.stringify(newBehavior));
  return newBehavior;
};

/**
 * Calculate user segment based on behavior
 */
const calculateSegment = (behavior: UserBehavior): UserSegment => {
  const { visitCount, totalTimeOnSite, pagesVisited, ctaClicks, scrollDepth } = behavior;
  
  // High-intent users: multiple visits, deep engagement
  if (visitCount >= 3 && ctaClicks >= 2 && totalTimeOnSite > 300) {
    return 'high-intent';
  }
  
  // Engaged users: good time on site, multiple pages
  if (totalTimeOnSite > 120 && pagesVisited.length >= 3) {
    return 'engaged-user';
  }
  
  // Exit risk: low engagement signals
  if (visitCount >= 2 && totalTimeOnSite < 30 && scrollDepth < 25) {
    return 'exit-risk';
  }
  
  // Returning visitor: came back but not highly engaged yet
  if (visitCount >= 2) {
    return 'returning-visitor';
  }
  
  // Default: new visitor
  return 'new-visitor';
};

/**
 * Update user behavior metrics
 */
const updateBehavior = (updates: Partial<UserBehavior>) => {
  const stored = localStorage.getItem('user_behavior');
  if (!stored) return;
  
  const behavior = JSON.parse(stored);
  const updated = { ...behavior, ...updates };
  localStorage.setItem('user_behavior', JSON.stringify(updated));
};
