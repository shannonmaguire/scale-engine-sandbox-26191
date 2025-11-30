import { usePersonalization } from "@/hooks/usePersonalization";
import { ConversionOptimizedButton } from "./ConversionOptimizedButton";
import { Badge } from "./ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

interface DynamicHeroProps {
  defaultTitle?: string;
  defaultSubtitle?: string;
  className?: string;
}

/**
 * Personalized hero section that adapts to user segment
 */
export const DynamicHero = ({
  defaultTitle,
  defaultSubtitle,
  className = "",
}: DynamicHeroProps) => {
  const { config, segment, isReturningUser, isHighIntent } = usePersonalization();

  const getUrgencyStyles = () => {
    switch (config.ctaUrgency) {
      case 'high':
        return 'animate-pulse';
      case 'medium':
        return 'hover-lift';
      default:
        return '';
    }
  };

  return (
    <section className={`relative py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Personalization indicator */}
        {isReturningUser && (
          <div className="flex justify-center mb-6 animate-fade-in">
            <Badge variant="secondary" className="gap-2">
              <Sparkles className="h-3 w-3" />
              Personalized for you
            </Badge>
          </div>
        )}

        {/* Hero content */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in">
            {config.heroTitle || defaultTitle || 'Transform Your Salesforce Experience'}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {config.heroSubtitle || defaultSubtitle || 'Expert consulting, technical support, and strategic guidance'}
          </p>

          {/* Dynamic CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <ConversionOptimizedButton
              to="/contact"
              ctaName={`hero_${segment}_primary`}
              location="hero-dynamic"
              size="lg"
              className={getUrgencyStyles()}
            >
              {config.ctaText}
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </ConversionOptimizedButton>

            {!isHighIntent && (
              <ConversionOptimizedButton
                to="/services"
                ctaName={`hero_${segment}_secondary`}
                location="hero-dynamic"
                variant="outline"
                size="lg"
                showArrow={false}
              >
                Learn More
              </ConversionOptimizedButton>
            )}
          </div>

          {/* High-intent user bonus */}
          {isHighIntent && (
            <p className="text-sm text-muted-foreground animate-fade-in pt-4" style={{ animationDelay: '0.3s' }}>
              🎯 Fast-track your consultation — limited slots available
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
