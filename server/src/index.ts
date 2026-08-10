import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import contactRouter from "./routes/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security & Parsing Middlewares
app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000", "http://127.0.0.1:5173"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

// Routes
app.use("/api/contact", contactRouter);

// Healthcheck
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "MC Servizi API", timestamp: new Date().toISOString() });
});

// Start Server
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`⚡ MC Servizi Express Backend active on port ${PORT}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
  console.log(`==================================================`);
});
