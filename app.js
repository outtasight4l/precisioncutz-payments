// ==============================
// 🤖 AI ASSISTANT (FIXED)
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

    // ✅ FIX: handle server asleep / failure
    if (!res.ok) {
      throw new Error("Server not ready");
    }

    const data = await res.json();

    alert(data.reply || "No response from AI");

  } catch (err) {
    console.error("AI ERROR:", err);

    alert("⚠️ AI waking up. Try again in 5 seconds.");
  }
}
