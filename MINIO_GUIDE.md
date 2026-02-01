# 📸 MinIO Image Upload Guide

## Konfigurasi MinIO

Project ini menggunakan **MinIO** sebagai object storage untuk menyimpan gambar produk dan banner.

### Environment Variables

File: `backend/.env`

```env
MINIO_ENDPOINT=http://127.0.0.1:9000
MINIO_ROOT_USER=merzzadmin
MINIO_ROOT_PASSWORD=M3rzTok0G@me#2025!
MINIO_BUCKET_NAME=merz-image
MINIO_USE_SSL=false
```

## 🚀 Setup MinIO

### 1. Pastikan MinIO Berjalan

MinIO harus sudah berjalan di `http://127.0.0.1:9000`

### 2. Buat Bucket

Jika bucket `merz-image` belum ada:

1. Buka MinIO Console: http://127.0.0.1:9000
2. Login dengan:
   - Username: `merzzadmin`
   - Password: `M3rzTok0G@me#2025!`
3. Buat bucket baru bernama: `merz-image`
4. Set bucket policy ke **public** (agar gambar bisa diakses publik)

### 3. Set Bucket Policy (Public Access)

Untuk membuat gambar bisa diakses publik, set policy bucket:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": ["*"]
      },
      "Action": ["s3:GetObject"],
      "Resource": ["arn:aws:s3:::merz-image/*"]
    }
  ]
}
```

## 📡 API Endpoints

### Upload Single Image
```
POST /api/upload/single
Content-Type: multipart/form-data
Authorization: Bearer {token}

Body:
- image: File
```

**Response:**
```json
{
  "message": "File uploaded successfully",
  "url": "http://127.0.0.1:9000/merz-image/1234567890-image.jpg"
}
```

### Upload Multiple Images
```
POST /api/upload/multiple
Content-Type: multipart/form-data
Authorization: Bearer {token}

Body:
- images[]: File[]
```

**Response:**
```json
{
  "message": "Files uploaded successfully",
  "urls": [
    "http://127.0.0.1:9000/merz-image/1234567890-image1.jpg",
    "http://127.0.0.1:9000/merz-image/1234567891-image2.jpg"
  ]
}
```

### Upload Product Images
```
POST /api/upload/product
Content-Type: multipart/form-data
Authorization: Bearer {token}

Body:
- images[]: File[]
```

**Response:**
```json
{
  "message": "Product images uploaded successfully",
  "images": [
    {
      "link": "http://127.0.0.1:9000/merz-image/1234567890-image1.jpg",
      "urutan": 1
    },
    {
      "link": "http://127.0.0.1:9000/merz-image/1234567891-image2.jpg",
      "urutan": 2
    }
  ]
}
```

### Delete Image
```
DELETE /api/upload
Content-Type: application/json
Authorization: Bearer {token}

Body:
{
  "url": "http://127.0.0.1:9000/merz-image/1234567890-image.jpg"
}
```

## 🎨 Frontend Usage

### ImageUpload Component

Component ini sudah terintegrasi di:
- **ProductForm** - Upload product images
- **Banners** - Upload banner images

#### Props

```jsx
<ImageUpload
  multiple={true}              // Allow multiple files
  maxFiles={10}                // Maximum files (default: 10)
  existingImages={[]}          // Array of existing image URLs
  onUploadComplete={(urls) => {}} // Callback when upload complete
  onRemoveExisting={(url) => {}}  // Callback when removing image
/>
```

#### Example Usage

```jsx
import ImageUpload from '../components/ImageUpload';

function MyComponent() {
  const [images, setImages] = useState([]);

  return (
    <ImageUpload
      multiple={true}
      maxFiles={5}
      existingImages={images}
      onUploadComplete={(newUrls) => {
        setImages(prev => [...prev, ...newUrls]);
      }}
      onRemoveExisting={(url) => {
        setImages(prev => prev.filter(img => img !== url));
      }}
    />
  );
}
```

## 🔧 Backend Implementation

### MinIO Client

File: `backend/src/config/minio.js`

Functions available:
- `uploadToMinio(buffer, fileName, mimeType)` - Upload single file
- `uploadMultipleToMinio(files)` - Upload multiple files
- `deleteFromMinio(fileUrl)` - Delete file
- `getSignedUrlFromMinio(fileName, expiresIn)` - Get signed URL

### Upload Routes

File: `backend/src/routes/upload.js`

Menggunakan **multer** untuk handle multipart/form-data.

Konfigurasi:
- Memory storage (tidak save ke disk)
- Max file size: 10MB
- Only accept images

## 🛡️ Security

### File Validation

- ✅ Only image files allowed (checked by MIME type)
- ✅ File size limit: 10MB
- ✅ Authentication required (JWT token)
- ✅ Unique filename (timestamp + original name)

### Access Control

- ✅ Upload requires authentication
- ✅ Public read access for images
- ✅ Delete requires authentication

## 📝 File Naming

Format: `{timestamp}-{originalFileName}`

Example: `1738392000000-product-image.jpg`

## 🔍 Troubleshooting

### Upload Failed

**Error: "Failed to upload file to MinIO"**

Solusi:
1. Pastikan MinIO berjalan
2. Check credentials di `.env`
3. Pastikan bucket `merz-image` exists
4. Check bucket policy (harus public)

### Image Not Displaying

**Error: Image URL returns 403 Forbidden**

Solusi:
1. Set bucket policy ke public
2. Check MINIO_ENDPOINT di `.env`
3. Pastikan URL format benar

### Connection Refused

**Error: "ECONNREFUSED 127.0.0.1:9000"**

Solusi:
1. Start MinIO server
2. Check port 9000 tidak digunakan aplikasi lain
3. Verify MINIO_ENDPOINT di `.env`

## 📊 Image URL Format

```
http://127.0.0.1:9000/merz-image/1738392000000-image.jpg
│                     │          │
│                     │          └─ Filename
│                     └─ Bucket name
└─ MinIO endpoint
```

## 🚀 Production Deployment

Untuk production:

1. **Update MINIO_ENDPOINT** ke domain production
   ```env
   MINIO_ENDPOINT=https://minio.yourdomain.com
   MINIO_USE_SSL=true
   ```

2. **Setup HTTPS** untuk MinIO

3. **Configure CDN** (optional) untuk faster image delivery

4. **Backup Strategy** untuk images

## 💡 Tips

1. **Compress images** sebelum upload untuk save storage
2. **Use CDN** di production untuk better performance
3. **Set expiration policy** untuk temporary files
4. **Monitor storage usage** di MinIO console
5. **Backup bucket** secara regular

## 📚 References

- MinIO Documentation: https://min.io/docs
- AWS SDK for JavaScript: https://docs.aws.amazon.com/sdk-for-javascript/
- Multer Documentation: https://github.com/expressjs/multer

---

**Status**: ✅ Configured and Ready
**Bucket**: merz-image
**Endpoint**: http://127.0.0.1:9000
