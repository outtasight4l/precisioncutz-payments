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
  let num = parseFloat(amount || "0");

  let formatted = num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  document.getElementById("display").innerText = "$" + formatted;
}

/* ACTIONS */
function requestMoney() {
  alert("Request $" + (amount || "0.00"));
}

function payMoney() {
  alert("Pay $" + (amount || "0.00"));
}
