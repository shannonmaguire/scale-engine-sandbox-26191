

# Remove Implementation Phases Section

## Summary
Remove the redundant "Implementation Phases" section from the How We Work page. This section duplicates information already available on the Assessment page and shifts focus from methodology to a service list.

## Changes

### File: `src/pages/HowWeWork.tsx`

1. **Remove the `phases` array** (lines 11-25) - the data definition for Assessment, Sprint, and Fractional phases

2. **Remove the Implementation Phases JSX section** (lines 107-133) - the entire Section component that renders the phases

## Technical Details

**Lines to remove:**

```typescript
// Remove phases array (lines 11-25)
const phases = [
  {
    phase: "01",
    title: "Assessment",
    ...
  },
  ...
];
```

```tsx
// Remove Implementation Phases section (lines 107-133)
<Section className="border-t border-border">
  <div className="max-w-4xl">
    <h2 className="heading-section mb-10">Implementation Phases</h2>
    ...
  </div>
</Section>
```

3. **Remove unused import** - `CheckCircle` from lucide-react (only used in the phases section)

## Result
The How We Work page will focus on:
- The Architecture diagram
- Questions We Ask (diagnostic)
- What We Look For (critical patterns)
- Principles
- CTA

This keeps the page focused on *how we think* rather than *what we sell*.

