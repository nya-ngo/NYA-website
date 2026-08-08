import crypto from "crypto";
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
  const orderId = payload.order_id || crypto.randomUUID();
  return Donation.create({
    name: payload.name,
    email: payload.email,
    phonenumber: payload.phonenumber,
    pancard: payload.pancard,
    amount: payload.amount,
    orderId,
    paymentStatus: "created",
  });
}

export async function verifyPayment(orderId, payload) {
  const update = {
    name: payload.name,
    email: payload.email,
    phonenumber: payload.phonenumber,
    pancard: payload.pancard,
    amount: payload.amount,
    paymentId: payload.payment_id,
    paymentStatus: payload.payment_status,
  };

  return Donation.findOneAndUpdate({ orderId }, update, {
    new: true,
    runValidators: true,
  });
}

export async function getRecentDonations(limit = 5) {
  return Donation.find().sort({ createdAt: -1 }).limit(limit).lean();
}

export async function getTopDonations(limit = 5) {
  return Donation.find({ paymentStatus: "success" })
    .sort({ amount: -1, createdAt: -1 })
    .limit(limit)
    .lean();
}
