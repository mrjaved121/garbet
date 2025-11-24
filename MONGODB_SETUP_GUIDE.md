# MongoDB Setup Guide for Garbet Casino App

## 🚀 Quick Start

### Step 1: Set Up MongoDB Atlas (Recommended for Production)

1. **Create MongoDB Atlas Account**
   - Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for free account
   - Choose the **FREE M0 tier** (512MB storage, perfect for development)

2. **Create a Cluster**
   - Click "Build a Database"
   - Choose **FREE** tier
   - Select your preferred cloud provider and region
   - Click "Create"

3. **Create Database User**
   - Go to "Database Access" → "Add New Database User"
   - Choose "Password" authentication
   - Create username and password (save these!)
   - Set privileges to "Atlas admin" or "Read and write to any database"
   - Click "Add User"

4. **Whitelist IP Address**
   - Go to "Network Access" → "Add IP Address"
   - For development: Click "Allow Access from Anywhere" (0.0.0.0/0)
   - For production: Add specific IP addresses
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Database" → Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `garbet` (or your preferred database name)

   Example:
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/garbet?retryWrites=true&w=majority
   ```

### Step 2: Configure Environment Variables

1. **Create `.env` file in `backend/` directory:**
   ```bash
   cd backend
   cp .env.example .env
   ```

2. **Edit `.env` file:**
   ```env
   PORT=5000
   NODE_ENV=development
   
   # MongoDB Atlas Connection String
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/garbet?retryWrites=true&w=majority
   
   # Or for local MongoDB:
   # MONGODB_URI=mongodb://localhost:27017/garbet
   
   JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
   JWT_EXPIRE=30d
   ```

### Step 3: Install Dependencies

```bash
cd backend
npm install
```

### Step 4: Test Connection

```bash
npm run dev
```

You should see:
```
MongoDB Connected: cluster0.xxxxx.mongodb.net
Server is running on port 5000
```

---

## 📋 Local MongoDB Setup (Alternative)

If you prefer to run MongoDB locally:

### Windows:
1. Download MongoDB from [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. Install MongoDB
3. Start MongoDB service
4. Use connection string: `mongodb://localhost:27017/garbet`

### macOS:
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Linux:
```bash
sudo apt-get install mongodb
sudo systemctl start mongodb
```

---

## 🎯 What's Been Set Up

### ✅ Models Created:
1. **User Model** - Extended with casino fields:
   - `balance` - User's current balance
   - `currency` - USD, EUR, or TRY
   - `status` - active, suspended, banned
   - `totalDeposits`, `totalWithdrawals`, `totalWinnings` - Statistics

2. **Transaction Model** - For deposits/withdrawals:
   - Types: deposit, withdrawal, bet, win, refund
   - Status: pending, completed, failed, cancelled
   - Payment methods tracking
   - Unique transaction IDs

3. **Game Model** - For casino games:
   - Game types: slots, live_casino, crash, sports, live_betting
   - Bet tracking with multipliers
   - Win/loss status
   - Linked to transactions

### ✅ Controllers Created:
1. **Transaction Controller** - With ACID transactions:
   - `createDeposit()` - Safe deposit with transaction
   - `createWithdrawal()` - Safe withdrawal with balance check
   - `getTransactions()` - Get user transaction history
   - `getTransaction()` - Get single transaction

2. **Game Controller** - For casino games:
   - `placeBet()` - Place bet with balance deduction
   - `processGameResult()` - Process win/loss with balance update
   - `getGames()` - Get user game history
   - `getGame()` - Get single game

### ✅ Routes Created:
- `/api/transactions/deposit` - POST - Create deposit
- `/api/transactions/withdraw` - POST - Create withdrawal
- `/api/transactions` - GET - Get all transactions
- `/api/transactions/:id` - GET - Get transaction by ID
- `/api/games/bet` - POST - Place a bet
- `/api/games/:id/result` - POST - Process game result
- `/api/games` - GET - Get all games
- `/api/games/:id` - GET - Get game by ID

---

## 🔒 Security Features

### ✅ ACID Transactions
All financial operations use MongoDB transactions to ensure data consistency:
- Deposits are atomic (balance update + transaction record)
- Withdrawals check balance before processing
- Bets deduct balance safely
- Wins add to balance safely

### ✅ Balance Validation
- Cannot withdraw more than balance
- Cannot bet more than balance
- All operations are validated before execution

---

## 📊 API Usage Examples

### Deposit Money:
```javascript
POST /api/transactions/deposit
Headers: { Authorization: "Bearer <token>" }
Body: {
  "amount": 100,
  "paymentMethod": "credit_card",
  "description": "Initial deposit"
}
```

### Withdraw Money:
```javascript
POST /api/transactions/withdraw
Headers: { Authorization: "Bearer <token>" }
Body: {
  "amount": 50,
  "paymentMethod": "bank_transfer",
  "description": "Withdrawal request"
}
```

### Place a Bet:
```javascript
POST /api/games/bet
Headers: { Authorization: "Bearer <token>" }
Body: {
  "gameType": "slots",
  "gameId": "slot-123",
  "betAmount": 10,
  "multiplier": 2
}
```

### Process Game Result:
```javascript
POST /api/games/:gameId/result
Headers: { Authorization: "Bearer <token>" }
Body: {
  "result": { "reels": ["cherry", "cherry", "cherry"] },
  "winAmount": 20,
  "multiplier": 2
}
```

### Get Transaction History:
```javascript
GET /api/transactions?type=deposit&limit=10&page=1
Headers: { Authorization: "Bearer <token>" }
```

---

## 🧪 Testing the Setup

1. **Test Database Connection:**
   ```bash
   curl http://localhost:5000/api/health
   ```

2. **Register a User:**
   ```bash
   POST http://localhost:5000/api/auth/register
   Body: { "name": "Test User", "email": "test@example.com", "password": "password123" }
   ```

3. **Login:**
   ```bash
   POST http://localhost:5000/api/auth/login
   Body: { "email": "test@example.com", "password": "password123" }
   ```

4. **Make a Deposit:**
   ```bash
   POST http://localhost:5000/api/transactions/deposit
   Headers: { Authorization: "Bearer <token>" }
   Body: { "amount": 100 }
   ```

---

## 🚨 Important Notes

1. **Never commit `.env` file** - It's in `.gitignore`
2. **Change JWT_SECRET in production** - Use a strong random string
3. **Use MongoDB Atlas for production** - Better security and reliability
4. **Set up proper IP whitelisting** - Don't allow 0.0.0.0/0 in production
5. **Enable MongoDB Atlas backups** - Critical for production
6. **Monitor your database** - Use Atlas monitoring dashboard

---

## 📈 Next Steps

1. ✅ Set up MongoDB Atlas
2. ✅ Configure environment variables
3. ✅ Test the connection
4. ⏭️ Add payment gateway integration
5. ⏭️ Implement game logic for slots/crash/etc.
6. ⏭️ Add admin dashboard
7. ⏭️ Set up monitoring and logging
8. ⏭️ Add email verification
9. ⏭️ Implement KYC (Know Your Customer) verification

---

## 🆘 Troubleshooting

### Connection Error:
- Check your MongoDB Atlas IP whitelist
- Verify username/password in connection string
- Ensure cluster is running (not paused)

### Transaction Errors:
- Check MongoDB version (transactions require 4.0+)
- Ensure you're using a replica set (Atlas provides this)

### Balance Issues:
- Check transaction logs
- Verify ACID transactions are working
- Check for concurrent requests

---

## 📚 Resources

- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [MongoDB Transactions](https://docs.mongodb.com/manual/core/transactions/)

