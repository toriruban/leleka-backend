# 🤰 Leleka Backend

Backend REST API for pregnancy tracking application.

## 📋 Features

- JWT Authentication (register, login, logout)
- User profile management
- Tasks management
- Pregnancy diary
- Weekly pregnancy information

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Validation:** Joi
- **File Upload:** Multer
- **Security:** bcrypt for password hashing

## 📡 API Endpoints

### 🔐 Authentication (`/api/auth`)

| Method | Endpoint | Description | Status |
|--------|----------|-------------|--------|
| POST | `/register` | Register new user | ✅ |
| POST | `/login` | User login | ✅ |
| POST | `/logout` | User logout | ✅ |

### 👤 Users (`/api/users`)

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| GET | `/profile` | Get current user profile | ✅ | ✅ |
| PATCH | `/profile` | Update user profile | ✅ | ✅ |
| PATCH | `/avatar` | Upload avatar | ✅ | ✅ |

### ✅ Tasks (`/api/tasks`)

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| POST | `/` | Create task | ✅ |
| GET | `/` | Get all tasks | ✅ |
| PATCH | `/:id` | Update task status | ✅

### 📖 Diary (`/api/diary`)

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| POST | `/` | Create diary entry | ✅ | ❌ TODO |
| GET | `/` | Get all diary entries | ✅ | ❌ TODO |
| PATCH | `/:id` | Update diary entry | ✅ | ❌ TODO |
| DELETE | `/:id` | Delete diary entry | ✅ | ❌ TODO |

### 📅 Weeks (`/api/weeks`)

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| GET | `/:weekNumber` | Get week info (public) | ❌ | ❌ TODO |
| GET | `/my-week` | Get my week info (private) | ✅ | ❌ TODO |

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### Installation
```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/leleka-backend.git
cd leleka-backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your credentials
nano .env
```

### Environment Variables

Create `.env` file in root:
```env
PORT=8000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/leleka
JWT_SECRET=super_secret_jwt_key_change_this
NODE_ENV=development
```

### Run Server
```bash
# Development
npm run dev

# Production
npm start
```

Server runs on `http://localhost:8000`

## 📦 Project Structure
```
leleka-backend/
├── src/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js  # Auth logic
│   │   └── userController.js  # User logic
│   ├── middlewares/
│   │   ├── authenticate.js    # JWT verification
│   │   └── upload.js          # Multer config
│   ├── models/
│   │   └── User.js            # User schema
│   ├── routes/
│   │   ├── authRoutes.js      # Auth endpoints
│   │   └── userRoutes.js      # User endpoints
│   ├── validation/
│   │   ├── authValidation.js  # Auth schemas
│   │   └── userValidation.js  # User schemas
│   └── app.js                 # Express app
├── uploads/                    # Avatar uploads
├── .env                        # Environment variables
├── .gitignore
├── package.json
├── README.md
└── server.js                   # Entry point
```

## 🔒 Authentication

All protected endpoints require JWT token in header:
```
Authorization: Bearer YOUR_JWT_TOKEN
```

## 📸 Avatar Upload

Upload avatar using `multipart/form-data`:
- Field name: `avatar`
- Allowed types: JPEG, PNG, JPG, WEBP
- Max size: 5MB

## 👩‍💻 Author

**Viktoriia** - Junior Backend Developer

- GitHub: (https://github.com/toriruban)
- LinkedIn: (https://www.linkedin.com/in/viktoriia-ruban/)

## 📄 License

This project is for portfolio purposes.

---

**Status Legend:**
- ✅ Completed
- 🔄 In Progress
- ❌ TODO