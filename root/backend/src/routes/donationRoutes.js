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
console.log(1)
router.get("/recent-donation", getRecentDonations);
router.get("/top-donations", getTopDonations);

router.post("/create-order", createOrder);
router.post("/verify-payment", verifyPayment);

router.route("/post").post(createDonation)
router.route("/").get(getDonations)
router
  .route("/:id")
  .get(getDonationById)
  .put(updateDonation)
  .delete(deleteDonation);

export default router;
