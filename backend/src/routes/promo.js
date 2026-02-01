import express from 'express';
import prisma from '../config/database.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Get all promo codes
router.get('/', authMiddleware, async (req, res) => {
    try {
        const promos = await prisma.kode_promo.findMany({
            orderBy: { created_at: 'desc' }
        });
        res.json(promos);
    } catch (error) {
        console.error('Get promos error:', error);
        res.status(500).json({ error: 'Failed to fetch promo codes' });
    }
});

// Validate promo code (public)
router.post('/validate', async (req, res) => {
    try {
        const { kode, totalPurchase } = req.body;

        const promo = await prisma.kode_promo.findUnique({
            where: { kode }
        });

        if (!promo) {
            return res.status(404).json({ error: 'Promo code not found' });
        }

        if (!promo.active) {
            return res.status(400).json({ error: 'Promo code is inactive' });
        }

        const now = new Date();
        if (promo.start_date && now < promo.start_date) {
            return res.status(400).json({ error: 'Promo code not yet active' });
        }

        if (promo.end_date && now > promo.end_date) {
            return res.status(400).json({ error: 'Promo code has expired' });
        }

        if (promo.max_claims && promo.current_claims >= promo.max_claims) {
            return res.status(400).json({ error: 'Promo code has reached maximum claims' });
        }

        if (promo.min_purchase && totalPurchase < promo.min_purchase) {
            return res.status(400).json({
                error: `Minimum purchase of ${promo.min_purchase} required`
            });
        }

        let discount = (totalPurchase * promo.diskon) / 100;
        if (promo.max_discount && discount > promo.max_discount) {
            discount = promo.max_discount;
        }

        res.json({
            valid: true,
            discount,
            discountPercentage: promo.diskon,
            finalAmount: totalPurchase - discount
        });
    } catch (error) {
        console.error('Validate promo error:', error);
        res.status(500).json({ error: 'Failed to validate promo code' });
    }
});

// Create promo code
router.post('/', authMiddleware, async (req, res) => {
    try {
        const {
            kode,
            diskon,
            start_date,
            end_date,
            max_claims,
            min_purchase,
            max_discount,
            active
        } = req.body;

        const promo = await prisma.kode_promo.create({
            data: {
                kode,
                diskon: parseFloat(diskon),
                start_date: start_date ? new Date(start_date) : null,
                end_date: end_date ? new Date(end_date) : null,
                max_claims: max_claims ? parseInt(max_claims) : null,
                min_purchase: min_purchase ? parseFloat(min_purchase) : null,
                max_discount: max_discount ? parseFloat(max_discount) : null,
                active: active !== undefined ? active : true
            }
        });

        res.status(201).json(promo);
    } catch (error) {
        console.error('Create promo error:', error);
        res.status(500).json({ error: 'Failed to create promo code' });
    }
});

// Update promo code
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const {
            kode,
            diskon,
            start_date,
            end_date,
            max_claims,
            min_purchase,
            max_discount,
            active
        } = req.body;

        const promo = await prisma.kode_promo.update({
            where: { id: parseInt(id) },
            data: {
                kode,
                diskon: diskon ? parseFloat(diskon) : undefined,
                start_date: start_date ? new Date(start_date) : undefined,
                end_date: end_date ? new Date(end_date) : undefined,
                max_claims: max_claims ? parseInt(max_claims) : undefined,
                min_purchase: min_purchase ? parseFloat(min_purchase) : undefined,
                max_discount: max_discount ? parseFloat(max_discount) : undefined,
                active
            }
        });

        res.json(promo);
    } catch (error) {
        console.error('Update promo error:', error);
        res.status(500).json({ error: 'Failed to update promo code' });
    }
});

// Delete promo code
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.kode_promo.delete({
            where: { id: parseInt(id) }
        });

        res.json({ message: 'Promo code deleted successfully' });
    } catch (error) {
        console.error('Delete promo error:', error);
        res.status(500).json({ error: 'Failed to delete promo code' });
    }
});

export default router;
