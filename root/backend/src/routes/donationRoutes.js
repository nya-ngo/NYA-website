import express from "express";
import {
  createDonation,
  getDonations,
  getDonationById,
  updateDonation,
  deleteDonation,
} from "../controllers/donationController.js";

const router = express.Router();

router.route("/").get(getDonations).post(createDonation);
router
  .route("/:id")
  .get(getDonationById)
  .put(updateDonation)
  .delete(deleteDonation);

export default router;
