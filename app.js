let value = "";

function press(num) {
    if (num === '.' && value.includes('.')) return;
    value += num;
    update();
}

function clearAll() {
    value = value.slice(0, -1);
    update();
}

function update() {
    let display = document.getElementById("price");

    if (value === "") {
        display.innerText = "0.00";
        return;
    }

    let number = parseFloat(value);
    if (isNaN(number)) number = 0;

    display.innerText = number.toFixed(2);

    autoFit(display);
}

/* 🔥 AUTO FIT TEXT (REAL FIX) */
function autoFit(el) {
    let size = 60;
    el.style.fontSize = size + "px";

    while (el.scrollWidth > el.clientWidth && size > 20) {
        size--;
        el.style.fontSize = size + "px";
    }
}

function request() {
    alert("Request sent: $" + document.getElementById("price").innerText);
}

function pay() {
    alert("Processing payment: $" + document.getElementById("price").innerText);
}
