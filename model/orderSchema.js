const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderItems: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      productName: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, default: 1 },
      _id: false,
    },
  ],
  orderDate: { type: String },
  orderStatus: {
    type: String,
    enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
    default: "pending",
  },
  totalAmount: { type: Number, required: true },
  shippingAddress: {
    addressLine1: { type: String },
    addressLine2: { type: String },
    state: { type: String },
    city: { type: String },
    pinCode: { type: String },
    country: { type: String },
    _id: false,
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "success", "failed"],
    default: "pending",
  },
  paymentMethod: {
    type: String,
    enum: ["cod", "creditcard", "debitcard", "netBanking", "upi", "payPal"],
    default: "cod",
  },
  paymentMethodDetail: {},
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
