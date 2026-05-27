// ==============================
// 🛡️ SAFE SERVICE WORKER
// ==============================

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

// ✅ Prevent crash on failed fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(res => res)
      .catch(() => {
        return new Response("Offline", {
          status: 503,
          statusText: "Offline"
        });
      })
  );
});
