// ==============================
// 🛡️ SAFE SERVICE WORKER FIX
// ==============================

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

// ✅ FIXED: prevents "Load failed" crash
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response("Offline", {
        status: 503,
        statusText: "Offline"
      });
    })
  );
});
