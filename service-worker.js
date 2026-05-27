// ==============================
// 🛡️ PRECISION CUTZ - SAFE SERVICE WORKER
// ==============================

// Install
self.addEventListener("install", event => {
  self.skipWaiting();
});

// Activate
self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

// ✅ CRITICAL FIX: Safe fetch handler
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        return response;
      })
      .catch(error => {
        console.warn("Fetch failed:", error);

        // Return safe fallback instead of crashing
        return new Response(
          JSON.stringify({ error: "Offline or server unavailable" }),
          {
            status: 503,
            headers: { "Content-Type": "application/json" }
          }
        );
      })
  );
});
