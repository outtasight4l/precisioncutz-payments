let value = "0.00";

/* DISPLAY */
function updateDisplay() {
  document.getElementById("amount").innerText = "$" + value;
}

/* INPUT */
function press(num) {
  if (value === "0.00") value = "";
  value += num;
  format();
}

function dot() {
  if (!value.includes(".")) value += ".";
  format();
}

function clearLast() {
  value = value.slice(0, -1);
  if (value === "" || value === ".") value = "0.00";
  format();
}

function format() {
  let num = parseFloat(value);
  if (isNaN(num)) num = 0;
  value = num.toFixed(2);
  updateDisplay();
}

/* BUTTON ACTIONS */
function requestMoney() {
  alert("Request $" + value);
}

function payMoney() {
  alert("Pay $" + value);
}

function openQR() {
  alert("QR Scanner coming next");
}

/* AI SYSTEM */
function openAI() {
  document.getElementById("chatModal").style.display = "flex";
}

function closeAI() {
  document.getElementById("chatModal").style.display = "none";
}

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.innerText = text;
  msg.style.margin = "5px";
  msg.style.color = type === "user" ? "#00ff99" : "#fff";
  document.getElementById("chatMessages").appendChild(msg);
}

async function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value;

  if (!text) return;

  addMessage("You: " + text, "user");
  input.value = "";

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: text }]
      })
    });

    const data = await res.json();
    const reply = data.choices[0].message.content;

    addMessage("AI: " + reply, "ai");

  } catch (err) {
    addMessage("AI Error: Check API Key", "ai");
  }
}
