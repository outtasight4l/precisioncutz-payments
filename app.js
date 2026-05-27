let input = "";

// ==============================
// 🔢 INPUT
// ==============================
function press(value) {
  input += value;
  updateDisplay();
}

function clearInput() {
  input = "";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").innerText = input || "0";
}

// ==============================
// 💰 NOWPAYMENTS XRP PAY
// ==============================
async function payNow() {
  if (!input) {
    alert("Enter amount");
    return;
  }

  try {
    const res = await fetch("https://api.nowpayments.io/v1/invoice", {
      method: "POST",
      headers: {
        "x-api-key": "REPLACE_WITH_YOUR_API_KEY",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price_amount: parseFloat(input),
        price_currency: "usd",
        pay_currency: "xrp"
      })
    });

    const data = await res.json();

    if (data.invoice_url) {
      window.location.href = data.invoice_url;
    } else {
      console.log(data);
      alert("Payment failed");
    }

  } catch (err) {
    console.error(err);
    alert("Connection error");
  }
}

// ==============================
// 🤖 AI
// ==============================
function openAI() {
  alert("AI Assistant coming next");
}

// ==============================
// 📷 QR
// ==============================
function scanQR() {
  alert("QR Scanner coming next");
}
