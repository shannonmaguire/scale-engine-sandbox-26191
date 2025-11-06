import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
const SystemDiagram = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    // Animate progress bar on mount
    const timer = setTimeout(() => setProgress(97), 100);
    return () => clearTimeout(timer);
  }, []);
  const processes = [{
    step: "01",
    title: "ASSESS",
    items: ["Infrastructure audit", "Assessment complete"],
    delay: "[animation-delay:100ms]"
  }, {
    step: "02",
    title: "BUILD",
    items: ["System implementation", "Sprint execution"],
    delay: "[animation-delay:200ms]"
  }, {
    step: "03",
    title: "OPERATE",
    items: ["Ongoing maintenance", "Performance monitoring"],
    delay: "[animation-delay:300ms]"
  }];
  return <div className="w-full bg-card border border-border rounded-2xl font-mono overflow-hidden cursor-default" role="img" aria-label="Backend revenue system architecture diagram showing assessment, build, and operate phases">
      {/* Console Header */}
      <div className="border-b border-border p-3 bg-muted/5">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-xs font-mono text-muted-foreground">SYSTEM STATUS</span>
          </div>
          <span className="text-xs font-mono text-primary font-bold">ONLINE</span>
        </div>
      </div>
      
      {/* Console Content */}
      <div className="p-4 space-y-4">
        {/* Process Flow */}
        <div className="space-y-3">
          <div className="text-xs text-muted-foreground mb-3 animate-fade-in">REVENUE.SYS PROCESS FLOW:</div>
          
          <div className="grid grid-cols-3 gap-3 text-xs relative">
            {/* Connecting arrows */}
            
            

            {processes.map((process, index) => <div key={index} className={`space-y-2 p-3 rounded-lg bg-muted/5 border border-transparent hover:border-primary/20 hover:bg-muted/10 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-primary/5 animate-fade-in ${process.delay}`}>
                <div className="text-primary font-bold flex items-center gap-2">
                  <span className="text-xs opacity-60">{process.step}</span>
                  <span>{process.title}</span>
                </div>
                {process.items.map((item, i) => <div key={i} className="text-muted-foreground text-xs leading-relaxed">
                    {item}
                  </div>)}
              </div>)}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="space-y-2 animate-fade-in [animation-delay:600ms]">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>SYSTEM.PERFORMANCE</span>
            <span className="tabular-nums">{progress}%</span>
          </div>
          <div className="h-1 bg-muted/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000 ease-out" style={{
            width: `${progress}%`
          }}></div>
          </div>
        </div>
        
        {/* Status Indicators */}
        <div className="border-t border-border pt-3 mt-4">
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="space-y-1 animate-fade-in [animation-delay:700ms]">
              <div className="text-muted-foreground text-xs">UPTIME:</div>
              <div className="tabular-nums text-foreground font-bold">99.97%</div>
            </div>
            <div className="space-y-1 animate-fade-in [animation-delay:800ms]">
              <div className="text-muted-foreground text-xs">PIPELINE.HEALTH:</div>
              <div className="text-primary tabular-nums font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                OPTIMAL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default SystemDiagram;
