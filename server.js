const express = require("express");
const app = express();

app.use(express.json());

let payments = {};

// WEBHOOK (NOWPayments hits this)
app.post("/api/webhook", (req, res) => {
  const data = req.body;

  const orderId = data.order_id;
  const status = data.payment_status;

  console.log("Webhook received:", data);

  if (status === "finished") {
    payments[orderId] = "paid";
  } else {
    payments[orderId] = "pending";
  }

  res.sendStatus(200);
});

// CHECK PAYMENT
app.get("/api/check/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    status: payments[id] || "pending"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
