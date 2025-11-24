# Garbet - MERN Stack Application

A full-stack web application built with MongoDB, Express, React (Next.js), and Node.js.

## Project Structure

```
garbet/
├── frontend/        # Next.js frontend application
├── backend/         # Express backend API
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
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/garbet
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### Frontend (.env.local in /frontend)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript (optional)
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## API Endpoints

API endpoints will be available at `http://localhost:5000/api`

## License

ISC

