# 🚀 Next Steps - Getting Your Platform Running

## 📋 **Immediate Next Steps**

### **1. Environment Setup** ⚠️ **REQUIRED**

#### Backend Environment Variables
Create/update `backend/.env` file:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/garbet
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/garbet

# Security
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# Email Service (Optional but recommended)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
EMAIL_FROM=your_email@gmail.com
EMAIL_FROM_NAME=Garbet Platform
FRONTEND_URL=http://localhost:3000

# Game Provider (Optional - for external games)
GAME_PROVIDER_API_KEY=your_rapidapi_key
GAME_PROVIDER_API_URL=https://api.rapidapi.com
GAME_PROVIDER_NAME=rapidapi

# Global Limits (or use Settings API)
MIN_DEPOSIT=100
MAX_DEPOSIT=50000
MIN_WITHDRAWAL=100
MAX_WITHDRAWAL=50000

# Bonus Settings (or use Settings API)
DEPOSIT_BONUS_PERCENT=20
LOSS_BONUS_PERCENT=20
ROLLOVER_MULTIPLIER=5
BONUS_ENABLED=true

# Company IBAN (or use Settings API)
COMPANY_IBAN=TR330006100519786457841326
COMPANY_BANK_NAME=Your Bank Name
COMPANY_ACCOUNT_HOLDER=Garbet Platform
COMPANY_BRANCH_CODE=0061
```

#### Frontend Environment Variables
Create/update `frontend/.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

### **2. Database Setup** ⚠️ **REQUIRED**

#### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Database will be created automatically on first connection

#### Option B: MongoDB Atlas (Cloud)
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env`

#### Create Initial Admin User
After starting the server, you'll need to create an admin user. You can:
- Use MongoDB Compass to manually set a user's role to `super_admin`
- Or create a script to seed an admin user

---

### **3. Install Dependencies** ✅ **REQUIRED**

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

---

### **4. Start the Application** 🚀

#### Development Mode (Recommended)

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Backend will run on: `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend will run on: `http://localhost:3000`

#### Or Use Root Scripts:
```bash
# From project root
npm run dev  # Runs both backend and frontend
```

---

### **5. Test the APIs** 🧪

#### Using Postman or Similar Tool:

1. **Test Registration:**
   - `POST http://localhost:5000/api/auth/register`
   - Body: `{ "username": "testuser", "firstName": "Test", "lastName": "User", "email": "test@test.com", "phone": "1234567890", "password": "password123", "is18Plus": true, "termsAccepted": true, "kvkkAccepted": true }`

2. **Test Login:**
   - `POST http://localhost:5000/api/auth/login`
   - Body: `{ "email": "test@test.com", "password": "password123" }`
   - Save the token from response

3. **Test Protected Endpoints:**
   - Add header: `Authorization: Bearer <your_token>`
   - Test: `GET http://localhost:5000/api/auth/me`

4. **Test IBAN Info:**
   - `GET http://localhost:5000/api/payment/iban-info`
   - (Requires authentication)

---

### **6. Create Admin User** 👤

You need to create an admin user to access admin panel:

**Option 1: Via MongoDB**
```javascript
// In MongoDB shell or Compass
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { role: "super_admin" } }
)
```

**Option 2: Create Seed Script**
Create `backend/scripts/seedAdmin.js`:
```javascript
const User = require('../models/User.model');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI).then(async () => {
  const admin = await User.findOneAndUpdate(
    { email: 'admin@garbet.com' },
    { role: 'super_admin' },
    { upsert: true, new: true }
  );
  console.log('Admin user created:', admin);
  process.exit();
});
```

---

### **7. Frontend Integration** 🎨

#### Connect Frontend to Backend APIs:

1. **Update API Client** (`frontend/lib/api.js`)
   - Ensure `NEXT_PUBLIC_API_URL` is set correctly
   - Test API calls from frontend

2. **Update Pages:**
   - Connect registration form to `/api/auth/register`
   - Connect login form to `/api/auth/login`
   - Connect deposit page to `/api/payment/iban-deposit`
   - Connect withdrawal page to `/api/payment/withdrawal/request`
   - Connect admin pages to admin endpoints

3. **Add Authentication:**
   - Store JWT token in localStorage or cookies
   - Add token to API requests
   - Handle token expiration

---

### **8. Testing Checklist** ✅

#### Backend API Testing:
- [ ] User registration works
- [ ] User login works
- [ ] IBAN deposit request creation
- [ ] Withdrawal request creation
- [ ] Match creation (admin)
- [ ] Match betting (user)
- [ ] Bonus creation on deposit
- [ ] Support ticket creation
- [ ] Admin endpoints require admin role

#### Frontend Testing:
- [ ] Registration form submits correctly
- [ ] Login redirects to dashboard
- [ ] Deposit page shows IBAN info
- [ ] Withdrawal page validates IBAN
- [ ] Admin panel loads
- [ ] Admin can view deposit pool
- [ ] Admin can approve deposits

---

### **9. Important Files to Check** 📁

1. **`backend/.env`** - All environment variables set
2. **`frontend/.env.local`** - API URL configured
3. **`backend/uploads/kyc/`** - Directory exists (auto-created)
4. **MongoDB connection** - Database is accessible

---

### **10. Common Issues & Solutions** 🔧

#### Issue: "Cannot connect to MongoDB"
- **Solution:** Check MongoDB is running and `MONGODB_URI` is correct

#### Issue: "JWT_SECRET not defined"
- **Solution:** Add `JWT_SECRET` to `backend/.env`

#### Issue: "Email not sending"
- **Solution:** Configure SMTP settings in `.env` (optional, won't break app)

#### Issue: "Admin panel access denied"
- **Solution:** Create admin user with `role: 'super_admin'`

#### Issue: "File upload not working"
- **Solution:** Check `uploads/kyc/` directory exists and has write permissions

---

### **11. Production Deployment Preparation** 🚀

Before deploying to production:

1. **Security:**
   - Change all default passwords
   - Use strong `JWT_SECRET`
   - Enable HTTPS
   - Set `NODE_ENV=production`

2. **Database:**
   - Use MongoDB Atlas (cloud)
   - Set up database backups
   - Configure connection pooling

3. **File Storage:**
   - Consider cloud storage (AWS S3, Cloudinary) for KYC documents
   - Update upload utility to use cloud storage

4. **Environment:**
   - Use environment variables for all sensitive data
   - Never commit `.env` files
   - Use secrets management in production

5. **Monitoring:**
   - Set up error logging (Sentry, LogRocket)
   - Monitor API performance
   - Set up database monitoring

---

### **12. Recommended Development Flow** 📝

1. ✅ **Backend Setup** (You're here)
   - Environment variables
   - Database connection
   - Test APIs

2. ⏭️ **Frontend Integration**
   - Connect forms to APIs
   - Add authentication
   - Test user flows

3. ⏭️ **Admin Panel**
   - Connect admin pages
   - Test deposit/withdrawal pools
   - Test user management

4. ⏭️ **Testing**
   - Test all user flows
   - Test admin functions
   - Fix bugs

5. ⏭️ **Polish**
   - UI/UX improvements
   - Error handling
   - Loading states

6. ⏭️ **Deployment**
   - Production environment setup
   - Database migration
   - Go live!

---

## 🎯 **Your Immediate Action Items**

### **Priority 1 (Do Now):**
1. ✅ Create `backend/.env` file with all variables
2. ✅ Set up MongoDB (local or Atlas)
3. ✅ Install dependencies: `npm install` in both backend and frontend
4. ✅ Start backend: `cd backend && npm run dev`
5. ✅ Test backend: Use Postman to test `/api/health` endpoint

### **Priority 2 (Next):**
1. ✅ Create admin user
2. ✅ Test registration and login APIs
3. ✅ Connect frontend to backend
4. ✅ Test deposit/withdrawal flows

### **Priority 3 (Later):**
1. ✅ Configure email service (optional)
2. ✅ Set up game provider API (optional)
3. ✅ Test all features end-to-end
4. ✅ Prepare for deployment

---

## 📚 **Learning Resources**

As you're learning development, here's what each step teaches you:

- **Environment Variables** → Configuration management
- **Database Setup** → Data persistence
- **API Testing** → Backend functionality
- **Frontend Integration** → Full-stack development
- **Authentication** → Security concepts
- **File Uploads** → File handling
- **Email Service** → External service integration

---

## 🆘 **Need Help?**

If you encounter issues:
1. Check the error messages in console
2. Verify environment variables are set
3. Check MongoDB connection
4. Review the API documentation in code comments
5. Check the implementation status documents

---

**Good luck with your platform! 🚀**

*All the hard backend work is done - now it's time to connect everything and see it work!*

