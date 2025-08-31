self.addEventListener('fetch', event => {
  // This is a simple pass-through service worker, required for the PWA install prompt.
  // It ensures the app works correctly by letting the browser handle requests.
  event.respondWith(fetch(event.request));
});