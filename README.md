# Wallet API – Personal Finance Backend

A secure, scalable, and well-documented **RESTful API** built with **Node.js + Express.js** and **MongoDB** (Mongoose) to power wallet/finance tracking applications.

This backend handles user authentication, transaction management, categories, balance calculation, and monthly statistics — everything a modern personal finance or expense-tracker app needs.

![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.19-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-7.x-green?logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-Authentication-black)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## ✨ Features

- User registration & login with **JWT + Refresh Token**
- Password hashing with **bcrypt**
- Protected routes & role-based access (user/admin)
- CRUD for **Transactions** (income / expense)
- CRUD for **Categories** (customizable per user)
- Automatic balance calculation
- Monthly reports & statistics endpoint
- Filtering & pagination (by date, category, type)
- Error handling & custom middleware

## 🚀 Live Demo (if you deploy it)

https://your-wallet-api.up.railway.app  

## 📂 Project Structure
├── src/
│   ├── config/          # DB & env config
│   ├── controllers/     # Route handlers
│   ├── middlewares/     # auth, error, validation
│   ├── models/          # Mongoose schemas (User, Transaction, Category)
│   ├── routes/          # Express routes
│   ├── utils/           # Helpers & constants
│   └── app.js           # Express app
├── .env.example
├── package.json
└── README.md



## 🛠 Tech Stack

| Technology       | Version |
|------------------|---------|
| Node.js          | ≥ 20.x  |
| Express          | ^4.19   |
| MongoDB          | 7.x     |
| Mongoose         | ^8.x    |
| JWT              | jsonwebtoken |
| bcrypt           | ^5.x    |
| dotenv           | ^16.x   |
| Validation       | Joi or express-validator |

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/ate-na/wallet-backend.git
cd wallet-backend

# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Fill these variables in .env
MONGODB_URI=mongodb://localhost:27017/walletdb
JWT_SECRET=your_strong_secret_here
PORT=5000


🚀 Start the server
# Development (with nodemon)
npm run dev

# Production
npm start

##  🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first.
##  📄 License
This project is licensed under the MIT License – see the LICENSE file for details.

Made with ❤️ by ate-na

