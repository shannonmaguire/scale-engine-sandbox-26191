import { Button, ButtonProps } from "@/components/ui/button";
import { trackCTAClick } from "@/hooks/usePageTracking";
import { Link } from "react-router-dom";

interface ConversionOptimizedButtonProps extends ButtonProps {
  to: string;
  ctaName: string;
  location: string;
  children: React.ReactNode;
}

/**
 * CTA button with built-in conversion tracking
 */
export const ConversionOptimizedButton = ({
  to,
  ctaName,
  location,
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
      className={className}
      {...props}
      onClick={handleClick}
    >
      <Link to={to}>
        {children}
      </Link>
    </Button>
  );
};
