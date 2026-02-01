import express from 'express';
import prisma from '../config/database.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Get all banners
router.get('/', async (req, res) => {
    try {
        const banners = await prisma.banner.findMany({
            orderBy: { id: 'desc' }
        });
        res.json(banners);
    } catch (error) {
        console.error('Get banners error:', error);
        res.status(500).json({ error: 'Failed to fetch banners' });
    }
});

// Create banner
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { url, highlight } = req.body;

        const banner = await prisma.banner.create({
            data: { url, highlight: highlight || false }
        });

        res.status(201).json(banner);
    } catch (error) {
        console.error('Create banner error:', error);
        res.status(500).json({ error: 'Failed to create banner' });
    }
});

// Update banner
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const { url, highlight } = req.body;

        // Build update data object (only include fields that are provided)
        const updateData = {};
        if (url !== undefined) updateData.url = url;
        if (highlight !== undefined) updateData.highlight = highlight;

        const banner = await prisma.banner.update({
            where: { id: parseInt(id) },
            data: updateData
        });

        res.json(banner);
    } catch (error) {
        console.error('Update banner error:', error);
        res.status(500).json({ error: 'Failed to update banner' });
    }
});

// Delete banner
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.banner.delete({
            where: { id: parseInt(id) }
        });

        res.json({ message: 'Banner deleted successfully' });
    } catch (error) {
        console.error('Delete banner error:', error);
        res.status(500).json({ error: 'Failed to delete banner' });
    }
});

export default router;
