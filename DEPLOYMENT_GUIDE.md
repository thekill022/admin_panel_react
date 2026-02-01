# Panduan Deployment Server (Windows)

Panduan ini menjelaskan cara men-deploy aplikasi (Frontend & Backend) pada server Windows agar berjalan sebagai service (daemon) menggunakan PM2.

## 1. Prasyarat

Pastikan software berikut sudah terinstall di server:
- **Node.js** (LTS version disarankan)
- **Git**
- **PM2** (Process Manager). Jika belum ada, install secara global:
  ```powershell
  npm install -g pm2
  npm install -g serve
  ```

## 2. Struktur Project

Pastikan Anda berada di root folder project, yang memiliki struktur:
```
project_root/
├── ecosystem.config.cjs  (File konfigurasi PM2 yang baru dibuat)
├── frontend/             (Folder aplikasi React/Vite)
└── backend/              (Folder aplikasi Express/Node)
```

## 3. Setup Backend (API)

1. Masuk ke folder backend:
   ```powershell
   cd backend
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Setup Environment Variables:
   - Pastikan file `.env` sudah ada dan dikonfigurasi (Database URL, JWT Secret, dll).
4. (Opsional) Setup Database Prisma:
   ```powershell
   npx prisma generate
   npx prisma migrate deploy
   ```
5. Kembali ke root:
   ```powershell
   cd ..
   ```

## 4. Setup Frontend (Tampilan)

1. Masuk ke folder frontend:
   ```powershell
   cd frontend
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Setup Environment Variables:
   - Pastikan file `.env` sudah sesuai (misal: `VITE_API_URL` mengarah ke URL backend).
4. Build aplikasi:
   ```powershell
   npm run build
   ```
   *Proses ini akan menghasilkan folder `dist`.*
5. Kembali ke root:
   ```powershell
   cd ..
   ```

## 5. Menjalankan Server dengan PM2

Kita akan menggunakan `ecosystem.config.cjs` untuk menjalankan kedua aplikasi sekaligus.

1. **Jalankan Aplikasi:**
   Pastikan Anda berada di folder root project (tempat `ecosystem.config.cjs` berada), lalu jalankan:
   ```powershell
   pm2 start ecosystem.config.cjs
   ```
   
   Perintah ini akan menjalankan:
   - **Backend**: Menggunakan `npm run start` pada port 5000.
   - **Frontend**: Menggunakan `serve` untuk menyajikan folder `dist` pada port 5173.

2. **Cek Status:**
   ```powershell
   pm2 status
   ```

3. **Melihat Logs:**
   ```powershell
   pm2 logs
   ```
   Atau spesifik: `pm2 logs tokogame-backend` / `pm2 logs tokogame-frontend`.

## 6. Setup Daemon (Startup Otomatis)

Agar aplikasi otomatis berjalan saat server restart (Windows):

1. Install `pm2-windows-startup` (khusus Windows):
   ```powershell
   npm install -g pm2-windows-startup
   ```
2. Jalankan setup startup:
   ```powershell
   pm2-startup install
   ```
3. Simpan list proses yang sedang berjalan saat ini agar diingat oleh PM2:
   ```powershell
   pm2 save
   ```

---

**Catatan:**
- Jika ada perubahan kode di backend, restart backend dengan:
  ```powershell
  pm2 restart tokogame-backend
  ```
- Jika ada perubahan kode di frontend, Anda perlu melakukan **build ulang** lalu restart frontend:
  ```powershell
  cd frontend
  npm run build
  cd ..
  pm2 restart tokogame-frontend
  ```
