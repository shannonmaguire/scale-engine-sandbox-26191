/**
 * Canonical constants for Fortune 500-level consistency
 * Single source of truth for CTAs, service names, metrics, and positioning
 * Based on docs/canonical-language.md and docs/design-law.md (Shannon Playbook)
 */

// ===== PRIME DIRECTIVE =====
export const PRIME_DIRECTIVE = {
  statement: "I do not persuade. I diagnose, design, and contain.",
  corollaries: [
    "If persuasion is required, the system is wrong.",
    "If explanation is required, the boundary is wrong.",
    "If convincing is required, the client is wrong."
  ]
} as const;

// ===== NORTH STAR =====
export const NORTH_STAR = {
  statement: "Build systems that make revenue boring.",
  corollaries: [
    "If revenue feels exciting, it is unstable.",
    "If revenue feels predictable, the system is working."
  ]
} as const;

// ===== POSITIONING =====
export const POSITIONING = {
  primary: "We design how your revenue systems work. Then we build them.",
  tagline: "Revenue architecture you own",
} as const;

// ===== SERVICE NAMES =====
export const SERVICES = {
  sprint: "90-Day Revenue Sprint",
  assessment: "Infrastructure Assessment",
  fractional: "Fractional Operations",
  webSystems: "Web Systems",
  salesforce: "Salesforce Solutions",
} as const;

// ===== CTA TEXT =====
export const CTA = {
  // Free Quiz CTAs (5-minute self-check)
  takeHealthCheck: "Take Free Health Check",
  checkYourScore: "Check Your Score",
  
  // Paid Assessment CTAs (2-week diagnostic)
  startAssessment: "Start Assessment",
  bookAssessment: "Book Infrastructure Assessment",
  
  // Service-specific CTAs
  startSprint: "Start Your Sprint",
  applyFractional: "Apply for Fractional Ops",
  scheduleConsultation: "Schedule Consultation",
  
  // Secondary CTAs
  seeProof: "See Proof",
  viewResources: "View Resources",
  
  // Contact CTAs
  requestConsultation: "Request Consultation",
  getInTouch: "Get in Touch",
} as const;

// ===== CTA ROUTES =====
export const ROUTES = {
  assessment: "/self-assessment",
  infrastructureAssessment: "/infrastructure-assessment",
  sprint: "/sprint",
  fractional: "/fractional",
  salesforce: "/salesforce",
  webSystems: "/web-systems",
  proof: "/proof",
  resources: "/resources",
  contact: "/contact",
  about: "/about",
} as const;

// ===== METRICS =====
export const METRICS = {
  deployments: "42+ Deployments",
  experience: "8+ Years",
  industries: "Legal, Compliance, Cybersecurity, Healthcare, B2B SaaS",
  avgRevenueLift: "$220K Avg. Revenue Lift",
  cycleTime: "90 Days",
  feeCredit: "100% Fee Credit to Sprint",
} as const;

// ===== TIMELINES =====
export const TIMELINES = {
  sprint: "90 days",
  assessment: "2 weeks",
  fractional: "Ongoing",
  webSystems: "4-8 weeks",
} as const;

// ===== VALUE PROPOSITIONS =====
export const VALUE_PROPS = {
  fixedScope: "Fixed scope",
  documentedHandoff: "Documented handoff",
  zeroLockIn: "Zero vendor lock-in",
  ninetyDayCycles: "90-day cycles",
  assessmentRequired: "Assessment required before engagement",
  feeCredit: "100% assessment fee credited to Sprint engagement",
} as const;

// ===== KEY PHRASES =====
export const PHRASES = {
  revenueInfrastructure: "Revenue infrastructure",
  technicalMaturity: "Technical maturity",
  systemHealth: "System health",
  operationalExcellence: "Operational excellence",
  predictableRevenue: "Revenue predictability",
  whatWeBuild: "Outbound. Acquisition. Operations.",
} as const;
