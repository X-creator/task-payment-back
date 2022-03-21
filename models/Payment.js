const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  amount: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 7
  },
  cardNumber: {
    type: String,
    required: true,
    minLength: 16,
    maxLength: 16
  },
  cvv: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 3
  },
  expiration: {
    month: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 2
    },
    year: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 4
    }
  }
});

module.exports = mongoose.model("Payment", PaymentSchema);