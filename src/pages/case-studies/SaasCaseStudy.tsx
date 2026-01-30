import { CaseStudyLayout } from "@/components/case-studies/CaseStudyLayout";
import { Section } from "@/components/ui/section";

const SaasCaseStudy = () => {
  return (
    <CaseStudyLayout
      industry="B2B SaaS"
      vertical="Project Management Platform"
      timeline="90 Days"
      size="$4.2M ARR, Series A"
      headline="4x Trial Conversion by Only Calling People Who Use the Product"
      pullQuote="We 4x'd trial conversion by only calling people who actually use the product"
      metrics={[
        { label: "Trial Conversion", before: "6%", after: "24%" },
        { label: "Monthly Trials", before: "800", after: "800" },
        { label: "Sales Efficiency", before: "Spray & pray", after: "PQL-driven" },
      ]}
      growth="4x Conversion"
      seoTitle="B2B SaaS Case Study | 4x Trial Conversion | CWT Studio"
      seoDescription="How we helped a $4.2M ARR project management platform 4x their trial conversion from 6% to 24% by connecting product usage to sales workflows."
    >
      {/* The Problem */}
      <Section className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-6">The Problem</h2>
          <p className="text-description text-muted-foreground mb-6">
            800 trials a month, 6% converted. Sales calling everyone, even people who never logged in.
          </p>
          <p className="text-description text-muted-foreground mb-6">
            The sales team was working hard—calling every trial signup, sending follow-up emails, booking demos. But they had no way to tell the difference between someone who signed up and never came back versus someone who'd built three projects and invited their team. Everyone got the same treatment.
          </p>
          <div className="bg-card border border-border p-6 mt-8">
            <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">What Was Breaking</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Product usage data not connected to CRM</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Sales treating all trials equally</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">No feature adoption tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">High-intent users buried in noise</span>
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
            Product-qualified lead (PQL) infrastructure that surfaces users who demonstrate buying intent through behavior, not just signup.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background border border-border p-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">Data Infrastructure</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Product events → Salesforce sync</li>
                <li>• Feature adoption scoring model</li>
                <li>• Real-time PQL triggers</li>
                <li>• Usage-based lead scoring</li>
              </ul>
            </div>
            <div className="bg-background border border-border p-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">Sales Workflow</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• PQL-first call queue</li>
                <li>• Usage pattern playbooks</li>
                <li>• Automated low-touch nurture</li>
                <li>• Expansion signal alerts</li>
              </ul>
            </div>
          </div>

          <div className="bg-background border border-border p-6 mt-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">PQL Scoring Model</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground">Created project</div>
                <div className="text-primary font-mono">+10 pts</div>
              </div>
              <div>
                <div className="text-muted-foreground">Invited team</div>
                <div className="text-primary font-mono">+25 pts</div>
              </div>
              <div>
                <div className="text-muted-foreground">Used integration</div>
                <div className="text-primary font-mono">+15 pts</div>
              </div>
              <div>
                <div className="text-muted-foreground">3+ active days</div>
                <div className="text-primary font-mono">+20 pts</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Result */}
      <Section className="border-b border-border">
        <div className="max-w-3xl">
          <h2 className="heading-section mb-6">The Result</h2>
          <p className="text-description text-muted-foreground mb-6">
            Same number of trials, 4x the conversions. Sales stopped wasting time on people who didn't want to talk.
          </p>
          <div className="bg-card border border-border p-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">What Changed</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Trial conversion: 6% → 24%</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Sales calls per conversion: dropped 70%</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Average deal size increased (higher-intent users)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Sales team no longer burned out on dead leads</span>
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
            Most PLG companies have product usage data in one system and sales workflows in another. The fix isn't better SDRs—it's connecting the two so sales only talks to people who've already demonstrated buying behavior.
          </p>
        </div>
      </Section>
    </CaseStudyLayout>
  );
};

export default SaasCaseStudy;
