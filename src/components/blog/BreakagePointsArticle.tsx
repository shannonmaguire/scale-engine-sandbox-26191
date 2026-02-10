import { ConversionOptimizedButton } from '@/components/ConversionOptimizedButton';
import { SystemBlock } from './SystemBlock';
import { BlogCallout } from './BlogCallout';
import { PullQuote } from './PullQuote';

export const BreakagePointsArticle = () => {
  return (
    <article className="prose-custom">
      <p className="text-xl leading-relaxed text-foreground border-l-4 border-primary pl-6 my-12">
        Between $2M and $5M ARR, every SaaS company hits the same breaking points. Not because they're bad at execution—because manual processes that worked at $500K become systemic bottlenecks at scale.
      </p>

      <h2>The Pattern Is Predictable</h2>
      <p>
        After 40+ diagnostics in this range, the failure modes are consistent. Revenue grows faster than infrastructure. Spreadsheets replace processes. "Temporary" workarounds become permanent load-bearing architecture.
      </p>

      <p>
        The question isn't <em>if</em> these systems will break. It's <em>which one breaks first</em>—and whether you catch it before it costs you a quarter.
      </p>

      <BlogCallout type="executive" title="The $2-5M Inflection Point">
        <p>
          This is when founder-led sales transitions to a repeatable motion. When one customer success manager becomes a team. When Salesforce stops being a CRM and starts being the system of record for the entire revenue engine.
        </p>
        <p>
          Companies that build infrastructure <em>before</em> the break scale cleanly. Companies that react <em>after</em> spend 6-12 months in firefighting mode.
        </p>
      </BlogCallout>

      <h2>Breaking Point #1: Lead Routing</h2>
      <p>
        <strong>What it looks like:</strong> Inbound leads sit unassigned for 4+ hours. AEs cherry-pick from a queue. High-intent prospects get auto-assigned to reps on PTO. Conversion rates drop but nobody notices because there's no baseline.
      </p>

      <p>
        <strong>Why it breaks:</strong> Manual round-robin worked when you had 50 leads/month and 2 AEs. At 500 leads/month with 8 AEs across 3 territories, assignment logic needs to account for:
      </p>

      <ul>
        <li>Territory and industry fit</li>
        <li>Rep capacity and current pipeline load</li>
        <li>Lead source and engagement history</li>
        <li>Time zone and working hours</li>
      </ul>

      <p>
        <strong>The fix:</strong> Automated lead routing with capacity management and SLA tracking. Not a complex AI system—just deterministic rules that execute in 60 seconds instead of 4 hours.
      </p>

      <SystemBlock phase="Implementation" title="Lead Routing Fix">
        <ul>
          <li><strong>Territory mapping:</strong> Geographic + industry-based assignment rules</li>
          <li><strong>Capacity checks:</strong> Don't assign to reps with 40+ open opps</li>
          <li><strong>Round-robin with weighting:</strong> Adjust for rep seniority and close rates</li>
          <li><strong>SLA monitoring:</strong> Alert on any lead unassigned &gt;30 minutes</li>
          <li><strong>Fallback logic:</strong> Escalate to managers if primary assignment fails</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Average implementation: 2 weeks. Average impact: 23% improvement in lead-to-opp conversion.
        </p>
      </SystemBlock>

      <h2>Breaking Point #2: Forecast Accuracy</h2>
      <p>
        <strong>What it looks like:</strong> Pipeline reviews are guesswork. Reps adjust stage probabilities manually. Close dates slip every week. The "commit" number changes 3x per quarter. Board meetings involve creative explanations.
      </p>

      <p>
        <strong>Why it breaks:</strong> Early-stage forecasting is relationship-driven—the founder knows every deal. At scale, forecast accuracy requires:
      </p>

      <ul>
        <li>Consistent stage definitions across all reps</li>
        <li>Historical win rates by stage, rep, and deal size</li>
        <li>Activity benchmarks that correlate with close probability</li>
        <li>Automated alerts when deals stall or regress</li>
      </ul>

      <PullQuote cite="VP Sales, Series B SaaS">
        "We went from 60% forecast accuracy to 94% in one quarter. Not because our reps got better at guessing—because we stopped asking them to guess."
      </PullQuote>

      <p>
        <strong>The fix:</strong> Stage gates with required fields. Automated probability scoring based on actual data. Weekly variance reports that flag outliers before they become surprises.
      </p>

      <h2>Breaking Point #3: Renewal Tracking</h2>
      <p>
        <strong>What it looks like:</strong> Renewals appear on spreadsheets 30 days before they're due. CSMs manually check contract end dates. Customers churn because nobody reached out. Expansion opportunities get discovered after the renewal window closes.
      </p>

      <p>
        <strong>Why it breaks:</strong> When you have 20 customers, you remember renewal dates. At 200+ customers with multi-year contracts and variable start dates, manual tracking fails. You need:
      </p>

      <ul>
        <li>90-day renewal alerts with staged touchpoints</li>
        <li>Health score integration (don't let at-risk accounts reach renewal blind)</li>
        <li>Expansion opportunity tracking separate from base renewal</li>
        <li>Auto-created renewal opportunities with pre-filled contract terms</li>
      </ul>

      <p>
        <strong>The fix:</strong> Renewal automation with health score gates. CSMs get alerted at 120/90/60/30 days with different actions required at each stage. Expansion discussions start at 120 days, not 15.
      </p>

      <BlogCallout type="warning" title="The Hidden Cost">
        <p>
          One missed renewal at $50K ARR costs more than the entire implementation of a renewal tracking system. Yet most companies don't build the system until <em>after</em> they lose a customer they didn't know was at risk.
        </p>
      </BlogCallout>

      <h2>Breaking Point #4: Data Quality</h2>
      <p>
        <strong>What it looks like:</strong> Duplicate accounts everywhere. Contact records with no email or phone. Opportunities missing required fields. Reports that nobody trusts. Reps spending 20% of their time cleaning data instead of selling.
      </p>

      <p>
        <strong>Why it breaks:</strong> Early-stage companies accept messy data as the cost of moving fast. But at scale, bad data accumulates:
      </p>

      <ul>
        <li>Marketing can't build accurate segments</li>
        <li>Routing rules fail on incomplete records</li>
        <li>Forecasts become unreliable</li>
        <li>Integration sync errors cascade across systems</li>
      </ul>

      <p>
        <strong>The fix:</strong> Validation rules on required fields. Duplicate prevention at record creation. Weekly data quality dashboards. Most importantly: consequences for non-compliance (blocked stages, manager alerts).
      </p>

      <h2>Breaking Point #5: Quote-to-Cash</h2>
      <p>
        <strong>What it looks like:</strong> Sales closes a deal, then waits 3 days for legal review, 2 days for finance approval, and 4 days for contract generation. Customer asks for a custom discount structure and the entire process restarts. Deals slip to next quarter because of paperwork.
      </p>

      <p>
        <strong>Why it breaks:</strong> Manual approvals and document generation work fine at 3 deals/month. At 30 deals/month with multiple product lines and pricing tiers, you need:
      </p>

      <ul>
        <li>Automated approval workflows with clear thresholds</li>
        <li>Self-service quote generation with guardrails</li>
        <li>Contract templates with merge fields</li>
        <li>Integration between Salesforce, DocuSign, and billing systems</li>
      </ul>

      <SystemBlock phase="Quote-to-Cash Fix" title="Compressed Deal Cycle">
        <ul>
          <li><strong>CPQ Implementation:</strong> Configure-Price-Quote with guided selling</li>
          <li><strong>Approval chains:</strong> Auto-approve standard deals, escalate exceptions</li>
          <li><strong>Document automation:</strong> Generate contracts in 60 seconds, not 3 days</li>
          <li><strong>E-signature integration:</strong> Send for signature immediately after approval</li>
          <li><strong>Billing sync:</strong> Closed-Won triggers provisioning and invoicing</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Result: 7-day reduction in average sales cycle. 34% increase in same-quarter closes.
        </p>
      </SystemBlock>

      <h2>The Commonality: Manual Work at Scale</h2>
      <p>
        Every breaking point has the same root cause: <strong>processes that require human judgment don't scale linearly</strong>. A process that takes one person 2 hours/week becomes a team of 5 spending 50 hours/week at 10x volume.
      </p>

      <p>
        The fix isn't hiring more people to do manual work. It's automating the repeatable parts so humans can focus on judgment calls that actually need judgment.
      </p>

      <BlogCallout type="info" title="When to Fix vs. When to Wait">
        <p><strong>Fix now if:</strong></p>
        <ul>
          <li>The system is actively breaking (missed renewals, routing failures, deal slippage)</li>
          <li>Your team is spending more time on process than execution</li>
          <li>You're about to scale headcount (infrastructure should precede hiring)</li>
        </ul>
        <p><strong>Wait if:</strong></p>
        <ul>
          <li>Current volume is manageable with existing process</li>
          <li>You're still iterating on GTM motion (premature automation locks in bad processes)</li>
          <li>The system isn't load-bearing for revenue (fix high-impact breaks first)</li>
        </ul>
      </BlogCallout>

      <h2>How We Catch This Early</h2>
      <p>
        Our diagnostic specifically looks for these five breaking points. We analyze:
      </p>

      <ul>
...
      </ul>

      <p>
        We show you exactly where the system will break in the next 90 days—before it impacts revenue.
      </p>

      <div className="my-16 flex justify-center">
        <ConversionOptimizedButton 
          to="/diagnostic"
          variant="default"
          size="lg"
          ctaName="Get a System Diagnostic"
          location="breakage-points-article-bottom"
        >
          Get a System Diagnostic
        </ConversionOptimizedButton>
      </div>

      <hr className="my-16 border-border" />

      <p className="text-sm text-muted-foreground italic">
        This article is part of The CWT Standard—a collection of patterns we've documented from building revenue systems for 40+ B2B SaaS companies between $2M and $50M ARR.
      </p>
    </article>
  );
};
