

# Site-Wide Audit: What's Holding This Back

## What's Already Working

The foundation is strong. The operator tone is consistent. The typography system (JetBrains Mono headers, Inter body) is distinctive. The color palette is cohesive. The VoC-grounded content is real. The filtering strategy is clear. Most sites at this stage don't have this level of editorial discipline.

The issues are all fit-and-finish — the kind of things that separate "good consultant site" from "this person clearly operates at a different level."

---

## Issues Found (Priority Order)

### 1. Placeholder Trust Indicators on the Proof Page

The Proof page has a "Trusted by revenue leaders at" section showing gray placeholder boxes labeled "Legal Tech SaaS", "Healthcare Platform", "Cybersecurity Startup", etc. This is the single most credibility-damaging element on the site. It signals "template" at the exact moment a buyer is evaluating proof. **Remove this section entirely.** If you don't have real logos with permission, it shouldn't exist.

### 2. Metric Inconsistency: "rebuilt" vs "assessed"

The TrustIndicators component (used elsewhere) says "42 systems rebuilt" but the canonical positioning everywhere else says "42 systems assessed." This is exactly the kind of detail that erodes trust with Fortune 500-level buyers. Fix to "assessed" site-wide.

### 3. Homepage Section Rhythm Is Broken

"What We're Seeing Right Now" and "Who This Is For" both use `variant="muted"` — they visually merge into one indistinguishable block. There's no alternating rhythm. The standard/muted alternation that works beautifully on About and Assessment is missing here. Fix: alternate the variants so each section has a clear visual boundary.

### 4. Footer Subtitle Doesn't Match Canonical Positioning

The footer subtitle says "Revenue architecture for high-trust teams" but the canonical tagline is "Systems Architecture" and the thesis is "Growth dies when systems break." The subtitle should align with the current positioning — either use the tagline or remove the subtitle and let the logo speak.

### 5. Email Address Inconsistency

Footer uses `hello@thecwtstudio.com`. Contact page uses `shannon@thecwtstudio.com`. Pick one and enforce it everywhere. For the operator-grade positioning, `shannon@` is more consistent with the single-architect brand.

### 6. About Page Diagnostic Questions Don't Map to "What I've Seen"

The three diagnostic questions currently cover data governance and billing gaps, but miss access visibility and tool selection — the two patterns you just refined in "What I've Seen." Adding two questions (Option B from the previous discussion) would complete the alignment:
- Q3: "If someone left tomorrow, how long would it take to revoke every system login they have?" (Surfaces access chaos)
- Q4: "Who chose your current CRM — and did anyone evaluate whether it fit?" (Surfaces tool selection by familiarity)

### 7. Duplicated Operating Rules Between About and How We Work

The same 5 rules appear on both pages verbatim. This creates a "copy-paste" feeling when someone navigates between them. About should keep the Rules as personal operating principles (first-person authority). How We Work should frame them as project constraints (methodology context). Same content, different framing — or remove from one page entirely.

### 8. Proof Page Cards Have No Interaction States

The 8 case study cards on the Proof page are completely static — no hover state, no visual feedback, no indication that 3 of them have detail pages. Adding a subtle hover state (border-primary transition) and linking the 3 that have detail pages would add the polish that signals "this was designed, not assembled."

---

## Implementation Plan

### Step 1: Remove Placeholder Trust Indicators
- Delete the `PartnerLogos` component usage from Proof page
- This is the highest-impact single change

### Step 2: Fix Metric Consistency
- Update TrustIndicators default badges: "42 systems rebuilt" to "42 systems assessed"

### Step 3: Fix Homepage Section Rhythm
- Change "Who This Is For" section from `variant="muted"` to standard (no variant) so it alternates properly with the muted section above it

### Step 4: Align Footer Subtitle
- Change footer subtitle from "Revenue architecture for high-trust teams" to "Systems architecture for high-trust teams" to match current positioning

### Step 5: Standardize Contact Email
- Update footer email from `hello@thecwtstudio.com` to `shannon@thecwtstudio.com` to match Contact page

### Step 6: Update About Page Diagnostic Questions
- Replace Q3 ("What happens when reality changes...") with access governance question
- Add Q4 for tool selection pattern
- Update purposes to match

### Step 7: Differentiate Rules Between Pages
- On How We Work, the rules already have a slightly different framing ("Prevents mid-project drift" vs "Skipping this adds 6 weeks") — keep this differentiation but make it more pronounced. No code change needed if the current differentiation is acceptable; otherwise, adjust the How We Work consequences to be more methodology-specific.

### Step 8: Add Hover States to Proof Cards
- Add hover border transition to case study cards
- Link cards that have detail pages (/proof/healthcare, /proof/b2b-saas, /proof/cybersecurity) so they're clickable

---

## What This Does NOT Include

- No new pages or sections
- No content rewrites (the copy is already strong)
- No design system changes (the system is solid)
- No new features or functionality

This is pure consistency enforcement and interaction polish — the difference between "good" and "obviously intentional."

