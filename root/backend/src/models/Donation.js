import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    donorName: { type: String, required: true },
    email: { type: String },
    phoneNumber: { type: String },
    panCard: { type: String },
    amount: { type: Number, required: true },
    orderId: { type: String, unique: true, sparse: true },
    paymentId: { type: String },
    paymentStatus: {
      type: String,
      enum: ["created", "success", "failure", "pending"],
      default: "created",
    },
    message: { type: String },
  },
  {
    timestamps: true,
  },
);

const Donation = mongoose.model("Donation", donationSchema);
export default Donation;
