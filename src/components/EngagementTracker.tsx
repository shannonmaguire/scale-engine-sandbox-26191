import { useEffect } from "react";
import { useTimeOnPage } from "@/hooks/useTimeOnPage";
import { useScrollDepth } from "@/hooks/useScrollDepth";

/**
 * Comprehensive engagement tracking component
 * Combines time on page and scroll depth tracking
 * Use this wrapper on key pages for detailed analytics
 */
export const EngagementTracker = () => {
  // Track time on page at key milestones
  useTimeOnPage({
    enabled: true,
    trackIntervals: [10, 30, 60, 120, 300], // 10s, 30s, 1m, 2m, 5m
  });

  // Track scroll depth
  useScrollDepth();

  return null; // This is a tracking-only component
};
