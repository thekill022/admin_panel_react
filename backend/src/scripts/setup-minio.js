import { S3Client, CreateBucketCommand, HeadBucketCommand, PutBucketPolicyCommand } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';

dotenv.config();

const minioClient = new S3Client({
    endpoint: process.env.MINIO_ENDPOINT,
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.MINIO_ROOT_USER,
        secretAccessKey: process.env.MINIO_ROOT_PASSWORD,
    },
    forcePathStyle: true,
    tls: process.env.MINIO_USE_SSL === 'true',
});

const BUCKET_NAME = process.env.MINIO_BUCKET_NAME || 'merz-image';

async function setupMinio() {
    try {
        console.log('Checking MinIO connection...');
        console.log('Endpoint:', process.env.MINIO_ENDPOINT);
        console.log('Bucket:', BUCKET_NAME);

        // Check if bucket exists
        try {
            await minioClient.send(new HeadBucketCommand({ Bucket: BUCKET_NAME }));
            console.log(`✓ Bucket '${BUCKET_NAME}' already exists`);
        } catch (error) {
            if (error.name === 'NotFound' || error.$metadata?.httpStatusCode === 404) {
                console.log(`✗ Bucket '${BUCKET_NAME}' not found`);
                console.log('Creating bucket...');

                // Create bucket
                await minioClient.send(new CreateBucketCommand({ Bucket: BUCKET_NAME }));
                console.log(`✓ Bucket '${BUCKET_NAME}' created successfully`);

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
                console.log(`✓ Bucket policy set to public read`);
            } else {
                throw error;
            }
        }

        console.log('\n✓ MinIO setup completed successfully!');
    } catch (error) {
        console.error('\n✗ MinIO setup failed:');
        console.error('Error:', error.message);
        console.error('Details:', error);
        process.exit(1);
    }
}

setupMinio();
