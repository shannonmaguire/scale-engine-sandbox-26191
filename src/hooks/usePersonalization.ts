import { useMemo } from 'react';
import { useUserSegmentation, UserSegment } from './useUserSegmentation';

interface PersonalizationConfig {
  heroTitle: string;
  heroSubtitle: string;
  ctaText: string;
  ctaUrgency: 'low' | 'medium' | 'high';
  showSocialProof: boolean;
  showExitIntent: boolean;
  chatWidgetDelay: number;
}

/**
 * Personalize content based on user segment
 */
export const usePersonalization = () => {
  const { segment, behavior } = useUserSegmentation();

  const config = useMemo(() => 
    getPersonalizationConfig(segment), 
    [segment]
  );

  return {
    segment,
    behavior,
    config,
    isReturningUser: segment !== 'new-visitor',
    isHighIntent: segment === 'high-intent',
  };
};

/**
 * Get personalized configuration by segment
 */
const getPersonalizationConfig = (segment: UserSegment): PersonalizationConfig => {
  const configs: Record<UserSegment, PersonalizationConfig> = {
    'new-visitor': {
      heroTitle: 'Transform Your Salesforce Experience',
      heroSubtitle: 'Expert consulting, technical support, and strategic guidance for Salesforce success',
      ctaText: 'Explore Our Services',
      ctaUrgency: 'low',
      showSocialProof: true,
      showExitIntent: true,
      chatWidgetDelay: 30000, // 30 seconds
    },
    'returning-visitor': {
      heroTitle: 'Welcome Back to CWT Partners',
      heroSubtitle: 'Ready to take the next step in your Salesforce journey?',
      ctaText: 'Continue Your Journey',
      ctaUrgency: 'medium',
      showSocialProof: true,
      showExitIntent: true,
      chatWidgetDelay: 15000, // 15 seconds
    },
    'engaged-user': {
      heroTitle: 'Let\'s Build Your Salesforce Solution',
      heroSubtitle: 'You\'ve explored our services. Let\'s discuss your specific needs.',
      ctaText: 'Schedule a Consultation',
      ctaUrgency: 'high',
      showSocialProof: false,
      showExitIntent: false,
      chatWidgetDelay: 5000, // 5 seconds
    },
    'high-intent': {
      heroTitle: 'Ready to Get Started?',
      heroSubtitle: 'Book your consultation today and transform your Salesforce experience',
      ctaText: 'Book Your Consultation Now',
      ctaUrgency: 'high',
      showSocialProof: false,
      showExitIntent: false,
      chatWidgetDelay: 3000, // 3 seconds
    },
    'exit-risk': {
      heroTitle: 'Questions About Our Services?',
      heroSubtitle: 'Get instant answers from our team or explore our success stories',
      ctaText: 'Chat With Us Now',
      ctaUrgency: 'high',
      showSocialProof: true,
      showExitIntent: true,
      chatWidgetDelay: 10000, // 10 seconds
    },
  };

  return configs[segment];
};
