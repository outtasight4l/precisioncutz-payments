const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("YOUR_STRIPE_SECRET_KEY");
const fetch = require("node-fetch");

// ✅ ADD THIS
const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: ak_7kki7q3_aNbFM5ZkP0AaJ6V8WGlGUf-r
});

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   💳 STRIPE PAYMENT ROUTE
========================= */
app.post("/create-payment", async (req, res) => {
  try {
    const amount = Math.round(req.body.amount * 100);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{
        price_data: {
          currency: "usd",
          product_data: {
            name: "Precision Cutz Lawn Service"
          },
          unit_amount: amount
        },
        quantity: 1
      }],
      mode: "payment",
      success_url: "https://outtasight4l.github.io",
      cancel_url: "https://outtasight4l.github.io"
    });

    res.json({ id: session.id });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   🤖 AI ASSISTANT ROUTE
========================= */
app.post("/ai", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an assistant for a lawn care business. Help customers book, answer pricing, and give service info."
        },
        {
          role: "user",
          content: userMessage
        }
      ]
    });

    res.json({
      reply: response.choices[0].message.content
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
