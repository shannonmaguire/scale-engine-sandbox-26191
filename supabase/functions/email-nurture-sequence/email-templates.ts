export interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

export interface NurtureSequence {
  email1: EmailTemplate;
  email2: EmailTemplate;
  email3: EmailTemplate;
}

const createEmailTemplate = (
  resourceTitle: string,
  email1Content: { subject: string; body: string; plainText: string },
  email2Content: { subject: string; body: string; plainText: string },
  email3Content: { subject: string; body: string; plainText: string }
): NurtureSequence => ({
  email1: {
    subject: email1Content.subject,
    html: email1Content.body,
    text: email1Content.plainText,
  },
  email2: {
    subject: email2Content.subject,
    html: email2Content.body,
    text: email2Content.plainText,
  },
  email3: {
    subject: email3Content.subject,
    html: email3Content.body,
    text: email3Content.plainText,
  },
});

export const nurtureSequences: Record<string, NurtureSequence> = {
  "service-selection-guide": createEmailTemplate(
    "Service Selection Guide",
    {
      subject: "Your Service Selection Guide + How to Use It",
      body: `
        <h2>Your Service Selection Guide is ready</h2>
        <p>You just downloaded the <strong>Service Selection Guide</strong>—the framework we use to match revenue maturity stage to the right engagement type.</p>
        
        <h3>Why this matters:</h3>
        <p>Most companies waste 3-6 months trying the wrong service first. Assessment when they need Sprint. Sprint when they need Fractional. This guide prevents that.</p>
        
        <h3>How to use it:</h3>
        <ul>
          <li>Start with the maturity self-assessment (page 2)</li>
          <li>Match your score to the recommended service tier</li>
          <li>Review the "red flags" section for your current stage</li>
        </ul>
        
        <p><strong>Quick interpretation:</strong> If you scored below 40%, start with Assessment. 40-70% = Sprint ready. Above 70% = consider Fractional.</p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `Your Service Selection Guide is ready

You just downloaded the Service Selection Guide—the framework we use to match revenue maturity stage to the right engagement type.

Why this matters:
Most companies waste 3-6 months trying the wrong service first. Assessment when they need Sprint. Sprint when they need Fractional. This guide prevents that.

How to use it:
- Start with the maturity self-assessment (page 2)
- Match your score to the recommended service tier
- Review the "red flags" section for your current stage

Quick interpretation: If you scored below 40%, start with Assessment. 40-70% = Sprint ready. Above 70% = consider Fractional.

Shannon Greenberg
Founder, CWT Studio`,
    },
    {
      subject: "How to know if you're picking the wrong service",
      body: `
        <h2>The #1 service selection mistake we see</h2>
        <p>Companies jump to implementation (Sprint) before understanding what's actually broken (Assessment).</p>
        
        <h3>You have this problem if:</h3>
        <ul>
          <li>Your team can describe symptoms but not root causes</li>
          <li>You've hired 2+ consultants with conflicting recommendations</li>
          <li>Past projects delivered "on time" but didn't fix the actual issue</li>
          <li>You're debating build vs. buy without baseline system documentation</li>
        </ul>
        
        <h3>What this costs you:</h3>
        <p>Average wasted spend on mismatched services: <strong>$45K-$120K</strong> over 6 months. Plus 2-3 quarters of team confidence erosion.</p>
        
        <h3>The fix:</h3>
        <p>If any of those signs ring true, start with Assessment—not Sprint. Get the diagnosis before the surgery.</p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `The #1 service selection mistake we see

Companies jump to implementation (Sprint) before understanding what's actually broken (Assessment).

You have this problem if:
- Your team can describe symptoms but not root causes
- You've hired 2+ consultants with conflicting recommendations
- Past projects delivered "on time" but didn't fix the actual issue
- You're debating build vs. buy without baseline system documentation

What this costs you:
Average wasted spend on mismatched services: $45K-$120K over 6 months. Plus 2-3 quarters of team confidence erosion.

The fix:
If any of those signs ring true, start with Assessment—not Sprint. Get the diagnosis before the surgery.

Shannon Greenberg
Founder, CWT Studio`,
    },
    {
      subject: "Ready to pick your next engagement?",
      body: `
        <h2>If you want it done, start here</h2>
        <p>You've reviewed the Service Selection Guide. You know which service matches your stage.</p>
        
        <h3>Next step: Assessment</h3>
        <p>We audit your current revenue infrastructure across 6 dimensions, benchmark against peer companies, and deliver a prioritized 90-day roadmap.</p>
        
        <p><strong>What you get:</strong></p>
        <ul>
          <li>Technical assessment report (data quality, automation, integrations, governance)</li>
          <li>Competitive benchmark vs. similar-stage companies</li>
          <li>90-day implementation roadmap with sprint sequencing</li>
          <li>100% fee credit toward first Sprint engagement</li>
        </ul>
        
        <p><strong>Timeline:</strong> 2 weeks from kickoff to delivery.</p>
        
        <p><a href="https://cwtstudio.com/assessment" style="display: inline-block; background: #8B0000; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Start Assessment</a></p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `If you want it done, start here

You've reviewed the Service Selection Guide. You know which service matches your stage.

Next step: Assessment

We audit your current revenue infrastructure across 6 dimensions, benchmark against peer companies, and deliver a prioritized 90-day roadmap.

What you get:
- Technical assessment report (data quality, automation, integrations, governance)
- Competitive benchmark vs. similar-stage companies
- 90-day implementation roadmap with sprint sequencing
- 100% fee credit toward first Sprint engagement

Timeline: 2 weeks from kickoff to delivery.

Start Assessment: https://cwtstudio.com/assessment

Shannon Greenberg
Founder, CWT Studio`,
    }
  ),

  "roi-calculator": createEmailTemplate(
    "ROI Calculator",
    {
      subject: "Your ROI Calculator + How Salesforce Cleanup Pays for Itself",
      body: `
        <h2>Your ROI Calculator is ready</h2>
        <p>You just downloaded the <strong>ROI Calculator</strong>—the tool we use to quantify how Salesforce technical debt impacts pipeline risk.</p>
        
        <h3>Why this matters:</h3>
        <p>Most revenue leaders know Salesforce is "messy" but can't justify cleanup budget without ROI proof. This calculator translates system issues into pipeline dollars saved.</p>
        
        <h3>How to use it:</h3>
        <ul>
          <li>Input your current pipeline velocity metrics (page 1)</li>
          <li>Score your Salesforce health across 5 dimensions (page 2)</li>
          <li>Review projected 12-month ROI from cleanup (page 3)</li>
        </ul>
        
        <p><strong>Benchmark:</strong> Companies with health scores below 60% typically see 18-25% improvement in forecast accuracy after cleanup.</p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `Your ROI Calculator is ready

You just downloaded the ROI Calculator—the tool we use to quantify how Salesforce technical debt impacts pipeline risk.

Why this matters:
Most revenue leaders know Salesforce is "messy" but can't justify cleanup budget without ROI proof. This calculator translates system issues into pipeline dollars saved.

How to use it:
- Input your current pipeline velocity metrics (page 1)
- Score your Salesforce health across 5 dimensions (page 2)
- Review projected 12-month ROI from cleanup (page 3)

Benchmark: Companies with health scores below 60% typically see 18-25% improvement in forecast accuracy after cleanup.

Shannon Greenberg
Founder, CWT Studio`,
    },
    {
      subject: "How to tell if Salesforce debt is costing you deals",
      body: `
        <h2>3 signs Salesforce technical debt is hurting revenue</h2>
        
        <h3>You have this problem if:</h3>
        <ul>
          <li><strong>Forecast accuracy below 75%:</strong> Reps don't trust the system, so they maintain shadow spreadsheets. Leadership guesses at quarter-end.</li>
          <li><strong>Deal velocity declining:</strong> Average close time increasing quarter-over-quarter because handoffs break (SDR → AE → CSM).</li>
          <li><strong>New rep ramp >90 days:</strong> Every new hire needs "tribal knowledge" from tenured reps because Salesforce doesn't reflect actual process.</li>
        </ul>
        
        <h3>What this costs you:</h3>
        <p>For a $5M ARR company: <strong>$280K-$450K/year</strong> in lost pipeline velocity. Plus hidden costs in rep turnover and forecast miss penalties.</p>
        
        <h3>The fix:</h3>
        <p>If 2+ of those signs apply, your Salesforce debt is material. Run the ROI Calculator using actual pipeline numbers—you'll likely justify cleanup budget in one calculation.</p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `3 signs Salesforce technical debt is hurting revenue

You have this problem if:
- Forecast accuracy below 75%: Reps don't trust the system, so they maintain shadow spreadsheets. Leadership guesses at quarter-end.
- Deal velocity declining: Average close time increasing quarter-over-quarter because handoffs break (SDR → AE → CSM).
- New rep ramp >90 days: Every new hire needs "tribal knowledge" from tenured reps because Salesforce doesn't reflect actual process.

What this costs you:
For a $5M ARR company: $280K-$450K/year in lost pipeline velocity. Plus hidden costs in rep turnover and forecast miss penalties.

The fix:
If 2+ of those signs apply, your Salesforce debt is material. Run the ROI Calculator using actual pipeline numbers—you'll likely justify cleanup budget in one calculation.

Shannon Greenberg
Founder, CWT Studio`,
    },
    {
      subject: "Turn your ROI calculation into a cleanup plan",
      body: `
        <h2>If you want it done, start here</h2>
        <p>You've calculated the ROI. You know what Salesforce cleanup is worth to your business.</p>
        
        <h3>Next step: Assessment</h3>
        <p>We audit your Salesforce instance, identify the highest-ROI fixes first, and sequence them into 90-day sprint cycles.</p>
        
        <p><strong>What you get:</strong></p>
        <ul>
          <li>Salesforce technical debt audit (data quality, automation, governance, integrations)</li>
          <li>Prioritized fix list ranked by pipeline impact</li>
          <li>90-day roadmap with cost/benefit for each sprint</li>
          <li>100% fee credit toward first Sprint engagement</li>
        </ul>
        
        <p><strong>Average outcome:</strong> 18-25% improvement in forecast accuracy within 90 days.</p>
        
        <p><a href="https://cwtstudio.com/assessment" style="display: inline-block; background: #8B0000; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Start Assessment</a></p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `If you want it done, start here

You've calculated the ROI. You know what Salesforce cleanup is worth to your business.

Next step: Assessment

We audit your Salesforce instance, identify the highest-ROI fixes first, and sequence them into 90-day sprint cycles.

What you get:
- Salesforce technical debt audit (data quality, automation, governance, integrations)
- Prioritized fix list ranked by pipeline impact
- 90-day roadmap with cost/benefit for each sprint
- 100% fee credit toward first Sprint engagement

Average outcome: 18-25% improvement in forecast accuracy within 90 days.

Start Assessment: https://cwtstudio.com/assessment

Shannon Greenberg
Founder, CWT Studio`,
    }
  ),

  "technical-assessment-framework": createEmailTemplate(
    "Technical Assessment Framework",
    {
      subject: "Your Assessment Framework + How to Self-Score in 15 Minutes",
      body: `
        <h2>Your Technical Assessment Framework is ready</h2>
        <p>You just downloaded our <strong>6-dimension audit framework</strong>—the same scorecard we use for revenue system assessments.</p>
        
        <h3>Why this matters:</h3>
        <p>Most teams know something is broken but can't pinpoint where. This framework translates vague symptoms ("Salesforce feels messy") into scored dimensions you can prioritize.</p>
        
        <h3>How to use it:</h3>
        <ul>
          <li>Score each dimension 1-10 (Data Quality, Automation, Integration, Governance, Reporting, Adoption)</li>
          <li>Review the "red flag" indicators for scores below 6</li>
          <li>Compare your total score to the benchmark ranges (page 5)</li>
        </ul>
        
        <p><strong>Benchmark interpretation:</strong><br>
        • 75-100: Refine (Fractional)<br>
        • 50-74: Fix (Sprint)<br>
        • Below 50: Diagnose first (Assessment)</p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `Your Technical Assessment Framework is ready

You just downloaded our 6-dimension audit framework—the same scorecard we use for revenue system assessments.

Why this matters:
Most teams know something is broken but can't pinpoint where. This framework translates vague symptoms ("Salesforce feels messy") into scored dimensions you can prioritize.

How to use it:
- Score each dimension 1-10 (Data Quality, Automation, Integration, Governance, Reporting, Adoption)
- Review the "red flag" indicators for scores below 6
- Compare your total score to the benchmark ranges (page 5)

Benchmark interpretation:
• 75-100: Refine (Fractional)
• 50-74: Fix (Sprint)
• Below 50: Diagnose first (Assessment)

Shannon Greenberg
Founder, CWT Studio`,
    },
    {
      subject: "How to know if you're scoring yourself too high",
      body: `
        <h2>The self-assessment trap we see constantly</h2>
        <p>Most teams overestimate their Salesforce health by 20-30 points. Here's how to tell if you're doing it:</p>
        
        <h3>You're scoring too high if:</h3>
        <ul>
          <li><strong>You gave "Automation" a 7+</strong> but still have manual steps in lead routing or opportunity handoffs</li>
          <li><strong>You gave "Data Quality" a 6+</strong> but can't run a clean account deduplication without IT help</li>
          <li><strong>You gave "Reporting" a 7+</strong> but your CEO asks for custom pipeline reports every board meeting</li>
          <li><strong>You gave "Adoption" an 8+</strong> but <30% of reps hit their activity logging targets</li>
        </ul>
        
        <h3>Why this matters:</h3>
        <p>Overestimating health = choosing the wrong engagement type. You'll jump to Sprint when you need Assessment first. That costs 3-6 months of wasted implementation.</p>
        
        <h3>How to verify:</h3>
        <p>If your total score is 60+ but you're still dealing with forecast misses, rep complaints, or integration breaks—rescore using the "red flag" section as your guide.</p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `The self-assessment trap we see constantly

Most teams overestimate their Salesforce health by 20-30 points. Here's how to tell if you're doing it:

You're scoring too high if:
- You gave "Automation" a 7+ but still have manual steps in lead routing or opportunity handoffs
- You gave "Data Quality" a 6+ but can't run a clean account deduplication without IT help
- You gave "Reporting" a 7+ but your CEO asks for custom pipeline reports every board meeting
- You gave "Adoption" an 8+ but <30% of reps hit their activity logging targets

Why this matters:
Overestimating health = choosing the wrong engagement type. You'll jump to Sprint when you need Assessment first. That costs 3-6 months of wasted implementation.

How to verify:
If your total score is 60+ but you're still dealing with forecast misses, rep complaints, or integration breaks—rescore using the "red flag" section as your guide.

Shannon Greenberg
Founder, CWT Studio`,
    },
    {
      subject: "Turn your self-assessment into a fix plan",
      body: `
        <h2>If you want it done, start here</h2>
        <p>You've scored your revenue systems. You know which dimensions are weakest.</p>
        
        <h3>Next step: Professional Assessment</h3>
        <p>We run the same 6-dimension audit—but with technical depth your team can't self-diagnose. Then we prioritize fixes by ROI and sequence them into 90-day cycles.</p>
        
        <p><strong>What you get:</strong></p>
        <ul>
          <li>Technical audit report with objective scoring (not self-reported)</li>
          <li>Competitive benchmark vs. companies at your revenue stage</li>
          <li>90-day roadmap prioritizing highest-impact fixes first</li>
          <li>100% fee credit toward first Sprint engagement</li>
        </ul>
        
        <p><strong>Typical finding:</strong> 60% of "urgent" items teams want to fix aren't blockers. We resequence to focus on the 3-4 changes that actually move metrics.</p>
        
        <p><a href="https://cwtstudio.com/assessment" style="display: inline-block; background: #8B0000; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Start Assessment</a></p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `If you want it done, start here

You've scored your revenue systems. You know which dimensions are weakest.

Next step: Professional Assessment

We run the same 6-dimension audit—but with technical depth your team can't self-diagnose. Then we prioritize fixes by ROI and sequence them into 90-day cycles.

What you get:
- Technical audit report with objective scoring (not self-reported)
- Competitive benchmark vs. companies at your revenue stage
- 90-day roadmap prioritizing highest-impact fixes first
- 100% fee credit toward first Sprint engagement

Typical finding: 60% of "urgent" items teams want to fix aren't blockers. We resequence to focus on the 3-4 changes that actually move metrics.

Start Assessment: https://cwtstudio.com/assessment

Shannon Greenberg
Founder, CWT Studio`,
    }
  ),

  "90-day-roadmap-template": createEmailTemplate(
    "90-Day Roadmap Template",
    {
      subject: "Your 90-Day Roadmap Template + How to Sequence Implementation",
      body: `
        <h2>Your 90-Day Roadmap Template is ready</h2>
        <p>You just downloaded the <strong>90-Day Roadmap Template</strong>—the structure we use to turn assessment findings into executable sprints.</p>
        
        <h3>Why this matters:</h3>
        <p>Most implementation plans fail because they lack weekly milestones and go/no-go decision points. Teams commit to 6-month projects with no exit ramps. This template prevents that.</p>
        
        <h3>How to use it:</h3>
        <ul>
          <li>Map your assessment findings to the 3 sprint phases (Foundation, Build, Optimize)</li>
          <li>Set weekly deliverables with clear acceptance criteria</li>
          <li>Define go/no-go checkpoints at Day 30 and Day 60</li>
        </ul>
        
        <p><strong>Critical principle:</strong> Every sprint must ship working functionality by Day 90. No "Phase 2 dependencies" allowed.</p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `Your 90-Day Roadmap Template is ready

You just downloaded the 90-Day Roadmap Template—the structure we use to turn assessment findings into executable sprints.

Why this matters:
Most implementation plans fail because they lack weekly milestones and go/no-go decision points. Teams commit to 6-month projects with no exit ramps. This template prevents that.

How to use it:
- Map your assessment findings to the 3 sprint phases (Foundation, Build, Optimize)
- Set weekly deliverables with clear acceptance criteria
- Define go/no-go checkpoints at Day 30 and Day 60

Critical principle: Every sprint must ship working functionality by Day 90. No "Phase 2 dependencies" allowed.

Shannon Greenberg
Founder, CWT Studio`,
    },
    {
      subject: "The #1 roadmap mistake that kills implementation projects",
      body: `
        <h2>Why most roadmaps fail by Week 6</h2>
        <p>The problem: Teams sequence work by <em>category</em> instead of <em>dependency</em>. They group all "data cleanup" tasks together, then all "automation" tasks. This creates artificial blockers.</p>
        
        <h3>You have this problem if:</h3>
        <ul>
          <li>Your roadmap has "phases" lasting longer than 30 days</li>
          <li>Sprint 2 can't start until Sprint 1 is 100% complete</li>
          <li>You're waiting on vendor integrations before building internal workflows</li>
          <li>Your "Foundation" phase includes items that could ship independently</li>
        </ul>
        
        <h3>What this costs you:</h3>
        <p>Average project delay from poor sequencing: <strong>6-10 weeks</strong>. Plus team morale erosion from "hurry up and wait" cycles.</p>
        
        <h3>The fix:</h3>
        <p>Use the 90-Day Roadmap Template's dependency mapping (Section 3). Sequence by "what enables what"—not by category. You'll cut timeline by 30-40%.</p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `Why most roadmaps fail by Week 6

The problem: Teams sequence work by category instead of dependency. They group all "data cleanup" tasks together, then all "automation" tasks. This creates artificial blockers.

You have this problem if:
- Your roadmap has "phases" lasting longer than 30 days
- Sprint 2 can't start until Sprint 1 is 100% complete
- You're waiting on vendor integrations before building internal workflows
- Your "Foundation" phase includes items that could ship independently

What this costs you:
Average project delay from poor sequencing: 6-10 weeks. Plus team morale erosion from "hurry up and wait" cycles.

The fix:
Use the 90-Day Roadmap Template's dependency mapping (Section 3). Sequence by "what enables what"—not by category. You'll cut timeline by 30-40%.

Shannon Greenberg
Founder, CWT Studio`,
    },
    {
      subject: "Turn your roadmap into a working implementation plan",
      body: `
        <h2>If you want it done, start here</h2>
        <p>You've mapped your roadmap. You know the sprint sequence.</p>
        
        <h3>Next step: Assessment → Sprint</h3>
        <p>We audit your current state, build the 90-day roadmap <em>for you</em>, then execute it as a fixed-scope Sprint engagement.</p>
        
        <p><strong>What you get:</strong></p>
        <ul>
          <li>Assessment: Technical audit + 90-day roadmap with sprint sequencing</li>
          <li>Sprint: 90-day fixed-scope implementation with weekly milestones</li>
          <li>Handoff: Full system documentation + training for your team</li>
          <li>100% Assessment fee credits to Sprint (no double payment)</li>
        </ul>
        
        <p><strong>Timeline:</strong> 2 weeks Assessment + 90 days Sprint = 14 weeks total to working system.</p>
        
        <p><a href="https://cwtstudio.com/assessment" style="display: inline-block; background: #8B0000; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Start Assessment</a></p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `If you want it done, start here

You've mapped your roadmap. You know the sprint sequence.

Next step: Assessment → Sprint

We audit your current state, build the 90-day roadmap for you, then execute it as a fixed-scope Sprint engagement.

What you get:
- Assessment: Technical audit + 90-day roadmap with sprint sequencing
- Sprint: 90-day fixed-scope implementation with weekly milestones
- Handoff: Full system documentation + training for your team
- 100% Assessment fee credits to Sprint (no double payment)

Timeline: 2 weeks Assessment + 90 days Sprint = 14 weeks total to working system.

Start Assessment: https://cwtstudio.com/assessment

Shannon Greenberg
Founder, CWT Studio`,
    }
  ),

  "discovery-questions-library": createEmailTemplate(
    "Discovery Questions Library",
    {
      subject: "Your Discovery Questions Library + How AEs Use It to Qualify Deals",
      body: `
        <h2>Your Discovery Questions Library is ready</h2>
        <p>You just downloaded <strong>30+ proven questions</strong> that uncover Salesforce technical debt in prospect deals.</p>
        
        <h3>Why this matters:</h3>
        <p>Most AEs can't differentiate between "minor Salesforce cleanup" and "system overhaul" deals. These questions let you qualify opportunity size and surface blockers early.</p>
        
        <h3>How to use it:</h3>
        <ul>
          <li>Pick 3-5 questions per discovery call (don't ask all 30)</li>
          <li>Use the "deal stage" column to match timing (early vs. late discovery)</li>
          <li>Flag any answer with a "red flag" indicator—those justify deeper technical scoping</li>
        </ul>
        
        <p><strong>AE quick win:</strong> Questions 12-18 (Forecast Accuracy section) expose revenue impact. Use these to elevate deals from IT projects to revenue priority.</p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `Your Discovery Questions Library is ready

You just downloaded 30+ proven questions that uncover Salesforce technical debt in prospect deals.

Why this matters:
Most AEs can't differentiate between "minor Salesforce cleanup" and "system overhaul" deals. These questions let you qualify opportunity size and surface blockers early.

How to use it:
- Pick 3-5 questions per discovery call (don't ask all 30)
- Use the "deal stage" column to match timing (early vs. late discovery)
- Flag any answer with a "red flag" indicator—those justify deeper technical scoping

AE quick win: Questions 12-18 (Forecast Accuracy section) expose revenue impact. Use these to elevate deals from IT projects to revenue priority.

Shannon Greenberg
Founder, CWT Studio`,
    },
    {
      subject: "How to know if a deal is too small (or too messy)",
      body: `
        <h2>The qualification mistake that wastes 6 weeks of sales cycles</h2>
        <p>AEs chase deals that look qualified but aren't—because they ask feature questions instead of system health questions.</p>
        
        <h3>You're misqualifying if prospects say:</h3>
        <ul>
          <li><strong>"We just need help with reports"</strong> → Often a symptom of deeper data quality issues. Ask Question 8 (data governance) to uncover true scope.</li>
          <li><strong>"Our Salesforce works fine, we just want dashboards"</strong> → Red flag. Use Questions 15-17 (reporting blockers) to surface hidden technical debt.</li>
          <li><strong>"We tried fixing this ourselves but ran out of time"</strong> → Scope creep risk. Ask Question 22 (past failed projects) to understand what broke before.</li>
        </ul>
        
        <h3>The qualification framework:</h3>
        <p>Small deal (Assessment only): 1-2 red flag answers<br>
        Medium deal (Assessment + Sprint): 3-5 red flags<br>
        Large deal (Assessment + Multi-Sprint): 6+ red flags + revenue impact</p>
        
        <h3>What this saves you:</h3>
        <p>Accurate qualification = no surprise scope changes at contract stage. You'll close faster and avoid post-sale scope battles.</p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `The qualification mistake that wastes 6 weeks of sales cycles

AEs chase deals that look qualified but aren't—because they ask feature questions instead of system health questions.

You're misqualifying if prospects say:
- "We just need help with reports" → Often a symptom of deeper data quality issues. Ask Question 8 (data governance) to uncover true scope.
- "Our Salesforce works fine, we just want dashboards" → Red flag. Use Questions 15-17 (reporting blockers) to surface hidden technical debt.
- "We tried fixing this ourselves but ran out of time" → Scope creep risk. Ask Question 22 (past failed projects) to understand what broke before.

The qualification framework:
Small deal (Assessment only): 1-2 red flag answers
Medium deal (Assessment + Sprint): 3-5 red flags
Large deal (Assessment + Multi-Sprint): 6+ red flags + revenue impact

What this saves you:
Accurate qualification = no surprise scope changes at contract stage. You'll close faster and avoid post-sale scope battles.

Shannon Greenberg
Founder, CWT Studio`,
    },
    {
      subject: "Turn discovery questions into closed deals",
      body: `
        <h2>If you're selling Salesforce services, use this</h2>
        <p>You've reviewed the Discovery Questions Library. You know how to qualify technical scope.</p>
        
        <h3>Next step: Partner with CWT Studio</h3>
        <p>We provide technical scoping, delivery capacity, and post-sale support for your Salesforce deals. You sell, we deliver.</p>
        
        <p><strong>What you get as a partner:</strong></p>
        <ul>
          <li>Technical scoping support (we jump on discovery calls to validate scope)</li>
          <li>White-label delivery option (your client, our team, your brand)</li>
          <li>Revenue share on closed deals (20-30% depending on deal size)</li>
          <li>Access to AE Hub: objection frameworks, battle cards, competitive intelligence</li>
        </ul>
        
        <p><strong>Ideal partner profile:</strong> AEs selling into RevOps, Salesforce admins, or IT leaders at $2M-$50M ARR B2B companies.</p>
        
        <p><a href="https://cwtstudio.com/salesforce-partners" style="display: inline-block; background: #8B0000; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Apply for Partnership</a></p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `If you're selling Salesforce services, use this

You've reviewed the Discovery Questions Library. You know how to qualify technical scope.

Next step: Partner with CWT Studio

We provide technical scoping, delivery capacity, and post-sale support for your Salesforce deals. You sell, we deliver.

What you get as a partner:
- Technical scoping support (we jump on discovery calls to validate scope)
- White-label delivery option (your client, our team, your brand)
- Revenue share on closed deals (20-30% depending on deal size)
- Access to AE Hub: objection frameworks, battle cards, competitive intelligence

Ideal partner profile: AEs selling into RevOps, Salesforce admins, or IT leaders at $2M-$50M ARR B2B companies.

Apply for Partnership: https://cwtstudio.com/salesforce-partners

Shannon Greenberg
Founder, CWT Studio`,
    }
  ),

  "website-readiness-checklist": createEmailTemplate(
    "Website Readiness Checklist",
    {
      subject: "Your Website Readiness Checklist + How to Prevent Scope Creep",
      body: `
        <h2>Your Website Readiness Checklist is ready</h2>
        <p>You just downloaded the <strong>47-point pre-project checklist</strong> covering content, assets, integrations, and stakeholder alignment.</p>
        
        <h3>Why this matters:</h3>
        <p>Most website projects blow past budget because teams find missing assets mid-build. This checklist surfaces those gaps before kickoff.</p>
        
        <h3>How to use it:</h3>
        <ul>
          <li>Review Section 1 (Content Inventory) first—this is where most gaps hide</li>
          <li>Flag any "No" answers as pre-project blockers</li>
          <li>Complete Section 4 (Stakeholder Alignment) before signing contracts</li>
        </ul>
        
        <p><strong>Critical stat:</strong> Teams scoring below 35/47 on this checklist experience 40-60% timeline extensions. Get to 40+ before kickoff.</p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `Your Website Readiness Checklist is ready

You just downloaded the 47-point pre-project checklist covering content, assets, integrations, and stakeholder alignment.

Why this matters:
Most website projects blow past budget because teams find missing assets mid-build. This checklist surfaces those gaps before kickoff.

How to use it:
- Review Section 1 (Content Inventory) first—this is where most gaps hide
- Flag any "No" answers as pre-project blockers
- Complete Section 4 (Stakeholder Alignment) before signing contracts

Critical stat: Teams scoring below 35/47 on this checklist experience 40-60% timeline extensions. Get to 40+ before kickoff.

Shannon Greenberg
Founder, CWT Studio`,
    },
    {
      subject: "The website project blocker hiding in plain sight",
      body: `
        <h2>Why most websites launch 8-12 weeks late</h2>
        <p>The hidden killer: <strong>content dependency drift</strong>. Teams think they have content ready, but it's not in final, production-ready format.</p>
        
        <h3>You have this problem if:</h3>
        <ul>
          <li>Your "approved" content is in Google Docs, not CMS-ready HTML</li>
          <li>Image assets exist but aren't sized/formatted for web delivery</li>
          <li>Legal hasn't reviewed privacy policy or terms for current compliance standards</li>
          <li>You're waiting on "one more stakeholder" to finalize messaging</li>
        </ul>
        
        <h3>What this costs you:</h3>
        <p>Average timeline extension from content gaps: <strong>8-12 weeks</strong>. Plus rushed content = lower conversion rates post-launch.</p>
        
        <h3>The fix:</h3>
        <p>Use Section 2 of the Website Readiness Checklist (Asset Preparation) to validate production-ready status. If you score below 8/12 on that section, delay kickoff by 2 weeks to finalize content.</p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `Why most websites launch 8-12 weeks late

The hidden killer: content dependency drift. Teams think they have content ready, but it's not in final, production-ready format.

You have this problem if:
- Your "approved" content is in Google Docs, not CMS-ready HTML
- Image assets exist but aren't sized/formatted for web delivery
- Legal hasn't reviewed privacy policy or terms for current compliance standards
- You're waiting on "one more stakeholder" to finalize messaging

What this costs you:
Average timeline extension from content gaps: 8-12 weeks. Plus rushed content = lower conversion rates post-launch.

The fix:
Use Section 2 of the Website Readiness Checklist (Asset Preparation) to validate production-ready status. If you score below 8/12 on that section, delay kickoff by 2 weeks to finalize content.

Shannon Greenberg
Founder, CWT Studio`,
    },
    {
      subject: "Turn your checklist into a production-ready website",
      body: `
        <h2>If you want it done, start here</h2>
        <p>You've completed the Website Readiness Checklist. You know what's blocking your project.</p>
        
        <h3>Next step: Web Systems Engagement</h3>
        <p>We build revenue-focused websites with full system documentation and documented handoff—so you own the infrastructure, not rent it.</p>
        
        <p><strong>What you get:</strong></p>
        <ul>
          <li>Site architecture designed for lead capture + qualification + routing</li>
          <li>Custom component library (reusable, documented, maintainable)</li>
          <li>Handoff SOP for domain, hosting, CMS, analytics (no vendor lock-in)</li>
          <li>Support retainer option post-launch (if you want it)</li>
        </ul>
        
        <p><strong>Timeline:</strong> 6-8 weeks from kickoff to launch (assuming 40+ checklist score).</p>
        
        <p><a href="https://cwtstudio.com/web-systems" style="display: inline-block; background: #8B0000; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Start Web Project</a></p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `If you want it done, start here

You've completed the Website Readiness Checklist. You know what's blocking your project.

Next step: Web Systems Engagement

We build revenue-focused websites with full system documentation and documented handoff—so you own the infrastructure, not rent it.

What you get:
- Site architecture designed for lead capture + qualification + routing
- Custom component library (reusable, documented, maintainable)
- Handoff SOP for domain, hosting, CMS, analytics (no vendor lock-in)
- Support retainer option post-launch (if you want it)

Timeline: 6-8 weeks from kickoff to launch (assuming 40+ checklist score).

Start Web Project: https://cwtstudio.com/web-systems

Shannon Greenberg
Founder, CWT Studio`,
    }
  ),

  "vendor-handoff-sop": createEmailTemplate(
    "Vendor Handoff SOP",
    {
      subject: "Your Vendor Handoff SOP + How to Take Full Ownership",
      body: `
        <h2>Your Vendor Handoff SOP is ready</h2>
        <p>You just downloaded the <strong>step-by-step SOP</strong> for domain, hosting, CMS, analytics, and CRM transfer—eliminating ongoing vendor dependency.</p>
        
        <h3>Why this matters:</h3>
        <p>Most companies pay 12-24 months of unnecessary vendor fees because they can't execute clean handoffs. This SOP gives you the checklist to take ownership.</p>
        
        <h3>How to use it:</h3>
        <ul>
          <li>Start with Section 1 (Access Audit)—document what you currently control vs. what vendor controls</li>
          <li>Follow the transfer sequence in Section 3 (order matters: domain first, hosting second, CMS third)</li>
          <li>Use Section 5 (Validation Checklist) to confirm nothing broke during transfer</li>
        </ul>
        
        <p><strong>Timeline note:</strong> Clean handoffs take 2-4 weeks. Budget for this before canceling vendor contracts.</p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `Your Vendor Handoff SOP is ready

You just downloaded the step-by-step SOP for domain, hosting, CMS, analytics, and CRM transfer—eliminating ongoing vendor dependency.

Why this matters:
Most companies pay 12-24 months of unnecessary vendor fees because they can't execute clean handoffs. This SOP gives you the checklist to take ownership.

How to use it:
- Start with Section 1 (Access Audit)—document what you currently control vs. what vendor controls
- Follow the transfer sequence in Section 3 (order matters: domain first, hosting second, CMS third)
- Use Section 5 (Validation Checklist) to confirm nothing broke during transfer

Timeline note: Clean handoffs take 2-4 weeks. Budget for this before canceling vendor contracts.

Shannon Greenberg
Founder, CWT Studio`,
    },
    {
      subject: "The vendor lock-in trap that costs $15K-$40K/year",
      body: `
        <h2>How to tell if you're paying unnecessary vendor fees</h2>
        
        <h3>You have this problem if:</h3>
        <ul>
          <li>You pay a monthly "maintenance fee" but can't list what they actually maintain</li>
          <li>Simple content updates require vendor tickets (3-5 day turnaround)</li>
          <li>You don't have admin access to your own domain registrar or hosting account</li>
          <li>Vendor threatens "site will break" if you transfer away</li>
        </ul>
        
        <h3>What this costs you:</h3>
        <p>Average unnecessary vendor spend: <strong>$15K-$40K/year</strong> for maintenance that could be handled in-house or with on-demand support.</p>
        
        <h3>The fix:</h3>
        <p>Use the Vendor Handoff SOP to audit your current access level (Section 1). If you don't have admin access to 4+ systems (domain, hosting, CMS, analytics, CRM), start the handoff process.</p>
        
        <p><strong>Red flag warning:</strong> If vendor resists providing access documentation, that's confirmation you're locked in. Begin handoff immediately.</p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `How to tell if you're paying unnecessary vendor fees

You have this problem if:
- You pay a monthly "maintenance fee" but can't list what they actually maintain
- Simple content updates require vendor tickets (3-5 day turnaround)
- You don't have admin access to your own domain registrar or hosting account
- Vendor threatens "site will break" if you transfer away

What this costs you:
Average unnecessary vendor spend: $15K-$40K/year for maintenance that could be handled in-house or with on-demand support.

The fix:
Use the Vendor Handoff SOP to audit your current access level (Section 1). If you don't have admin access to 4+ systems (domain, hosting, CMS, analytics, CRM), start the handoff process.

Red flag warning: If vendor resists providing access documentation, that's confirmation you're locked in. Begin handoff immediately.

Shannon Greenberg
Founder, CWT Studio`,
    },
    {
      subject: "Break vendor lock-in with a clean handoff",
      body: `
        <h2>If you want it done, start here</h2>
        <p>You've reviewed the Vendor Handoff SOP. You know what needs to transfer.</p>
        
        <h3>Next step: Managed Handoff Service</h3>
        <p>We execute the vendor handoff for you—managing domain transfer, hosting migration, CMS setup, and validation testing. You get full ownership without the technical risk.</p>
        
        <p><strong>What you get:</strong></p>
        <ul>
          <li>Access audit + documentation of current vendor dependencies</li>
          <li>Managed transfer: domain, hosting, CMS, analytics, CRM</li>
          <li>Validation testing to confirm zero downtime during handoff</li>
          <li>Full system documentation post-transfer (you own everything)</li>
        </ul>
        
        <p><strong>Timeline:</strong> 2-4 weeks from kickoff to full ownership.</p>
        
        <p><a href="https://cwtstudio.com/web-systems" style="display: inline-block; background: #8B0000; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Start Handoff Process</a></p>
        
        <p>Shannon Greenberg<br>
        Founder, CWT Studio</p>
      `,
      plainText: `If you want it done, start here

You've reviewed the Vendor Handoff SOP. You know what needs to transfer.

Next step: Managed Handoff Service

We execute the vendor handoff for you—managing domain transfer, hosting migration, CMS setup, and validation testing. You get full ownership without the technical risk.

What you get:
- Access audit + documentation of current vendor dependencies
- Managed transfer: domain, hosting, CMS, analytics, CRM
- Validation testing to confirm zero downtime during handoff
- Full system documentation post-transfer (you own everything)

Timeline: 2-4 weeks from kickoff to full ownership.

Start Handoff Process: https://cwtstudio.com/web-systems

Shannon Greenberg
Founder, CWT Studio`,
    }
  ),
};

export const getEmailSequence = (resourceId: string): NurtureSequence | null => {
  return nurtureSequences[resourceId] || null;
};
