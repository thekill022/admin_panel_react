import express from 'express';
import multer from 'multer';
import { uploadToMinio, deleteFromMinio, uploadMultipleToMinio } from '../config/minio.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB limit
    },
    fileFilter: (req, file, cb) => {
        // Accept images only
        if (!file.mimetype.startsWith('image/')) {
            return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
    },
});

// Upload single image
router.post('/single', authMiddleware, upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const imageUrl = await uploadToMinio(
            req.file.buffer,
            req.file.originalname,
            req.file.mimetype
        );

        res.json({
            message: 'File uploaded successfully',
            url: imageUrl,
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Failed to upload file' });
    }
});

// Upload multiple images
router.post('/multiple', authMiddleware, upload.array('images', 10), async (req, res) => {
    try {
        console.log('Received files:', req.files);
        console.log('Files length:', req.files?.length);
        console.log('Request headers:', req.headers);

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: 'No files uploaded' });
        }

        const files = req.files.map(file => ({
            buffer: file.buffer,
            name: file.originalname,
            mimeType: file.mimetype,
        }));

        const imageUrls = await uploadMultipleToMinio(files);

        res.json({
            message: 'Files uploaded successfully',
            urls: imageUrls,
        });
    } catch (error) {
        console.error('Multiple upload error:', error);
        res.status(500).json({ error: 'Failed to upload files' });
    }
});

// Delete image
router.delete('/', authMiddleware, async (req, res) => {
    try {
        const { url } = req.body;

        if (!url) {
            return res.status(400).json({ error: 'Image URL is required' });
        }

        await deleteFromMinio(url);

        res.json({ message: 'File deleted successfully' });
    } catch (error) {
        console.error('Delete error:', error);
        res.status(500).json({ error: 'Failed to delete file' });
    }
});

// Upload product images with order
router.post('/product', authMiddleware, upload.array('images', 10), async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: 'No files uploaded' });
        }

        const files = req.files.map(file => ({
            buffer: file.buffer,
            name: file.originalname,
            mimeType: file.mimetype,
        }));

        const imageUrls = await uploadMultipleToMinio(files);

        // Return with order information
        const imagesWithOrder = imageUrls.map((url, index) => ({
            link: url,
            urutan: index + 1,
        }));

        res.json({
            message: 'Product images uploaded successfully',
            images: imagesWithOrder,
        });
    } catch (error) {
        console.error('Product images upload error:', error);
        res.status(500).json({ error: 'Failed to upload product images' });
    }
});

export default router;
