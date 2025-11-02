# 🗃️ Inventory Management System

A modern full-stack **Inventory Management System** built with **Next.js**, **TypeScript**, and **Prisma ORM**.  
The app allows users to manage products, update stock, and perform all CRUD operations easily through a simple and responsive UI.

---

## 🚀 Features

- 🔐 **Authentication System** — Secure login and user management (via Stack Auth).
- 🧾 **CRUD Operations** — Create, edit, delete, and view products with ease.
- 📦 **Stock Management** — Track available quantities and update them in real time.
- 🔍 **Search & Filtering** — Quickly find products by name or category.
- 📑 **Pagination** — Smooth navigation across product pages.
- 🖼️ **Product Images** — Display and manage images stored in `/public`.
- 💾 **Prisma ORM Integration** — Reliable database access and migrations.
- 🎨 **Tailwind CSS** — Responsive, modern design with clean UI components.
- ⚙️ **TypeScript** — Fully typed for better scalability and code safety.

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | Next.js (App Router), React |
| Styling | Tailwind CSS |
| Backend | Next.js API Routes |
| Database | PostgreSQL (via Prisma ORM) |
| Auth | Stack Auth |
| Language | TypeScript |

---

## 📸 Screenshots

| Dashboard | Product List 
|------------|---------------
| ![Dashboard](public/Dashboard.png) | ![Inventory](public/Inventory.png) 

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Eslam2302/Inventory.git
cd Inventory

```

2️⃣ Setup Environment Variables

Create a .env file and add your configuration:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
```

If you’re using Neon or Supabase, just paste your database connection string in DATABASE_URL.

3️⃣ Install Dependencies

```bash
npm install
# or
pnpm install
```

4️⃣ Setup Prisma
```bash
npx prisma migrate dev --name init
npx prisma generate
```

(Optional: add seed data if available.)

5️⃣ Run the App
```bash
npm run dev
```

🚀Visit: http://localhost:3000

---

🧩 Folder Structure

```bash
Inventory/
├── app/
│   ├── (routes)
│   ├── api/
│   ├── lib/
│   └── ...
├── components/
├── prisma/
│   └── schema.prisma
├── public/
│   └── product images
├── styles/
├── package.json
└── README.md
```

---


🛠️ Scripts

| Command             | Description              |
| ------------------- | ------------------------ |
| `npm run dev`       | Start development server |
| `npm run build`     | Create production build  |
| `npm run start`     | Run production server    |
| `npx prisma studio` | Open Prisma DB UI        |

---

📬 Author

👤 Eslam Elsaid  
💼 https://github.com/Eslam2302



🌟 Show Your Support

If you like this project, give it a ⭐ on GitHub — it helps a lot!

