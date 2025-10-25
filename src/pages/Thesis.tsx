import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { Link } from "react-router-dom";

const Thesis = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Why Infrastructure Determines Growth | CWT Studio"
        description="Companies achieve product-market fit and grow revenue consistently until backend infrastructure collapses under operational load. Infrastructure capacity determines whether growth compounds or stalls."
        keywords={[
          'revenue infrastructure thesis',
          'process debt',
          'backend systems architecture',
          'why consultancies fail',
          'micro-consultancy model',
          '90-day implementation'
        ]}
        canonicalUrl="/thesis"
      />
      
      <Breadcrumbs />
      
      <Section>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="system-status mb-6">OPERATING THESIS</div>
            <h1 className="heading-page mb-6">
              Why Infrastructure Determines Growth
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Companies achieve product-market fit and grow revenue consistently until backend infrastructure collapses under operational load. Infrastructure capacity determines whether growth compounds or stalls.
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            
            {/* Section 1 */}
            <div>
              <h2 className="heading-subsection mb-4">The Pattern</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Revenue grows month over month, then stops. The market has not changed. The product still works. Backend infrastructure has collapsed under load.
              </p>
              <p className="text-foreground leading-relaxed">
                Sales inquiries pile up in inboxes. Support tickets loop without closing. Pipeline lives in Slack threads and lost spreadsheets. Infrastructure breaks before the market does.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="heading-subsection mb-4">Process Debt Compounds</h2>
              <p className="text-foreground leading-relaxed mb-4">
                At 10 customers, manual workflows work fine. At 50 customers, heroic effort keeps things running. At 100 customers, founders drown in operational chaos. The product can scale. Operations cannot.
              </p>
              <p className="text-foreground leading-relaxed">
                Revenue scales linearly. Process debt compounds exponentially. Customer 101 requires capacity that customer 100 exhausted.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="heading-subsection mb-4">Why Operators Stay Trapped</h2>
              <div className="bg-card border rounded-lg p-6 space-y-4">
                <div>
                  <p className="font-mono font-bold text-sm text-foreground mb-2">1. Hiring Economics</p>
                  <p className="text-sm text-muted-foreground">
                    Senior RevOps costs $120K–180K annually. Takes 3-6 months to onboard. Makes financial sense at 500 customers. Becomes critical at 100.
                  </p>
                </div>
                <div>
                  <p className="font-mono font-bold text-sm text-foreground mb-2">2. Consulting Incentives</p>
                  <p className="text-sm text-muted-foreground">
                    Consultancies bill hourly. Junior associates learn on your dime. Account managers add overhead. Eighteen-month roadmaps maximize extraction.
                  </p>
                </div>
                <div>
                  <p className="font-mono font-bold text-sm text-foreground mb-2">3. Technical Specialization</p>
                  <p className="text-sm text-muted-foreground">
                    Salesforce, automation, integrations, data architecture each require years of specialized expertise. Founders cannot learn this on top of running operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="heading-subsection mb-4">The Micro-Consultancy Alternative</h2>
              <p className="text-foreground leading-relaxed mb-4">
                One senior architect handles everything directly. No junior delegation. No account managers. Strategy and implementation combined in one person. Fixed pricing removes incentive to extend timelines. Ninety-day windows force focus on infrastructure that moves revenue.
              </p>
              <p className="text-foreground leading-relaxed">
                The model only works at micro scale. One operator can handle 6-8 projects annually. Scaling beyond that requires hiring, which brings back all the overhead that made traditional consulting ineffective.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="heading-subsection mb-4">Why 90 Days</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Markets change faster than 18-month roadmaps. Ninety days forces prioritization on the three to five bottlenecks actually constraining revenue. Results become measurable in the same quarter.
              </p>
              <p className="text-foreground leading-relaxed">
                This matches how operators work: test, measure, adjust. Long programs assume stable requirements. Short cycles assume continuous change.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="heading-subsection mb-4">What This Means</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Backend work generates zero marketing value. Salesforce workflows never make it into announcements. The work stays invisible and determines whether operations scale or collapse.
              </p>
              <p className="text-foreground leading-relaxed">
                One founder takes vacation without crisis because processes run independently. Another founder stays on-call permanently because everything requires their involvement. Competitive advantage goes to companies where infrastructure gets built faster than customers get acquired.
              </p>
            </div>

            {/* Closing */}
            <div className="border-t pt-8 mt-8">
              <p className="text-foreground leading-relaxed mb-4">
                Revenue systems compound through infrastructure or collapse through process debt. No middle state exists at scale.
              </p>
              <p className="text-foreground leading-relaxed">
                The only choice is timing. Fix infrastructure before operations collapse or after systems fail under your current load. That choice determines whether growth accelerates or stalls.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-16 pt-8 border-t text-center">
            <p className="text-sm text-muted-foreground mb-6 font-mono">
              Every system starts with assessment: mapping where infrastructure breaks under load
            </p>
            <ConversionOptimizedButton
              to="/assessment"
              ctaName="Thesis - Start Assessment"
              location="Thesis Page"
              size="lg"
            >
              Start Your Assessment
            </ConversionOptimizedButton>
            <div className="mt-6">
              <Link to="/proof" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                View case studies →
              </Link>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
};

export default Thesis;
