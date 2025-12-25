import { Database, Zap, BarChart3, FileText, GitBranch, Server, AlertTriangle } from "lucide-react";

export const RevenueArchitectureDiagram = () => {
  // Dependency-sequenced layers with "if skipped" consequences
  const components = [
    {
      layer: "01",
      icon: Server,
      label: "Your CRM Foundation",
      description: "The way your data is organized. Fields, objects, how things connect.",
      ifSkipped: "Everything you build on top inherits the mess. Bad data from day one."
    },
    {
      layer: "02",
      icon: Database,
      label: "Connected Tools",
      description: "Your tools actually talking to each other. Data flows where it needs to go.",
      ifSkipped: "You're copy-pasting between systems. Reports show different numbers."
    },
    {
      layer: "03",
      icon: GitBranch,
      label: "Lead Routing",
      description: "The right lead gets to the right rep. No one fights over territory.",
      ifSkipped: "Leads sit in a queue. Reps cherry-pick. Good deals slip through."
    },
    {
      layer: "04",
      icon: Zap,
      label: "Automations",
      description: "Follow-ups happen without you. Tasks create themselves. Nothing falls through.",
      ifSkipped: "You're still doing it manually. The admin work never ends."
    },
    {
      layer: "05",
      icon: BarChart3,
      label: "Reporting That Works",
      description: "Dashboards you actually trust. Forecasts based on real data.",
      ifSkipped: "The board asks a question. You make up a number."
    },
    {
      layer: "06",
      icon: FileText,
      label: "Documentation",
      description: "How things work, written down. Your team can run it without you.",
      ifSkipped: "Someone leaves, and the knowledge leaves with them."
    }
  ];

  return (
    <div className="relative">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{
             backgroundImage: `
               linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
               linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
             `,
             backgroundSize: '20px 20px'
           }}
      />

      <div className="relative">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-primary" />
          <h2 className="heading-section">How We Build It</h2>
        </div>

        <p className="text-base text-muted-foreground mb-10 max-w-2xl">
          Six layers. Each one depends on the one before it. Skip a layer, and everything downstream breaks.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component, index) => (
            <div 
              key={index}
              className="relative border border-primary/30 bg-card/50 backdrop-blur-sm group hover:border-primary/50 transition-colors flex flex-col h-full"
            >
              {/* Corner accent marks */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/50" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/50" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/50" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/50" />

              <div className="p-6 flex-grow flex flex-col">
                {/* Layer number - prominent */}
                <div className="font-mono text-xs text-primary font-semibold mb-3">
                  LAYER {component.layer}
                </div>

                {/* Icon */}
                <div className="w-10 h-10 border border-primary/30 flex items-center justify-center mb-4 group-hover:border-primary/50 transition-colors">
                  <component.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>

                {/* Label */}
                <div className="font-mono text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                  {component.label}
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed flex-grow">
                  {component.description}
                </p>
              </div>

              {/* If Skipped consequence */}
              <div className="border-t border-destructive/20 bg-destructive/5 p-4 min-h-[88px]">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-3 h-3 text-destructive flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-destructive">If skipped: </span>
                    <span className="text-xs text-foreground/80">{component.ifSkipped}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-primary/20">
          <p className="text-sm text-muted-foreground text-center">
            This is the order. We don't skip steps.
          </p>
        </div>
      </div>
    </div>
  );
};