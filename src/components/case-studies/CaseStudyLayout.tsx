import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Building2, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import SEOHead from "@/components/SEOHead";
import { Section } from "@/components/ui/section";

interface CaseStudyMetric {
  label: string;
  before: string;
  after: string;
}

interface CaseStudyLayoutProps {
  industry: string;
  vertical: string;
  timeline: string;
  size: string;
  headline: string;
  pullQuote: string;
  metrics: CaseStudyMetric[];
  growth: string;
  seoTitle: string;
  seoDescription: string;
  children: ReactNode;
}

export function CaseStudyLayout({
  industry,
  vertical,
  timeline,
  size,
  headline,
  pullQuote,
  metrics,
  growth,
  seoTitle,
  seoDescription,
  children,
}: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        keywords={[
          "case study",
          industry.toLowerCase(),
          "revenue operations",
          "systems architecture",
          "CRM implementation",
        ]}
        canonicalUrl={`/proof/${industry.toLowerCase().replace(/\s+/g, "-")}`}
      />

      <Breadcrumbs />

      {/* Hero */}
      <Section className="border-b border-border">
        <Link
          to="/proof"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          All Case Studies
        </Link>

        <div className="system-status mb-6">{industry}</div>
        <h1 className="heading-page mb-6">{headline}</h1>

        {/* Meta bar */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-mono">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            {vertical}
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            {size}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {timeline}
          </div>
        </div>
      </Section>

      {/* Pull Quote */}
      <Section variant="muted" className="border-b border-border">
        <blockquote className="text-xl md:text-2xl font-medium text-foreground border-l-2 border-primary pl-6 italic max-w-3xl">
          "{pullQuote}"
        </blockquote>
      </Section>

      {/* Metrics Grid */}
      <Section className="border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-card border border-border p-6">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-4 font-mono">
                {metric.label}
              </div>
              <div className="flex items-center gap-3">
                <div className="text-muted-foreground font-mono text-lg">
                  {metric.before}
                </div>
                <div className="text-primary font-mono">→</div>
                <div className="text-primary font-mono font-bold text-lg">
                  {metric.after}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <div className="inline-block bg-primary/10 border border-primary/30 px-6 py-3">
            <span className="text-xs text-primary uppercase tracking-wider font-mono">
              Result
            </span>
            <div className="text-xl font-mono font-bold text-primary mt-1">
              {growth}
            </div>
          </div>
        </div>
      </Section>

      {/* Content */}
      {children}

      {/* CTA */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-6">Find Out What's Breaking</h2>
          <p className="text-description text-muted-foreground mb-10">
            2-week diagnostic. System scorecard, risk assessment, implementation
            pathway.
          </p>
          <ConversionOptimizedButton
            to="/assessment"
            ctaName="Case Study - Book Assessment"
            location="Case Study CTA"
            size="lg"
          >
            Book Assessment
          </ConversionOptimizedButton>
        </div>
      </Section>
    </div>
  );
}
