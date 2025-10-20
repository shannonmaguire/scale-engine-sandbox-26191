// CWT Studio Service Worker - Performance Optimization
// Cache version - increment when assets change
const CACHE_VERSION = 'cwt-v3';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const DYNAMIC_CACHE = `${CACHE_VERSION}-dynamic`;

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/index.css',
];

// Cache size limits
const MAX_DYNAMIC_CACHE_SIZE = 50;

// Helper: Limit cache size
const limitCacheSize = async (cacheName, maxSize) => {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  
  if (keys.length > maxSize) {
    await cache.delete(keys[0]);
    await limitCacheSize(cacheName, maxSize);
  }
};

// Detect environment (dev/prod)
const isDevelopment = self.location.hostname === 'localhost' || 
                      self.location.hostname === '127.0.0.1' ||
                      self.location.hostname.includes('preview');

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...', isDevelopment ? '(dev mode)' : '(production)');
  
  // Skip caching in development to avoid stale content
  if (isDevelopment) {
    event.waitUntil(self.skipWaiting());
    return;
  }
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...', isDevelopment ? '(dev mode)' : '(production)');
  
  event.waitUntil(
    caches.keys()
      .then(keys => {
        // In development, clear all caches to avoid conflicts
        if (isDevelopment) {
          console.log('[SW] Development mode: clearing all caches');
          return Promise.all(keys.map(key => caches.delete(key)));
        }
        
        // In production, clean up old versions
        return Promise.all(
          keys
            .filter(key => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
            .map(key => {
              console.log('[SW] Removing old cache:', key);
              return caches.delete(key);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Listen for skip waiting message
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Fetch event - network-first for HTML, cache-first for assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip external requests
  if (url.origin !== location.origin) return;
  
  // Skip Vite dev paths
  if (url.pathname.startsWith('/@vite') || url.pathname.startsWith('/src/')) return;
  
  // In development, bypass caching entirely
  if (isDevelopment) return;
  
  // Network-first strategy for HTML/navigation requests
  const isHTMLRequest = request.mode === 'navigate' || 
                        request.headers.get('Accept')?.includes('text/html');
  
  if (isHTMLRequest) {
    event.respondWith(
      fetch(request)
        .then(networkResponse => {
          // Don't cache HTML to avoid stale content
          return networkResponse;
        })
        .catch(() => {
          // Fallback to cache if offline
          return caches.match(request)
            .then(cachedResponse => cachedResponse || caches.match('/offline.html'));
        })
    );
    return;
  }
  
  // Cache-first strategy for assets (JS, CSS, images, etc.)
  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // Fetch from network and cache dynamic assets
        return fetch(request)
          .then(networkResponse => {
            // Only cache successful responses
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }
            
            // Clone response (can only be consumed once)
            const responseToCache = networkResponse.clone();
            
            caches.open(DYNAMIC_CACHE)
              .then(cache => {
                cache.put(request, responseToCache);
                limitCacheSize(DYNAMIC_CACHE, MAX_DYNAMIC_CACHE_SIZE);
              });
            
            return networkResponse;
          })
          .catch(() => {
            console.log('[SW] Fetch failed, offline');
          });
      })
  );
});
