import { CaseStudyLayout } from "@/components/case-studies/CaseStudyLayout";
import { Section } from "@/components/ui/section";

const CybersecurityCaseStudy = () => {
  return (
    <CaseStudyLayout
      industry="Compliance Advisory"
      vertical="Federal Cybersecurity"
      timeline="90 Days"
      size="Founder + contractors"
      headline="$500K Pipeline from Zero in 90 Days"
      pullQuote="We went from zero pipeline to $500K in 90 days"
      metrics={[
        { label: "Pipeline", before: "$0", after: "$500K+" },
        { label: "Email Open Rate", before: "Unknown", after: "40%+" },
        { label: "Target ICPs", before: "9 segments", after: "3 segments" },
      ]}
      growth="$500K+ Pipeline"
      seoTitle="Federal Cybersecurity Case Study | $500K Pipeline | CWT Studio"
      seoDescription="How we built $500K+ in qualified pipeline for a federal cybersecurity consultancy in 90 days through focused ICP targeting and repeatable outbound systems."
    >
      {/* The Problem */}
      <Section className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-6">The Problem</h2>
          <p className="text-description text-muted-foreground mb-6">
            Zero pipeline. No predictable revenue. Just waiting for inbound that never came.
          </p>
          <p className="text-description text-muted-foreground mb-6">
            The founder had deep federal cybersecurity expertise—CMMC compliance, FedRAMP, the works. But expertise doesn't fill a pipeline. They were chasing nine different customer types, had no outbound system, and every deal depended on referrals that came unpredictably.
          </p>
          <div className="bg-card border border-border p-6 mt-8">
            <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">What Was Breaking</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">No defined ICP—targeting everyone</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Zero outbound infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Revenue dependent on founder's network</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">No way to run campaigns without the founder</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* What We Built */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-6">What We Built</h2>
          <p className="text-description text-muted-foreground mb-8">
            Focused demand generation system: narrow ICP, cold outreach that converts, and handoff documentation so anyone can run it.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background border border-border p-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">ICP Refinement</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Analyzed 9 target segments</li>
                <li>• Identified 3 high-conversion segments</li>
                <li>• Built qualification criteria</li>
                <li>• Documented disqualification signals</li>
              </ul>
            </div>
            <div className="bg-background border border-border p-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">Outbound System</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Cold email sequences (40%+ open rates)</li>
                <li>• LinkedIn engagement playbooks</li>
                <li>• Response handling scripts</li>
                <li>• CRM tracking for every touchpoint</li>
              </ul>
            </div>
          </div>

          <div className="bg-background border border-border p-6 mt-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">Handoff Documentation</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Every component documented so a contractor or hire could run campaigns without the founder:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="text-muted-foreground">• Target list building SOP</div>
              <div className="text-muted-foreground">• Email sequence templates</div>
              <div className="text-muted-foreground">• Response playbooks</div>
              <div className="text-muted-foreground">• Qualification checklist</div>
              <div className="text-muted-foreground">• CRM data entry guide</div>
              <div className="text-muted-foreground">• Weekly reporting template</div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Result */}
      <Section className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-6">The Result</h2>
          <p className="text-description text-muted-foreground mb-6">
            $500K+ in qualified pipeline in 90 days. 40%+ email open rates. Repeatable outbound system that runs without the founder.
          </p>
          <div className="bg-card border border-border p-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">What Changed</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Pipeline: $0 → $500K+ in 90 days</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Email open rates: 40%+ (cold outreach)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Target segments: 9 → 3 (focused)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Outbound runs without founder involvement</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Pattern */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-6">The Pattern</h2>
          <p className="text-description text-foreground">
            Expert consultancies often try to serve too many segments because "anyone could be a customer." The fix is ruthless focus: identify the 2-3 segments where you have unfair advantage, then build a repeatable system to reach them. Breadth kills pipeline velocity.
          </p>
        </div>
      </Section>
    </CaseStudyLayout>
  );
};

export default CybersecurityCaseStudy;
