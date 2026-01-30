
# Fix 6-Year Timeline Inconsistency

## Summary
The About page still displays "8 years" while the canonical constants and homepage have been updated to "6 years". One file needs updating.

## Inconsistency Found

| Location | Current Value | Should Be |
|----------|---------------|-----------|
| `src/lib/canonical-constants.ts` | "6 years" | ✓ Correct |
| `src/pages/Home.tsx` (hero) | "6 years" | ✓ Correct |
| `src/pages/About.tsx` (line 180) | **"8"** | ✗ Needs update |

## Change Required

### `src/pages/About.tsx`
**Line 180**: Update the hardcoded metric from `8` to `6`

```tsx
// Before
<div className="text-2xl text-primary font-mono tabular-nums">8</div>
<div className="text-sm text-muted-foreground">years, same methodology</div>

// After
<div className="text-2xl text-primary font-mono tabular-nums">6</div>
<div className="text-sm text-muted-foreground">years, same methodology</div>
```

## Technical Note
The About page uses inline metrics rather than importing from `canonical-constants.ts`. This creates potential for future drift. After this fix, all "years" references will be consistent at 6 years.

## All Other References Verified
- `PrivacyPolicy.tsx`: Uses "18 years of age" — unrelated to business timeline
- `PartnerApplicationModal.tsx`: Uses "Years in Business" / "Years of Experience" — form field labels, not CWT timeline
- `TrustIndicators.tsx`: Uses "42 systems rebuilt" — no years reference

## Result
One-line change. All public-facing timeline references will show 6 years.
