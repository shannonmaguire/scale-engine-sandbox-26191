

## Plan: Remove All Pricing, Shift CTA to Conversation

The website sells the conversation, not the diagnostic. Remove every dollar amount. Reframe the CTA from "Book Diagnostic" to "Book a Diagnostic Call" — free, no pitch, 20 minutes.

### Changes

**1. `src/lib/canonical-constants.ts`**
- Change `CTA.bookDiagnostic` from `"Book Diagnostic"` to `"Book a Diagnostic Call"`
- This propagates to every page using that constant (Home, Assessment, Outbound, Proof)

**2. `src/pages/Assessment.tsx`**
- SEO description: Remove `$7,500` → `"Without diagnosis, revenue leaks silently. 2-week diagnostic reveals what's broken, what it costs, and what to fix first."`
- Service schema description: Remove `$7,500` → `"Diagnostic delivering clear identification of system failures, their cost, and prioritized fix sequence."`
- FAQ answer: Remove `$7,500` → `"A 2-week diagnostic that identifies where your revenue systems are failing, what those failures cost, and what to fix first."`
- Bottom CTA section (lines 178-197): Remove the `$7,500` price line entirely. Change heading from `"Book Your Diagnostic"` to `"Book a Diagnostic Call"`. Change description to `"20 minutes. No pitch. We look at your systems and tell you what we see."`

**3. `src/pages/Outbound.tsx`**
- Line 63: Remove `$7,500` → `"Fixed scope. Full system diagnostic with documented findings and implementation pathway."`

**4. Update memory** — pricing transparency policy shifts from "public $7,500" to "no public pricing; price delivered in conversation after demonstrated value."

### What stays unchanged
- "Pricing errors compound silently" in qualification patterns (describes client's problem, not CWT pricing)
- "Comparing vendors on price" in exclusion framework (disqualifier, not a price reference)
- Blog/proof page dollar figures (case study outcomes like "$500K pipeline")
- Partner application revenue ranges

