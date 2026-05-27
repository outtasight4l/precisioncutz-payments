// ==============================
// 🔥 WAKE BACKEND
// ==============================
function wakeServer() {
  fetch("https://precisioncutz-payments.onrender.com/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: "ping" })
  }).catch(() => {});
}

wakeServer();


// ==============================
// 🤖 AI FUNCTION
// ==============================
async function openAI() {
  try {
    const message = prompt("Ask AI Assistant:");
    if (!message) return;

    const res = await fetch("https://precisioncutz-payments.onrender.com/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    if (!res.ok) throw new Error("Server offline");

    const data = await res.json();

    alert(data.reply || "No response");

  } catch (err) {
    console.error(err);
    alert("⚠️ AI waking up. Try again.");
  }
}
