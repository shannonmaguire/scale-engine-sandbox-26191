import { ConversionOptimizedButton } from "./ConversionOptimizedButton";
import { useABTest } from "@/hooks/useABTest";

interface CTAVariant {
  text: string;
  subtext?: string;
}

interface CTAVariantTestProps {
  to: string;
  location: string;
  testName: string;
  variants: CTAVariant[];
  className?: string;
}

/**
 * A/B test wrapper for CTA buttons
 * Automatically assigns variants and tracks conversions
 */
export const CTAVariantTest = ({
  to,
  location,
  testName,
  variants,
  className,
}: CTAVariantTestProps) => {
  const { variant, variantName, trackConversion, isLoading } = useABTest<CTAVariant>({
    testName,
    variants: variants.map((v, i) => ({
      name: `variant_${i + 1}`,
      value: v,
      weight: 1, // Equal weight distribution
    })),
  });

  const handleClick = () => {
    trackConversion('cta_click');
  };

  if (isLoading) {
    return (
      <div className="h-12 w-48 bg-muted animate-pulse rounded-md" />
    );
  }

  return (
    <div className="space-y-2">
      <ConversionOptimizedButton
        to={to}
        ctaName={`${testName}_${variantName}`}
        location={location}
        className={className}
        onClick={handleClick}
      >
        {variant.text}
      </ConversionOptimizedButton>
      {variant.subtext && (
        <p className="text-xs text-muted-foreground text-center font-mono">
          {variant.subtext}
        </p>
      )}
    </div>
  );
};
