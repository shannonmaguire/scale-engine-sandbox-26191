import { useEffect, useState } from "react";
import { Users, CheckCircle2, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialProofNotification {
  id: string;
  message: string;
  icon: "users" | "check" | "trending";
  timestamp: Date;
}

/**
 * Social proof notification component
 * Displays real-time activity to build trust and urgency
 */
export const SocialProof = () => {
  const [notification, setNotification] = useState<SocialProofNotification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const notifications: Omit<SocialProofNotification, "id" | "timestamp">[] = [
    { message: "Someone just booked an assessment from San Francisco", icon: "check" },
    { message: "3 companies reviewed our sample report today", icon: "users" },
    { message: "New client onboarded in the healthcare sector", icon: "trending" },
    { message: "Assessment completed for a Series B SaaS company", icon: "check" },
    { message: "5 downloads of our revenue ops guide this hour", icon: "users" },
  ];

  useEffect(() => {
    const showNotification = () => {
      // Random notification
      const randomNotif = notifications[Math.floor(Math.random() * notifications.length)];
      
      setNotification({
        ...randomNotif,
        id: Math.random().toString(36),
        timestamp: new Date(),
      });
      
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 5 seconds
    const initialTimer = setTimeout(showNotification, 5000);

    // Show subsequent notifications every 15-25 seconds
    const interval = setInterval(() => {
      const randomDelay = 15000 + Math.random() * 10000;
      setTimeout(showNotification, randomDelay);
    }, 25000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!notification) return null;

  const IconComponent = {
    users: Users,
    check: CheckCircle2,
    trending: TrendingUp,
  }[notification.icon];

  return (
    <div
      className={cn(
        "fixed bottom-6 left-6 z-40",
        "max-w-sm",
        "bg-card border-2 border-primary/20 rounded-lg shadow-lg",
        "p-4",
        "transition-all duration-500 ease-out",
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      )}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <IconComponent className="w-5 h-5 text-primary" aria-hidden="true" />
        </div>
        
        <div className="flex-1">
          <p className="text-sm font-medium text-foreground mb-1">
            {notification.message}
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            {formatTimeAgo(notification.timestamp)}
          </p>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Dismiss notification"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

function formatTimeAgo(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  
  if (seconds < 60) return "Just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
  return `${Math.floor(seconds / 3600)} hours ago`;
}
