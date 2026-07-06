import express from "express";

const router = express.Router();

router.get("/ping", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Pong!",
    timestamp: new Date().toISOString(),
  });
});

export default router;
