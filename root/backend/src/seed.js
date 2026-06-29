import dotenv from "dotenv";
import connectDB from "./config/db.js";
import User from "./models/User.js";
import Payment from "./models/Payment.js";

dotenv.config();

async function seed() {
  await connectDB();

  const userId = new User({
    _id: "686ac1230000000000000000",
    name: "Tasila Poorna Shree",
    email: "tasila@gmail.com",
    phone: "9876543210",
    pan: "ABCDE1234F",
    createdAt: new Date("2026-06-25"),
  }).save();

  await new Payment({
    _id: "99ab34000000000000000000",
    userId: userId._id,
    amount: 5000,
    paymentMethod: "UPI",
    transactionId: "TXN987654",
    status: "SUCCESS",
    createdAt: new Date("2026-06-25"),
  }).save();

  console.log("Seed data inserted.");
  process.exit(0);
}

seed().catch((error) => {
  console.error("Failed to seed database:", error);
  process.exit(1);
});
