let amount = "";

function press(val) {
  if (val === "." && amount.includes(".")) return;
  amount += val;
  updateDisplay();
}

function del() {
  amount = amount.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  console.log("Amount:", amount || "0");

  // OPTIONAL: overlay display later if you want
}

function requestMoney() {
  alert("Request $" + (amount || "0"));
}

function payMoney() {
  alert("Pay $" + (amount || "0"));
}
