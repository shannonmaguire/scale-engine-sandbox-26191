import { Database, Zap, BarChart3, FileText, GitBranch, Server } from "lucide-react";

export const RevenueArchitectureDiagram = () => {
  const components = [
    {
      icon: Server,
      label: "CRM Core",
      description: "Salesforce foundation, object model, field architecture"
    },
    {
      icon: Database,
      label: "Data Layer",
      description: "Integration points, data sync, quality controls"
    },
    {
      icon: GitBranch,
      label: "Routing & Pipeline Engine",
      description: "Lead routing, assignment logic, territory management"
    },
    {
      icon: Zap,
      label: "Automation Layer",
      description: "Workflow rules, process automation, trigger logic"
    },
    {
      icon: BarChart3,
      label: "Reporting Layer",
      description: "Dashboards, forecasting, executive metrics"
    },
    {
      icon: FileText,
      label: "Documentation + Handoff",
      description: "SOPs, field definitions, admin protocols"
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
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-px bg-primary" />
          <h2 className="heading-section">CWT Revenue Infrastructure Architecture</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component, index) => (
            <div 
              key={index}
              className="relative border border-primary/30 bg-card/50 backdrop-blur-sm p-6 group hover:border-primary/50 transition-colors"
            >
              {/* Corner accent marks */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/50" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/50" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/50" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/50" />

              {/* Component number */}
              <div className="font-mono text-xs text-primary/50 mb-3">
                [{String(index + 1).padStart(2, '0')}]
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
              <p className="text-xs text-muted-foreground leading-relaxed">
                {component.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical notation footer */}
        <div className="mt-10 pt-6 border-t border-primary/20">
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
            <div>SCHEMA v2.0</div>
            <div>90-DAY DEPLOYMENT CYCLE</div>
            <div>PRODUCTION-READY</div>
          </div>
        </div>
      </div>
    </div>
  );
};
