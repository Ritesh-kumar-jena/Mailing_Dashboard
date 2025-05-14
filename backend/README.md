
# 📬 Mailing Dashboard Backend

This is the backend server for the **Mailing Dashboard** project. It handles user authentication, email data handling, and JWT-based session management.

## 🛠️ Tech Stack

- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **JWT (JSON Web Token)**
- **bcrypt** for password hashing
- **dotenv** for environment variable handling
- **cors** to enable cross-origin requests

---

## 📁 Project Structure

```
backend/
├── Controller/
│   ├── mailRoutes.js
│   └── userRoutes.js
├── Middelware/
│   └── auth.js
├── Model/
│   ├── mailModel.js
│   └── userModel.js
├── db.js
├── index.js
├── .env
└── package.json
```

---

## 🔐 Features

### 🔑 Authentication
- **Sign Up** (`/users/signIn`)
- **Login** (`/users/login`)
- **Logout** (`/users/logout`)
- JWT authentication with token blacklist for secure logout

### 📩 Mailing System
- **Add Mail** (`/mail/add`) – Add a new email to the system
- **Get Mails** (`/mail/`) – Get list of all emails

> All `/mail` routes are protected by JWT middleware.

---

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
port=3000
database=mongodb+srv://<your-db-url>
key=your_jwt_secret
```

### 4. Start the Server

```bash
npm run dev
```

Visit your backend at:

```
http://localhost:5000/
```

---


## 🔐 API Endpoints

### 👤 Authentication

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| POST   | /users/signIn    | Register a new user      |
| POST   | /users/login     | Authenticate user        |
| GET    | /users/logout    | Logout and blacklist JWT |

### 📩 Mails (Protected)

| Method | Endpoint    | Description         |
|--------|-------------|---------------------|
| GET    | /mail       | Get all emails      |
| POST   | /mail/add   | Add a new email     |

> Use the token from login in the header as:
> 
> `Authorization: Bearer <token>`

---

## 🧪 Mock Email Format

Example payload for adding mail (`/mail/add`):

```json
{
  "senderName": "John Doe",
  "senderEmail": "john@example.com",
  "subject": "Welcome!",
  "content": "Thanks for joining us.",
  "timestamp": "2025-05-14 10:30:00",
  "catagory": "unread",
  "specification": ["inbox"]
}
```

---

## 🧑‍💻 Developer

Developed by **Ritesh**  
Role: Full-stack Developer  
Tech Stack: MERN

---

## 📃 License

This project is open for educational and portfolio use under the ISC license.
