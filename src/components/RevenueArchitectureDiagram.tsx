import { Database, Zap, BarChart3, FileText, GitBranch, Server, AlertTriangle } from "lucide-react";

export const RevenueArchitectureDiagram = () => {
  // Dependency-sequenced layers with "if skipped" consequences
  const components = [
    {
      layer: "01",
      icon: Server,
      label: "CRM Core",
      description: "Salesforce foundation, object model, field architecture",
      ifSkipped: "All downstream automations inherit structural debt. Data quality degrades from day one."
    },
    {
      layer: "02",
      icon: Database,
      label: "Data Layer",
      description: "Integration points, data sync, quality controls",
      ifSkipped: "Reporting becomes fiction. Decisions made on incomplete or stale information."
    },
    {
      layer: "03",
      icon: GitBranch,
      label: "Routing & Pipeline Engine",
      description: "Lead routing, assignment logic, territory management",
      ifSkipped: "Leads rot in queue. Assignment disputes. Territory conflicts multiply."
    },
    {
      layer: "04",
      icon: Zap,
      label: "Automation Layer",
      description: "Workflow rules, process automation, trigger logic",
      ifSkipped: "Manual processes persist. Administrative overhead never decreases."
    },
    {
      layer: "05",
      icon: BarChart3,
      label: "Reporting Layer",
      description: "Dashboards, forecasting, executive metrics",
      ifSkipped: "Board asks questions you cannot answer. Forecast confidence collapses."
    },
    {
      layer: "06",
      icon: FileText,
      label: "Documentation + Handoff",
      description: "SOPs, field definitions, admin protocols",
      ifSkipped: "Knowledge leaves when people leave. Every transition resets to zero."
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
          <h2 className="heading-section">Revenue Infrastructure Architecture</h2>
        </div>

        <p className="text-base text-muted-foreground mb-10 max-w-2xl">
          Six layers in dependency order. Each layer requires the previous. Skipping layers creates compounding debt.
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
              <div className="border-t border-destructive/20 bg-destructive/5 p-4 min-h-[72px]">
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

        {/* Technical notation footer */}
        <div className="mt-10 pt-6 border-t border-primary/20">
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
            <div>SCHEMA v2.0</div>
            <div>DEPENDENCY ORDER: NON-NEGOTIABLE</div>
            <div>90-DAY CYCLE</div>
          </div>
        </div>
      </div>
    </div>
  );
};