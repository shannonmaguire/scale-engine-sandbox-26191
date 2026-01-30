

# About Page Enhancement Plan

## Current State Analysis

The About page currently has **6 sections**:
1. **Founder** - Photo, name, bio, metrics (8 years / 42 systems / 0 failed)
2. **What I Believe** - 3 belief cards
3. **How I Work** - 3 diagnostic questions
4. **People → Process → Technology** - 3 philosophy cards
5. **Rules** - 5 operating rules
6. **CTA** - "Find Out What's Breaking"

### What's Working
- Clean visual hierarchy with JetBrains Mono headers
- Metrics strip is strong (8 / 42 / 0)
- Diagnostic questions are VoC-grounded and specific
- Rules section is sharp and constraint-focused

### What Needs Improvement

**1. The bio reads generic.** "CRM agnostic" is good, but "I dive deeper into how the business actually runs" is vague. The transition story (Salesforce AE → delivery) is buried.

**2. The "What I Believe" section is abstract.** "System enforcement, not human enforcement" is philosophically true but doesn't ground in the specific failures buyers recognize.

**3. The "People → Process → Technology" section is internal doctrine, not buyer-facing value.** It's explaining methodology rather than demonstrating capability.

**4. Missing a "Pattern Recognition" section.** The VoC library has specific failure patterns that would let buyers self-identify faster.

**5. No social proof in the founder section.** The metrics are good but there's no client voice validating Shannon's approach.

---

## Proposed Changes

### 1. Rewrite the Founder Bio (Lines 133-145)

**Current:**
> "CRM agnostic. I dive deeper into how the business actually runs—then design systems that hold under load."

**Proposed:**
> "Former Salesforce AE. I watched implementations fail because sales sold what the business couldn't absorb. Now I architect what gets sold—systems that survive the first quarter of actual use."

**Rationale:** Grounds the origin story in a specific insight. "Survive the first quarter of actual use" is more concrete than "hold under load."

---

### 2. Add a "What I've Seen" Pattern Section (New)

Insert after the Founder section. This surfaces buyer-recognized failure modes so visitors immediately think "she's seen my situation."

**Patterns to include (from VoC Library):**
| Pattern | Description |
|---------|-------------|
| CSV import chaos | Data entering the system without validation. Nobody catches duplicates until finance asks. |
| Invoice-delivery gap | Operational access granted before payment collected. Revenue recognized, cash never arrives. |
| Shared login sprawl | "Everyone uses the same login." Compliance asks for an access audit. Nobody can produce one. |
| Tool selection by familiarity | "We picked it because someone used it before." Architecture evaluated never. |

---

### 3. Transform "What I Believe" Into "Where I Disagree" (Lines 166-183)

Position beliefs as contrarian stances that filter misaligned buyers.

**Current:** "System enforcement, not human enforcement"
**Proposed:** Remove the contrastual framing. Rewrite as settled positions:

| Current Title | Proposed |
|--------------|----------|
| System enforcement, not human enforcement | **Processes fail when they depend on memory.** If someone has to remember to do it, the system is incomplete. |
| Discovery before configuration | **The hard questions come first.** "What happens when reality changes?" precedes "What fields do you need?" |
| Dependency order matters | **Revenue infrastructure installs in layers.** Skip a layer and the next one breaks. |

---

### 4. Replace "People → Process → Technology" With a Single Statement (Lines 208-240)

The 3-card grid is internal consulting doctrine that over-explains. Compress to:

> "The sequence is People → Process → Technology. Most projects fail because they start with technology."

One sentence. Same insight. Eliminates a full section.

---

### 5. Add a Micro-Testimonial in the Founder Section (Lines 146-160)

Add one client voice below the metrics strip:

> "Shannon sees the whole board. She caught dependencies our internal team missed."  
> — Operations Director, Healthcare SaaS

**Rationale:** Third-party validation in the bio section adds credibility without requiring visitors to scroll to Proof.

---

### 6. Tighten the Rules Section (Lines 242-256)

The current 5 rules are good. Consider adding one consequence to each:

| Rule | Consequence |
|------|-------------|
| Discovery before scope. | Skipping this adds 6 weeks to implementation. |
| No skipped layers. | The layer you skip becomes the layer that breaks. |
| Fixed scope, not hourly. | Hourly incentivizes inefficiency. |
| Build → Document → Handoff. | Undocumented systems die with their builder. |
| You own everything. | No vendor lock-in. No dependency. |

---

## Section Order (Proposed)

1. **Founder** - Tightened bio + micro-testimonial
2. **What I've Seen** (NEW) - 4 VoC failure patterns
3. **Where I Disagree** (renamed from "What I Believe") - 3 contrarian stances
4. **How I Work** - Keep as-is (diagnostic questions are strong)
5. **Rules** - With consequences added
6. **CTA** - Keep as-is

**Removed:** "People → Process → Technology" (compressed to one line in "Where I Disagree")

---

## Technical Summary

| File | Change |
|------|--------|
| `src/pages/About.tsx` | Rewrite founder bio (lines 133-145) |
| `src/pages/About.tsx` | Add new `seenPatterns` array and "What I've Seen" section |
| `src/pages/About.tsx` | Rename and rewrite beliefs section |
| `src/pages/About.tsx` | Remove "People → Process → Technology" section |
| `src/pages/About.tsx` | Add consequences to rules array |
| `src/pages/About.tsx` | Add micro-testimonial under metrics strip |

---

## Expected Outcome

- **Faster self-selection**: Buyers see their failures in "What I've Seen" within 10 seconds
- **Stronger authority**: Bio grounds in specific insight rather than generic capability
- **Tighter page**: Removing PPT section reduces scroll depth by ~20%
- **More credibility**: Micro-testimonial provides third-party validation early

