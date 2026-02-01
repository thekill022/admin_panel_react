# ✅ Migration Checklist

Gunakan checklist ini untuk memastikan semua langkah migrasi telah dilakukan dengan benar.

## 📋 Pre-Migration

- [ ] Backup database yang ada
- [ ] Backup folder `admin_panel` yang lama
- [ ] Pastikan Node.js v18+ terinstall
- [ ] Pastikan MySQL berjalan
- [ ] Catat kredensial database yang ada

## 🔧 Setup Backend

- [ ] Masuk ke folder `backend`
- [ ] Jalankan `npm install`
- [ ] Copy kredensial database ke file `.env`
- [ ] Update `JWT_SECRET` di `.env` dengan key yang aman
- [ ] Jalankan `npm run prisma:generate`
- [ ] (Opsional) Jalankan `npm run prisma:migrate` jika ada perubahan schema
- [ ] Test backend dengan `npm run dev`
- [ ] Pastikan server berjalan di http://localhost:5000
- [ ] Test endpoint health: http://localhost:5000/health

## 🎨 Setup Frontend

- [ ] Masuk ke folder `frontend`
- [ ] Jalankan `npm install`
- [ ] Periksa file `.env` (seharusnya sudah benar)
- [ ] Test frontend dengan `npm run dev`
- [ ] Pastikan frontend berjalan di http://localhost:5173
- [ ] Buka browser dan akses http://localhost:5173

## 👤 Create Admin User

Pilih salah satu metode:

### Method 1: Via API (Recommended)
- [ ] Gunakan Postman/Insomnia atau curl
- [ ] POST ke `http://localhost:5000/api/auth/register`
- [ ] Body: `{"username":"admin","password":"password123"}`
- [ ] Simpan username dan password

### Method 2: Via Database
- [ ] Buka MySQL client
- [ ] Hash password dengan bcrypt (gunakan online tool atau Node.js)
- [ ] Insert manual ke tabel `users`

## 🧪 Testing

### Authentication
- [ ] Buka http://localhost:5173
- [ ] Login dengan user yang dibuat
- [ ] Pastikan redirect ke dashboard
- [ ] Pastikan sidebar muncul
- [ ] Test logout

### Dashboard
- [ ] Lihat dashboard analytics
- [ ] Pastikan statistik muncul
- [ ] Pastikan recent products muncul (jika ada data)

### Products
- [ ] Buka halaman Products
- [ ] Test search functionality
- [ ] Test create product baru
- [ ] Test edit product
- [ ] Test delete product
- [ ] Pastikan images muncul dengan benar

### Banners
- [ ] Buka halaman Banners
- [ ] Test create banner
- [ ] Test delete banner
- [ ] Pastikan image banner muncul

### Announcements
- [ ] Buka halaman Announcements
- [ ] Test create announcement
- [ ] Test delete announcement
- [ ] Test highlight feature

### Promo Codes
- [ ] Buka halaman Promo Codes
- [ ] Test create promo code
- [ ] Test dengan berbagai konfigurasi (date range, max claims, dll)
- [ ] Test delete promo code

## 🔍 Verification

### Performance
- [ ] Check memory usage backend (seharusnya ~100-150MB)
- [ ] Check startup time (seharusnya <2 detik)
- [ ] Check response time (seharusnya <50ms)
- [ ] Compare dengan Next.js versi lama

### Functionality
- [ ] Semua fitur yang ada di Next.js version berfungsi
- [ ] Tidak ada error di console browser
- [ ] Tidak ada error di console backend
- [ ] Toast notifications muncul dengan benar
- [ ] Loading states berfungsi

### Security
- [ ] JWT token tersimpan di localStorage
- [ ] Protected routes tidak bisa diakses tanpa login
- [ ] Token expired redirect ke login
- [ ] Password tidak terlihat di network tab

## 📦 Data Migration (Jika Diperlukan)

Jika Anda perlu migrate data dari Next.js ke React+Express:

- [ ] Export data dari database (jika perlu)
- [ ] Pastikan schema database sama
- [ ] Test dengan sample data dulu
- [ ] Import data ke database baru
- [ ] Verify data integrity

## 🚀 Production Preparation

- [ ] Update `NODE_ENV` ke `production` di backend `.env`
- [ ] Update `JWT_SECRET` dengan key yang sangat aman
- [ ] Setup HTTPS untuk production
- [ ] Configure CORS untuk production domain
- [ ] Build frontend: `npm run build`
- [ ] Test production build: `npm run preview`
- [ ] Setup reverse proxy (nginx/apache) jika diperlukan
- [ ] Setup PM2 atau process manager untuk backend
- [ ] Configure database backup strategy
- [ ] Setup monitoring (optional)

## 📝 Documentation

- [ ] Baca README.md
- [ ] Baca INSTALL.md
- [ ] Baca COMPARISON.md
- [ ] Baca PROJECT_SUMMARY.md
- [ ] Dokumentasikan custom changes (jika ada)

## 🎯 Post-Migration

- [ ] Monitor memory usage selama 24 jam
- [ ] Monitor error logs
- [ ] Collect user feedback
- [ ] Compare performance metrics
- [ ] Update documentation jika ada perubahan
- [ ] Archive Next.js version (jangan hapus dulu)

## ⚠️ Troubleshooting

Jika ada masalah, cek:

- [ ] Environment variables sudah benar
- [ ] Database connection berfungsi
- [ ] Port 5000 dan 5173 tidak digunakan aplikasi lain
- [ ] Node modules terinstall dengan benar
- [ ] Prisma client sudah di-generate
- [ ] CORS configuration benar
- [ ] JWT secret sudah di-set

## 📞 Support

Jika stuck di langkah tertentu:

1. Check error message di console
2. Review dokumentasi terkait
3. Check environment variables
4. Restart servers
5. Clear browser cache
6. Regenerate Prisma client

---

## ✨ Success Criteria

Migration dianggap sukses jika:

- ✅ Semua fitur berfungsi seperti Next.js version
- ✅ Memory usage berkurang signifikan
- ✅ Response time lebih cepat
- ✅ Tidak ada error di production
- ✅ User experience tetap baik atau lebih baik

---

**Good luck with your migration! 🚀**

Jika semua checklist di atas sudah ✅, selamat! Migrasi Anda berhasil! 🎉
