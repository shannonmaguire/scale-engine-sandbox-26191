import { Section } from "@/components/ui/section";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Badge } from "@/components/ui/badge";
import { Button, type ButtonProps } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

/**
 * CWT Studio Design System Documentation
 * Fortune 500-grade design token reference
 */
const DesignSystem = () => {
  const colorTokens = [
    {
      category: "Core Brand",
      tokens: [
        { name: "--burgundy", value: "327 82% 31%", hex: "#681038", usage: "Primary/Conversion CTAs" },
        { name: "--forest", value: "135 27% 15%", hex: "#1B3022", usage: "Authority/Navigation" },
        { name: "--deep-black", value: "0 0% 0%", hex: "#010400", usage: "All Text" },
      ]
    },
    {
      category: "Data & Intelligence",
      tokens: [
        { name: "--teal", value: "184 28% 44%", hex: "#52939C", usage: "Data/Analytics/Interaction" },
        { name: "--yellow-green", value: "75 100% 90%", hex: "#F0FFCE", usage: "Success/Spotlight" },
      ]
    },
    {
      category: "Warm & Supporting",
      tokens: [
        { name: "--warm-tan", value: "47 27% 71%", hex: "#CCC9A1", usage: "Differentiator/Warmth" },
        { name: "--muted-gray", value: "240 3% 61%", hex: "#9999A1", usage: "Supporting/Secondary" },
      ]
    },
    {
      category: "Surface Colors - Warmed",
      tokens: [
        { name: "--gray-very-light", value: "40 15% 96%", hex: "#F9F8F5", usage: "Cards/Elevation" },
        { name: "--gray-light", value: "40 12% 91%", hex: "#EBE9E3", usage: "Background Foundation" },
      ]
    }
  ];

  const semanticTokens = [
    { name: "--primary", maps: "var(--burgundy)", usage: "Primary actions, CTAs" },
    { name: "--accent", maps: "var(--teal)", usage: "Data visualization, interactions" },
    { name: "--success", maps: "var(--yellow-green)", usage: "Success states, highlights" },
    { name: "--warm", maps: "var(--warm-tan)", usage: "Alternating sections, warmth" },
    { name: "--authority", maps: "var(--forest)", usage: "Navigation, authority" },
  ];

  const typographyScale = [
    { class: ".heading-page", size: "64px / 48px / 36px", weight: "700", usage: "Page hero headings" },
    { class: ".heading-section", size: "48px / 36px / 28px", weight: "700", usage: "Major section headings" },
    { class: ".heading-subsection", size: "32px / 24px / 20px", weight: "600", usage: "Component headings" },
    { class: ".text-description", size: "18px / 18px / 16px", weight: "400", usage: "Body copy, descriptions" },
    { class: ".text-label", size: "14px", weight: "500", usage: "Labels, metadata" },
  ];

  const spacingSystem = [
    { token: "--spacing-baseline", value: "5rem (80px)", usage: "Standard section spacing" },
    { token: "--spacing-half", value: "2.5rem (40px)", usage: "Mobile section spacing" },
    { token: "--spacing-quarter", value: "1.25rem (20px)", usage: "Internal component spacing" },
    { token: "--spacing-gutter", value: "1.5rem (24px)", usage: "Grid gutter width" },
  ];

  type ButtonVariantName = NonNullable<ButtonProps["variant"]>;
  const buttonVariantShowcase: Array<{ variant: ButtonVariantName; class: string; usage: string }> = [
    { variant: "default", class: "bg-primary", usage: "Primary conversion actions" },
    { variant: "outline", class: "border-2 border-muted-foreground", usage: "Secondary actions" },
    { variant: "ghost", class: "hover:bg-accent/10", usage: "Tertiary, inline actions" },
    { variant: "warm", class: "border-2 border-warm", usage: "Warm/differentiating CTAs" },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="CWT Studio Design System | Creator Wealth Tools UI Standards"
        description="Explore the design language powering CWT Studio's business automation, Salesforce, web, and mobile experiences through Creator Wealth Tools."
        keywords={[
          'CWT Studio design system',
          'Creator Wealth Tools UI',
          'business automation design tokens',
          'Salesforce app design standards'
        ]}
        noindex
      />

      {/* Hero */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="system-badge bg-primary text-primary-foreground">
              Design System
            </div>
          </div>
          <h1 className="heading-page mb-6">CWT Studio Design System</h1>
          <p className="text-description">
            Fortune 500-grade design tokens, components, and guidelines. Built for consistency, accessibility, and performance.
          </p>
        </div>
      </Section>

      {/* Color Tokens */}
      <Section variant="muted">
        <h2 className="heading-section mb-8">Color System</h2>
        <p className="text-description mb-12 max-w-3xl">
          A professional 9-color palette with strategic purpose. Every color is HSL-based for consistent theming.
        </p>
        
        <div className="space-y-12">
          {colorTokens.map((group) => (
            <div key={group.category}>
              <h3 className="heading-subsection mb-6">{group.category}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {group.tokens.map((token) => (
                  <StandardCard key={token.name}>
                    <StandardCardHeader>
                      <div 
                        className="h-24 rounded-lg mb-4 border border-border"
                        style={{ backgroundColor: token.hex }}
                      />
                      <StandardCardTitle className="text-lg">
                        {token.name}
                      </StandardCardTitle>
                    </StandardCardHeader>
                    <StandardCardContent>
                      <div className="space-y-2 font-mono text-sm">
                        <div className="text-muted-foreground">HSL: {token.value}</div>
                        <div className="text-muted-foreground">HEX: {token.hex}</div>
                        <Badge variant="outline" className="mt-2">{token.usage}</Badge>
                      </div>
                    </StandardCardContent>
                  </StandardCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Semantic Tokens */}
      <Section>
        <h2 className="heading-section mb-8">Semantic Tokens</h2>
        <p className="text-description mb-12 max-w-3xl">
          Color tokens mapped to semantic purposes for consistent theming across light and dark modes.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {semanticTokens.map((token) => (
            <StandardCard key={token.name}>
              <StandardCardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <code className="font-mono font-semibold">{token.name}</code>
                  <Badge variant="data">{token.maps}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{token.usage}</p>
              </StandardCardContent>
            </StandardCard>
          ))}
        </div>
      </Section>

      {/* Typography Scale */}
      <Section variant="muted">
        <h2 className="heading-section mb-8">Typography Scale</h2>
        <p className="text-description mb-12 max-w-3xl">
          Responsive typography system with JetBrains Mono for headings and Inter for body copy. Sizes shown as Desktop / Tablet / Mobile.
        </p>
        
        <div className="space-y-6">
          {typographyScale.map((type) => (
            <StandardCard key={type.class}>
              <StandardCardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-xs text-muted-foreground font-mono mb-2">CLASS</div>
                    <code className="font-mono font-semibold">{type.class}</code>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-mono mb-2">SIZE</div>
                    <div className="font-mono text-sm tabular-nums">{type.size}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-mono mb-2">USAGE</div>
                    <div className="text-sm">{type.usage}</div>
                  </div>
                </div>
              </StandardCardContent>
            </StandardCard>
          ))}
        </div>
      </Section>

      {/* Spacing System */}
      <Section>
        <h2 className="heading-section mb-8">Spacing System</h2>
        <p className="text-description mb-12 max-w-3xl">
          80px baseline rhythm for editorial spacing. Consistent vertical rhythm across all sections.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {spacingSystem.map((space) => (
            <StandardCard key={space.token}>
              <StandardCardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <code className="font-mono font-semibold">{space.token}</code>
                  <Badge variant="outline" className="font-mono tabular-nums">{space.value}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{space.usage}</p>
              </StandardCardContent>
            </StandardCard>
          ))}
        </div>
      </Section>

      {/* Button System */}
      <Section variant="muted">
        <h2 className="heading-section mb-8">Button System</h2>
        <p className="text-description mb-12 max-w-3xl">
          Consistent button variants with standardized sizing: sm (px-6 py-3), md (px-8 py-4), lg (px-10 py-5).
        </p>
        
        <div className="space-y-8">
          <div>
            <h3 className="heading-subsection mb-6">Variants</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {buttonVariantShowcase.map((btn) => (
                <StandardCard key={btn.variant}>
                  <StandardCardContent className="p-6">
                    <div className="mb-6">
                      <Button variant={btn.variant} className="w-full mb-3">
                        {btn.variant} Button
                      </Button>
                      <code className="font-mono text-xs text-muted-foreground">{btn.class}</code>
                    </div>
                    <p className="text-sm text-muted-foreground">{btn.usage}</p>
                  </StandardCardContent>
                </StandardCard>
              ))}
            </div>
          </div>

          <div>
            <h3 className="heading-subsection mb-6">Sizes</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="sm">Small Button</Button>
              <Button size="default">Default Button</Button>
              <Button size="lg">Large Button</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Motion & Timing */}
      <Section>
        <h2 className="heading-section mb-8">Motion & Timing</h2>
        <p className="text-description mb-12 max-w-3xl">
          Professional micro-interactions with Fortune 500 standard timing (150-250ms). All transitions use ease-out curves.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <StandardCard>
            <StandardCardContent className="p-6">
              <div className="text-xs text-muted-foreground font-mono mb-2">FAST</div>
              <code className="font-mono font-semibold">0.15s ease-out</code>
              <p className="text-sm text-muted-foreground mt-4">Instant feedback, button states</p>
            </StandardCardContent>
          </StandardCard>
          
          <StandardCard>
            <StandardCardContent className="p-6">
              <div className="text-xs text-muted-foreground font-mono mb-2">STANDARD</div>
              <code className="font-mono font-semibold">0.2s ease-out</code>
              <p className="text-sm text-muted-foreground mt-4">Hover effects, transitions</p>
            </StandardCardContent>
          </StandardCard>
          
          <StandardCard>
            <StandardCardContent className="p-6">
              <div className="text-xs text-muted-foreground font-mono mb-2">SLOW</div>
              <code className="font-mono font-semibold">0.3s ease-out</code>
              <p className="text-sm text-muted-foreground mt-4">Modal transitions, page changes</p>
            </StandardCardContent>
          </StandardCard>
        </div>
      </Section>

      {/* Guidelines */}
      <Section variant="muted">
        <h2 className="heading-section mb-8">Usage Guidelines</h2>
        
        <div className="space-y-8 max-w-3xl">
          <div>
            <h3 className="heading-subsection mb-4">Accessibility</h3>
            <ul className="space-y-2 text-description">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>All color combinations meet WCAG 2.1 AA contrast standards</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Focus states use 2px ring with primary color</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Keyboard navigation fully supported across all components</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Form errors announced with aria-live regions</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="heading-subsection mb-4">Performance</h3>
            <ul className="space-y-2 text-description">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>All animations use GPU-accelerated properties (transform, opacity)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Lazy loading implemented for below-the-fold content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Font preloading for critical web fonts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Target: 95+ Lighthouse scores across all metrics</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="heading-subsection mb-4">Brand Consistency</h3>
            <ul className="space-y-2 text-description">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Always use semantic tokens, never hard-coded colors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>JetBrains Mono for all headings and technical content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Inter for body copy and descriptions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Maintain operator console aesthetic across all touchpoints</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default DesignSystem;
