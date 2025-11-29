# Garbet - Complete Gaming Platform

A full-stack gaming and betting platform built with MongoDB, Express, React (Next.js), and Node.js.

## 🎯 Features

### ✅ **Fully Implemented**
- ✅ User registration & authentication
- ✅ IBAN Deposit System with Deposit Pool (Yatırım Havuzu)
- ✅ IBAN Withdrawal System with Withdrawal Pool (Çekim Havuzu)
- ✅ Manual Sports Matches & Betting
- ✅ Bonus System (Deposit & Loss) with 5× Rollover Rule
- ✅ Support Ticket System
- ✅ Reporting & CSV Export
- ✅ Admin Logging System
- ✅ KYC Document Upload
- ✅ Settings Management
- ✅ Game Provider Integration
- ✅ Email Notifications

## Project Structure

```
garbet/
├── frontend/        # Next.js frontend application
├── backend/         # Express backend API
│   ├── controllers/ # API controllers
│   ├── models/      # Database models (11 models)
│   ├── routes/      # API routes
│   ├── middleware/  # Auth & admin middleware
│   └── utils/       # Utilities (email, upload, logging)
└── README.md
```

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## Installation

1. Install root dependencies:
```bash
npm install
```

2. Install all dependencies (backend + frontend):
```bash
npm run install-all
```

Or install separately:
```bash
npm run install-backend
npm run install-frontend
```

## Running the Application

### Development Mode

Run both server and client concurrently:
```bash
npm run dev
```

Or run separately:
```bash
# Terminal 1 - Backend
npm run backend

# Terminal 2 - Frontend
npm run frontend
```

### Production Build

```bash
npm run build
npm start
```

## Environment Variables

### Backend (.env in /backend)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/garbet
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development

# Email (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Game Provider (Optional)
GAME_PROVIDER_API_KEY=your_rapidapi_key
GAME_PROVIDER_API_URL=https://api.rapidapi.com

# Global Limits
MIN_DEPOSIT=100
MAX_DEPOSIT=50000
MIN_WITHDRAWAL=100
MAX_WITHDRAWAL=50000
```

### Frontend (.env.local in /frontend)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Tech Stack

- **Frontend**: Next.js 14, React
- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer
- **Email**: Nodemailer
- **HTTP Client**: Axios

## Quick Start

1. **Set up environment variables** (see above)
2. **Install dependencies:**
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. **Start MongoDB** (local or use MongoDB Atlas)
4. **Run the application:**
   ```bash
   # Backend
   cd backend && npm run dev
   
   # Frontend (new terminal)
   cd frontend && npm run dev
   ```
5. **Access:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api
   - Health Check: http://localhost:5000/api/health

## Documentation

- **NEXT_STEPS.md** - Detailed setup and next steps guide
- **FINAL_IMPLEMENTATION_SUMMARY.md** - Complete feature list
- **PROJECT_STATUS.md** - Implementation status details

## API Endpoints

60+ API endpoints available. See `FINAL_IMPLEMENTATION_SUMMARY.md` for complete list.

Main categories:
- Authentication (`/api/auth`)
- Payments (`/api/payment`)
- Matches & Betting (`/api/matches`)
- Bonus System (`/api/bonus`)
- Support (`/api/support`)
- Reports (`/api/reports`)
- Admin (`/api/admin`)

## License

ISC

