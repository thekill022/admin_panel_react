import express from 'express';
import prisma from '../config/database.js';

const router = express.Router();

/**
 * Search routes untuk client_view
 * Endpoint: /api/search/:key
 * Uses VwSearch database view for efficient search
 */

// Search hero/skin by keyword
router.get('/:key', async (req, res) => {
    try {
        const { key } = req.params;

        if (!key || key.trim().length < 2) {
            return res.json({ data: [] });
        }

        // Use VwSearch view from database
        const results = await prisma.vwSearch.findMany({
            where: {
                search: { contains: key }
            },
            take: 20
        });

        res.json({ data: results });
    } catch (error) {
        console.error('Search error:', error);

        // Fallback to manual search if VwSearch view doesn't exist
        try {
            // Search in hero names
            const heroes = await prisma.hero.findMany({
                where: {
                    nama: { contains: key }
                },
                include: {
                    skin: true
                },
                take: 20
            });

            // Build search results: "Hero - Skin" format
            const results = [];

            heroes.forEach(hero => {
                if (hero.skin) {
                    results.push({
                        search: `${hero.nama} - ${hero.skin.nama}`
                    });
                } else {
                    results.push({
                        search: hero.nama
                    });
                }
            });

            // Also search in skin names
            const skins = await prisma.skin.findMany({
                where: {
                    nama: { contains: key }
                },
                include: {
                    hero: true
                },
                take: 20
            });

            skins.forEach(skin => {
                if (skin.hero) {
                    const searchStr = `${skin.hero.nama} - ${skin.nama}`;
                    if (!results.find(r => r.search === searchStr)) {
                        results.push({ search: searchStr });
                    }
                }
            });

            const uniqueResults = [...new Map(results.map(item => [item.search, item])).values()];
            res.json({ data: uniqueResults.slice(0, 20) });
        } catch (fallbackError) {
            console.error('Fallback search error:', fallbackError);
            res.json({ data: [] });
        }
    }
});

export default router;
