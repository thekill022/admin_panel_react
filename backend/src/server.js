import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import produkRoutes from './routes/produk.js';
import dashboardRoutes from './routes/dashboard.js';
import bannerRoutes from './routes/banner.js';
import pengumumanRoutes from './routes/pengumuman.js';
import promoRoutes from './routes/promo.js';
import uploadRoutes from './routes/upload.js';
import surveiRoutes from './routes/survei.js';
import flashSaleRoutes from './routes/flashSale.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:3000',
        'https://merzz-mlbb.online',
        'https://superadmin.merzz-mlbb.online'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/produk', produkRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/banner', bannerRoutes);
app.use('/api/pengumuman', pengumumanRoutes);
app.use('/api/promo', promoRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/survei', surveiRoutes);
app.use('/api/flash-sale', flashSaleRoutes);

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
});
