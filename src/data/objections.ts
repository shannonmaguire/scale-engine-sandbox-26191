export interface Objection {
  id: string;
  category: 'budget' | 'internal' | 'timing' | 'technical' | 'trust';
  objection: string;
  responseScript: string;
  fullFramework: {
    discovery: string[];
    proofPoints: string[];
    competitivePositioning?: string;
    nextSteps: string;
    personaAngles?: {
      technical: string;
      business: string;
      executive: string;
    };
  };
}

export const objections: Objection[] = [
  
  {
    id: "budget-1",
    category: "budget",
    objection: "We don't have budget right now",
    responseScript: "Most technical issues that derail deals cost far more than preventing them. Early technical validation typically prevents significant downstream costs. If we identify 2-3 issues before implementation, you've already created substantial value.",
    fullFramework: {
      discovery: [
        "What's your typical project budget range?",
        "What would happen if a deal stalled due to technical concerns?",
        "Have you had implementations go over budget before?"
      ],
      proofPoints: [
        "Early technical validation typically prevents significant project overruns",
        "Most technical reviews identify at least 3 deal-blocking issues",
        "ROI calculators show strong returns on upfront technical diligence"
      ],
      nextSteps: "Share ROI frameworks. Offer to present technical validation approach to their manager.",
      personaAngles: {
        technical: "Frame as technical debt prevention vs weeks of rework",
        business: "Show revenue impact: deals won faster = quota attainment",
        executive: "Position as risk mitigation for upcoming growth targets"
      }
    }
  },
  {
    id: "budget-2",
    category: "budget",
    objection: "How do I justify this to my manager?",
    responseScript: "Frame it as technical risk mitigation that flags deal-blocking issues before they cost opportunities. Technical validation has helped hundreds of AEs close complex deals faster. I can help you build the business case and join the conversation if helpful.",
    fullFramework: {
      discovery: [
        "What metrics does your manager care about most?",
        "How many deals have stalled on technical concerns this quarter?",
        "What's your average deal size?"
      ],
      proofPoints: [
        "Technical validation typically reduces sales cycles significantly",
        "Win rates improve substantially on technically complex deals",
        "Used by AEs at leading Salesforce partners"
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
    responseScript: "Comprehensive technical reviews are valuable because they examine the entire system to spot integration risks and data issues. Partial reviews often miss critical dependencies. A quick triage call can help determine if a full technical review makes sense for your specific situation.",
    fullFramework: {
      discovery: [
        "What size deal would make this worth it for you?",
        "What's your biggest concern about moving forward?",
        "Have you lost deals due to technical objections before?"
      ],
      proofPoints: [
        "Comprehensive reviews typically identify 7-9 issues that partial reviews miss",
        "Most teams find thorough technical validation necessary to close complex deals",
        "Quick triage calls available to qualify fit"
      ],
      nextSteps: "Offer brief triage call. Schedule for their next complex deal.",
      personaAngles: {
        technical: "Explain why partial technical reviews miss integration issues",
        business: "Compare to cost of lost deals",
        executive: "Position as standard practice for high-value technical deals"
      }
    }
  },
  {
    id: "budget-4",
    category: "budget",
    objection: "What's the ROI proof?",
    responseScript: "Technical validation typically delivers strong returns: teams avoid significant rework costs, deals close faster, and most technical reviews find multiple issues that would've blocked deals. I can share frameworks that help calculate ROI based on your specific deal size and sales cycle.",
    fullFramework: {
      discovery: [
        "What would good ROI look like for you?",
        "What metrics do you use to evaluate tools?",
        "How do you typically calculate opportunity cost?"
      ],
      proofPoints: [
        "Documented case studies with enterprise clients",
        "Technical validation typically shows strong ROI within 90 days",
        "Typical savings: significant reduction in rework hours per project"
      ],
      nextSteps: "Share ROI frameworks and relevant case studies. Offer reference call.",
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
    responseScript: "Internal expertise is valuable. Teams typically handle BAU and implementations. When urgent deals need answers in 24 hours and internal resources can't drop everything, external technical support provides rapid validation without pulling architects off roadmap. Many use external support alongside internal teams for surge capacity.",
    fullFramework: {
      discovery: [
        "How long does it typically take your team to turn around technical reviews?",
        "What happens when multiple deals need technical input at once?",
        "How do you prioritize internal resources across deals?"
      ],
      proofPoints: [
        "Rapid response SLAs for critical deal support",
        "External support commonly partners with internal teams",
        "Internal teams typically save significant hours monthly using overflow support"
      ],
      nextSteps: "Offer pilot on their next urgent deal. Position as 'technical insurance' not replacement.",
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
    responseScript: "Admins excel at keeping orgs running smoothly. Pre-sales technical validation is a different skillset than admin operations. External support answers prospect questions that admins shouldn't handle while managing day-to-day operations. It serves as 'AE technical co-pilot' for complex deals.",
    fullFramework: {
      discovery: [
        "What's your admin currently focused on?",
        "How quickly can they respond to prospect technical questions?",
        "Have deals ever stalled waiting for internal technical answers?"
      ],
      proofPoints: [
        "Specialization in pre-sales validation (not admin work)",
        "Rapid response times vs typical internal response delays",
        "Most teams maintain external support even with excellent admins"
      ],
      nextSteps: "Clarify scope: external support handles prospect-facing validation, admin handles operations.",
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
    responseScript: "External expertise is valuable. Speed-focused support complements implementation consultants. When you need answers in hours instead of days for deal acceleration, rapid response fills that gap. Many use consultants for execution and rapid support for time-sensitive deals. The approaches are complementary.",
    fullFramework: {
      discovery: [
        "What does your consultant typically help with?",
        "How fast can they turn around technical responses?",
        "Do they handle pre-sales technical validation?"
      ],
      proofPoints: [
        "Rapid support commonly works alongside consultants",
        "Hours-based response SLA vs typical multi-day consultant turnaround",
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
    responseScript: "Most AEs reach out after losing a deal or getting stuck in lengthy technical discussions. The ones who close faster seek technical guidance at the first sign of complexity. What would make you feel ready? I can circle back when you encounter your next technical challenge.",
    fullFramework: {
      discovery: [
        "What would 'ready' look like for you?",
        "Have you had deals stall on technical concerns before?",
        "What's your typical trigger for seeking technical support?"
      ],
      proofPoints: [
        "Most teams wish they'd sought technical guidance earlier",
        "Stuck deals typically waste weeks before getting proper support",
        "Early technical validation prevents scope creep in most cases"
      ],
      nextSteps: "Schedule follow-up for 30 days. Offer to stay top-of-mind for next technical deal.",
      personaAngles: {
        technical: "Explain why early technical review prevents rework",
        business: "Show cost of waiting (lost deals, extended cycles)",
        executive: "Frame as proactive vs reactive risk management"
      }
    }
  },
  {
    id: "timing-2",
    category: "timing",
    objection: "We need this done faster than you can deliver",
    responseScript: "Technical support for critical issues can often be provided within hours, with comprehensive reviews typically completed within 24 hours. If you need rapid validation for an imminent demo or call, that's exactly the kind of time-sensitive situation this support is designed for.",
    fullFramework: {
      discovery: [
        "What's your timeline?",
        "What specifically needs to be validated?",
        "What happens if you don't get answers in time?"
      ],
      proofPoints: [
        "Critical response SLAs measured in hours, not days",
        "Majority of urgent requests delivered same-day",
        "Built for pre-sales speed, not implementation timelines"
      ],
      nextSteps: "Confirm their timeline. Escalate internally if needed. Commit to specific delivery time.",
      personaAngles: {
        technical: "Detail rapid response process and expertise",
        business: "Show how speed maintains deal momentum",
        executive: "Frame as competitive advantage in time-sensitive deals"
      }
    }
  },
  {
    id: "timing-3",
    category: "timing",
    objection: "Can we revisit this next quarter?",
    responseScript: "Absolutely. What changes next quarter? Usually this means either budget timing or current deal flow. If it's budget, I can send planning materials. If it's deal flow, let's set a reminder for when you land your next complex opportunity.",
    fullFramework: {
      discovery: [
        "What's different next quarter?",
        "Is this a budget timing issue or deal flow issue?",
        "What would make this urgent for you?"
      ],
      proofPoints: [
        "Most teams wish they'd engaged earlier",
        "Technical support available year-round",
        "Flexible engagement—can begin anytime"
      ],
      nextSteps: "Schedule calendar reminder for next quarter. Offer to send planning materials.",
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
    responseScript: "Complexity is exactly why technical guidance matters most. Simple systems are straightforward. Heavily customized, legacy orgs with unusual integrations benefit most from expert review. Experience with hundreds of Salesforce orgs across every configuration means complex environments are familiar territory.",
    fullFramework: {
      discovery: [
        "What makes your org complex? (custom code, integrations, data volume?)",
        "Have previous consultants struggled with your setup?",
        "What's your biggest concern about technical validation?"
      ],
      proofPoints: [
        "Experience with highly customized orgs (1,200+ custom fields typical)",
        "Handled orgs with 50+ integrations",
        "Specialized in legacy org modernization"
      ],
      nextSteps: "Offer brief complexity triage call. Show similar case study.",
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
    responseScript: "Many implementations encounter issues in weeks 4-8 when hidden problems surface. A mid-flight technical review can spot those problems before they impact timelines. Experience shows projects that seemed on track can benefit from external perspective before issues become critical.",
    fullFramework: {
      discovery: [
        "How far into the implementation are you?",
        "Have any unexpected issues come up so far?",
        "What's your deadline and risk tolerance?"
      ],
      proofPoints: [
        "Significant portion of implementations encounter major issues mid-stream",
        "Mid-flight reviews substantially reduce rework",
        "Typical mid-flight review finds 4-5 issues before they become critical"
      ],
      nextSteps: "Offer rapid mid-implementation review (24-hour turnaround).",
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
    responseScript: "Integrations are where most deals get stuck. Experience with [system] integrations includes understanding key validation points: data flow, sync frequency, error handling, and failure scenarios. Most prospects don't think to ask about these until after commitment. A custom integration validation checklist for [system] can help address concerns proactively.",
    fullFramework: {
      discovery: [
        "What's the integration supposed to do?",
        "What's your prospect's biggest concern?",
        "Have you handled [system] integrations before?"
      ],
      proofPoints: [
        "Experience validating hundreds of integrations across dozens of systems",
        "Integration validation typically finds 3-4 deal-blocking issues",
        "Library of integration-specific checklists available"
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
    responseScript: "That's understandable—many have had that experience. Technical advisory is different from traditional consulting: rapid turnarounds (24-48 hours), fixed scope with clear deliverables, no scope creep or upselling. Many start with a pilot engagement to build trust. Low risk, high potential value.",
    fullFramework: {
      discovery: [
        "What happened with the previous consultant?",
        "What would make you trust someone again?",
        "What's your biggest concern about working with us?"
      ],
      proofPoints: [
        "Fixed-scope engagement model",
        "Rapid turnarounds (24-48 hours typical)",
        "High client satisfaction scores"
      ],
      nextSteps: "Offer pilot engagement. Provide testimonials from initially skeptical clients.",
      personaAngles: {
        technical: "Detail transparent process and fixed scope",
        business: "Show financial protection (clear pricing, defined ROI)",
        executive: "Offer low-risk pilot to build trust"
      }
    }
  },
  {
    id: "trust-3",
    category: "trust",
    objection: "Can you show me similar projects?",
    responseScript: "Absolutely—case studies from similar company sizes and industries are available. The most relevant example would be [specific case]. They had [similar challenge], technical concerns were validated, and the deal closed significantly faster than average. Full write-ups and reference calls with similar clients can be arranged.",
    fullFramework: {
      discovery: [
        "What type of project are you working on?",
        "What outcomes matter most to you?",
        "Would a reference call be helpful?"
      ],
      proofPoints: [
        "Hundreds of completed technical reviews",
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
