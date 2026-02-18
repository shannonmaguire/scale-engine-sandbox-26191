import { useState, useEffect } from "react";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";

interface ProofPoint {
  quote: string;
  attribution: string;
  result: string;
}

const proofPoints: ProofPoint[] = [
  {
    quote: "Zero pipeline. No outreach system. No defined target. We had $500K in qualified pipeline 90 days later.",
    attribution: "FEDERAL CYBERSECURITY",
    result: "$0 → $500K pipeline. 90 days.",
  },
  {
    quote: "We 4x'd trial conversion by only calling people who actually use the product.",
    attribution: "B2B SAAS — $4.2M ARR",
    result: "6% → 24% trial conversion.",
  },
  {
    quote: "Cut 87% of the admin time. Client satisfaction jumped from 6.8 to 8.9.",
    attribution: "MARKETING AGENCY — 12 EMPLOYEES",
    result: "15hrs/week → 2hrs/week admin.",
  },
];

export const HomepageProofRotation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % proofPoints.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = proofPoints[activeIndex];

  return (
    <div>
      <div className="border border-border bg-card p-8">
        <blockquote className="text-xl md:text-2xl text-foreground font-medium mb-6 border-l-2 border-primary pl-6 italic">
          &ldquo;{current.quote}&rdquo;
        </blockquote>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {current.attribution}
          </div>
          <div className="text-sm text-primary font-medium">
            {current.result}
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-2">
          {proofPoints.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-border hover:bg-primary/50"
              }`}
              aria-label={`Case study ${index + 1}`}
            />
          ))}
        </div>

        <ConversionOptimizedButton
          to="/proof"
          ctaName="Proof - See All Case Studies"
          location="Proof Section"
          variant="outline"
        >
          See All 8 Case Studies
        </ConversionOptimizedButton>
      </div>
    </div>
  );
};
