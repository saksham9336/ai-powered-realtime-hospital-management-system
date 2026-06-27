# 🏥 MedFlow AI — AI-Powered Real-Time Hospital Management System

A full-stack, production-ready Hospital Management System built with the MERN stack, featuring real-time updates via Socket.io, AI-powered X-Ray analysis using Google Gemini, and role-based access control.

![MedFlow AI](https://img.shields.io/badge/MedFlow-AI%20Powered-blue?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)

---

## ✨ Features

- 🔐 **Role-Based Access Control** — Admin, Doctor, Nurse, and Patient portals with separate dashboards
- 🤖 **AI-Powered X-Ray Analysis** — Google Gemini AI analyzes uploaded X-Ray images and provides medical insights
- ⚡ **Real-Time Updates** — Socket.io powered live notifications, patient status updates, and activity feeds
- 📊 **Analytics Dashboard** — Revenue charts, active assignments board, and recent activity logs
- 👥 **User Management** — Create and manage Admins, Doctors, Nurses, and Patients
- 🏨 **Patient Admission** — Full patient admission workflow with background job processing via Inngest
- 🧪 **Laboratory Management** — Lab results tracking and management
- 💰 **Financial Records** — Invoice generation, billing history, and financial tracking
- 🔔 **Notification System** — Real-time in-app notifications
- 🌙 **Dark/Light Mode** — Beautiful dark theme with theme toggle
- 📁 **File Uploads** — X-Ray and document uploads via UploadThing

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| **Bun** | JavaScript runtime & package manager |
| **Express.js** | REST API framework |
| **MongoDB + Mongoose** | Database |
| **Socket.io** | Real-time communication |
| **Better Auth** | Authentication & session management |
| **Google Gemini AI** | X-Ray analysis |
| **Inngest** | Background job processing |
| **UploadThing** | File uploads |
| **TypeScript** | Type safety |

### Frontend
| Technology | Purpose |
|---|---|
| **React Router v7** | Full-stack React framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **ShadCN UI** | UI components |
| **TanStack Query** | Server state management |
| **Socket.io Client** | Real-time updates |
| **Recharts** | Data visualization |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Bun](https://bun.sh/) (latest)
- [MongoDB Atlas](https://cloud.mongodb.com/) account
- [Google Gemini API Key](https://aistudio.google.com/apikey)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/saksham9336/ai-powered-realtime-hospital-management-system.git
cd ai-powered-realtime-hospital-management-system
```

**2. Setup Backend**
```bash
cd backend
bun install
```

Create `.env` file in the `backend/` directory:
```env
NODE_ENV="development"
MONGO_URI="your_mongodb_connection_string"
BETTER_AUTH_SECRET="your_random_secret_key_min_32_chars"
BETTER_AUTH_URL="http://localhost:5000"
FRONTEND_URL="http://localhost:5173"
GEMINI_KEY="your_gemini_api_key"
UPLOADTHING_TOKEN=""
POLAR_PRODUCT_ID=""
POLAR_ACCESS_TOKEN=""
POLAR_WEBHOOK_SECRET=""
```

**3. Setup Frontend**
```bash
cd frontend
npm install
```

### Running the Project

**Terminal 1 — Start Backend:**
```bash
cd backend
bun run start:server
```
Backend runs on `http://localhost:5000`

**Terminal 2 — Start Frontend:**
```bash
cd frontend
npm run dev
```
Frontend runs on `http://localhost:5173`

### Creating the First Admin User

After starting the backend, run this command to create your first admin user:

```powershell
# Windows PowerShell
Invoke-WebRequest -Uri "http://localhost:5000/api/auth/sign-up/email" -Method POST -ContentType "application/json" -Body '{"email":"admin@hospital.com","password":"Admin@123","name":"Admin"}' -UseBasicParsing
```

Then go to **MongoDB Atlas → hms → user collection** and change the `role` field from `"patient"` to `"admin"`.

Login at `http://localhost:5173/login` with your credentials.

---

## 📁 Project Structure

```
├── backend/
│   ├── src/
│   │   ├── config/         # Database connection
│   │   ├── controllers/    # Route handlers
│   │   ├── inngest/        # Background job functions
│   │   ├── lib/            # Auth, Socket, UploadThing setup
│   │   ├── middleware/     # Auth & role middleware
│   │   ├── models/         # Mongoose schemas
│   │   ├── routes/         # API routes
│   │   └── server.ts       # Entry point
│   └── package.json
│
└── frontend/
    ├── app/
    │   ├── components/     # Reusable UI components
    │   ├── hooks/          # Custom React hooks
    │   ├── lib/            # API, auth client, socket setup
    │   ├── routes/         # Page components
    │   └── root.tsx        # App root
    └── package.json
```

---

## 🔑 Environment Variables

| Variable | Description | Required |
|---|---|---|
| `MONGO_URI` | MongoDB connection string | ✅ |
| `BETTER_AUTH_SECRET` | Random secret for JWT signing | ✅ |
| `BETTER_AUTH_URL` | Backend URL | ✅ |
| `FRONTEND_URL` | Frontend URL | ✅ |
| `GEMINI_KEY` | Google Gemini API key | ✅ |
| `UPLOADTHING_TOKEN` | UploadThing token for file uploads | ⚙️ Optional |
| `POLAR_ACCESS_TOKEN` | Polar payment integration | ⚙️ Optional |

---

## 👨‍💻 Developer

**Saksham Singh**
- GitHub: [@saksham9336](https://github.com/saksham9336)
- LinkedIn: [saksham-singh93](https://linkedin.com/in/saksham-singh93)
- Email: work.saksham93@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
