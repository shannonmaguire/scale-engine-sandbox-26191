import { Button, ButtonProps } from "@/components/ui/button";
import { trackCTAClick } from "@/hooks/usePageTracking";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ConversionOptimizedButtonProps extends ButtonProps {
  to: string;
  ctaName: string;
  location: string;
  showArrow?: boolean;
  children: React.ReactNode;
}

/**
 * CTA button with built-in conversion tracking
 */
export const ConversionOptimizedButton = ({
  to,
  ctaName,
  location,
  showArrow = true,
  children,
  className,
  ...props
}: ConversionOptimizedButtonProps) => {
  const handleClick = () => {
    trackCTAClick(ctaName, location, to);
  };

  return (
    <Button
      asChild
      className={`group ${className}`}
      {...props}
      onClick={handleClick}
    >
      <Link to={to}>
        {children}
        {showArrow && (
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        )}
      </Link>
    </Button>
  );
};
