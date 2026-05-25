const express = require("express");
const app = express();

app.use(express.json());

let payments = {};

// PAYMENT WEBHOOK
app.post("/api/webhook", (req,res)=>{
  const data = req.body;

  if(data.payment_status === "finished"){
    payments[data.order_id] = "paid";
  }

  res.sendStatus(200);
});

// CHECK STATUS
app.get("/api/check/:id",(req,res)=>{
  res.json({status: payments[req.params.id] || "pending"});
});

// AI (REAL)
app.post("/api/ai", async (req,res)=>{
  const msg = req.body.message;

  // Simple smart response (replace with OpenAI later)
  let reply = "I can help with bookings & payments.";

  if(msg.includes("price")) reply = "Lawn service starts at $50";

  res.json({reply});
});

app.listen(3000, ()=>console.log("Running"));
