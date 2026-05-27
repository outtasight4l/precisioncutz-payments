let amount = "";

function press(num) {
  amount += num;
  document.getElementById("amount").innerText = "$" + amount;
}

function clearAmount() {
  amount = amount.slice(0, -1);
  document.getElementById("amount").innerText = "$" + (amount || "0.00");
}

function payNow() {
  alert("Processing Payment: $" + amount);
}

function requestMoney() {
  alert("Requesting: $" + amount);
}

function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

/* SPLASH TO APP */
setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
}, 7000);
