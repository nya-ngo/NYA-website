import express from "express";
import {
  createDonation,
  getDonations,
  getDonationById,
  updateDonation,
  deleteDonation,
  createOrder,
  verifyPayment,
  getRecentDonations,
  getTopDonations,
} from "../controllers/donationController.js";

const router = express.Router();

router.route("/").get(getDonations).post(createDonation);
router.post("/create-order", createOrder);
router.post("/verify-payment", verifyPayment);
router.get("/recent-donation", getRecentDonations);
router.get("/top-donations", getTopDonations);
router
  .route("/:id")
  .get(getDonationById)
  .put(updateDonation)
  .delete(deleteDonation);

export default router;
