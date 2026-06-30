import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, required: true, trim: true },
    transactionId: { type: String, required: true, unique: true, trim: true },
    status: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  },
);

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
