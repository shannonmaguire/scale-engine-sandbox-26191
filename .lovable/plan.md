
# Site Coherence & Alignment Fixes

## Summary

This plan addresses 8 categories of inconsistencies across the site to create Fortune 500-level visual and structural cohesion.

---

## 1. Fix Homepage Hero Metrics Alignment

**Problem**: The "42 systems installed → Zero failed migrations | Martech, RevOps, Ops, SaaS" line has awkward visual rhythm. Arrow icon and pipe separator create misalignment.

**Solution**: Replace the inline layout with a cleaner horizontal stat bar.

**File**: `src/pages/Home.tsx`  
**Lines**: 142-152

```text
BEFORE:
<div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 pt-2">
  <div className="flex items-center gap-2 text-sm text-muted-foreground">
    <span className="font-mono">42 systems installed</span>
    <ArrowRight className="w-3 h-3 text-primary" />
    <span className="font-mono">Zero failed migrations</span>
  </div>
  <div className="hidden sm:block text-muted-foreground/50">|</div>
  <div className="text-sm text-muted-foreground font-mono">
    Martech, RevOps, Ops, SaaS
  </div>
</div>

AFTER:
<div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground font-mono">
  <span>42 systems installed</span>
  <span className="text-primary">•</span>
  <span>Zero failed migrations</span>
  <span className="text-primary">•</span>
  <span>8 years, same methodology</span>
</div>
```

**Rationale**: 
- Removes awkward arrow icon
- Uses bullet separators (consistent visual weight)
- Removes the disconnected "Martech, RevOps, Ops, SaaS" category list (redundant—already implied by case studies)
- Adds the "8 years" metric for consistency with About page

---

## 2. Remove Homepage "How We Work" Section

**Problem**: Homepage shows Visibility → Diagnosis → Enforcement, but `/how-we-work` shows Assessment → Sprint → Fractional. Two different frameworks confuse customers.

**Solution**: Remove the "How We Work" section from homepage. The homepage should drive to assessment, not explain methodology.

**File**: `src/pages/Home.tsx`  
**Lines**: 180-209 (entire section removal)

**Rationale**: 
- Homepage is for conversion, not education
- Detailed methodology belongs on `/how-we-work`
- Reduces redundancy

---

## 3. Consolidate "What We're Seeing Right Now"

**Problem**: This section appears on both Homepage (6 patterns) and Proof page (8 patterns) with slight variations.

**Solution**: Keep it on Homepage only. Proof page should focus on *results*, not *patterns*.

**File**: `src/pages/Proof.tsx`  
**Lines**: 298-324 (remove "What We're Seeing Right Now" section)

**Rationale**: 
- Homepage is where patterns belong (diagnostic positioning)
- Proof page should be about *outcomes*, not observations
- Reduces repetition

---

## 4. Standardize Content Width

**Problem**: Content widths vary between `max-w-3xl`, `max-w-4xl`, and `max-w-6xl`, creating visual "weaving."

**Solution**: Establish a consistent pattern:
- `max-w-3xl` (768px): Text-heavy sections, CTAs
- `max-w-4xl` (896px): Hero sections, primary content
- `max-w-5xl` (1024px): Grid layouts (replaces max-w-6xl for tighter feel)

**Files affected**:
- `src/pages/Home.tsx`: Change pattern grid from `max-w-6xl` to `max-w-5xl`
- `src/pages/Proof.tsx`: Change pattern grid from `lg:grid-cols-4` to `md:grid-cols-2 lg:grid-cols-3`
- `src/pages/HowWeWork.tsx`: Ensure `max-w-4xl` for text sections, `max-w-5xl` for diagrams

---

## 5. Standardize Interior Page Structure

**Problem**: Each interior page opens differently (breadcrumb position, system-status placement, subtitle presence).

**Solution**: Establish a canonical pattern for all interior pages:

```text
<Breadcrumbs />  (outside Section, at top)

<Section className="border-b border-border">
  <div className="max-w-4xl">
    <div className="system-status mb-8">[PAGE LABEL]</div>
    <h1 className="heading-page mb-4">[Page Title]</h1>
    <p className="text-description text-muted-foreground max-w-2xl">
      [One-line description]
    </p>
  </div>
</Section>
```

**Files to update**:
- `src/pages/HowWeWork.tsx`: Remove the extra subtitle above h1
- `src/pages/Contact.tsx`: Move system-status before h1 (currently centered after)
- `src/pages/Assessment.tsx`: Remove subtitle, keep system-status → h1 → description pattern

---

## 6. Standardize CTA Button Usage

**Problem**: Mix of `Button` and `ConversionOptimizedButton`, inconsistent icons, inconsistent variants.

**Solution**: Establish rules:
- **Primary CTAs**: Use `ConversionOptimizedButton` with tracking (for analytics)
- **All primary CTAs**: Include `ArrowRight` icon
- **Outline CTAs**: Secondary actions only (e.g., "See Results" alongside "Book Assessment")

**Files to update**:
- `src/pages/Assessment.tsx`: Replace `Button asChild` with `ConversionOptimizedButton`
- `src/pages/Contact.tsx`: Add tracking to submit button (already form-specific, so leave as is)

---

## 7. Fix Homepage Callout Quote

**Problem**: The callout on line 202-207 is a self-description styled as a quote but has no attribution.

**Solution**: Remove the quotation marks and reframe as a positioning statement.

**File**: `src/pages/Home.tsx`  
**Lines**: 202-207

```text
BEFORE:
<div className="border-l-2 border-primary bg-muted/50 p-6">
  <p className="text-base text-foreground italic">
    "CRM agnostic. We dive deeper into how the business actually runs—then design systems that hold under load."
  </p>
</div>

AFTER:
(Remove this section entirely—it's part of "How We Work" section which is being removed)
```

---

## 8. Make Proof Page Cards Clearly Interactive

**Problem**: Featured case study cards expand on click, but there's no visual affordance.

**Solution**: Add a subtle hover state and "Click to expand" indicator.

**File**: `src/pages/Proof.tsx`  
**Lines**: 237-290

Add to button className:
```text
hover:bg-card/50 cursor-pointer
```

Change the footer text (line 293-295) to:
```text
<p className="text-sm text-muted-foreground text-center mt-6 font-mono">
  ↓ Click any card to see what we did
</p>
```

---

## Implementation Order

1. Homepage Hero metrics alignment (quick visual fix)
2. Remove Homepage "How We Work" section (major declutter)
3. Remove Proof page patterns section (reduce redundancy)
4. Standardize content widths across pages
5. Standardize interior page structure
6. Standardize CTA buttons
7. Fix Proof page card affordance

---

## Technical Details

### Files Modified:
1. `src/pages/Home.tsx` - Lines 142-152, 180-209
2. `src/pages/Proof.tsx` - Lines 237-324
3. `src/pages/HowWeWork.tsx` - Lines 97-99
4. `src/pages/Assessment.tsx` - Lines 132-133
5. `src/pages/Contact.tsx` - Lines 185-195

### No new dependencies required

### Estimated changes: ~150 lines modified/removed

---

## Expected Outcome

After these changes:
- Homepage will be tighter and conversion-focused
- All pages will follow the same structural pattern
- Visual alignment will be consistent
- No redundant sections between pages
- Customer journey will feel intentional and polished
