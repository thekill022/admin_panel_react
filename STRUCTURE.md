# 📁 Project Structure

```
admin_panel_react/
│
├── 📄 README.md                    # Project overview & quick start
├── 📄 INSTALL.md                   # Detailed installation guide
├── 📄 COMPARISON.md                # Next.js vs React+Express comparison
├── 📄 PROJECT_SUMMARY.md           # Complete project documentation
├── 📄 CHECKLIST.md                 # Migration checklist
├── 📄 QUICK_REFERENCE.md           # Quick command reference
├── 📄 STRUCTURE.md                 # This file - project structure
├── 📄 .gitignore                   # Git ignore rules
├── 🔧 setup.ps1                    # Automated setup script
├── 🔧 dev.ps1                      # Development helper script
│
├── 🔧 backend/                     # Express API Server
│   ├── src/
│   │   ├── routes/
│   │   │   ├── auth.js             # Authentication routes (login/register)
│   │   │   ├── produk.js           # Product CRUD operations
│   │   │   ├── dashboard.js        # Dashboard analytics
│   │   │   ├── banner.js           # Banner management
│   │   │   ├── pengumuman.js       # Announcement management
│   │   │   └── promo.js            # Promo code management
│   │   │
│   │   ├── middleware/
│   │   │   └── auth.js             # JWT authentication middleware
│   │   │
│   │   ├── config/
│   │   │   └── database.js         # Prisma client configuration
│   │   │
│   │   └── server.js               # Main Express server
│   │
│   ├── prisma/
│   │   ├── schema.prisma           # Database schema
│   │   └── seed.js                 # Database seeder (if exists)
│   │
│   ├── 📄 package.json             # Backend dependencies
│   ├── 📄 .env                     # Environment variables (create from .env.example)
│   └── 📄 .env.example             # Environment template
│
└── 🎨 frontend/                    # React Application
    ├── public/
    │   └── vite.svg                # Vite logo
    │
    ├── src/
    │   ├── pages/                  # Page components
    │   │   ├── Login.jsx           # Login page
    │   │   ├── Dashboard.jsx       # Dashboard with analytics
    │   │   ├── Products.jsx        # Product list page
    │   │   ├── ProductForm.jsx     # Product create/edit form
    │   │   ├── Banners.jsx         # Banner management page
    │   │   ├── Announcements.jsx   # Announcement management page
    │   │   └── PromoCode.jsx       # Promo code management page
    │   │
    │   ├── components/
    │   │   └── Layout.jsx          # Main layout with sidebar & navigation
    │   │
    │   ├── context/
    │   │   └── AuthContext.jsx     # Authentication context & provider
    │   │
    │   ├── utils/
    │   │   └── api.js              # Axios API client with interceptors
    │   │
    │   ├── App.jsx                 # Main app with routing
    │   ├── main.jsx                # React entry point
    │   └── index.css               # Global styles & Tailwind
    │
    ├── 📄 index.html               # HTML entry point
    ├── 📄 vite.config.js           # Vite configuration
    ├── 📄 tailwind.config.js       # Tailwind CSS configuration
    ├── 📄 postcss.config.js        # PostCSS configuration
    ├── 📄 package.json             # Frontend dependencies
    ├── 📄 .env                     # Environment variables (create from .env.example)
    └── 📄 .env.example             # Environment template
```

## 📊 File Count Summary

### Backend
- **Routes**: 6 files (auth, produk, dashboard, banner, pengumuman, promo)
- **Middleware**: 1 file (auth)
- **Config**: 1 file (database)
- **Main**: 1 file (server.js)
- **Total**: ~9 core files

### Frontend
- **Pages**: 7 files (Login, Dashboard, Products, ProductForm, Banners, Announcements, PromoCode)
- **Components**: 1 file (Layout)
- **Context**: 1 file (AuthContext)
- **Utils**: 1 file (api)
- **Main**: 3 files (App, main, index.css)
- **Total**: ~13 core files

### Documentation
- **Guides**: 6 files (README, INSTALL, COMPARISON, PROJECT_SUMMARY, CHECKLIST, QUICK_REFERENCE)
- **Scripts**: 2 files (setup.ps1, dev.ps1)
- **Config**: 1 file (.gitignore)
- **Total**: 9 files

## 🎯 Key Features by File

### Backend Routes

#### `auth.js`
- POST `/api/auth/login` - User login
- POST `/api/auth/register` - User registration

#### `produk.js`
- GET `/api/produk/all` - Get all products (authenticated)
- GET `/api/produk/website` - Get active products (public)
- GET `/api/produk/:id` - Get single product
- POST `/api/produk` - Create product
- PUT `/api/produk/:id` - Update product
- DELETE `/api/produk/:id` - Delete product

#### `dashboard.js`
- GET `/api/dashboard/analytics` - Get dashboard statistics

#### `banner.js`
- GET `/api/banner` - Get all banners
- POST `/api/banner` - Create banner
- PUT `/api/banner/:id` - Update banner
- DELETE `/api/banner/:id` - Delete banner

#### `pengumuman.js`
- GET `/api/pengumuman` - Get all announcements
- POST `/api/pengumuman` - Create announcement
- PUT `/api/pengumuman/:id` - Update announcement
- DELETE `/api/pengumuman/:id` - Delete announcement

#### `promo.js`
- GET `/api/promo` - Get all promo codes
- POST `/api/promo/validate` - Validate promo code (public)
- POST `/api/promo` - Create promo code
- PUT `/api/promo/:id` - Update promo code
- DELETE `/api/promo/:id` - Delete promo code

### Frontend Pages

#### `Login.jsx`
- Login form
- JWT authentication
- Auto-redirect if authenticated

#### `Dashboard.jsx`
- Statistics cards (total products, active, sold, revenue)
- Recent products table
- Real-time analytics

#### `Products.jsx`
- Product list with images
- Search functionality
- Edit/Delete actions
- Status indicators

#### `ProductForm.jsx`
- Create/Edit product form
- Multi-currency pricing
- Image management
- Validation

#### `Banners.jsx`
- Banner grid display
- Upload banner
- Delete banner
- Highlight feature

#### `Announcements.jsx`
- Announcement list
- Create announcement
- Icon support
- Highlight feature

#### `PromoCode.jsx`
- Promo code table
- Create with date range
- Max claims & discount limits
- Active/Inactive status

### Shared Components

#### `Layout.jsx`
- Responsive sidebar
- Navigation menu
- User profile
- Logout functionality

#### `AuthContext.jsx`
- Global auth state
- Login/Logout functions
- Token management
- Protected route logic

#### `api.js`
- Axios instance
- Request interceptors (add JWT token)
- Response interceptors (handle 401)
- Base URL configuration

## 🔧 Configuration Files

### Backend
- **package.json**: Express, Prisma, JWT, bcrypt, CORS
- **.env**: Database URL, JWT secret, ports
- **schema.prisma**: Database models & relations

### Frontend
- **package.json**: React, Vite, React Router, Axios, Tailwind
- **.env**: API URL
- **vite.config.js**: Dev server & proxy config
- **tailwind.config.js**: Custom colors & theme

## 📦 Dependencies

### Backend (~15 packages)
- express
- @prisma/client
- bcrypt
- jsonwebtoken
- cors
- dotenv
- multer
- @aws-sdk/client-s3

### Frontend (~12 packages)
- react
- react-dom
- react-router-dom
- axios
- react-hot-toast
- lucide-react
- recharts
- apexcharts
- react-apexcharts

## 🎨 Styling

- **TailwindCSS**: Utility-first CSS framework
- **Custom Components**: Buttons, cards, inputs
- **Responsive Design**: Mobile, tablet, desktop
- **Color Palette**: Primary blue theme
- **Icons**: Lucide React

## 🔐 Security

- JWT token authentication
- Password hashing (bcrypt)
- Protected API routes
- CORS configuration
- Environment variables for secrets
- Token expiration handling

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance

- Vite for fast HMR
- Code splitting (React Router)
- Lazy loading ready
- Optimized builds
- Minimal dependencies

---

**Total Lines of Code**: ~3,500 lines
**Backend**: ~1,500 lines
**Frontend**: ~2,000 lines
**Documentation**: ~1,000 lines
