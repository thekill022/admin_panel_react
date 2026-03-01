import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import produkRoutes from "./routes/produk.js";
import dashboardRoutes from "./routes/dashboard.js";
import bannerRoutes from "./routes/banner.js";
import pengumumanRoutes from "./routes/pengumuman.js";
import promoRoutes from "./routes/promo.js";
import uploadRoutes from "./routes/upload.js";
import surveiRoutes from "./routes/survei.js";
import flashSaleRoutes from "./routes/flashSale.js";
// Client_view compatibility routes
import akunRoutes from "./routes/akun.js";
import searchRoutes from "./routes/search.js";
import kodepromoRoutes from "./routes/kodepromo.js";
import jokiRoutes from "./routes/joki.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
      "https://merzzmlbb.com",
      "https://www.merzzmlbb.com",
      "https://superadmin.merzzmlbb.com",
      "https://api.merzzmlbb.com",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public folder
app.use(express.static("public"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/produk", produkRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/banner", bannerRoutes);
app.use("/api/pengumuman", pengumumanRoutes);
app.use("/api/promo", promoRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/survei", surveiRoutes);
app.use("/api/flash-sale", flashSaleRoutes);

// Client_view compatibility routes
app.use("/api/akun", akunRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/kodepromo", kodepromoRoutes);
app.use("/api/joki", jokiRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Something went wrong!",
    message: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || "development"}`);
});
