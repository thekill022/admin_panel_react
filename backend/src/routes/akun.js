import express from 'express';
import prisma from '../config/database.js';

const router = express.Router();

/**
 * Routes ini dibuat untuk kompatibilitas dengan client_view
 * yang menggunakan endpoint /api/akun/*
 */

// Get all products (public - for client website)
// Endpoint: GET /api/akun/all
router.get('/all', async (req, res) => {
    try {
        // Tampilkan semua produk termasuk yang sudah sold
        const products = await prisma.produk.findMany({
            include: {
                produkimg: {
                    orderBy: { urutan: 'asc' },
                    include: {
                        hero: {
                            include: { skin: true }
                        }
                    }
                }
            },
            orderBy: { id: 'desc' }
        });

        // Transform to count heroes and skins
        const transformed = products.map(p => {
            let heroCount = 0;
            let skinCount = 0;

            if (p.produkimg) {
                p.produkimg.forEach(img => {
                    if (img.hero) {
                        heroCount += img.hero.length;
                        img.hero.forEach(h => {
                            if (h.skin) skinCount++;
                        });
                    }
                });
            }

            return {
                ...p,
                heroes: heroCount,
                skins: skinCount
            };
        });

        res.json({ data: transformed });
    } catch (error) {
        console.error('Get akun all error:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// Get single product by ID (public - for client website)
// Endpoint: GET /api/akun/:id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const product = await prisma.produk.findUnique({
            where: { id: parseInt(id) },
            include: {
                produkimg: {
                    orderBy: { urutan: 'asc' },
                    include: {
                        hero: {
                            include: { skin: true }
                        }
                    }
                }
            }
        });

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Count heroes and skins
        let heroCount = 0;
        let skinCount = 0;

        if (product.produkimg) {
            product.produkimg.forEach(img => {
                if (img.hero) {
                    heroCount += img.hero.length;
                    img.hero.forEach(h => {
                        if (h.skin) skinCount++;
                    });
                }
            });
        }

        res.json({
            data: {
                ...product,
                heroes: heroCount,
                skins: skinCount
            }
        });
    } catch (error) {
        console.error('Get akun by ID error:', error);
        res.status(500).json({ error: 'Failed to fetch product' });
    }
});

// Search products by hero/skin (public)
// Endpoint: GET /api/akun?hero=xxx&skin=xxx
router.get('/', async (req, res) => {
    try {
        const { hero, skin } = req.query;

        // Build where condition for hero/skin search
        // Tampilkan semua produk termasuk yang sudah sold
        let whereCondition = {};
        let heroFilter = {};

        if (hero) {
            heroFilter.nama = { contains: hero };
        }
        if (skin) {
            heroFilter.skin = {
                nama: { contains: skin }
            };
        }

        const products = await prisma.produk.findMany({
            where: {
                ...whereCondition,
                produkimg: {
                    some: {
                        hero: {
                            some: heroFilter
                        }
                    }
                }
            },
            include: {
                produkimg: {
                    orderBy: { urutan: 'asc' },
                    include: {
                        hero: {
                            include: { skin: true }
                        }
                    }
                }
            },
            orderBy: { id: 'desc' }
        });

        // Transform to count heroes and skins
        const transformed = products.map(p => {
            let heroCount = 0;
            let skinCount = 0;

            if (p.produkimg) {
                p.produkimg.forEach(img => {
                    if (img.hero) {
                        heroCount += img.hero.length;
                        img.hero.forEach(h => {
                            if (h.skin) skinCount++;
                        });
                    }
                });
            }

            return {
                ...p,
                heroes: heroCount,
                skins: skinCount
            };
        });

        res.json({ data: transformed });
    } catch (error) {
        console.error('Search akun error:', error);
        res.status(500).json({ error: 'Failed to search products' });
    }
});

export default router;
