function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("show");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}

/* ===== NAVIGATION ===== */

function goHome() {
  alert("Home");
  closeSidebar();
}

function openPayments() {
  window.open("https://nowpayments.io/payment/?iid=6386319463", "_blank");
  closeSidebar();
}

function openReceipts() {
  alert("Receipts page");
  closeSidebar();
}

function openCustomers() {
  alert("Customers page");
  closeSidebar();
}

function openWallet() {
  alert("Wallet page");
  closeSidebar();
}

function openAnalytics() {
  alert("Analytics page");
  closeSidebar();
}

function openRoutes() {
  alert("Routes page");
  closeSidebar();
}

function openSettings() {
  alert("Settings page");
  closeSidebar();
}

function openSupport() {
  alert("Support");
  closeSidebar();
}

function logout() {
  alert("Logged out");
  closeSidebar();
}
