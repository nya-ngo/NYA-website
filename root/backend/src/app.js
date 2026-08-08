import express from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import donationRoutes from "./routes/donationRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import swaggerDocument from "./swagger.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/donations", donationRoutes);
app.use("/api/users", userRoutes);
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "NYA backend is healthy" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Resource not found" });
});

app.use(errorHandler);

export default app;
