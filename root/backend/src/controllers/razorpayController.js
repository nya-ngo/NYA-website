import crypto from "crypto";
import Razorpay from "razorpay";

const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = process.env;

if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
  throw new Error(
    "RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be set in environment variables",
  );
}

const razorpay = new Razorpay({
  key_id: RAZORPAY_KEY_ID,
  key_secret: RAZORPAY_KEY_SECRET,
});

export async function createOrder(req, res, next) {
  try {
    const { amount, currency = "INR", receipt } = req.body;

    if (amount == null) {
      return res.status(400).json({ message: "Amount is required" });
    }

    const numericAmount = Number(amount);
    if (Number.isNaN(numericAmount) || numericAmount < 100) {
      return res.status(400).json({
        message: "Amount must be a number and at least 100 paise",
      });
    }

    const orderData = {
      amount: numericAmount,
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(orderData);

    return res.status(201).json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
    });
  } catch (error) {
    if (error.statusCode === 401) {
      return res
        .status(401)
        .json({ message: "Razorpay authentication failed" });
    }

    next(error);
  }
}

export async function verifyPayment(req, res, next) {
  try {
    const { order_id, payment_id, signature } = req.body;

    if (!order_id || !payment_id || !signature) {
      return res.status(400).json({
        message: "order_id, payment_id, and signature are required",
      });
    }

    const payload = `${order_id}|${payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", RAZORPAY_KEY_SECRET)
      .update(payload)
      .digest("hex");

    if (expectedSignature !== signature) {
      return res
        .status(400)
        .json({ message: "Payment signature verification failed" });
    }

    return res.json({
      success: true,
      message: "Payment signature verified successfully",
    });
  } catch (error) {
    next(error);
  }
}
