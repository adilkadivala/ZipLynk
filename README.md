# ZipLynk - URL Shortener

ZipLynk is a URL shortener service built using **Next (Client)** and **Express + Prisma + PostgreSQL (Server)**.

---

## **🛠 Tech Stack**

### **Client (Frontend)**
- Next
- TypeScript
- Tailwind CSS
- ShadeCn (UI)

### **Server (Backend)**
- Node.js & Express.js
- Prisma ORM
- PostgreSQL
- CORS

---

## **📂 Project Structure**
```
ZipLynk/
│── client/       # Next frontend
│── server/       # Express backend with Prisma ORM
│── README.md     # Project documentation
```

---

## **🚀 Setup Instructions**

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/ZipLynk.git
cd ZipLynk
```

---

## **🖥 Client (Frontend) Setup**
```sh
cd client
pnpm install  # or npm install
pnpm run dev  # or npm start
```
### **🔹 Environment Variables (`client/.env` file)**
```env
API_BASE=http://localhost:3000  # Backend API URL
```

---

## **🖥 Server (Backend) Setup**
```sh
cd server
pnpm install  # or npm install
```
### **🔹 Set up Database**
1. Create a **PostgreSQL database**.
2. Copy `.env.example` to `.env` and update the `DATABASE_URL`.
```sh
cp .env.example .env
```
```env
DATABASE_URL=postgresql://user:password@localhost:5432/ziplynk
PORT=8080
```
3. Run Prisma migrations:
```sh
npx prisma migrate dev --name init
```

### **🔹 Start the Backend Server**
```sh
pnpm run dev  # or npm start
```

---

## **📌 Features**
- 🔗 **Shorten URLs**
- 📊 **Track visit history & analytics**
- 🔄 **Redirect shortened links**
- 📅 **Store timestamp of visits**

---



