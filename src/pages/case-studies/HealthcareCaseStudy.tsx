import { CaseStudyLayout } from "@/components/case-studies/CaseStudyLayout";
import { Section } from "@/components/ui/section";

const HealthcareCaseStudy = () => {
  return (
    <CaseStudyLayout
      industry="Healthcare"
      vertical="AI-Assisted Wellness Clinic"
      timeline="90 Days"
      size="Launch stage"
      headline="Zero to Operational in 90 Days"
      pullQuote="We went from zero patients to a working system in 90 days"
      metrics={[
        { label: "Patient Pipeline", before: "Zero", after: "Active flow" },
        { label: "Team Alignment", before: "Fragmented", after: "Unified playbook" },
        { label: "Time to Launch", before: "Unknown", after: "90 days" },
      ]}
      growth="Foundation Built"
      seoTitle="Healthcare Case Study | AI Wellness Clinic Launch | CWT Studio"
      seoDescription="How we built end-to-end marketing and revenue architecture for an AI-assisted wellness clinic launch in 90 days. Zero to operational with unified team playbook."
    >
      {/* The Problem */}
      <Section className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-6">The Problem</h2>
          <p className="text-description text-muted-foreground mb-6">
            Great idea. Zero patients. Marketing, operations, and technology teams all pointing fingers at each other.
          </p>
          <p className="text-description text-muted-foreground mb-6">
            This wasn't a marketing problem or a technology problem. It was a coordination problem disguised as both. The clinic had invested in AI-assisted diagnostics, built out clinical capacity, and hired staff—but had no patient acquisition system and no way to get everyone working from the same playbook.
          </p>
          <div className="bg-card border border-border p-6 mt-8">
            <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">What Was Breaking</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">No patient acquisition funnel existed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Marketing built assets without input from ops</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Tech team built features nobody asked for</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">No shared source of truth for patient data</span>
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
            End-to-end marketing and revenue architecture across clinical, technical, and operations teams. Every deliverable designed to work together, not in isolation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background border border-border p-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">Patient Acquisition</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Landing page that converts</li>
                <li>• Lead flow from quiz to booking</li>
                <li>• Automated follow-up sequences</li>
                <li>• Meta/tracking infrastructure</li>
              </ul>
            </div>
            <div className="bg-background border border-border p-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">Team Alignment</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Unified brand direction</li>
                <li>• Cross-team operating system</li>
                <li>• Documented handoff protocols</li>
                <li>• Shared patient data model</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* The Result */}
      <Section className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-6">The Result</h2>
          <p className="text-description text-muted-foreground mb-6">
            Repeatable system ready to scale to multiple locations. Not just a launch—a foundation.
          </p>
          <div className="bg-card border border-border p-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">What Changed</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Patients flowing through acquisition funnel</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">All teams operating from same playbook</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">System documented for new location launches</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Zero dependency on founder for daily operations</span>
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
            Launch failures rarely come from bad ideas or bad execution. They come from teams building in parallel without shared infrastructure. The fix isn't more effort—it's a shared operating layer that makes coordination automatic.
          </p>
        </div>
      </Section>
    </CaseStudyLayout>
  );
};

export default HealthcareCaseStudy;
