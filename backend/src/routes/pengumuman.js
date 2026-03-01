import express from 'express';
import prisma from '../config/database.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Get all announcements
router.get('/', async (req, res) => {
    try {
        const announcements = await prisma.pengumuman.findMany({
            orderBy: { id: 'desc' }
        });
        res.json({ data: announcements });
    } catch (error) {
        console.error('Get announcements error:', error);
        res.status(500).json({ error: 'Failed to fetch announcements' });
    }
});

// Create announcement
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { pengumuman, icon, icon_position, highlight } = req.body;

        const announcement = await prisma.pengumuman.create({
            data: {
                pengumuman,
                icon,
                icon_position: icon_position || 'start',
                highlight: highlight || false
            }
        });

        res.status(201).json(announcement);
    } catch (error) {
        console.error('Create announcement error:', error);
        res.status(500).json({ error: 'Failed to create announcement' });
    }
});

// Update announcement
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const { pengumuman, icon, icon_position, highlight } = req.body;

        const announcement = await prisma.pengumuman.update({
            where: { id: parseInt(id) },
            data: { pengumuman, icon, icon_position, highlight }
        });

        res.json(announcement);
    } catch (error) {
        console.error('Update announcement error:', error);
        res.status(500).json({ error: 'Failed to update announcement' });
    }
});

// Delete announcement
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.pengumuman.delete({
            where: { id: parseInt(id) }
        });

        res.json({ message: 'Announcement deleted successfully' });
    } catch (error) {
        console.error('Delete announcement error:', error);
        res.status(500).json({ error: 'Failed to delete announcement' });
    }
});

export default router;
