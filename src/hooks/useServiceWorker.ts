import { useEffect } from 'react';

/**
 * Register and manage service worker for offline capabilities and caching
 */
export const useServiceWorker = () => {
  useEffect(() => {
    // Only register in production
    if (import.meta.env.PROD && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then((registration) => {
            console.log('✅ Service Worker registered:', registration.scope);
            
            // Auto-update: listen for new service worker
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing;
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // New service worker available, skip waiting
                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                  }
                });
              }
            });
            
            // Check for updates periodically
            setInterval(() => {
              registration.update();
            }, 60000); // Check every minute
          })
          .catch((error) => {
            console.error('❌ Service Worker registration failed:', error);
          });
      });
      
      // Reload page when new service worker takes control
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('🔄 Service Worker updated, reloading...');
        window.location.reload();
      });
    }
  }, []);
};
