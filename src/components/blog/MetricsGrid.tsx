import { ReactNode } from 'react';

interface Metric {
  value: string;
  label: string;
}

interface MetricsGridProps {
  title?: string;
  metrics: Metric[];
  children?: ReactNode;
}

export const MetricsGrid = ({ title, metrics, children }: MetricsGridProps) => {
  return (
    <div className="my-20">
      {title && (
        <h3 className="text-2xl font-mono font-bold text-foreground mb-8 text-center">
          {title}
        </h3>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div 
            key={index}
            className={`bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-200 ${index === 0 ? 'border-l-2 border-l-primary' : ''}`}
          >
            <div className="text-3xl font-mono font-bold text-primary mb-2">
              {metric.value}
            </div>
            <div className="text-sm font-mono uppercase tracking-wide text-muted-foreground">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
      
      {children && (
        <div className="mt-6 text-center text-sm text-muted-foreground">
          {children}
        </div>
      )}
    </div>
  );
};
