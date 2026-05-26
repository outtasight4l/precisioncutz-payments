let amount = "";

function addNumber(num) {
  if (num === "." && amount.includes(".")) return;

  amount += num;
  updateDisplay();
}

function clearAmount() {
  amount = amount.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("amount").innerText =
    amount === "" ? "0.00" : parseFloat(amount).toFixed(2);
}
