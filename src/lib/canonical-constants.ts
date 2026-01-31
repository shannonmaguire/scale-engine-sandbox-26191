/**
 * Canonical constants for Fortune 500-level consistency
 * Single source of truth for CTAs, service names, metrics, and positioning
 * 
 * Editorial standards: docs/grandmaster-writing-prompt.md
 * Phrases kill list: docs/phrases-kill-list.md
 */

// ===== POSITIONING =====
export const POSITIONING = {
  primary: "Revenue systems break. We find where.",
  tagline: "Systems Architecture",
  supportingLine: "2-week audit. We diagnose where deals stall, forecasts fail, and customers lose trust.",
  targetLine: "For teams where system failure means lost deals, not just lost time.",
  velocity: "Systems that hold under load.",
} as const;

// ===== SERVICE NAMES =====
export const SERVICES = {
  assessment: "Revenue Infrastructure Assessment",
} as const;

// ===== CTA TEXT =====
export const CTA = {
  // Primary CTA
  findWhatsBreaking: "Find Out What's Breaking",
  
  // Assessment CTAs (2-week diagnostic)
  bookAssessment: "Book Assessment",
  
  // Secondary CTAs
  seeProof: "See Proof",
  viewResources: "View Resources",
  
  // Contact CTAs
  requestConsultation: "Request Consultation",
  getInTouch: "Get in Touch",
} as const;

// ===== CTA ROUTES =====
export const ROUTES = {
  assessment: "/assessment",
  proof: "/proof",
  contact: "/contact",
  about: "/about",
} as const;

// ===== METRICS =====
export const METRICS = {
  deployments: "42 systems assessed. Zero failed migrations.",
  experience: "6 years. Same methodology. Every handoff clean.",
  industries: "Legal, Compliance, Cybersecurity, Healthcare, B2B SaaS",
} as const;

// ===== PARTNERS =====
export const PARTNERS = {
  cloudRoute: "CloudRoute",
  cloudRouteDescription: "Enterprise Salesforce architecture through CloudRoute (ISV Partner)",
} as const;

// ===== TIMELINES =====
export const TIMELINES = {
  assessment: "2 weeks",
} as const;

// ===== VALUE PROPOSITIONS =====
export const VALUE_PROPS = {
  assessmentRequired: "We start with the assessment",
  implementationPath: "Implementation engagement or enterprise architecture engagement",
} as const;

// ===== KEY PHRASES =====
export const PHRASES = {
  revenueInfrastructure: "Revenue infrastructure",
  technicalMaturity: "Technical maturity",
  systemHealth: "System health",
  operationalExcellence: "Operational excellence",
  predictableRevenue: "Revenue predictability",
} as const;
