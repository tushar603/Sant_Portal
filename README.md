# Sant Portal - Maharashtra Saints Information Portal

A web application dedicated to preserving and sharing the rich spiritual heritage of Maharashtra's saints. The portal provides detailed information about prominent Maharashtrian saints including their history, literature, mantras, and birth places — available in both **English** and **Marathi**.

## Features
- Browse profiles of Maharashtra's renowned saints (Tukaram, Dnyaneshwar, Namdev, Eknath, Ramdas, and more)
- Bilingual support — English and Marathi
- Detailed saint profiles with history, literature, mantras, stotras, and birth place maps
- Interactive dashboard with region-wise grouping
- Background devotional audio
- Admin panel to add, edit, and manage saint profiles
- JWT-based admin authentication
- Image upload support

## Tech Stack
- **Frontend:** HTML, CSS, EJS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Auth:** JWT (JSON Web Tokens)
- **File Uploads:** Multer

## Setup

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/sant-portal.git
   cd sant-portal
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`
   ```bash
   cp .env.example .env
   ```
   Then fill in your values in `.env`.

4. Seed the database
   ```bash
   npm run seed
   ```

5. Start the server
   ```bash
   npm start
   ```

6. Open `http://localhost:3000` in your browser

## Admin Access
- URL: `http://localhost:3000/login`
- Use the credentials you set in `.env`
