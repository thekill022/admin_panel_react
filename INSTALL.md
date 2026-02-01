# Panduan Instalasi Admin Panel React + Express

## Prasyarat
- Node.js v18 atau lebih tinggi
- MySQL Database
- npm atau yarn

## Langkah Instalasi

### 1. Setup Backend

```bash
cd backend

# Install dependencies
npm install

# Setup environment variables
# Edit file .env dan sesuaikan dengan konfigurasi database Anda

# Generate Prisma Client
npm run prisma:generate

# (Opsional) Jalankan migrasi database jika diperlukan
npm run prisma:migrate

# Jalankan server development
npm run dev
```

Server backend akan berjalan di `http://localhost:5000`

### 2. Setup Frontend

```bash
cd frontend

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Frontend akan berjalan di `http://localhost:5173`

## Konfigurasi

### Backend (.env)
```
DATABASE_URL="mysql://root@localhost:3306/merz_store"
PORT=5000
NODE_ENV=development
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRES_IN=7d
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## Membuat User Admin Pertama

Gunakan endpoint register untuk membuat user admin:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"password123"}'
```

Atau gunakan tool seperti Postman/Insomnia.

## Production Build

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
npm run preview
```

## Fitur Utama

✅ **Authentication** - JWT-based authentication
✅ **Dashboard** - Analytics dan statistik
✅ **Product Management** - CRUD produk lengkap
✅ **Banner Management** - Kelola banner website
✅ **Announcement Management** - Kelola pengumuman
✅ **Promo Code Management** - Kelola kode promo diskon

## Keuntungan Migrasi dari Next.js

1. **Lebih Ringan** - Express lebih ringan dibanding Next.js
2. **Lebih Cepat** - Startup time lebih cepat
3. **Lebih Fleksibel** - Kontrol penuh atas backend
4. **Resource Efficient** - Menggunakan memory lebih sedikit
5. **Deployment Sederhana** - Bisa deploy frontend dan backend terpisah

## Troubleshooting

### Port sudah digunakan
Ubah PORT di file `.env` backend atau frontend

### Database connection error
Pastikan MySQL berjalan dan kredensial di `.env` benar

### CORS error
Pastikan FRONTEND_URL di backend `.env` sesuai dengan URL frontend

## Support

Untuk pertanyaan atau masalah, silakan buat issue di repository.
