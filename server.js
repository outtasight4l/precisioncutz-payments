const express = require("express");
const stripe = require("stripe")("YOUR_SECRET_KEY");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/create-payment", async (req, res) => {

const session = await stripe.checkout.sessions.create({
payment_method_types: ["card"],
line_items: [{
price_data: {
currency: "usd",
product_data: { name: "Lawn Service" },
unit_amount: req.body.amount
},
quantity: 1
}],
mode: "payment",
success_url: "https://your-site.com",
cancel_url: "https://your-site.com"
});

res.json({ id: session.id });

});

app.listen(3000);
