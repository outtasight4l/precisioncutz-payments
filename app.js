let amount = "";

/* INPUT */
function press(val) {
  if (val === "." && amount.includes(".")) return;
  amount += val;
  updateDisplay();
}

function del() {
  amount = amount.slice(0, -1);
  updateDisplay();
}

/* DISPLAY */
function updateDisplay() {
  let display = document.getElementById("display");

  let num = parseFloat(amount || "0");

  let formatted = num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  // animation pop
  display.style.transform = "translate(-50%, -50%) scale(1.1)";
  setTimeout(() => {
    display.style.transform = "translate(-50%, -50%) scale(1)";
  }, 100);

  display.innerText = "$" + formatted;
}

/* ACTIONS */
function requestMoney() {
  alert("Request $" + (amount || "0.00"));
}

function payMoney() {
  alert("Pay $" + (amount || "0.00"));
}

function resetAmount() {
  amount = "";
  updateDisplay();
}

/* TOP ICONS */
function openQR() {
  alert("QR Scanner coming next");
}

function openAI() {
  alert("AI Assistant coming next");
}
