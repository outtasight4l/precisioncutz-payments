let amount = "";

/* INPUT */
function press(val) {
  if (val === "." && amount.includes(".")) return;

  amount += val;
  update();
}

function del() {
  amount =
