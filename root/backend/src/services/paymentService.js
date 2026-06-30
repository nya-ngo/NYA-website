import Payment from "../models/Payment.js";

export async function listPayments() {
  return Payment.find()
    .sort({ createdAt: -1 })
    .populate("userId", "name email phone pan");
}

export async function findPaymentById(id) {
  return Payment.findById(id).populate("userId", "name email phone pan");
}

export async function createPayment(payload) {
  const payment = new Payment(payload);
  return payment.save();
}

export async function updatePayment(id, payload) {
  return Payment.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  }).populate("userId", "name email phone pan");
}

export async function removePayment(id) {
  return Payment.findByIdAndDelete(id);
}
