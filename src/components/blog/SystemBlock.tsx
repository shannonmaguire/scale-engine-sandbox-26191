import { ReactNode } from 'react';

interface SystemBlockProps {
  phase: string;
  title: string;
  children: ReactNode;
}

export const SystemBlock = ({ phase, title, children }: SystemBlockProps) => {
  return (
    <div className="my-16 border-2 border-border bg-muted/50 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-200 group">
      <div className="bg-muted border-b-2 border-border px-8 py-4">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {phase}
          </span>
          <div className="h-px bg-border flex-1"></div>
        </div>
      </div>
      
      <div className="p-8">
        <h4 className="text-xl font-mono font-bold text-foreground mb-6 border-l-4 border-primary pl-4">
          {title}
        </h4>
        
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};
