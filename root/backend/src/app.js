import express from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

import donationRoutes from "./routes/donationRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import swaggerDocument from "./swagger.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://nya-website-one.vercel.app",
];

// CORS
app.use(
  cors({
    origin: (origin, callback) => {

      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("Blocked CORS origin:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(morgan("dev"));

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.use("/api/donations", donationRoutes);
app.use("/api/users", userRoutes);

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "NYA backend is healthy",
  });
});

app.use((req, res) => {
  res.status(404).json({
    message: "Resource not found",
  });
});

app.use(errorHandler);

export default app;