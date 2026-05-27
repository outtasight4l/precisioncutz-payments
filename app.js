// AUTO LOAD IMAGE (handles PNG / png issues)
const img = document.getElementById("uiImage");

const possibleNames = [
  "ui.png",
  "ui.PNG",
  "Ui.png",
  "UI.PNG"
];

function loadImage(index = 0) {
  if (index >= possibleNames.length) {
    console.error("UI image not found.");
    return;
  }

  img.src = possibleNames[index];

  img.onerror = () => loadImage(index + 1);
}

loadImage();
let value = "0";

function press(num) {
  if (num === "." && value.includes(".")) return;

  if (value === "0" && num !== ".") {
    value = num;
  } else {
    value += num;
  }

  update();
}

function del() {
  value = value.slice(0, -1);
  if (value === "") value = "0";
  update();
}

function update() {
  let display = document.getElementById("amount");

  let num = parseFloat(value);
  if (isNaN(num)) num = 0;

  let formatted = num.toFixed(2);

  display.innerText = formatted;

  // AUTO RESIZE TO NEVER OVERFLOW BOX
  let size = 6;
  if (formatted.length > 10) size = 5;
  if (formatted.length > 14) size = 4;
  if (formatted.length > 18) size = 3;

  display.style.fontSize = size + "vw";
}

/* ACTION BUTTONS */

function requestPay() {
  alert("Request Sent: $" + value);
}

function payNow() {
  alert("Payment Sent: $" + value);
}
