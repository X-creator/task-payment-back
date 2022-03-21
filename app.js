const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const Payment = require("./models/Payment");

connectDB();
app.use(cors());
app.use(bodyParser.json());

app.post("/", async (req, res, next) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();

    const response = {
      requestId: payment._id,
      amount: payment.amount,
      cardNumber: payment.cardNumber,
      cvv: payment.cvv,
      expiration: payment.expiration
    };
    res.json(response);
    next();
  } catch (e) {
    res.json({ err_message: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});