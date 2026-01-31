
# CWT Studio: Positioning Clarification + Security/Legal Updates

## Strategic Summary

CWT Studio is a **boutique RevOps shop** that uses 2-week audits to de-risk engagements. After the audit, there are two clear paths:
1. **Implementation Engagement** — CWT handles directly (HubSpot, lighter stacks, focused fixes)
2. **Enterprise Salesforce Architecture** — Routed to CloudRoute (ISV Partner)

The site needs to make this fork **explicit** without pretending to be a neutral third party.

---

## Part 1: Positioning Updates

### 1.1 Update Canonical Constants

**File:** `src/lib/canonical-constants.ts`

Update metrics and positioning to reflect the gateway positioning:

```typescript
// Update METRICS
export const METRICS = {
  deployments: "42 systems assessed. Zero failed migrations.",  // Changed "installed" → "assessed"
  experience: "6 years. Same methodology. Every handoff clean.",
  industries: "Legal, Compliance, Cybersecurity, Healthcare, B2B SaaS",
} as const;

// Add partner reference
export const PARTNERS = {
  cloudRoute: "CloudRoute",
  cloudRouteDescription: "Enterprise Salesforce architecture through CloudRoute (ISV Partner)",
} as const;
```

### 1.2 Update Assessment Page — "What Happens Next" Section

**File:** `src/pages/Assessment.tsx`

Transform the outcomes section to make the CloudRoute pathway explicit:

**Current outcomes array (lines 94-105):**
```typescript
const outcomes = [
  {
    title: "Implementation Engagement",
    scope: "Your systems work but need fixes",
    description: "Workflow automation, data cleanup, integration repair, process optimization. Typically 4-8 weeks."
  },
  {
    title: "Enterprise Architecture",
    scope: "Your foundation needs rebuilding",
    description: "Complete system redesign, multi-platform integration, custom development. Typically 3-6 months."
  }
];
```

**New outcomes array with CloudRoute visible:**
```typescript
const outcomes = [
  {
    title: "Implementation Engagement",
    scope: "CWT Studio Direct",
    badge: null,
    description: "Workflow automation, data cleanup, integration repair, process optimization. HubSpot and lighter stacks. Typically 4-8 weeks."
  },
  {
    title: "Enterprise Salesforce Architecture",
    scope: "CloudRoute (ISV Partner)",
    badge: "PARTNER",
    description: "Complete Salesforce redesign, multi-cloud integration, custom development. Typically 3-6 months. We scope and manage; CloudRoute delivers."
  }
];
```

**Update the outcomes rendering (around line 338-350)** to show the badge:

```tsx
<div className="grid md:grid-cols-2 gap-6">
  {outcomes.map((outcome, index) => (
    <div key={index} className="border-2 border-primary/30 bg-primary/5 p-6 md:p-8 relative">
      {outcome.badge && (
        <div className="absolute -top-3 right-4 bg-primary text-primary-foreground text-xs font-mono px-2 py-1">
          {outcome.badge}
        </div>
      )}
      <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
        {outcome.scope}
      </p>
      <h3 className="heading-subsection mb-4">{outcome.title}</h3>
      <p className="text-description text-muted-foreground">
        {outcome.description}
      </p>
    </div>
  ))}
</div>

<p className="text-description text-muted-foreground mt-8 text-center">
  The assessment report includes a clear recommendation for which path applies to you.
</p>
```

### 1.3 Update Home Page Hero Metrics

**File:** `src/pages/Home.tsx`

Change "42 systems installed" to "42 systems assessed" (line 132):

```tsx
<div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground font-mono">
  <span>42 systems assessed</span>
  <span className="text-primary">•</span>
  <span>Zero failed migrations</span>
  <span className="text-primary">•</span>
  <span>6 years, same methodology</span>
</div>
```

### 1.4 Update About Page Metrics

**File:** `src/pages/About.tsx`

Change "systems installed" to "systems assessed" (line 185):

```tsx
<div>
  <div className="text-2xl text-primary font-mono tabular-nums">42</div>
  <div className="text-sm text-muted-foreground">systems assessed</div>
</div>
```

Also update the bio paragraph (line 174) to clarify the CloudRoute relationship:

```tsx
<p className="text-muted-foreground leading-relaxed">
  Enterprise Salesforce through CloudRoute (ISV Partner). HubSpot and lighter stacks direct. Every system documented. Every handoff clean.
</p>
```

### 1.5 Update About Page FAQ Schema

**File:** `src/pages/About.tsx`

Update the FAQ schema (around line 122-127) for accuracy:

```typescript
{
  question: 'What is the relationship between CWT Studio and CloudRoute?',
  answer: 'CWT Studio performs the diagnostic assessment and scopes the work. For enterprise Salesforce implementations, the build is delivered through CloudRoute (ISV Partner). For HubSpot and lighter stacks, CWT Studio handles the implementation directly.'
}
```

---

## Part 2: Security Fixes

### 2.1 Add DELETE Policy for Profiles Table

**SQL Migration:**
```sql
-- Allow users to delete their own profile (GDPR compliance)
CREATE POLICY "Users can delete own profile" 
ON public.profiles 
FOR DELETE 
TO authenticated 
USING (auth.uid() = id);
```

This enables GDPR Article 17 "Right to Erasure" at the database level.

---

## Part 3: Legal Page Updates

### 3.1 Fix Dynamic Date Issue (All Three Pages)

Replace `new Date().toLocaleDateString()` with static date:

**Files:**
- `src/pages/PrivacyPolicy.tsx` (line 25)
- `src/pages/TermsOfService.tsx` (line 25)
- `src/pages/CookiePolicy.tsx` (line 25)

```tsx
// Before
<p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

// After
<p className="text-muted-foreground mb-8">Last updated: January 30, 2026</p>
```

### 3.2 Privacy Policy — Add Business Location

**File:** `src/pages/PrivacyPolicy.tsx`

In the contact section, add location after company name:

```tsx
<ul className="list-none space-y-2">
  <li><strong>Email:</strong> hello@thecwtstudio.com</li>
  <li><strong>Company:</strong> CWT Studio</li>
  <li><strong>Location:</strong> United States</li>
</ul>
```

### 3.3 Terms of Service — Add Jurisdiction

**File:** `src/pages/TermsOfService.tsx`

In Section 11 (Governing Law), add specific jurisdiction:

```tsx
<section>
  <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
  <p className="mb-4">
    These Terms shall be governed by and construed in accordance with the laws of the 
    State of Delaware, United States, without regard to conflict of law provisions.
  </p>
  <p className="mb-4">
    Any disputes arising under these Terms shall be resolved in the state or federal 
    courts located in Delaware, and you consent to personal jurisdiction in such courts.
  </p>
</section>
```

---

## Implementation Order

1. **SQL Migration** — Add profiles DELETE policy
2. **Canonical Constants** — Update metrics language and add PARTNERS constant
3. **Assessment Page** — Update outcomes with CloudRoute visibility
4. **Home Page** — Update hero metrics
5. **About Page** — Update metrics + bio + FAQ schema
6. **Legal Pages** — Fix dates, add location/jurisdiction

---

## Files Modified Summary

| File | Changes |
|------|---------|
| `src/lib/canonical-constants.ts` | Metrics "assessed" + PARTNERS constant |
| `src/pages/Assessment.tsx` | Outcomes section with CloudRoute badge |
| `src/pages/Home.tsx` | Hero metrics text |
| `src/pages/About.tsx` | Metrics + bio + FAQ schema |
| `src/pages/PrivacyPolicy.tsx` | Static date + location |
| `src/pages/TermsOfService.tsx` | Static date + jurisdiction |
| `src/pages/CookiePolicy.tsx` | Static date |

---

## LinkedIn Company Page Copy (Ready to Use)

**Short Version (Overview field):**
> CWT Studio finds where revenue systems break.
> 
> 2-week diagnostic audit → implementation pathway. Enterprise Salesforce architecture through CloudRoute (ISV Partner). HubSpot and lighter stacks direct.
> 
> 6 years. 42 systems assessed. Zero failed migrations.

**Extended Version:**
> CWT Studio finds where revenue systems break.
> 
> We run 2-week diagnostic audits for legal, healthcare, compliance, and B2B SaaS teams. The assessment surfaces what's broken—data governance gaps, integration failures, follow-up systems that depend on memory—and delivers a clear path forward.
> 
> After the audit:
> • Implementation Engagement — HubSpot, integrations, workflow automation. We handle directly.
> • Enterprise Salesforce Architecture — Scoped by CWT, delivered through CloudRoute (ISV Partner).
> 
> 6 years. 42 systems assessed. Same methodology. Zero failed migrations. Every handoff clean.
