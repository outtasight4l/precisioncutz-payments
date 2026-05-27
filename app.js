let input = "";

// NUMBER INPUT
function press(num) {
  input += num;
  document.getElementById("display").innerText = input;
}

// QR BUTTON
function scanQR() {
  alert("QR Scanner clicked");
}

// AI BUTTON
function openAI() {
  alert("AI Assistant clicked");
}
