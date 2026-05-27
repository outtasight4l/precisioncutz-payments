const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_live_OR_test_key_here"); // 🔥 PUT YOUR SECRET KEY HERE

const app = express();
const fetch = require("node-fetch");

app.use(cors());
app.use(express.json());

// CREATE CHECKOUT SESSION
app.post("/create-payment", async (req, res) => {
  try {
    const amount = Math.round(req.body.amount * 100); // ✅ convert to cents

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Precision Cutz Lawn Service"
            },
            unit_amount: amount
          },
          quantity: 1
        }
      ],

      mode: "payment",

      // 🔥 CHANGE THESE TO YOUR REAL SITE
      success_url: "https://outtasight4l.github.io/success.html",
      cancel_url: "https://outtasight4l.github.io/cancel.html"
    });

    res.json({ id: session.id });

  } catch (err) {
    console.error(err);
    res.status(500).send("Payment error");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
