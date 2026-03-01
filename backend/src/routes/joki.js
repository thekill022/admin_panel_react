import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// --- ML Rank & Price Management ---

// Get all ranks with their prices
router.get("/ranks", async (req, res) => {
  try {
    const ranks = await prisma.ml_rank.findMany({
      include: {
        joki_per_star: true,
      },
      orderBy: {
        urutan: "asc",
      },
    });
    res.json(ranks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update price per star for a rank (multi-currency)
router.put("/ranks/:id/price", async (req, res) => {
  const { id } = req.params;
  const { harga_rupiah, harga_ringgit, harga_dolar } = req.body;
  try {
    const updated = await prisma.ml_joki_per_star.updateMany({
      where: { rank_id: parseInt(id) },
      data: {
        harga_rupiah: parseInt(harga_rupiah),
        harga_ringgit: harga_ringgit ? parseFloat(harga_ringgit) : null,
        harga_dolar: harga_dolar ? parseFloat(harga_dolar) : null,
      },
    });
    res.json({ message: "Price updated", updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// --- Joki Paket Management ---

// Get all packages
router.get("/packages", async (req, res) => {
  try {
    const packages = await prisma.ml_joki_paket.findMany();
    res.json(packages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create package
router.post("/packages", async (req, res) => {
  const {
    nama_paket,
    harga_rupiah,
    harga_ringgit,
    harga_dolar,
    deskripsi,
    image,
  } = req.body;
  try {
    const newPackage = await prisma.ml_joki_paket.create({
      data: {
        nama_paket,
        harga_rupiah: parseInt(harga_rupiah),
        harga_ringgit: harga_ringgit ? parseFloat(harga_ringgit) : null,
        harga_dolar: harga_dolar ? parseFloat(harga_dolar) : null,
        deskripsi,
        image,
      },
    });
    res.status(201).json(newPackage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update package
router.put("/packages/:id", async (req, res) => {
  const { id } = req.params;
  const {
    nama_paket,
    harga_rupiah,
    harga_ringgit,
    harga_dolar,
    deskripsi,
    image,
  } = req.body;
  try {
    const updated = await prisma.ml_joki_paket.update({
      where: { id: parseInt(id) },
      data: {
        nama_paket,
        harga_rupiah: parseInt(harga_rupiah),
        harga_ringgit: harga_ringgit ? parseFloat(harga_ringgit) : null,
        harga_dolar: harga_dolar ? parseFloat(harga_dolar) : null,
        deskripsi,
        image,
      },
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete package
router.delete("/packages/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.ml_joki_paket.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Package deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Serve rank images
router.get("/images/:filename", (req, res) => {
  const { filename } = req.params;
  res.sendFile(`public/${filename}`, { root: "." });
});

export default router;
