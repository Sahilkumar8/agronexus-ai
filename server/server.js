import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import connectDatabase from "./config/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

await connectDatabase();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.use(helmet());

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false
});

app.use("/api", apiLimiter);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    service: "AgroNexus API",
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found"
  });
});

app.listen(PORT, () => {
  console.log(`AgroNexus API running on http://localhost:${PORT}`);
});