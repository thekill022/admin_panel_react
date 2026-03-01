import express from 'express';
import prisma from '../config/database.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Get all products
router.get('/all', authMiddleware, async (req, res) => {
    try {
        const products = await prisma.produk.findMany({
            include: {
                produkimg: {
                    orderBy: { urutan: 'asc' }
                },
                users: {
                    select: { id: true, username: true }
                }
            },
            orderBy: { id: 'desc' }
        });

        res.json(products);
    } catch (error) {
        console.error('Get products error:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// Get all products (public - for highlight management)
router.get('/', async (req, res) => {
    try {
        const products = await prisma.produk.findMany({
            select: {
                id: true,
                nama: true,
                rank: true,
                harga_rupiah: true,
                highlight: true,
                status: true,
                produkimg: {
                    select: {
                        link: true
                    },
                    orderBy: {
                        urutan: 'asc'
                    },
                    take: 1
                }
            },
            orderBy: { id: 'desc' }
        });

        // Transform to include first image
        const transformedProducts = products.map(product => ({
            ...product,
            gambar: product.produkimg[0]?.link || null,
            produkimg: undefined // Remove produkimg array from response
        }));

        res.json(transformedProducts);
    } catch (error) {
        console.error('Get products error:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// Get highlighted products (public - for client website carousel)
router.get('/highlight', async (req, res) => {
    try {
        // Tampilkan semua produk highlight termasuk yang sudah sold
        const products = await prisma.produk.findMany({
            where: {
                highlight: true
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
        console.error('Get highlighted products error:', error);
        res.status(500).json({ error: 'Failed to fetch highlighted products' });
    }
});

// Get products for website (public)
router.get('/website', async (req, res) => {
    try {
        // Tampilkan semua produk termasuk yang sudah sold
        const products = await prisma.produk.findMany({
            include: {
                produkimg: {
                    orderBy: { urutan: 'asc' }
                }
            },
            orderBy: { id: 'desc' }
        });

        res.json(products);
    } catch (error) {
        console.error('Get website products error:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// Get single product
router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;

        const product = await prisma.produk.findUnique({
            where: { id: parseInt(id) },
            include: {
                produkimg: {
                    orderBy: { urutan: 'asc' },
                    include: {
                        hero: {
                            include: {
                                skin: true
                            }
                        }
                    }
                },
                users: {
                    select: { id: true, username: true }
                }
            }
        });

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(product);
    } catch (error) {
        console.error('Get product error:', error);
        res.status(500).json({ error: 'Failed to fetch product' });
    }
});

// Create product
router.post('/', authMiddleware, async (req, res) => {
    try {
        const {
            nama,
            harga_rupiah,
            harga_ringgit,
            harga_dolar,
            deskripsi,
            rank,
            status,
            diskon,
            highlight,
            email_akun,
            password_akun,
            images,
            hero_skins // Array of { image_index, data: [{ hero, skin, alias }] }
        } = req.body;

        const product = await prisma.produk.create({
            data: {
                nama,
                harga_rupiah: parseInt(harga_rupiah),
                harga_ringgit: harga_ringgit ? parseInt(harga_ringgit) : null,
                harga_dolar: harga_dolar ? parseInt(harga_dolar) : null,
                deskripsi,
                rank,
                status: status !== undefined ? status : true,
                diskon: diskon ? parseFloat(diskon) : null,
                highlight: highlight || false,
                email_akun,
                password_akun,
                author_id: req.user.id,
                produkimg: images ? {
                    create: images.map((img, index) => {
                        const heroSkinData = hero_skins?.find(h => h.image_index === index)?.data || [];

                        return {
                            link: img.link,
                            urutan: img.urutan || index + 1,
                            hero: {
                                create: heroSkinData.map(h => ({
                                    nama: h.hero,
                                    skin: {
                                        create: {
                                            nama: h.skin,
                                            alias_skin: h.alias
                                        }
                                    }
                                }))
                            }
                        };
                    })
                } : undefined
            },
            include: {
                produkimg: true
            }
        });

        res.status(201).json(product);
    } catch (error) {
        console.error('Create product error:', error);
        res.status(500).json({ error: 'Failed to create product' });
    }
});

// Update product
// Update product
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const {
            nama,
            harga_rupiah,
            harga_ringgit,
            harga_dolar,
            deskripsi,
            rank,
            status,
            diskon,
            highlight,
            email_akun,
            password_akun,
            images,
            hero_skins
        } = req.body;

        const result = await prisma.$transaction(async (prisma) => {
            // 1. Update basic info
            const product = await prisma.produk.update({
                where: { id: parseInt(id) },
                data: {
                    nama,
                    harga_rupiah: harga_rupiah ? parseInt(harga_rupiah) : undefined,
                    harga_ringgit: harga_ringgit ? parseInt(harga_ringgit) : null,
                    harga_dolar: harga_dolar ? parseInt(harga_dolar) : null,
                    deskripsi,
                    rank,
                    status,
                    diskon: diskon ? parseFloat(diskon) : null,
                    highlight,
                    email_akun,
                    password_akun
                }
            });

            // 2. If images are provided, replace them (delete all and recreate)
            // This is safer to maintain integrity of order and nested hero/skin data
            if (images) {
                // Delete existing images (cascades to hero/skin)
                await prisma.produkimg.deleteMany({
                    where: { id_produk: parseInt(id) }
                });

                // Create new images with nested hero/skin
                for (let index = 0; index < images.length; index++) {
                    const img = images[index];
                    const heroSkinData = hero_skins?.find(h => h.image_index === index)?.data || [];

                    await prisma.produkimg.create({
                        data: {
                            id_produk: parseInt(id),
                            link: img.link,
                            urutan: img.urutan || index + 1,
                            hero: {
                                create: heroSkinData.map(h => ({
                                    nama: h.hero,
                                    skin: {
                                        create: {
                                            nama: h.skin,
                                            alias_skin: h.alias
                                        }
                                    }
                                }))
                            }
                        }
                    });
                }
            }

            return product;
        });

        // Fetch updated product with relations to return
        const updatedProduct = await prisma.produk.findUnique({
            where: { id: parseInt(id) },
            include: {
                produkimg: {
                    include: {
                        hero: {
                            include: { skin: true }
                        }
                    },
                    orderBy: { urutan: 'asc' }
                }
            }
        });

        res.json(updatedProduct);
    } catch (error) {
        console.error('Update product error:', error);
        res.status(500).json({ error: 'Failed to update product' });
    }
});

// Quick toggle product status (Active/Sold)
router.patch('/:id/status', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (typeof status !== 'boolean') {
            return res.status(400).json({ error: 'Status must be a boolean value' });
        }

        const product = await prisma.produk.update({
            where: { id: parseInt(id) },
            data: { status },
            select: {
                id: true,
                nama: true,
                status: true
            }
        });

        res.json(product);
    } catch (error) {
        console.error('Toggle product status error:', error);
        res.status(500).json({ error: 'Failed to toggle product status' });
    }
});

// Delete product
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.produk.delete({
            where: { id: parseInt(id) }
        });

        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Delete product error:', error);
        res.status(500).json({ error: 'Failed to delete product' });
    }
});

export default router;
