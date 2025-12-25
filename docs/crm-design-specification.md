# CWT Studio CRM Design Specification
## Fortune 500-Grade Internal Revenue Dashboard

**Version:** 1.0  
**Last Updated:** 2025-12-25  
**Target:** Internal admin dashboard at `/admin`

---

## 1. Design Philosophy

**Industrial Console Aesthetic** — Dark, high-contrast interface optimized for daily operational use. Color appears only as functional indicators, never decoration. Typography-forward with monospace data displays.

**Guiding Principles:**
- Grayscale dominates (90%+ of interface)
- Color = meaning (never aesthetic)
- Burgundy brand accent used sparingly for primary actions only
- All text meets WCAG AAA contrast (7:1+)
- No gradients, no shadows deeper than 1px, no rounded corners >4px

---

## 2. CSS Variables — Dark Console Theme

Add to your `index.css` inside `:root` or create a `.dark-console` class:

```css
/* ============================================
   CWT STUDIO CRM — DARK CONSOLE THEME
   ============================================ */

:root {
  /* Core Console Palette */
  --console-black: 0 0% 4%;           /* #0A0A0A — Primary background */
  --console-surface: 0 0% 8%;         /* #141414 — Cards, panels */
  --console-surface-hover: 0 0% 11%;  /* #1C1C1C — Hover states */
  --console-border: 0 0% 17%;         /* #2A2A2A — Borders, dividers */
  --console-border-subtle: 0 0% 12%;  /* #1F1F1F — Subtle separators */
  
  /* Text Hierarchy (all AAA compliant on console-black) */
  --console-text-primary: 0 0% 90%;   /* #E5E5E5 — Primary text */
  --console-text-secondary: 0 0% 64%; /* #A3A3A3 — Secondary text */
  --console-text-muted: 0 0% 40%;     /* #666666 — Disabled, hints */
  --console-text-inverse: 0 0% 4%;    /* #0A0A0A — Text on light bg */
  
  /* Brand Accent (use sparingly) */
  --console-brand: 338 73% 31%;       /* #681038 — CWT Burgundy */
  --console-brand-hover: 338 73% 26%; /* Darker on hover */
  
  /* Deal Stage Colors — Functional Only */
  --stage-lead: 0 0% 32%;             /* #525252 — Neutral gray */
  --stage-qualified: 217 91% 60%;     /* #3B82F6 — Blue */
  --stage-proposal: 271 81% 56%;      /* #A855F7 — Purple */
  --stage-negotiation: 38 92% 50%;    /* #F59E0B — Amber */
  --stage-won: 142 71% 45%;           /* #22C55E — Green */
  --stage-lost: 0 84% 60%;            /* #EF4444 — Red */
  --stage-hold: 220 9% 46%;           /* #6B7280 — Muted gray */
  
  /* Revenue Indicators */
  --revenue-positive: 142 71% 45%;    /* #22C55E */
  --revenue-negative: 0 84% 60%;      /* #EF4444 */
  --revenue-neutral: 217 91% 60%;     /* #3B82F6 */
  --revenue-warning: 38 92% 50%;      /* #F59E0B */
  
  /* Source Attribution */
  --source-upwork: 113 100% 33%;      /* #14A800 — Upwork green */
  --source-direct: 217 91% 60%;       /* #3B82F6 — Blue */
  --source-referral: 258 90% 66%;     /* #8B5CF6 — Purple */
  --source-website: 330 81% 60%;      /* #EC4899 — Pink */
  --source-assessment: 338 73% 31%;   /* #681038 — Burgundy (brand) */
}
```

---

## 3. Component Color Mapping

### 3.1 Layout Structure

| Component | Background | Border | Notes |
|-----------|------------|--------|-------|
| Page background | `console-black` | — | Full bleed |
| Sidebar | `console-surface` | `console-border` right | 240px fixed width |
| Main content | `console-black` | — | — |
| Cards/Panels | `console-surface` | `console-border` | 1px border, 2px radius |
| Table rows (alt) | `console-surface` | — | Every other row |
| Modal overlay | `console-black` at 80% opacity | — | — |
| Modal content | `console-surface` | `console-border` | — |

### 3.2 Interactive States

| State | Background Change | Border Change |
|-------|-------------------|---------------|
| Hover (card) | `console-surface` → `console-surface-hover` | No change |
| Hover (row) | Transparent → `console-surface-hover` | No change |
| Focus | No change | Add 1px `console-brand` outline |
| Active/Selected | `console-surface-hover` | Left border 2px `console-brand` |
| Disabled | No change | Reduce opacity to 50% |

### 3.3 Buttons

```css
/* Primary Action — Use for 1-2 buttons per view max */
.btn-primary {
  background: hsl(var(--console-brand));
  color: hsl(0 0% 100%);
  border: none;
}
.btn-primary:hover {
  background: hsl(var(--console-brand-hover));
}

/* Secondary Action — Most common */
.btn-secondary {
  background: transparent;
  color: hsl(var(--console-text-primary));
  border: 1px solid hsl(var(--console-border));
}
.btn-secondary:hover {
  background: hsl(var(--console-surface-hover));
}

/* Ghost — For tertiary actions */
.btn-ghost {
  background: transparent;
  color: hsl(var(--console-text-secondary));
  border: none;
}
.btn-ghost:hover {
  color: hsl(var(--console-text-primary));
}

/* Destructive — Delete, cancel actions */
.btn-destructive {
  background: transparent;
  color: hsl(var(--revenue-negative));
  border: 1px solid hsl(var(--revenue-negative) / 0.3);
}
.btn-destructive:hover {
  background: hsl(var(--revenue-negative) / 0.1);
}
```

---

## 4. Deal Stage Specification

### 4.1 Stage Colors Reference

| Stage | Variable | Hex | RGB | Usage |
|-------|----------|-----|-----|-------|
| Lead | `--stage-lead` | #525252 | 82, 82, 82 | New, unqualified |
| Qualified | `--stage-qualified` | #3B82F6 | 59, 130, 246 | Discovery complete |
| Proposal Sent | `--stage-proposal` | #A855F7 | 168, 85, 247 | Awaiting response |
| Negotiation | `--stage-negotiation` | #F59E0B | 245, 158, 11 | Active discussion |
| Closed Won | `--stage-won` | #22C55E | 34, 197, 94 | Revenue booked |
| Closed Lost | `--stage-lost` | #EF4444 | 239, 68, 68 | Did not close |
| On Hold | `--stage-hold` | #6B7280 | 107, 114, 128 | Paused/deferred |

### 4.2 Implementation Pattern

**DO NOT** use stage colors as full backgrounds. Use as indicators only:

```tsx
/* CORRECT — Left border indicator */
<div className="border-l-4" style={{ borderColor: `hsl(var(--stage-${stage}))` }}>
  <span className="text-console-text-primary">{dealName}</span>
</div>

/* CORRECT — Small dot indicator */
<div className="flex items-center gap-2">
  <span 
    className="w-2 h-2 rounded-full" 
    style={{ background: `hsl(var(--stage-${stage}))` }}
  />
  <span>{stageName}</span>
</div>

/* CORRECT — Subtle badge */
<span 
  className="px-2 py-0.5 text-xs font-mono rounded"
  style={{ 
    background: `hsl(var(--stage-${stage}) / 0.15)`,
    color: `hsl(var(--stage-${stage}))`
  }}
>
  {stageName}
</span>

/* WRONG — Full background fill */
<div style={{ background: `hsl(var(--stage-won))` }}>
  Won! <!-- Too loud, breaks industrial aesthetic -->
</div>
```

### 4.3 Kanban Board Columns

If implementing a kanban view:

```css
.kanban-column {
  background: hsl(var(--console-black));
  border: 1px solid hsl(var(--console-border));
}

.kanban-column-header {
  border-bottom: 2px solid hsl(var(--stage-COLOR));
  /* Where COLOR matches the stage */
}
```

---

## 5. Revenue & Financial Indicators

### 5.1 P&L Display Rules

| Condition | Color Variable | Display Format |
|-----------|----------------|----------------|
| Positive revenue/profit | `--revenue-positive` | +$XX,XXX or ↑ prefix |
| Negative/expense | `--revenue-negative` | -$XX,XXX or ↓ prefix |
| Neutral/projected | `--revenue-neutral` | $XX,XXX (no prefix) |
| Warning/overdue | `--revenue-warning` | Amber highlight |

### 5.2 Implementation

```tsx
/* Revenue number component */
const RevenueDisplay = ({ value }: { value: number }) => {
  const isPositive = value > 0;
  const isNegative = value < 0;
  
  return (
    <span 
      className="font-mono tabular-nums"
      style={{ 
        color: isPositive 
          ? 'hsl(var(--revenue-positive))' 
          : isNegative 
          ? 'hsl(var(--revenue-negative))' 
          : 'hsl(var(--console-text-primary))'
      }}
    >
      {isPositive && '+'}
      ${Math.abs(value).toLocaleString()}
    </span>
  );
};
```

### 5.3 Financial Tables

```css
/* Revenue table styling */
.revenue-table th {
  color: hsl(var(--console-text-muted));
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.revenue-table td {
  font-family: 'JetBrains Mono', monospace;
  font-variant-numeric: tabular-nums;
}

.revenue-table tr.total-row {
  border-top: 1px solid hsl(var(--console-border));
  font-weight: 600;
}
```

---

## 6. Source Attribution Badges

### 6.1 Badge Specifications

| Source | Variable | Badge Text |
|--------|----------|------------|
| Upwork | `--source-upwork` | UW |
| Direct Inbound | `--source-direct` | DIR |
| Referral | `--source-referral` | REF |
| Website Lead | `--source-website` | WEB |
| Assessment | `--source-assessment` | ASM |

### 6.2 Badge Component

```tsx
const SourceBadge = ({ source }: { source: string }) => {
  const config = {
    upwork: { var: '--source-upwork', label: 'UW' },
    direct: { var: '--source-direct', label: 'DIR' },
    referral: { var: '--source-referral', label: 'REF' },
    website: { var: '--source-website', label: 'WEB' },
    assessment: { var: '--source-assessment', label: 'ASM' },
  };
  
  const { var: cssVar, label } = config[source] || config.direct;
  
  return (
    <span 
      className="inline-flex items-center justify-center w-8 h-5 text-[10px] font-mono font-medium rounded"
      style={{ 
        background: `hsl(${cssVar} / 0.15)`,
        color: `hsl(${cssVar})`
      }}
    >
      {label}
    </span>
  );
};
```

---

## 7. Typography System

### 7.1 Font Stack

```css
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', 'Consolas', monospace;
}
```

### 7.2 Type Scale

| Element | Font | Size | Weight | Color | Tracking |
|---------|------|------|--------|-------|----------|
| Page title | Mono | 24px | 600 | `text-primary` | -0.02em |
| Section header | Mono | 14px | 500 | `text-primary` | 0 |
| Card title | Sans | 16px | 500 | `text-primary` | -0.01em |
| Body text | Sans | 14px | 400 | `text-secondary` | 0 |
| Table header | Mono | 11px | 500 | `text-muted` | 0.05em |
| Table data | Mono | 13px | 400 | `text-primary` | 0 |
| Label/caption | Sans | 12px | 400 | `text-muted` | 0 |
| Badge | Mono | 10px | 500 | varies | 0.02em |

### 7.3 Data Display

All numerical data (revenue, dates, IDs, percentages) should use:
- `font-family: var(--font-mono)`
- `font-variant-numeric: tabular-nums` (for aligned columns)

---

## 8. Component Specifications

### 8.1 Data Table

```tsx
<table className="w-full">
  <thead>
    <tr className="border-b border-console-border">
      <th className="text-left py-3 px-4 text-[11px] font-mono font-medium text-console-text-muted uppercase tracking-wide">
        Client
      </th>
      {/* ... */}
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-console-border-subtle hover:bg-console-surface-hover transition-colors">
      <td className="py-3 px-4 text-sm text-console-text-primary">
        {clientName}
      </td>
      {/* ... */}
    </tr>
  </tbody>
</table>
```

### 8.2 Sidebar Navigation

```tsx
<nav className="w-60 h-screen bg-console-surface border-r border-console-border">
  <div className="p-4 border-b border-console-border">
    {/* Logo */}
  </div>
  
  <div className="p-2">
    <NavItem icon={Pipeline} label="Pipeline" active />
    <NavItem icon={DollarSign} label="Revenue" />
    <NavItem icon={Users} label="Clients" />
    <NavItem icon={FileText} label="P&L Report" />
  </div>
</nav>

/* NavItem styles */
.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 4px;
  color: hsl(var(--console-text-secondary));
  transition: all 150ms;
}

.nav-item:hover {
  color: hsl(var(--console-text-primary));
  background: hsl(var(--console-surface-hover));
}

.nav-item.active {
  color: hsl(var(--console-text-primary));
  background: hsl(var(--console-surface-hover));
  border-left: 2px solid hsl(var(--console-brand));
}
```

### 8.3 Metric Cards

```tsx
<div className="bg-console-surface border border-console-border rounded p-4">
  <div className="text-[11px] font-mono text-console-text-muted uppercase tracking-wide mb-1">
    Monthly Revenue
  </div>
  <div className="text-2xl font-mono font-semibold text-console-text-primary tabular-nums">
    $47,500
  </div>
  <div className="text-xs font-mono text-revenue-positive mt-1">
    +12.3% vs last month
  </div>
</div>
```

---

## 9. Brand Integration Rules

### 9.1 Where Burgundy (#681038) Appears

✅ **DO USE** for:
- Primary CTA button (1 per view maximum)
- Active navigation indicator (left border)
- Logo/brand mark
- Focus rings
- Selected row indicator

❌ **DO NOT USE** for:
- Backgrounds
- Text (except on white/light backgrounds)
- Status indicators (use stage colors)
- Links (use `text-primary` with underline)
- Icons (use `text-secondary`)

### 9.2 Logo Treatment

In dark console theme:
- Use white or light gray logo variant
- No burgundy logo on dark backgrounds (low contrast)

---

## 10. Tailwind Config Extension

If using Tailwind, extend your config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        console: {
          black: 'hsl(var(--console-black))',
          surface: 'hsl(var(--console-surface))',
          'surface-hover': 'hsl(var(--console-surface-hover))',
          border: 'hsl(var(--console-border))',
          'border-subtle': 'hsl(var(--console-border-subtle))',
        },
        'console-text': {
          primary: 'hsl(var(--console-text-primary))',
          secondary: 'hsl(var(--console-text-secondary))',
          muted: 'hsl(var(--console-text-muted))',
        },
        stage: {
          lead: 'hsl(var(--stage-lead))',
          qualified: 'hsl(var(--stage-qualified))',
          proposal: 'hsl(var(--stage-proposal))',
          negotiation: 'hsl(var(--stage-negotiation))',
          won: 'hsl(var(--stage-won))',
          lost: 'hsl(var(--stage-lost))',
          hold: 'hsl(var(--stage-hold))',
        },
        revenue: {
          positive: 'hsl(var(--revenue-positive))',
          negative: 'hsl(var(--revenue-negative))',
          neutral: 'hsl(var(--revenue-neutral))',
          warning: 'hsl(var(--revenue-warning))',
        },
        source: {
          upwork: 'hsl(var(--source-upwork))',
          direct: 'hsl(var(--source-direct))',
          referral: 'hsl(var(--source-referral))',
          website: 'hsl(var(--source-website))',
          assessment: 'hsl(var(--source-assessment))',
        },
      },
    },
  },
};
```

---

## 11. Developer Prompt Template

Copy this prompt to give to your Lovable instance:

---

**PROMPT START**

Build an internal CRM admin dashboard for CWT Studio at `/admin` route. This is a dark-mode, industrial console interface for managing revenue operations.

**Design Requirements:**
- Dark console aesthetic: `#0A0A0A` background, `#141414` cards
- All text WCAG AAA compliant (use `#E5E5E5` primary, `#A3A3A3` secondary)
- Typography: JetBrains Mono for headings/data, Inter for body
- Squared corners (max 4px radius), no shadows, 1px borders
- Color only for functional indicators, never decoration
- Brand burgundy `#681038` only for primary CTA button and active nav states

**Deal Stages (implement as left-border or dot indicators):**
- Lead: `#525252` (gray)
- Qualified: `#3B82F6` (blue)
- Proposal Sent: `#A855F7` (purple)
- Negotiation: `#F59E0B` (amber)
- Closed Won: `#22C55E` (green)
- Closed Lost: `#EF4444` (red)
- On Hold: `#6B7280` (muted)

**Source Attribution Badges (small, 2-letter codes):**
- Upwork: `#14A800` → "UW"
- Direct: `#3B82F6` → "DIR"
- Referral: `#8B5CF6` → "REF"
- Website: `#EC4899` → "WEB"
- Assessment: `#681038` → "ASM"

**Dashboard Views:**
1. Pipeline (kanban + list view toggle)
2. Active Projects (table with stage, value, client, source)
3. Revenue Log (date, amount, project, type)
4. P&L Summary (income vs expenses, monthly rollup)
5. Forecast (projected revenue by stage probability)

**Database Tables Needed:**
- `projects` (id, client_name, stage, value, source, start_date, status)
- `revenue_events` (id, project_id, type, amount, date, description)
- `pipeline` (id, company_name, stage, expected_value, probability, source, next_action, next_action_date)

Add proper RLS policies. Use the CSS variables from the CRM design specification document.

**PROMPT END**

---

## 12. File Checklist

When building, ensure these files are created/modified:

- [ ] `src/index.css` — Add console theme CSS variables
- [ ] `tailwind.config.ts` — Extend with console colors
- [ ] `src/pages/Admin.tsx` — Main dashboard layout
- [ ] `src/components/admin/Sidebar.tsx` — Navigation
- [ ] `src/components/admin/PipelineView.tsx` — Deal pipeline
- [ ] `src/components/admin/ProjectsTable.tsx` — Active projects
- [ ] `src/components/admin/RevenueLog.tsx` — Transaction history
- [ ] `src/components/admin/PLSummary.tsx` — P&L report
- [ ] `src/components/admin/MetricCard.tsx` — KPI display
- [ ] `src/components/admin/StageBadge.tsx` — Deal stage indicator
- [ ] `src/components/admin/SourceBadge.tsx` — Lead source badge
- [ ] Database migration for tables

---

*End of CWT Studio CRM Design Specification*
