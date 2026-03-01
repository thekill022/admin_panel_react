import express from 'express';
import prisma from '../config/database.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Get all flash sales - returns active flash sale for client_view compatibility
router.get('/', async (req, res) => {
    try {
        const now = new Date();
        // First try to get an active flash sale for client_view
        const activeFlashSale = await prisma.flash_sale.findFirst({
            where: {
                start_date: { lte: now },
                end_date: { gte: now }
            }
        });

        // Return in format expected by client_view: { data: {...} }
        res.json({ data: activeFlashSale });
    } catch (error) {
        console.error('Get flash sales error:', error);
        res.status(500).json({ error: 'Failed to fetch flash sales' });
    }
});

// Get all flash sales (for admin panel)
router.get('/all', authMiddleware, async (req, res) => {
    try {
        const flashSales = await prisma.flash_sale.findMany({
            orderBy: { start_date: 'desc' }
        });
        res.json(flashSales);
    } catch (error) {
        console.error('Get all flash sales error:', error);
        res.status(500).json({ error: 'Failed to fetch all flash sales' });
    }
});

// Get active flash sale
router.get('/active', async (req, res) => {
    try {
        const now = new Date();
        const activeFlashSale = await prisma.flash_sale.findFirst({
            where: {
                start_date: { lte: now },
                end_date: { gte: now }
            }
        });
        res.json(activeFlashSale);
    } catch (error) {
        console.error('Get active flash sale error:', error);
        res.status(500).json({ error: 'Failed to fetch active flash sale' });
    }
});

// Create flash sale
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { diskon, start_date, end_date } = req.body;

        if (!diskon || !start_date || !end_date) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        if (diskon < 1 || diskon > 100) {
            return res.status(400).json({ error: 'Discount must be between 1-100%' });
        }

        const startDate = new Date(start_date);
        const endDate = new Date(end_date);

        if (endDate <= startDate) {
            return res.status(400).json({ error: 'End date must be after start date' });
        }

        const flashSale = await prisma.flash_sale.create({
            data: {
                diskon: parseInt(diskon),
                start_date: startDate,
                end_date: endDate
            }
        });

        res.status(201).json(flashSale);
    } catch (error) {
        console.error('Create flash sale error:', error);
        res.status(500).json({ error: 'Failed to create flash sale' });
    }
});

// Update flash sale
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const { diskon, start_date, end_date } = req.body;

        if (!diskon || !start_date || !end_date) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        if (diskon < 1 || diskon > 100) {
            return res.status(400).json({ error: 'Discount must be between 1-100%' });
        }

        const startDate = new Date(start_date);
        const endDate = new Date(end_date);

        if (endDate <= startDate) {
            return res.status(400).json({ error: 'End date must be after start date' });
        }

        const flashSale = await prisma.flash_sale.update({
            where: { id: parseInt(id) },
            data: {
                diskon: parseInt(diskon),
                start_date: startDate,
                end_date: endDate
            }
        });

        res.json(flashSale);
    } catch (error) {
        console.error('Update flash sale error:', error);
        res.status(500).json({ error: 'Failed to update flash sale' });
    }
});

// Delete flash sale
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.flash_sale.delete({
            where: { id: parseInt(id) }
        });

        res.json({ message: 'Flash sale deleted successfully' });
    } catch (error) {
        console.error('Delete flash sale error:', error);
        res.status(500).json({ error: 'Failed to delete flash sale' });
    }
});

export default router;
