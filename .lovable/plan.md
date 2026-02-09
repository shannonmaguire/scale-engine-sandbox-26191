

# Remove Case Study Click-Through Links

## What Changes

Remove the clickable behavior from all case study cards on the Proof page. Currently, three cards (Healthcare, B2B SaaS, Cybersecurity) link to deep-dive pages. All eight cards should be static, non-clickable display cards.

## File Modified

**`src/pages/Proof.tsx`**

- Remove the `Link` import from `react-router-dom`
- Remove the `detailRoutes` mapping object (lines 183-188)
- Remove the `CardWrapper` / `wrapperProps` conditional logic (lines 189-190)
- Replace `CardWrapper` with a plain `div` for all cards
- Remove the `cursor-pointer` conditional class
- Remove `hover:border-primary` transition since cards are no longer interactive

All eight cards render identically as static display elements. No navigation, no popups, no click behavior.

