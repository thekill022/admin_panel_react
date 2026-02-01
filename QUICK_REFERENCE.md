# 🚀 Quick Reference Guide

Panduan cepat untuk command-command yang sering digunakan.

## 📦 Installation

```bash
# Automated setup (recommended)
.\setup.ps1

# Manual setup
cd backend && npm install && npm run prisma:generate
cd ../frontend && npm install
```

## 🏃 Running the Application

### Development Mode

```bash
# Option 1: Automated (both servers)
.\dev.ps1

# Option 2: Manual (2 terminals)
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### Production Mode

```bash
# Backend
cd backend
npm start

# Frontend (build first)
cd frontend
npm run build
npm run preview
```

## 🔧 Common Commands

### Backend

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run production server
npm start

# Generate Prisma client
npm run prisma:generate

# Run database migrations
npm run prisma:migrate

# Open Prisma Studio (database GUI)
npx prisma studio
```

### Frontend

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 👤 Create Admin User

### Using curl (Windows PowerShell)

```powershell
$body = @{
    username = "admin"
    password = "password123"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/auth/register" `
    -Method POST `
    -ContentType "application/json" `
    -Body $body
```

### Using curl (Command Line)

```bash
curl -X POST http://localhost:5000/api/auth/register ^
  -H "Content-Type: application/json" ^
  -d "{\"username\":\"admin\",\"password\":\"password123\"}"
```

## 🔍 Testing Endpoints

### Health Check

```bash
# Should return: {"status":"OK","message":"Server is running"}
curl http://localhost:5000/health
```

### Login

```bash
curl -X POST http://localhost:5000/api/auth/login ^
  -H "Content-Type: application/json" ^
  -d "{\"username\":\"admin\",\"password\":\"password123\"}"
```

### Get Products (requires auth)

```bash
# Replace YOUR_TOKEN with actual JWT token from login
curl http://localhost:5000/api/produk/all ^
  -H "Authorization: Bearer YOUR_TOKEN"
```

## 🗄️ Database Commands

### Prisma Studio (Database GUI)

```bash
cd backend
npx prisma studio
# Opens at http://localhost:5555
```

### Reset Database

```bash
cd backend
npx prisma migrate reset
```

### View Database Schema

```bash
cd backend
npx prisma db pull
```

## 🐛 Debugging

### View Backend Logs

```bash
cd backend
npm run dev
# Logs will appear in console
```

### View Frontend Logs

```bash
# Open browser console (F12)
# Or check terminal where frontend is running
```

### Clear Node Modules & Reinstall

```bash
# Backend
cd backend
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install

# Frontend
cd frontend
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

## 🔐 Environment Variables

### Generate Secure JWT Secret

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Check Environment Variables

```bash
# Backend
cd backend
Get-Content .env

# Frontend
cd frontend
Get-Content .env
```

## 📊 Performance Monitoring

### Check Memory Usage (Windows)

```powershell
# Find Node processes
Get-Process node

# Detailed info
Get-Process node | Format-Table Name, Id, WorkingSet -AutoSize
```

### Check Port Usage

```powershell
# Check if port 5000 is in use
netstat -ano | findstr :5000

# Check if port 5173 is in use
netstat -ano | findstr :5173
```

## 🔄 Git Commands

### Initialize Git (if needed)

```bash
cd admin_panel_react
git init
git add .
git commit -m "Initial commit - React + Express migration"
```

### Create .gitignore

Already created! Just make sure to commit it.

## 📦 Deployment

### Build Frontend

```bash
cd frontend
npm run build
# Output in: dist/
```

### Deploy Backend

```bash
cd backend
# Make sure .env is configured for production
npm start
```

## 🆘 Quick Fixes

### Port Already in Use

```powershell
# Kill process on port 5000
$process = Get-NetTCPConnection -LocalPort 5000 -ErrorAction SilentlyContinue
if ($process) {
    Stop-Process -Id $process.OwningProcess -Force
}

# Kill process on port 5173
$process = Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue
if ($process) {
    Stop-Process -Id $process.OwningProcess -Force
}
```

### Database Connection Error

```bash
# Check MySQL is running
Get-Service MySQL*

# Start MySQL if not running
Start-Service MySQL80  # Adjust name as needed
```

### Prisma Client Not Generated

```bash
cd backend
npm run prisma:generate
```

### CORS Error

Update `backend/.env`:
```
FRONTEND_URL=http://localhost:5173
```

## 📱 Access URLs

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000/api
- **Health Check**: http://localhost:5000/health
- **Prisma Studio**: http://localhost:5555 (when running)

## 📚 Documentation Files

- `README.md` - Project overview
- `INSTALL.md` - Detailed installation guide
- `COMPARISON.md` - Next.js vs React+Express comparison
- `PROJECT_SUMMARY.md` - Complete project summary
- `CHECKLIST.md` - Migration checklist
- `QUICK_REFERENCE.md` - This file

## 💡 Pro Tips

1. **Use Prisma Studio** for easy database management
2. **Keep terminals open** to see real-time logs
3. **Use browser DevTools** to debug frontend issues
4. **Check console logs** for both frontend and backend
5. **Test API endpoints** with Postman/Insomnia
6. **Backup database** before major changes
7. **Use environment variables** for configuration
8. **Monitor memory usage** to verify improvements

## 🎯 Common Tasks

### Add New API Endpoint

1. Create route in `backend/src/routes/`
2. Add to `backend/src/server.js`
3. Test with curl or Postman
4. Use in frontend with `api.get/post/put/delete`

### Add New Page

1. Create component in `frontend/src/pages/`
2. Add route in `frontend/src/App.jsx`
3. Add menu item in `frontend/src/components/Layout.jsx`

### Update Database Schema

1. Edit `backend/prisma/schema.prisma`
2. Run `npm run prisma:migrate`
3. Run `npm run prisma:generate`
4. Update API routes if needed

---

**Keep this file handy for quick reference!** 📌
