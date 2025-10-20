export interface Objection {
  id: string;
  category: 'budget' | 'internal' | 'timing' | 'technical' | 'trust';
  objection: string;
  responseScript: string;
  fullFramework: {
    discovery: string[];
    proofPoints: string[];
    nextSteps: string;
    personaAngles?: {
      technical: string;
      business: string;
      executive: string;
    };
  };
}

export const objections: Objection[] = [
  // BUDGET & ROI
  {
    id: "budget-1",
    category: "budget",
    objection: "We don't have budget right now",
    responseScript: "Most teams don't have a line item for 'Salesforce assessment insurance.' This assessment is a $1,200 insurance policy against a $50K mistake. If we find even 2-3 issues before your next implementation, you've already saved 10-15x the cost.",
    fullFramework: {
      discovery: [
        "What's your typical project budget range?",
        "What would happen if a deal stalled due to technical concerns?",
        "Have you had implementations go over budget before?"
      ],
      proofPoints: [
        "Average client saves $47K on their first project after assessment",
        "87% of assessments identify at least 3 deal-blocking issues",
        "ROI calculator shows 12:1 average return"
      ],
      nextSteps: "Share the ROI calculator. Offer to present findings to their manager with you.",
      personaAngles: {
        technical: "Frame as technical debt prevention—$1,200 vs weeks of rework",
        business: "Show revenue impact: deals won faster = quota attainment",
        executive: "Position as risk mitigation for upcoming growth targets"
      }
    }
  },
  {
    id: "budget-2",
    category: "budget",
    objection: "How do I justify this to my manager?",
    responseScript: "You're thinking like an exec. Here's your pitch: 'I found a $1,200 service that flags deal-blocking technical issues before they cost us opportunities. They've helped 200+ AEs close technical deals faster. Can we test it on my next two deals?' We'll hop on the call with you if needed.",
    fullFramework: {
      discovery: [
        "What metrics does your manager care about most?",
        "How many deals have stalled on technical concerns this quarter?",
        "What's your average deal size?"
      ],
      proofPoints: [
        "Average sales cycle reduction: 22 days",
        "Win rate improvement on technical deals: 34%",
        "Used by AEs at Salesforce, Mulesoft, Tableau partners"
      ],
      nextSteps: "Provide one-page ROI summary. Offer to join manager call.",
      personaAngles: {
        technical: "Show how it reduces pre-sales engineering bottlenecks",
        business: "Quantify impact on pipeline velocity and quota attainment",
        executive: "Frame as competitive advantage in technical selling"
      }
    }
  },
  {
    id: "budget-3",
    category: "budget",
    objection: "Can we start with something smaller/cheaper?",
    responseScript: "Technical assessments have a fixed cost because we have to review the entire org to spot integration risks and data issues. Think of it like a home inspection: you can't inspect 'just the kitchen' and call it good. We do offer a free 15-minute triage call to confirm if an assessment makes sense for your deal.",
    fullFramework: {
      discovery: [
        "What size deal would make this worth it for you?",
        "What's your biggest concern about moving forward?",
        "Have you lost deals due to technical objections before?"
      ],
      proofPoints: [
        "Average assessment identifies 7-9 issues (can't find all with partial review)",
        "83% of clients say full assessment was necessary to close deal",
        "Free triage call available to qualify fit"
      ],
      nextSteps: "Offer free 15-minute triage call. Schedule for their next hot deal.",
      personaAngles: {
        technical: "Explain why partial technical reviews miss integration issues",
        business: "Compare to cost of lost deal ($47K average)",
        executive: "Position as standard practice for high-value technical deals"
      }
    }
  },
  {
    id: "budget-4",
    category: "budget",
    objection: "What's the ROI proof?",
    responseScript: "Here's what we track: average client saves $47K on their first project (typically 5-7 hours of rework avoided), deals close 22 days faster on average, and 87% of assessments find at least 3 issues that would've blocked the deal. I can share a simple calculator that shows ROI based on your deal size and average sales cycle.",
    fullFramework: {
      discovery: [
        "What would good ROI look like for you?",
        "What metrics do you use to evaluate tools?",
        "How do you typically calculate opportunity cost?"
      ],
      proofPoints: [
        "Documented case studies with Fortune 500 clients",
        "Average ROI: 12:1 within first 90 days",
        "Typical savings: 5-7 hours of rework per project"
      ],
      nextSteps: "Share ROI calculator and 2-3 relevant case studies. Offer reference call.",
      personaAngles: {
        technical: "Show time-to-resolution improvements (hours saved)",
        business: "Focus on revenue impact (faster close = more deals)",
        executive: "Present risk mitigation value (reduced deal slippage)"
      }
    }
  },

  // INTERNAL RESOURCES
  {
    id: "internal-1",
    category: "internal",
    objection: "We have an internal team that can handle this",
    responseScript: "Having internal expertise is valuable. Your team is already handling BAU and implementations. When a hot deal needs answers in 24 hours and they can't drop everything, we're the technical overflow. We provide instant validation without pulling your architects off their roadmap. Most clients use us alongside their team to handle surge capacity.",
    fullFramework: {
      discovery: [
        "How long does it typically take your team to turn around technical reviews?",
        "What happens when multiple deals need technical input at once?",
        "How do you prioritize internal resources across deals?"
      ],
      proofPoints: [
        "4-hour response SLA for critical deal support",
        "We've partnered with internal teams at 85% of clients",
        "Average internal team saves 12 hours per month using us for overflow"
      ],
      nextSteps: "Offer pilot on their next hot deal. Position as 'technical insurance' not replacement.",
      personaAngles: {
        technical: "Frame as reducing burden on already-stretched architects",
        business: "Show how it prevents deals from stalling while waiting on internal resources",
        executive: "Position as force multiplier for existing team capacity"
      }
    }
  },
  {
    id: "internal-2",
    category: "internal",
    objection: "Our Salesforce admin can handle this",
    responseScript: "Your admin likely keeps the org running well. Pre-sales technical validation is a different skillset than admin work. We're not replacing your admin; we answer the prospect questions your admin shouldn't have to field while managing 50 users. We serve as your 'AE technical co-pilot' for complex deals.",
    fullFramework: {
      discovery: [
        "What's your admin currently focused on?",
        "How quickly can they respond to prospect technical questions?",
        "Have deals ever stalled waiting for internal technical answers?"
      ],
      proofPoints: [
        "We specialize in pre-sales validation (not admin work)",
        "Average response time: 4 hours (vs 2-5 days for internal)",
        "92% of clients keep using us even with great admins"
      ],
      nextSteps: "Clarify scope: we handle prospect-facing technical validation, admin handles operations.",
      personaAngles: {
        technical: "Explain difference between admin operations and sales engineering",
        business: "Show impact of fast technical responses on close rates",
        executive: "Position as specialization: right resource for right task"
      }
    }
  },
  {
    id: "internal-3",
    category: "internal",
    objection: "We already have a consultant",
    responseScript: "You understand the value of outside expertise. We're built for speed. Your consultant is great for implementations, but when you need answers in hours instead of days, that's where we come in. Many clients use their consultant for execution and us for rapid deal support. We're complementary to their work.",
    fullFramework: {
      discovery: [
        "What does your consultant typically help with?",
        "How fast can they turn around technical responses?",
        "Do they handle pre-sales technical validation?"
      ],
      proofPoints: [
        "We work alongside consultants at 40% of clients",
        "4-hour response SLA (vs typical 2-3 day consultant turnaround)",
        "Specialized in pre-sales, not implementation"
      ],
      nextSteps: "Offer to coordinate with their consultant. Position as 'deal acceleration' not replacement.",
      personaAngles: {
        technical: "Clarify specialization: pre-sales validation vs implementation",
        business: "Show how speed advantage impacts close rates",
        executive: "Frame as strategic partnership: right tool for right phase"
      }
    }
  },

  // TIMING & URGENCY
  {
    id: "timing-1",
    category: "timing",
    objection: "We're not ready yet",
    responseScript: "'Ready' usually means after you've already hit the pain. Most AEs come to us after losing a deal or getting stuck in a 3-month technical back-and-forth. The teams that win call us at the first sign of complexity. What would make you feel ready? I'm happy to revisit when you hit your next technical snag.",
    fullFramework: {
      discovery: [
        "What would 'ready' look like for you?",
        "Have you had deals stall on technical concerns before?",
        "What's your typical trigger for bringing in outside help?"
      ],
      proofPoints: [
        "78% of clients say they wish they'd called us sooner",
        "Average 'stuck deal' wastes 3-4 weeks before getting help",
        "Early assessment prevents scope creep 82% of the time"
      ],
      nextSteps: "Schedule follow-up for 30 days. Offer to stay top-of-mind for next technical deal.",
      personaAngles: {
        technical: "Explain why early assessment prevents rework",
        business: "Show cost of waiting (lost deals, extended cycles)",
        executive: "Frame as proactive vs reactive risk management"
      }
    }
  },
  {
    id: "timing-2",
    category: "timing",
    objection: "We need this done faster than you can deliver",
    responseScript: "Speed is our business model. Standard turnaround is 4 hours for critical issues, 24 hours for full assessments. If you've got a demo tomorrow and need validation today, that's exactly what we do. Most 'fast' services take 2-3 days. We're built for deal-speed urgency because prospects don't wait.",
    fullFramework: {
      discovery: [
        "What's your timeline?",
        "What specifically needs to be validated?",
        "What happens if you don't get answers in time?"
      ],
      proofPoints: [
        "4-hour critical response SLA (guaranteed)",
        "94% of urgent requests delivered same-day",
        "Built for pre-sales speed (not implementation pace)"
      ],
      nextSteps: "Confirm their timeline. Escalate internally if needed. Commit to specific delivery time.",
      personaAngles: {
        technical: "Detail our rapid response process and expertise",
        business: "Show how speed maintains deal momentum",
        executive: "Frame as competitive advantage in time-sensitive deals"
      }
    }
  },
  {
    id: "timing-3",
    category: "timing",
    objection: "Can we revisit this next quarter?",
    responseScript: "We're not going anywhere. What changes next quarter? Usually when AEs say this, it's either budget timing or they don't have a hot deal right now. If it's budget, I can send over ROI docs to help with planning. If it's deal flow, let's set a reminder for when you land your next complex opp.",
    fullFramework: {
      discovery: [
        "What's different next quarter?",
        "Is this a budget timing issue or deal flow issue?",
        "What would make this urgent for you?"
      ],
      proofPoints: [
        "Average client wishes they started 2 months earlier",
        "Q1 vs Q4: same service, same pricing",
        "Flexible start dates—can begin anytime"
      ],
      nextSteps: "Schedule calendar reminder for next quarter. Offer to send ROI docs for planning.",
      personaAngles: {
        technical: "Keep door open for technical emergencies",
        business: "Provide planning materials for budget conversations",
        executive: "Stay top-of-mind for when priorities shift"
      }
    }
  },

  // TECHNICAL CONCERNS
  {
    id: "technical-1",
    category: "technical",
    objection: "Our org is too complex/customized",
    responseScript: "Complexity is why most clients hire us. The vanilla orgs are straightforward. It's the heavily customized, 10-year-old orgs with unusual integrations that need expert eyes. We've seen 500+ Salesforce orgs—from 5 users to 50,000. Complexity is our specialty. The question is whether you can afford not to validate before your next big move.",
    fullFramework: {
      discovery: [
        "What makes your org complex? (custom code, integrations, data volume?)",
        "Have previous consultants struggled with your setup?",
        "What's your biggest concern about technical validation?"
      ],
      proofPoints: [
        "Average client has 1,200+ custom fields (we've seen it all)",
        "Handled orgs with 50+ integrations",
        "Specialized in legacy org modernization"
      ],
      nextSteps: "Offer 15-minute complexity triage call. Show similar case study.",
      personaAngles: {
        technical: "Detail experience with complex architectures",
        business: "Frame complexity as reason to validate, not avoid",
        executive: "Position complexity as risk factor that requires expert review"
      }
    }
  },
  {
    id: "technical-2",
    category: "technical",
    objection: "We're mid-implementation already",
    responseScript: "You're in the danger zone. Most implementations fail in weeks 4-8 when hidden issues surface. A mid-flight assessment can spot those landmines before they blow up your timeline. Think of it as a 'technical health check' to make sure you're still on track. We've saved dozens of projects that were 60% done but headed toward disaster.",
    fullFramework: {
      discovery: [
        "How far into the implementation are you?",
        "Have any unexpected issues come up so far?",
        "What's your deadline and risk tolerance?"
      ],
      proofPoints: [
        "42% of implementations encounter major issues after week 4",
        "Mid-flight assessments reduce rework by 67%",
        "Average mid-flight check finds 4-5 issues before they become critical"
      ],
      nextSteps: "Offer rapid mid-implementation audit (24-hour turnaround).",
      personaAngles: {
        technical: "Frame as risk mitigation during critical phase",
        business: "Show cost savings of catching issues early vs late",
        executive: "Position as insurance against project failure"
      }
    }
  },
  {
    id: "technical-3",
    category: "technical",
    objection: "Integration concerns with [specific system]",
    responseScript: "Integrations are where most deals get stuck. We've done [system] integrations dozens of times. The key things we validate: data flow, sync frequency, error handling, and what breaks if [system] goes down. Most prospects don't think to ask about those until after they've signed. Want me to put together a quick integration validation checklist specific to [system]?",
    fullFramework: {
      discovery: [
        "What's the integration supposed to do?",
        "What's your prospect's biggest concern?",
        "Have you handled [system] integrations before?"
      ],
      proofPoints: [
        "Validated 200+ integrations across 50+ systems",
        "Integration validation typically finds 3-4 deal-blocking issues",
        "Maintain library of integration-specific checklists"
      ],
      nextSteps: "Create custom integration validation checklist. Offer to join technical call with prospect.",
      personaAngles: {
        technical: "Detail specific integration patterns and risks",
        business: "Show how integration validation prevents post-sale surprises",
        executive: "Frame as risk mitigation for complex technical deals"
      }
    }
  },

  // TRUST & EXPERIENCE
  {
    id: "trust-1",
    category: "trust",
    objection: "How do I know you understand our industry?",
    responseScript: "Here's how we work: we don't pretend to know your industry better than you. What we know is Salesforce—inside and out. We've worked with [industry] companies before, and we know the technical questions that matter regardless of industry. Data security, compliance, integration patterns—those are universal. Want to see case studies from [industry] clients?",
    fullFramework: {
      discovery: [
        "What industry-specific concerns do you have?",
        "What technical requirements are unique to your space?",
        "Have you worked with other consultants who 'got' your industry?"
      ],
      proofPoints: [
        "Worked with clients in 15+ industries",
        "Salesforce expertise applies across verticals",
        "Can provide industry-specific case studies and references"
      ],
      nextSteps: "Share relevant case studies. Offer reference call with similar client.",
      personaAngles: {
        technical: "Focus on universal technical patterns that apply across industries",
        business: "Show track record of success in similar companies",
        executive: "Provide industry-specific references and testimonials"
      }
    }
  },
  {
    id: "trust-2",
    category: "trust",
    objection: "We've been burned by consultants before",
    responseScript: "I'm sorry to hear that—unfortunately you're not alone. Here's how we're different: we're not consultants trying to sell you a 6-month engagement. We're a rapid-response technical validation service. In and out in 24-48 hours. No scope creep, no upselling. Fixed price, clear deliverables. Most clients start with one assessment to test us out. Low risk, high upside.",
    fullFramework: {
      discovery: [
        "What happened with the previous consultant?",
        "What would make you trust someone again?",
        "What's your biggest concern about working with us?"
      ],
      proofPoints: [
        "Fixed-price model (no scope creep)",
        "24-48 hour turnaround (no dragging out projects)",
        "94% client satisfaction score"
      ],
      nextSteps: "Offer single-assessment pilot. Provide testimonials from skeptical-turned-happy clients.",
      personaAngles: {
        technical: "Detail our transparent process and fixed scope",
        business: "Show financial protection (fixed price, clear ROI)",
        executive: "Offer low-risk pilot to build trust"
      }
    }
  },
  {
    id: "trust-3",
    category: "trust",
    objection: "Can you show me similar projects?",
    responseScript: "Absolutely—we have case studies from [similar company size/industry]. The one that's most relevant to your situation is [specific example]. They had [similar challenge], we validated [specific technical concern], and the deal closed [X days] faster than their average. Happy to share the full write-up and even intro you to the AE if you want to hear directly from them.",
    fullFramework: {
      discovery: [
        "What type of project are you working on?",
        "What outcomes matter most to you?",
        "Would a reference call be helpful?"
      ],
      proofPoints: [
        "500+ completed assessments",
        "Case studies across industries, company sizes, and use cases",
        "Reference calls available with similar clients"
      ],
      nextSteps: "Share 2-3 relevant case studies. Offer reference call with similar client.",
      personaAngles: {
        technical: "Show technical depth in similar projects",
        business: "Focus on business outcomes and ROI",
        executive: "Provide executive-level testimonials and references"
      }
    }
  }
];

// Helper function to get objections by category
export const getObjectionsByCategory = (category: Objection['category']): Objection[] => {
  return objections.filter(obj => obj.category === category);
};

// Helper function to get top N objections
export const getTopObjections = (count: number = 3): Objection[] => {
  return objections.slice(0, count);
};

// Category labels for UI
export const categoryLabels: Record<Objection['category'], string> = {
  budget: "Budget & ROI",
  internal: "Internal Resources",
  timing: "Timing & Urgency",
  technical: "Technical Concerns",
  trust: "Trust & Experience"
};
