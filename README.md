# Admin Panel - React + Express

Migrasi dari Next.js ke React + Express untuk performa yang lebih ringan di server.

## Struktur Project

```
admin_panel_react/
├── backend/          # Express API Server
│   ├── src/
│   │   ├── routes/   # API Routes
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── config/   # Database & Config
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── frontend/         # React Application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   └── App.jsx
│   ├── package.json
│   └── .env
│
└── README.md
```

## Instalasi

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

### Backend (.env)
```
DATABASE_URL=mysql://root@localhost:3306/merz_store
PORT=5000
JWT_SECRET=your_secret_key
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## Teknologi

### Backend
- Express.js
- Prisma ORM
- MySQL
- JWT Authentication
- CORS

### Frontend
- React 18
- Vite
- React Router
- Axios
- TailwindCSS
