import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface JourneyStep {
  name: string;
  href: string;
  completed?: boolean;
  current?: boolean;
}

interface ServiceJourneyFlowProps {
  steps: JourneyStep[];
}

export const ServiceJourneyFlow = ({ steps }: ServiceJourneyFlowProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="font-mono text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
        Service Journey
      </h3>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {steps.map((step, index) => (
          <div key={step.name} className="flex items-center gap-4 flex-1">
            {/* Step */}
            <Link 
              to={step.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all flex-1 ${
                step.current 
                  ? 'border-primary bg-primary/10' 
                  : step.completed 
                    ? 'border-primary/30 bg-primary/5 hover:border-primary/50' 
                    : 'border-border bg-background hover:border-border/80'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                step.current 
                  ? 'bg-primary text-primary-foreground' 
                  : step.completed 
                    ? 'bg-primary/20 text-primary' 
                    : 'bg-muted text-muted-foreground'
              }`}>
                {step.completed ? (
                  <CheckCircle size={16} />
                ) : (
                  <span className="font-mono text-xs font-bold">{index + 1}</span>
                )}
              </div>
              
              <div className="flex-1">
                <div className={`font-mono text-sm font-semibold ${
                  step.current ? 'text-primary' : step.completed ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step.name}
                </div>
                {step.current && (
                  <div className="text-xs text-primary font-mono mt-0.5">
                    You are here
                  </div>
                )}
              </div>
            </Link>
            
            {/* Arrow */}
            {index < steps.length - 1 && (
              <ArrowRight 
                size={20} 
                className="hidden sm:block text-muted-foreground flex-shrink-0" 
              />
            )}
          </div>
        ))}
      </div>
      
      <p className="text-xs text-muted-foreground mt-4 font-mono">
        → Complete services in sequence for best results
      </p>
    </div>
  );
};
