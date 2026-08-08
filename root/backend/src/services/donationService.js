import Donation from "../models/Donation.js";

export async function listDonations() {
  return Donation.find().sort({ createdAt: -1 });
}

export async function findDonationById(id) {
  return Donation.findById(id);
}

export async function createDonation(payload) {
  return Donation.create(payload);
}

export async function updateDonation(id, payload) {
  return Donation.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
}

export async function removeDonation(id) {
  return Donation.findByIdAndDelete(id);
}

export async function createOrder(payload) {
  const orderId = payload.orderId || `order_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
  return Donation.create({
    donorName: payload.donorName,
    email: payload.email,
    phoneNumber: payload.phoneNumber,
    panCard: payload.panCard,
    amount: payload.amount,
    orderId,
    paymentStatus: "created",
    message: payload.message,
  });
}

export async function verifyPayment(orderId, payload) {
  const update = {
    donorName: payload.donorName,
    email: payload.email,
    phoneNumber: payload.phoneNumber,
    panCard: payload.panCard,
    amount: payload.amount,
    paymentId: payload.paymentId,
    paymentStatus: payload.paymentStatus,
  };

  return Donation.findOneAndUpdate({ orderId }, update, {
    new: true,
    runValidators: true,
  });
}

export async function getRecentDonations(limit = 5) {
  return Donation.find()
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean();
}

export async function getTopDonations(limit = 5) {
  return Donation.find({ paymentStatus: "success" })
    .sort({ amount: -1, createdAt: -1 })
    .limit(limit)
    .lean();
}
