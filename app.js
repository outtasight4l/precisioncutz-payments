// AUTO IMAGE LOADER (FIXES ui.PNG ISSUE)
const img = document.getElementById("uiImage");

const possibleNames = ["ui.png", "ui.PNG", "Ui.png", "UI.PNG"];

function loadImage(i = 0) {
  if (i >= possibleNames.length) return;
  img.src = possibleNames[i];
  img.onerror = () => loadImage(i + 1);
}
loadImage();


// AMOUNT LOGIC
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

  // AUTO SCALE FONT
  let size = 6;
  if (formatted.length > 10) size = 5;
  if (formatted.length > 14) size = 4;
  if (formatted.length > 18) size = 3;

  display.style.fontSize = size + "vw";
}


// ACTIONS
function requestPay() {
  alert("Request: $" + value);
}

function payNow() {
  alert("Pay: $" + value);
}
