import { StandardCard, StandardCardContent } from "@/components/ui/standard-card";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  outcome?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  variant?: 'default' | 'compact';
}

export const Testimonials = ({ testimonials, variant = 'default' }: TestimonialsProps) => {
  if (variant === 'compact') {
    return (
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <StandardCard key={index} variant="bordered" className="border-primary/20">
            <StandardCardContent className="p-6">
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <p className="text-muted-foreground italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="border-t border-border pt-3">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
              </div>
            </StandardCardContent>
          </StandardCard>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {testimonials.map((testimonial, index) => (
        <StandardCard key={index} variant="bordered" className="border-primary/20">
          <StandardCardContent className="p-8">
            <Quote className="w-10 h-10 text-primary/30 mb-4" />
            <p className="text-lg text-muted-foreground italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
            {testimonial.outcome && (
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-4">
                <p className="text-xs font-mono font-bold text-accent mb-1">OUTCOME</p>
                <p className="text-sm text-muted-foreground">{testimonial.outcome}</p>
              </div>
            )}
            <div className="border-t border-border pt-4">
              <p className="font-semibold text-foreground text-lg">{testimonial.author}</p>
              <p className="text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
            </div>
          </StandardCardContent>
        </StandardCard>
      ))}
    </div>
  );
};
