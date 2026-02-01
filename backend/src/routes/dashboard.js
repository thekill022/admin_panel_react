import express from 'express';
import prisma from '../config/database.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Get dashboard analytics
router.get('/analytics', authMiddleware, async (req, res) => {
    try {
        // Total products
        const totalProducts = await prisma.produk.count();

        // Active products
        const activeProducts = await prisma.produk.count({
            where: { status: true }
        });

        // Sold products
        const soldProducts = await prisma.produk.count({
            where: { status: false }
        });

        // Total revenue (from sold products)
        const soldProductsData = await prisma.produk.findMany({
            where: { status: false },
            select: { harga_rupiah: true, diskon: true }
        });

        const totalRevenue = soldProductsData.reduce((sum, product) => {
            const price = product.harga_rupiah;
            const discount = product.diskon || 0;
            const finalPrice = price - (price * discount / 100);
            return sum + finalPrice;
        }, 0);

        // Recent products
        const recentProducts = await prisma.produk.findMany({
            take: 5,
            orderBy: { id: 'desc' },
            include: {
                produkimg: {
                    take: 1,
                    orderBy: { urutan: 'asc' }
                }
            }
        });

        res.json({
            totalProducts,
            activeProducts,
            soldProducts,
            totalRevenue,
            recentProducts
        });
    } catch (error) {
        console.error('Dashboard analytics error:', error);
        res.status(500).json({ error: 'Failed to fetch analytics' });
    }
});

export default router;
