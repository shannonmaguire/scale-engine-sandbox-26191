export const RevenueArchitectureDiagram = () => {
  const components = [
    {
      layer: "01",
      label: "Your CRM Foundation",
      description: "The way your data is organized. Fields, objects, how things connect.",
      ifSkipped: "Everything you build on top inherits the mess. Bad data from day one."
    },
    {
      layer: "02",
      label: "Connected Tools",
      description: "Your tools actually talking to each other. Data flows where it needs to go.",
      ifSkipped: "You're copy-pasting between systems. Reports show different numbers."
    },
    {
      layer: "03",
      label: "Lead Routing",
      description: "The right lead gets to the right rep. No one fights over territory.",
      ifSkipped: "Leads sit in a queue. Reps cherry-pick. Good deals slip through."
    },
    {
      layer: "04",
      label: "Automations",
      description: "Follow-ups happen without you. Tasks create themselves. Nothing falls through.",
      ifSkipped: "You're still doing it manually. The admin work never ends."
    },
    {
      layer: "05",
      label: "Reporting That Works",
      description: "Dashboards you actually trust. Forecasts based on real data.",
      ifSkipped: "The board asks a question. You make up a number."
    },
    {
      layer: "06",
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
        <h2 className="heading-section mb-6">How We Build It</h2>

        <p className="text-base text-muted-foreground mb-10 max-w-2xl">
          Skip a layer. Everything downstream breaks.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {components.map((component, index) => (
            <div 
              key={index}
              className="border border-border bg-card/50 flex flex-col h-full"
            >
              <div className="p-4 md:p-6 flex-grow flex flex-col">
                <div className="font-mono text-xs text-primary font-semibold mb-3">
                  LAYER {component.layer}
                </div>

                <div className="font-mono text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                  {component.label}
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed flex-grow">
                  {component.description}
                </p>
              </div>

              <div className="border-t border-destructive/20 bg-destructive/5 p-4 min-h-[88px]">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-destructive">If skipped: </span>
                  <span className="text-xs text-foreground/80">{component.ifSkipped}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-primary/20">
          <p className="text-sm text-muted-foreground text-center">
            This is the order. Starting layer stages.
          </p>
        </div>
      </div>
    </div>
  );
};