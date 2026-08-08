import {
  listDonations,
  findDonationById,
  createDonation as createDonationService,
  updateDonation as updateDonationService,
  removeDonation as removeDonationService,
  createOrder as createOrderService,
  verifyPayment as verifyPaymentService,
  getRecentDonations as getRecentDonationsService,
  getTopDonations as getTopDonationsService,
} from "../services/donationService.js";

function formatRelativeDate(date) {
  if (!date) return null;
  const ms = Date.now() - new Date(date).getTime();
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  return "just now";
}

export async function getDonations(req, res, next) {
  try {
    const donations = await listDonations();
    return res.json(donations);
  } catch (error) {
    next(error);
  }
}

export async function getDonationById(req, res, next) {
  try {
    const donation = await findDonationById(req.params.id);
    if (!donation) {
      return res.status(404).json({ message: "Donation not found" });
    }
    return res.json(donation);
  } catch (error) {
    next(error);
  }
}

export async function createDonation(req, res, next) {
  try {
    const { donorName, email, phoneNumber, panCard, amount, message } =
      req.body;

    if (!donorName || amount == null) {
      return res
        .status(400)
        .json({ message: "donorName and amount are required" });
    }

    const donation = await createDonationService({
      donorName,
      email,
      phoneNumber,
      panCard,
      amount,
      message,
    });

    return res.status(201).json(donation);
  } catch (error) {
    next(error);
  }
}

export async function updateDonation(req, res, next) {
  try {
    const donation = await updateDonationService(req.params.id, req.body);
    if (!donation) {
      return res.status(404).json({ message: "Donation not found" });
    }
    return res.json(donation);
  } catch (error) {
    next(error);
  }
}

export async function deleteDonation(req, res, next) {
  try {
    const donation = await removeDonationService(req.params.id);
    if (!donation) {
      return res.status(404).json({ message: "Donation not found" });
    }
    return res.json({ message: "Donation deleted" });
  } catch (error) {
    next(error);
  }
}

export async function createOrder(req, res, next) {
  try {
    const { name, email, phonenumber, pancard, amount } = req.body;

    if (!name || amount == null) {
      return res.status(400).json({ message: "name and amount are required" });
    }

    const order = await createOrderService({
      name,
      email,
      phonenumber,
      pancard,
      amount,
    });

    return res.status(201).json({
      order_id: order.orderId,
      message: "Stored in db successfully",
    });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern?.orderId) {
      return res.status(409).json({ message: "order_id already exists" });
    }
    next(error);
  }
}

export async function verifyPayment(req, res, next) {
  try {
    const {
      name,
      email,
      phonenumber,
      pancard,
      amount,
      payment_id,
      order_id,
      payment_status,
    } = req.body;

    if (!order_id || !payment_id || !payment_status) {
      return res.status(400).json({
        message: "order_id, payment_id, and payment_status are required",
      });
    }

    const result = await verifyPaymentService(order_id, {
      name,
      email,
      phonenumber,
      pancard,
      amount,
      payment_id,
      payment_status,
    });

    if (!result) {
      return res
        .status(404)
        .json({ message: "Order not found for given order_id" });
    }

    return res.json({
      message: "Payment details stored successfully",
      order_id: result.orderId,
      payment_id: result.paymentId,
      payment_status: result.paymentStatus,
    });
  } catch (error) {
    next(error);
  }
}

export async function getRecentDonations(req, res, next) {
  try {
    const donations = await getRecentDonationsService(5);
    const response = donations.map((donation) => ({
      name: donation.name || donation.donorName,
      amount: donation.amount,
      created_date: formatRelativeDate(donation.createdAt),
    }));

    return res.json(response);
  } catch (error) {
    next(error);
  }
}

export async function getTopDonations(req, res, next) {
  try {
    const donations = await getTopDonationsService(5);
    const response = donations.map((donation) => ({
      name: donation.name || donation.donorName,
      amount: donation.amount,
      created_date: formatRelativeDate(donation.createdAt),
    }));

    return res.json(response);
  } catch (error) {
    next(error);
  }
}
