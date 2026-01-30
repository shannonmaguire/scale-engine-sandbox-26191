# Voice of Customer Library

**Purpose:** Anonymized client language, pain points, and patterns extracted from discovery calls and project transcripts. Use this reference to ground site copy in buyer language.

**Source:** Otter.ai transcript export (January 2026)

---

## Table of Contents
1. [Data Structure Problems](#data-structure-problems)
2. [Integration Gaps](#integration-gaps)
3. [Credential & Access Chaos](#credential--access-chaos)
4. [Partner & Channel Dynamics](#partner--channel-dynamics)
5. [Pricing Psychology](#pricing-psychology)
6. [Decision-Making Patterns](#decision-making-patterns)
7. [Common Objection Sequences](#common-objection-sequences)

---

## Data Structure Problems

### Pattern: CSV Import Chaos
**What clients say:**
- "We upload CSVs to Salesforce every month. Nobody validates them."
- "Asset records, serial numbers, product data—all entering the system without governance."
- "We found duplicate serial numbers across 3 different accounts."

**Root cause:** No data validation layer between source systems and CRM.

**Site copy applications:**
- Homepage pattern: "CSV uploads to Salesforce. Zero validation."
- Assessment qualification: "Do you manually import data into Salesforce via CSV?"

---

### Pattern: Asset Tracking Gaps
**What clients say:**
- "We're an authorized reseller. Our asset records don't match vendor records."
- "Serial numbers in Salesforce don't tie back to anything."
- "Finance asks where the inventory data comes from. Nobody knows."

**Root cause:** No single source of truth for physical/digital asset records.

---

### Pattern: Product Data Sprawl
**What clients say:**
- "Products are in Salesforce, QuickBooks, and a spreadsheet."
- "Pricing is different in every system."
- "We quote from memory because no system is accurate."

**Root cause:** Product catalog fragmentation across systems.

---

## Integration Gaps

### Pattern: Disconnected Finance Stack
**What clients say:**
- "Apple, Stripe, QuickBooks—none of them talk to each other."
- "Manual reconciliation takes 15 hours a week."
- "Finance trusts nothing from Salesforce."

**Root cause:** No middleware or integration layer between operational and financial systems.

**Site copy applications:**
- Homepage pattern: "Apple, Stripe, QuickBooks—none talking to each other."
- Proof enrichment: Use for IT Services/Reseller case studies

---

### Pattern: Invoice-Delivery Gap
**What clients say:**
- "Client gets onboarded. Invoice never gets sent."
- "We gave operational access before collecting payment."
- "Revenue recognized, cash never arrives."

**Root cause:** Handoff between delivery and billing is manual or undefined.

---

## Credential & Access Chaos

### Pattern: Shared Login Sprawl
**What clients say:**
- "Everyone uses the same login."
- "Who has access? Nobody knows."
- "We can't tell who changed what."

**Root cause:** No SSO, no audit trail, no access governance.

**Site copy applications:**
- Homepage pattern: "Shared logins. No audit trail."
- Assessment qualification: "Do team members share system credentials?"

---

### Pattern: Offboarding Gaps
**What clients say:**
- "Former contractor still has Salesforce access."
- "We don't have a list of who has access to what."
- "Compliance asked for an access audit. We can't produce one."

**Root cause:** No offboarding SOP for system access.

---

## Partner & Channel Dynamics

### Pattern: Deal Registration Dead Zone
**What clients say:**
- "Deals get registered. Then silence."
- "AE can't scope the technical work."
- "Pipeline stalls after the introduction."

**Root cause:** No technical scoping capability after partner handoff.

**Site copy applications:**
- Homepage pattern: "Deals registered. Then silence."
- AE Technical Support page: Ground in this exact language

---

### Pattern: Partner Handoff Friction
**What clients say:**
- "Partner brings us in, then disappears."
- "No SOW. No scope. Just 'help the client.'"
- "We get pulled into calls with no context."

**Root cause:** Undefined partner-to-implementer handoff process.

---

## Pricing Psychology

### Pattern: Credibility Through Pricing
**What clients say:**
- "If you price too low, you won't be taken seriously."
- "Cheap consultants get treated like vendors."
- "At that rate, they'll assume you're junior."

**Insight:** Price signals competence in professional services. Low rates trigger buyer skepticism.

**Site copy applications:**
- Internal positioning: Price communicates capability
- Objection handling: Don't compete on rate

---

### Pattern: Value Framing
**What clients say:**
- "I don't care about hours. I care about outcomes."
- "What's the ROI on this?"
- "If you can show me the math, I can sell it internally."

**Insight:** Buyers need quantified ROI to justify budget internally.

---

## Decision-Making Patterns

### Pattern: 360 View Obsession
**What clients say:**
- "We need a 360 view of the customer."
- "Decision-makers want one screen that shows everything."
- "Board asks questions we can't answer from Salesforce."

**Root cause:** BI and reporting infrastructure doesn't serve executive decision-making.

---

### Pattern: Familiarity Over Architecture
**What clients say:**
- "We went with Trello because someone used it before."
- "We picked HubSpot because marketing already had it."
- "Nobody evaluated whether it was the right tool."

**Insight:** Teams select tools based on familiarity, not architectural fit.

**Site copy applications:**
- Qualification language: "Decisions made by familiarity, not architecture."

---

## Common Objection Sequences

### Sequence: Timeline Pressure
1. Client states deadline (quarter-end, board meeting, funding round)
2. Client asks to compress timeline
3. When told 90 days, client pushes for 60 or 30
4. Resolution: Explain foundation work can't be skipped

**Response pattern:**
"Compressing to 30 days means skipping foundation. You'll ship something that breaks by Day 45. The 90-day sprint includes 2 weeks of foundation work that makes the other 10 weeks stick."

---

### Sequence: Scope Creep Signals
Early indicators in discovery:
- "While you're in there, could you also..."
- "We have a few other things that need looking at."
- "Can we add this to the scope later?"

**Response pattern:**
Define scope in writing before kickoff. Use "that's Sprint 2" language to contain current engagement.

---

### Sequence: Competitor Comparison
How clients describe other vendors:
- "Our last consultant just gave us recommendations."
- "The agency built it but we can't maintain it."
- "They said it would take 6 months and it took 18."

**Response pattern:**
Use as proof points. "If your current consultant can document your entire revenue system in a handoff SOP, you don't need us."

---

## Usage Guidelines

### When Writing Site Copy
1. Use exact client phrases when possible
2. Ground patterns in specific failure modes
3. Avoid consultant jargon—use buyer language
4. Quantify when transcripts include numbers

### When Updating Homepage Patterns
1. Pull from "Site copy applications" sections above
2. Maintain category/title/description format
3. Keep descriptions to 2 sentences max

### When Enriching Case Studies
1. Match patterns to existing case study industries
2. Add specificity using transcript language
3. Keep "whatBroke" field concise

---

*Last updated: January 2026*
*Source: Otter.ai transcript export*
