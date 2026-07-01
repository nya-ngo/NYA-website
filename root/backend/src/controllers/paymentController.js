import * as paymentService from "../services/paymentService.js";

export async function getPayments(req, res, next) {
  try {
    const payments = await paymentService.listPayments();
    res.json(payments);
  } catch (error) {
    next(error);
  }
}

export async function getPaymentById(req, res, next) {
  try {
    const payment = await paymentService.findPaymentById(req.params.id);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.json(payment);
  } catch (error) {
    next(error);
  }
}

export async function createPayment(req, res, next) {
  try {
    const payment = await paymentService.createPayment(req.body);
    res.status(201).json(payment);
  } catch (error) {
    next(error);
  }
}

export async function updatePayment(req, res, next) {
  try {
    const payment = await paymentService.updatePayment(req.params.id, req.body);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.json(payment);
  } catch (error) {
    next(error);
  }
}

export async function deletePayment(req, res, next) {
  try {
    const payment = await paymentService.removePayment(req.params.id);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.json({ message: "Payment deleted successfully" });
  } catch (error) {
    next(error);
  }
}
