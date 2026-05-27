let input = document.getElementById("amount");

/* SPLASH */
window.onload = () => {
  setTimeout(() => {
    document.getElementById("splash").classList.add("fade-out");
  }, 1800);
};

/* KEYPAD */
function press(num) {
  input.value += num;
}

function clearInput() {
  input.value = input.value.slice(0, -1);
}

/* SIDEBAR */
function openMenu() {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("overlay").classList.add("active");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("overlay").classList.remove("active");
}

/* NAV */
function openProfile() {
  window.location.href = "profile.html";
}

function goHome() {
  closeMenu();
}

function goPayments() {
  alert("Payments Page");
}

function goReceipts() {
  alert("Receipts Page");
}

function goCustomers() {
  alert("Customers Page");
}

function goSettings() {
  alert("Settings Page");
}

function logout() {
  alert("Logged Out");
}

/* PAY */
function pay() {
  window.open(
    "https://nowpayments.io/payment/?iid=6386319463",
    "_blank"
  );
}

/* REQUEST */
function requestPayment() {
  alert("Request Sent");
}
