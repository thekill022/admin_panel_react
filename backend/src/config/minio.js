import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand, CreateBucketCommand, HeadBucketCommand, PutBucketPolicyCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import dotenv from 'dotenv';

dotenv.config();

// MinIO Client Configuration
const minioClient = new S3Client({
    endpoint: process.env.MINIO_ENDPOINT,
    region: 'us-east-1', // MinIO doesn't use regions, but SDK requires it
    credentials: {
        accessKeyId: process.env.MINIO_ROOT_USER,
        secretAccessKey: process.env.MINIO_ROOT_PASSWORD,
    },
    forcePathStyle: true, // Required for MinIO
    tls: process.env.MINIO_USE_SSL === 'true',
});

const BUCKET_NAME = process.env.MINIO_BUCKET_NAME || 'merz-image';

/**
 * Ensure bucket exists and is publicly accessible
 */
const ensureBucketExists = async () => {
    try {
        // Check if bucket exists
        await minioClient.send(new HeadBucketCommand({ Bucket: BUCKET_NAME }));
        console.log(`Bucket ${BUCKET_NAME} already exists`);
    } catch (error) {
        if (error.name === 'NotFound' || error.$metadata?.httpStatusCode === 404) {
            console.log(`Bucket ${BUCKET_NAME} not found, creating...`);
            try {
                // Create bucket
                await minioClient.send(new CreateBucketCommand({ Bucket: BUCKET_NAME }));
                console.log(`Bucket ${BUCKET_NAME} created successfully`);

                // Set public read policy
                const policy = {
                    Version: '2012-10-17',
                    Statement: [
                        {
                            Effect: 'Allow',
                            Principal: '*',
                            Action: ['s3:GetObject'],
                            Resource: [`arn:aws:s3:::${BUCKET_NAME}/*`]
                        }
                    ]
                };

                await minioClient.send(new PutBucketPolicyCommand({
                    Bucket: BUCKET_NAME,
                    Policy: JSON.stringify(policy)
                }));
                console.log(`Bucket ${BUCKET_NAME} policy set to public read`);
            } catch (createError) {
                console.error('Error creating bucket:', createError);
                throw createError;
            }
        } else {
            console.error('Error checking bucket:', error);
            throw error;
        }
    }
};

// Initialize bucket on module load
ensureBucketExists().catch(console.error);

/**
 * Upload file to MinIO
 * @param {Buffer} fileBuffer - File buffer
 * @param {string} fileName - File name with extension
 * @param {string} mimeType - MIME type of the file
 * @returns {Promise<string>} - Public URL of uploaded file
 */
export const uploadToMinio = async (fileBuffer, fileName, mimeType) => {
    try {
        const timestamp = Date.now();
        const uniqueFileName = `${timestamp}-${fileName}`;

        const command = new PutObjectCommand({
            Bucket: BUCKET_NAME,
            Key: uniqueFileName,
            Body: fileBuffer,
            ContentType: mimeType,
            ACL: 'public-read', // Make file publicly accessible
        });

        await minioClient.send(command);

        // Construct public URL
        // Use MINIO_PUBLIC_URL if defined (for production behind Nginx), otherwise fall back to MINIO_ENDPOINT
        const baseUrl = process.env.MINIO_PUBLIC_URL || process.env.MINIO_ENDPOINT;

        // Ensure no double slashes if baseUrl ends with /
        const safeBaseUrl = baseUrl.replace(/\/$/, '');
        const publicUrl = `${safeBaseUrl}/${BUCKET_NAME}/${uniqueFileName}`;

        return publicUrl;
    } catch (error) {
        console.error('MinIO upload error:', error);
        throw new Error('Failed to upload file to MinIO');
    }
};

/**
 * Delete file from MinIO
 * @param {string} fileUrl - Full URL of the file to delete
 * @returns {Promise<boolean>} - Success status
 */
export const deleteFromMinio = async (fileUrl) => {
    try {
        // Extract file key from URL
        const urlParts = fileUrl.split('/');
        const fileName = urlParts[urlParts.length - 1];

        const command = new DeleteObjectCommand({
            Bucket: BUCKET_NAME,
            Key: fileName,
        });

        await minioClient.send(command);
        return true;
    } catch (error) {
        console.error('MinIO delete error:', error);
        throw new Error('Failed to delete file from MinIO');
    }
};

/**
 * Get signed URL for private files (if needed)
 * @param {string} fileName - File name
 * @param {number} expiresIn - Expiration time in seconds (default: 1 hour)
 * @returns {Promise<string>} - Signed URL
 */
export const getSignedUrlFromMinio = async (fileName, expiresIn = 3600) => {
    try {
        const command = new GetObjectCommand({
            Bucket: BUCKET_NAME,
            Key: fileName,
        });

        const signedUrl = await getSignedUrl(minioClient, command, { expiresIn });
        return signedUrl;
    } catch (error) {
        console.error('MinIO signed URL error:', error);
        throw new Error('Failed to generate signed URL');
    }
};

/**
 * Upload multiple files to MinIO
 * @param {Array} files - Array of file objects with buffer, name, and mimeType
 * @returns {Promise<Array<string>>} - Array of public URLs
 */
export const uploadMultipleToMinio = async (files) => {
    try {
        const uploadPromises = files.map(file =>
            uploadToMinio(file.buffer, file.name, file.mimeType)
        );

        const urls = await Promise.all(uploadPromises);
        return urls;
    } catch (error) {
        console.error('MinIO multiple upload error:', error);
        throw new Error('Failed to upload multiple files to MinIO');
    }
};

export default minioClient;
