let value = "";

function press(num) {
  if (value.length < 10) {
    value += num;
    update();
  }
}

function clearDisplay() {
  value = "";
  update();
}

function update() {
  document.getElementById("display").innerText =
    "$" + (value || "0.00");
}

/* BUTTON ACTIONS */

function openQR() {
  alert("QR Scanner coming next");
}

function openAI() {
  alert("AI Assistant opening");
}

function requestMoney() {
  alert("Request $" + value);
}

function payMoney() {
  alert("Pay $" + value);
}
