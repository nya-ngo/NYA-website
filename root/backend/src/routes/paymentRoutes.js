import express from "express";
import {
  createPayment,
  deletePayment,
  getPaymentById,
  getPayments,
  updatePayment,
} from "../controllers/paymentController.js";

const router = express.Router();

router.route("/").get(getPayments).post(createPayment);
router
  .route("/:id")
  .get(getPaymentById)
  .put(updatePayment)
  .delete(deletePayment);

export default router;
