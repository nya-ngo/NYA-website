import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    donorName: { type: String, required: true },
    amount: { type: Number, required: true },
    email: { type: String },
    message: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  },
);

const Donation = mongoose.model("Donation", donationSchema);
export default Donation;
