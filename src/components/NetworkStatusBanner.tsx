import { useNetworkStatus } from '@/hooks/useNetworkStatus';
import { WifiOff, Wifi } from 'lucide-react';

export default function NetworkStatusBanner() {
  const { isOffline, wasOffline } = useNetworkStatus();

  if (!isOffline && !wasOffline) {
    return null;
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 text-center text-sm font-medium transition-colors ${
        isOffline
          ? 'bg-destructive text-destructive-foreground'
          : 'bg-green-600 text-white'
      }`}
    >
      <div className="flex items-center justify-center gap-2">
        {isOffline ? (
          <>
            <WifiOff className="h-4 w-4" />
            <span>You're offline. Some features may be unavailable.</span>
          </>
        ) : (
          <>
            <Wifi className="h-4 w-4" />
            <span>You're back online!</span>
          </>
        )}
      </div>
    </div>
  );
}
