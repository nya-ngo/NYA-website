import Donation from "../models/Donation.js";

export async function getDonations(req, res, next) {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.json(donations);
  } catch (error) {
    next(error);
  }
}

export async function getDonationById(req, res, next) {
  try {
    const donation = await Donation.findById(req.params.id);

    if (!donation) {
      return res.status(404).json({ message: "Donation not found" });
    }

    res.json(donation);
  } catch (error) {
    next(error);
  }
}

export async function createDonation(req, res, next) {
  try {
    const { donorName, amount, email, message } = req.body;

    const donation = new Donation({ donorName, amount, email, message });
    await donation.save();

    res.status(201).json(donation);
  } catch (error) {
    next(error);
  }
}

export async function updateDonation(req, res, next) {
  try {
    const donation = await Donation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!donation) {
      return res.status(404).json({ message: "Donation not found" });
    }

    res.json(donation);
  } catch (error) {
    next(error);
  }
}

export async function deleteDonation(req, res, next) {
  try {
    const donation = await Donation.findByIdAndDelete(req.params.id);

    if (!donation) {
      return res.status(404).json({ message: "Donation not found" });
    }

    res.json({ message: "Donation deleted successfully" });
  } catch (error) {
    next(error);
  }
}
