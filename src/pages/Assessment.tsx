import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { CTA, TIMELINES } from "@/lib/canonical-constants";

const qualificationPatterns = [
  {
    category: "DATA GOVERNANCE",
    question: "Product data enters via spreadsheet.",
    signal: "No validation. No audit trail. Pricing errors compound silently.",
  },
  {
    category: "INTEGRATION",
    question: "Financial systems don't talk to your CRM.",
    signal: "Manual reconciliation. Revenue recognized but never collected.",
  },
  {
    category: "ACCESS CONTROL",
    question: "Team members share credentials.",
    signal: "No trail. No revocation speed. You can't answer who has access.",
  },
  {
    category: "FOLLOW-UP",
    question: "Leads arrive without an owner.",
    signal: "Deals go cold. The team argues about whose turn it was.",
  },
  {
    category: "TOOL SPRAWL",
    question: "Projects live across 4+ disconnected tools.",
    signal: "No single source of truth. 15 hours a week finding status.",
  },
  {
    category: "BILLING GAP",
    question: "Clients get onboarded before invoices are sent.",
    signal: "Operational access granted. Cash never arrives.",
  },
];

const InfrastructureDiagnostic = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="System Diagnostic | CWT Studio"
        description="Without diagnosis, revenue leaks silently. 2-week diagnostic reveals what's broken, what it costs, and what to fix first."
        keywords={[
          "systems diagnostic",
          "revenue systems diagnostic",
          "RevOps diagnostic",
          "implementation roadmap",
        ]}
        canonicalUrl="/diagnostic"
        serviceSchema={{
          name: "System Diagnostic",
          description:
            "Diagnostic delivering clear identification of system failures, their cost, and prioritized fix sequence.",
          offers: [
            {
              name: "System Diagnostic",
              description:
                "2-week diagnostic identifying what is broken, what it costs, and what to fix first.",
            },
          ],
        }}
        faqSchema={[
          {
            question: "What is a system diagnostic?",
            answer:
              "A 2-week diagnostic that identifies where your revenue systems are failing, what those failures cost, and what to fix first.",
          },
          {
            question: "Do I need a diagnostic before working with CWT Studio?",
            answer:
              "Yes. Every engagement starts with the diagnostic. It ensures accurate scoping and qualifies fit.",
          },
        ]}
      />

      <Breadcrumbs />

      {/* Hero */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <div className="system-status mb-8">SYSTEM DIAGNOSTIC</div>

          <h1 className="heading-page mb-6 leading-[1.1]">
            Find Out What's Breaking
          </h1>

          <p className="text-description text-foreground/80 leading-relaxed max-w-2xl mb-10">
            {TIMELINES.diagnostic}. We find where deals stall, forecasts fail,
            and customers lose trust.
          </p>

          <ConversionOptimizedButton
            to="/contact?interest=diagnostic&source_page=diagnostic"
            ctaName="Diagnostic - Book Diagnostic Hero"
            location="Diagnostic Hero"
            size="lg"
          >
            {CTA.bookDiagnostic}
          </ConversionOptimizedButton>
        </div>
      </Section>

      {/* Exclusion Framework */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-4xl">
          <div className="border-2 border-destructive/50 bg-destructive/5 p-4 md:p-6">
            <h3 className="font-mono text-sm uppercase tracking-widest text-destructive mb-4">
              Do Not Book If
            </h3>
            <ul className="space-y-2 text-base text-foreground">
              <li className="min-h-[44px] py-2">You haven't built anything yet.</li>
              <li className="min-h-[44px] py-2">You're comparing vendors on price.</li>
              <li className="min-h-[44px] py-2">You want someone to confirm what you've already decided.</li>
              <li className="min-h-[44px] py-2">You're not willing to change what isn't working.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Qualification Patterns */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <h2 className="heading-section mb-10">Recognize Any of These?</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {qualificationPatterns.map((pattern, index) => (
              <div key={index} className="border border-border bg-card p-5">
                <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
                  {pattern.category}
                </div>
                <p className="text-base font-medium text-foreground mb-2">
                  {pattern.question}
                </p>
                <p className="text-sm text-muted-foreground">
                  {pattern.signal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What You'll Know */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <h2 className="heading-section mb-10">What You'll Know</h2>

          <p className="text-description text-muted-foreground mb-8 max-w-2xl">
            Most teams discover the blocking layer isn't the software. It's the governance structure that was never built.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="heading-subsection mb-3">What's broken</h3>
              <p className="text-description text-muted-foreground">
                The specific systems, integrations, and processes that are failing. Diagnosed and mapped.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="heading-subsection mb-3">What it costs</h3>
              <p className="text-description text-muted-foreground">
                The revenue leaking, the hours wasted, the decisions made on bad data. Quantified.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="heading-subsection mb-3">What to fix first</h3>
              <p className="text-description text-muted-foreground">
                Prioritized by impact. Sequenced for execution.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Book Diagnostic CTA */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-6">Book a Diagnostic Call</h2>
          <p className="text-description text-muted-foreground mb-10 max-w-2xl mx-auto">
            20 minutes. No pitch. We look at your systems and tell you what we see.
          </p>

          <ConversionOptimizedButton
            to="/contact?interest=diagnostic&source_page=diagnostic"
            ctaName="Diagnostic - Book Diagnostic CTA"
            location="Diagnostic CTA"
            size="lg"
          >
            {CTA.bookDiagnostic}
          </ConversionOptimizedButton>
        </div>
      </Section>
    </div>
  );
};

export default InfrastructureDiagnostic;
