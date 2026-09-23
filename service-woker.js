// Minimal service worker — enables "Add to Home Screen" installability.
// (Full offline caching can be added later; this is enough for install prompts.)
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});