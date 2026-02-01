import express from 'express';
import prisma from '../config/database.js';

const router = express.Router();

// Get survey statistics (grouped by keterangan)
router.get('/', async (req, res) => {
    try {
        const stats = await prisma.survei.groupBy({
            by: ['keterangan'],
            _count: {
                keterangan: true,
            },
        });

        const data = stats.map(s => ({
            keterangan: s.keterangan,
            jumlah: s._count.keterangan,
        }));

        res.json(data);
    } catch (error) {
        console.error('Get survey stats error:', error);
        res.status(500).json({ error: 'Failed to fetch survey statistics' });
    }
});

// Create survey response (from public website)
router.post('/', async (req, res) => {
    try {
        const { keterangan } = req.body;

        if (!keterangan || !keterangan.trim()) {
            return res.status(400).json({ error: 'Survey response is required' });
        }

        await prisma.survei.create({
            data: { keterangan: keterangan.toLowerCase().trim() }
        });

        res.status(201).json({ message: 'Survey response recorded' });
    } catch (error) {
        console.error('Create survey error:', error);
        res.status(500).json({ error: 'Failed to record survey response' });
    }
});

export default router;
