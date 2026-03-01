import express from 'express';
import prisma from '../config/database.js';

const router = express.Router();

/**
 * Alias route untuk /api/kodepromo
 * Client_view menggunakan /api/kodepromo/validate
 */

// Validate promo code (public)
router.post('/validate', async (req, res) => {
    try {
        const { kode, paymentAmount } = req.body;

        if (!kode) {
            return res.json({ valid: false, message: 'Kode promo tidak boleh kosong' });
        }

        const promo = await prisma.kode_promo.findUnique({
            where: { kode: kode.toUpperCase() }
        });

        if (!promo) {
            return res.json({ valid: false, message: 'Kode promo tidak ditemukan' });
        }

        if (!promo.active) {
            return res.json({ valid: false, message: 'Kode promo tidak aktif' });
        }

        const now = new Date();
        if (promo.start_date && now < promo.start_date) {
            return res.json({ valid: false, message: 'Kode promo belum aktif' });
        }

        if (promo.end_date && now > promo.end_date) {
            return res.json({ valid: false, message: 'Kode promo sudah kedaluwarsa' });
        }

        if (promo.max_claims && promo.current_claims >= promo.max_claims) {
            return res.json({ valid: false, message: 'Kode promo sudah mencapai batas maksimal' });
        }

        if (promo.min_purchase && paymentAmount < promo.min_purchase) {
            return res.json({
                valid: false,
                message: `Minimal pembelian ${promo.min_purchase.toLocaleString('id-ID')}`
            });
        }

        res.json({
            valid: true,
            data: {
                kode: promo.kode,
                diskon_persen: promo.diskon,
                max_discount: promo.max_discount
            }
        });
    } catch (error) {
        console.error('Validate promo code error:', error);
        res.json({ valid: false, message: 'Gagal memvalidasi kode promo' });
    }
});

export default router;
