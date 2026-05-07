# Sant Portal 

A bilingual web portal dedicated to preserving and sharing the rich spiritual heritage of Maharashtra's saints. Browse detailed profiles of renowned Maharashtrian saints with information available in both **English** and **Marathi**.

---

## Features

- Profiles of 18 Maharashtra saints — Tukaram, Dnyaneshwar, Namdev, Eknath, Ramdas, Janabai, and more
- Full bilingual support — English and Marathi
- Detailed saint profiles with:
  - History & biography
  - Literature & works
  - Mantras & stotras
  - Birth place with map
- Interactive dashboard with region-wise grouping (Paschim Maharashtra, Marathwada, Vidarbha, Khandesh)
- Background devotional audio
- Admin panel with JWT-based authentication
- Add, edit, and delete saint profiles from admin panel
- Image upload support for saint photos
- Dark mode support

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, EJS (Embedded JavaScript Templates) |
| Backend | Node.js, Express.js |
| Database | MongoDB with Mongoose |
| Authentication | JWT (JSON Web Tokens) |
| File Uploads | Multer |
| Environment | dotenv |

---

## Project Structure

```
sant-portal/
├── models/
│   └── saint.js          # Mongoose schema for saint
├── public/
│   ├── audio/            # Devotional audio files
│   ├── css/              # Stylesheets & dark mode JS
│   └── images/           # Saint images
├── views/
│   ├── index.ejs         # Home page
│   ├── saint-detail.ejs  # Individual saint profile
│   ├── dashboard.ejs     # Region-wise dashboard
│   ├── login.ejs         # Admin login
│   ├── admin.ejs         # Add saint form
│   ├── admin-saints.ejs  # List all saints (admin)
│   └── edit-saint.ejs    # Edit saint form
├── app.js                # Main Express server
├── seed.js               # Database seeder
├── .env.example          # Environment variable template
└── package.json
```

---

## Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or above)
- [MongoDB](https://www.mongodb.com/) running locally on port `27017`

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/sant-portal.git
   cd sant-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and fill in your values:
   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/santDB
   JWT_SECRET=your_jwt_secret_here
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=your_password_here
   PORT=3000
   ```

4. **Seed the database**
   ```bash
   npm run seed
   ```

5. **Start the server**
   ```bash
   npm start
   ```
   For development with auto-reload:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## Routes

| Method | Route | Description |
|---|---|---|
| GET | `/` | Home page — list all saints |
| GET | `/saint/:id` | Individual saint detail page |
| GET | `/dashboard` | Region-wise dashboard |
| GET | `/login` | Admin login page |
| POST | `/login` | Admin login submit |
| GET | `/logout` | Logout admin |
| GET | `/admin` | Admin panel (protected) |
| POST | `/admin/add-saint` | Add new saint (protected) |
| GET | `/admin/saints` | List all saints in admin (protected) |
| GET | `/admin/edit/:id` | Edit saint form (protected) |
| POST | `/admin/edit/:id` | Update saint (protected) |

---

## Admin Access

- URL: [http://localhost:3000/login](http://localhost:3000/login)
- Use the `ADMIN_USERNAME` and `ADMIN_PASSWORD` values set in your `.env` file

---

## Saints Covered

| Saint | Region | Era |
|---|---|---|
| Sant Tukaram Maharaj | Paschim Maharashtra | 17th century |
| Sant Dnyaneshwar Maharaj | Paschim Maharashtra | 13th century |
| Sant Eknath Maharaj | Marathwada | 16th century |
| Sant Namdev Maharaj | Marathwada | 13th–14th century |
| Sant Ramdas Swami | Marathwada | 17th century |
| Sant Janabai | Marathwada | 13th century |
| Sant Chokhamela | Vidarbha | 14th century |
| Sant Gora Kumbhar | Paschim Maharashtra | 13th century |
| Sant Muktabai | Paschim Maharashtra | 13th century |
| Sant Savata Mali | Paschim Maharashtra | 14th century |
| Sant Sena Nhavi | Marathwada | 14th century |
| Sant Rohidas | Vidarbha | 15th century |
| Sai Baba of Shirdi | Marathwada | 19th century |
| Gajanan Maharaj of Shegaon | Vidarbha | 19th century |
| Swami Samarth of Akkalkot | Paschim Maharashtra | 19th century |
| Tajuddin Baba of Nagpur | Vidarbha | 19th century |
| Gondavalekar Maharaj | Paschim Maharashtra | 19th century |
| Sant Bhagwan Baba | Khandesh | 19th–20th century |

---

## Environment Variables

| Variable | Description |
|---|---|
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for signing JWT tokens |
| `ADMIN_USERNAME` | Admin login username |
| `ADMIN_PASSWORD` | Admin login password |
| `PORT` | Port to run the server on (default: 3000) |

---

## License

This project is open source and available under the [MIT License](LICENSE).
