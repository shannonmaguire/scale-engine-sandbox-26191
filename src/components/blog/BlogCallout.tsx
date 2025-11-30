import { ReactNode } from 'react';
import { AlertCircle, CheckCircle, Info, Lightbulb } from 'lucide-react';

interface BlogCalloutProps {
  type?: 'info' | 'success' | 'warning' | 'executive';
  title?: string;
  children: ReactNode;
}

export const BlogCallout = ({ type = 'info', title, children }: BlogCalloutProps) => {
  const icons = {
    info: Info,
    success: CheckCircle,
    warning: AlertCircle,
    executive: Lightbulb,
  };

  const styles = {
    info: 'bg-accent/10 border-accent text-foreground',
    success: 'bg-success/20 border-success text-foreground',
    warning: 'bg-destructive/10 border-destructive text-foreground',
    executive: 'bg-muted/40 border-border text-foreground',
  };

  const Icon = icons[type];

  return (
    <div className={`my-12 p-6 rounded-lg border-l-4 ${styles[type]} border border-border`}>
      <div className="flex gap-4">
        <Icon className="h-6 w-6 flex-shrink-0 mt-1" />
        <div className="flex-1">
          {title && (
            <h4 className="font-mono font-bold text-lg mb-3">{title}</h4>
          )}
          <div className="text-foreground/90 leading-relaxed space-y-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
