# HavenStay – Full-Stack Travel & Stay Booking Platform 🏡

[![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)]()
[![Express.js](https://img.shields.io/badge/Express.js-Backend-lightgrey)]()
[![Node.js](https://img.shields.io/badge/Node.js-Server-success)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]()

HavenStay is a full-stack accommodation booking platform inspired by Airbnb, built using the **MERN stack (MongoDB, Express.js, React, Node.js)**. It allows users to explore, book, and host properties with secure authentication and a modern UI.

---

## ✨ Features
- 🔐 **User Authentication** & role-based access (Host/User)
- 🏠 Property listing creation with image uploads (**Cloudinary integration**)
- 🔍 Destination & category-based **search and filtering**
- 📱 Interactive and **responsive UI**
- 🛡️ Secure backend with **JWT-based authentication**

---

## 🛠 Tech Stack
- **Frontend:** React, Tailwind CSS (or your CSS framework)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Cloud Storage:** Cloudinary
- **Authentication:** JSON Web Tokens (JWT)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/thrsshhh/Havenstay.git
cd havenstay
````

### 2. Install Dependencies

For both backend and frontend:

```bash
npm install
```

### 3. Install Cloudinary

```bash
npm install cloudinary multer multer-storage-cloudinary
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory with:

```
PORT=8080
MONGO_URI=your_mongodb_connection_string
secret=your_jwt_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_map_token

```

### 5. Start the Application

```bash
node app.js
```

Runs on: **[http://localhost:8080](http://localhost:8080)**

---

## 🌱 Future Enhancements

* 💳 Payment gateway integration (Stripe/Razorpay)
* ❤️ Wishlist / Favorites feature
* 🛠 Admin dashboard for property moderation
* 📧 Email notifications for bookings

---
