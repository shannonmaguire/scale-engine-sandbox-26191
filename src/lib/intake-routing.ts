/**
 * Intake Routing Logic Tree
 * Routes buyers to different contact flows based on assessment score tiers and buyer pattern detection.
 */

export type BuyerPattern = 'validation_seeker' | 'high_performer' | 'intervention_candidate';
export type ScoreTier = 'critical' | 'emerging' | 'structured' | 'optimized';
export type IntakeRoute = 'excluded' | 'soft_touch' | 'standard' | 'priority' | 'triage';

export interface IntakeDecision {
  route: IntakeRoute;
  contactPath: string;
  headline: string;
  description: string;
  ctaLabel: string;
  ctaVariant: 'default' | 'outline' | 'secondary';
  showBooking: boolean;
  showPdfOnly: boolean;
  urgencyLevel: 'none' | 'low' | 'medium' | 'high';
  prefilledMessage: string;
}

/**
 * Determine score tier based on raw score (0-36 scale)
 */
export function getScoreTier(score: number): ScoreTier {
  if (score >= 31) return 'optimized';
  if (score >= 21) return 'structured';
  if (score >= 11) return 'emerging';
  return 'critical';
}

/**
 * Determine buyer pattern based on yes percentage
 */
export function detectBuyerPattern(yesPercentage: number): BuyerPattern {
  if (yesPercentage >= 80) return 'validation_seeker';
  if (yesPercentage >= 66) return 'high_performer';
  return 'intervention_candidate';
}

/**
 * Main routing logic tree
 * Combines score tier and buyer pattern to determine intake route
 */
export function determineIntakeRoute(
  score: number,
  buyerPattern: BuyerPattern,
  checklistId: string
): IntakeDecision {
  const tier = getScoreTier(score);

  // EXCLUSION PATH: Validation seekers are filtered out regardless of score
  if (buyerPattern === 'validation_seeker') {
    return {
      route: 'excluded',
      contactPath: '',
      headline: 'Your Systems Are Working',
      description: `You answered "Yes" to 80%+ of diagnostic questions. Your revenue infrastructure is functional. We work with broken systems, not optimization of working ones.`,
      ctaLabel: 'Save Report as PDF',
      ctaVariant: 'outline',
      showBooking: false,
      showPdfOnly: true,
      urgencyLevel: 'none',
      prefilledMessage: ''
    };
  }

  // HIGH PERFORMERS: Systems mostly working, light touch only
  if (buyerPattern === 'high_performer') {
    return {
      route: 'soft_touch',
      contactPath: `/contact?interest=assessment&source_page=assessment-results&tier=high_performer&score=${score}`,
      headline: 'Minor Gaps Identified',
      description: 'Your systems are largely functional with specific optimization opportunities. An Infrastructure Assessment can identify targeted improvements.',
      ctaLabel: 'Request Assessment Scope',
      ctaVariant: 'secondary',
      showBooking: true,
      showPdfOnly: false,
      urgencyLevel: 'low',
      prefilledMessage: `I completed the Revenue Health Check and scored ${score}/36. My systems are mostly functional but I would like to explore specific optimization opportunities.`
    };
  }

  // INTERVENTION CANDIDATES: Route based on score tier
  switch (tier) {
    case 'critical':
      // Score 0-10: Systems severely broken, priority triage
      return {
        route: 'triage',
        contactPath: `/contact?interest=assessment&source_page=assessment-results&tier=critical&score=${score}&priority=high`,
        headline: 'Critical Infrastructure Gaps',
        description: 'Your systems require immediate intervention. Multiple foundational elements are missing or broken. We recommend a priority Assessment to scope repair.',
        ctaLabel: 'Book Priority Assessment',
        ctaVariant: 'default',
        showBooking: true,
        showPdfOnly: false,
        urgencyLevel: 'high',
        prefilledMessage: `PRIORITY: I completed the Revenue Health Check and scored ${score}/36. My revenue systems have critical gaps across multiple categories. I need to discuss immediate intervention options.`
      };

    case 'emerging':
      // Score 11-20: Clear gaps, prime candidates for Sprint
      return {
        route: 'priority',
        contactPath: `/contact?interest=assessment&source_page=assessment-results&tier=emerging&score=${score}`,
        headline: 'Structural Gaps Identified',
        description: 'Your systems have significant gaps that are limiting revenue predictability. An Infrastructure Assessment will map the repair sequence.',
        ctaLabel: 'Book Infrastructure Assessment',
        ctaVariant: 'default',
        showBooking: true,
        showPdfOnly: false,
        urgencyLevel: 'medium',
        prefilledMessage: `I completed the Revenue Health Check and scored ${score}/36. I have structural gaps in my revenue systems and want to discuss the Infrastructure Assessment to map a repair plan.`
      };

    case 'structured':
      // Score 21-30: Some gaps, standard flow
      return {
        route: 'standard',
        contactPath: `/contact?interest=assessment&source_page=assessment-results&tier=structured&score=${score}`,
        headline: 'Targeted Improvements Needed',
        description: 'Your systems have a solid foundation with specific areas requiring attention. An Assessment will identify the highest-impact improvements.',
        ctaLabel: 'Book Infrastructure Assessment',
        ctaVariant: 'default',
        showBooking: true,
        showPdfOnly: false,
        urgencyLevel: 'low',
        prefilledMessage: `I completed the Revenue Health Check and scored ${score}/36. I have a solid foundation but identified specific gaps I would like to address through an Infrastructure Assessment.`
      };

    case 'optimized':
      // Score 31-36: High score but not validation seeker (answered honestly)
      return {
        route: 'soft_touch',
        contactPath: `/contact?interest=assessment&source_page=assessment-results&tier=optimized&score=${score}`,
        headline: 'Systems Performing Well',
        description: "Your infrastructure is mature. If you are experiencing friction despite high scores, an Assessment can identify hidden bottlenecks.",
        ctaLabel: 'Request Assessment Scope',
        ctaVariant: 'secondary',
        showBooking: true,
        showPdfOnly: false,
        urgencyLevel: 'none',
        prefilledMessage: `I completed the Revenue Health Check and scored ${score}/36. Despite the high score, I am experiencing friction and would like to explore whether an Assessment could identify hidden issues.`
      };

    default:
      return {
        route: 'standard',
        contactPath: `/contact?interest=assessment&source_page=assessment-results&score=${score}`,
        headline: 'Book Your Assessment',
        description: 'Get a comprehensive diagnostic of your revenue infrastructure.',
        ctaLabel: 'Book Infrastructure Assessment',
        ctaVariant: 'default',
        showBooking: true,
        showPdfOnly: false,
        urgencyLevel: 'medium',
        prefilledMessage: `I completed the Revenue Health Check and scored ${score}/36. I would like to discuss next steps.`
      };
  }
}

/**
 * Get urgency badge styling
 */
type UrgencyLevel = 'none' | 'low' | 'medium' | 'high';

interface UrgencyBadgeResult {
  label: string;
  className: string;
}

export function getUrgencyBadge(urgencyLevel: UrgencyLevel): UrgencyBadgeResult | null {
  switch (urgencyLevel) {
    case 'high':
      return { label: 'Priority', className: 'bg-destructive text-destructive-foreground' };
    case 'medium':
      return { label: 'Recommended', className: 'bg-primary text-primary-foreground' };
    case 'low':
      return { label: 'Optional', className: 'bg-muted text-muted-foreground' };
    default:
      return null;
  }
}
