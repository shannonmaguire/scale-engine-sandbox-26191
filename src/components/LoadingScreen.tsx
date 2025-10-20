import { useState, useEffect } from 'react';
import cwtLogoBlack from "@/assets/cwt-logo-black.svg";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const skipIntro = () => {
    setIsVisible(false);
    setTimeout(() => onComplete(), 400);
  };

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? 1500 : 2400;
    
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + (100 / (duration / 50));
      });
    }, 50);

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete(), 500);
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-[9999] overflow-hidden bg-background"
      role="dialog"
      aria-label="Loading CWT Studio"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/30" />

      <div className={`relative h-full flex flex-col items-center justify-center px-6 transition-all duration-700 ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}>
        
        {/* Logo */}
        <div className="mb-8 md:mb-12 lg:mb-14 transition-all duration-1000 ease-out"
             style={{
               transform: showContent ? 'scale(1)' : 'scale(0.92)',
               opacity: showContent ? 1 : 0
             }}>
          <div className="relative">
            <div className="absolute -inset-10 bg-primary/5 blur-3xl rounded-full" 
                 style={{
                   animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                 }} />
            <img 
              src={cwtLogoBlack} 
              alt="CWT Studio"
              width="256"
              height="64"
              loading="eager"
              decoding="async"
              className="h-16 md:h-24 lg:h-28 w-auto relative z-10"
              style={{ filter: 'drop-shadow(0 4px 24px rgba(104, 16, 56, 0.15))' }}
            />
          </div>
        </div>

        {/* System message */}
        <h1 className="font-mono text-base md:text-lg font-medium text-foreground uppercase tracking-[0.25em] mb-10 md:mb-14 lg:mb-16 text-center">
          Initializing Revenue Infrastructure
        </h1>

        {/* Progress bar */}
        <div className="relative w-full max-w-md mt-2">
          <div className="h-[2px] bg-border/40 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent"
                   style={{
                     animation: 'shimmer 1.5s infinite',
                     backgroundSize: '200% 100%'
                   }} />
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <span className="font-mono text-xs text-muted-foreground tabular-nums">
              {Math.round(progress)}%
            </span>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
              Loading
            </span>
          </div>
        </div>
      </div>

      {/* Skip button */}
      <button
        onClick={skipIntro}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-3 py-2"
        aria-label="Skip loading animation"
      >
        Skip
      </button>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;