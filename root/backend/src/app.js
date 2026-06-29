import express from "express";
import morgan from "morgan";
import donationRoutes from "./routes/donationRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import razorpayRoutes from "./routes/razorpayRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/donations", donationRoutes);
app.use("/api/users", userRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api", razorpayRoutes);
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "NYA backend is healthy" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Resource not found" });
});

app.use(errorHandler);

export default app;
