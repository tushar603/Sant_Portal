require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const Saint = require("./models/saint");
const multer = require("multer");

const app = express();
const JWT_SECRET = process.env.JWT_SECRET;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected Successfully"))
.catch((err) => console.log(err));

// Middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// JWT Auth Middleware
function verifyToken(req, res, next) {
    const token = req.cookies.token;
    if (!token) return res.redirect("/login");
    try {
        req.admin = jwt.verify(token, JWT_SECRET);
        next();
    } catch (err) {
        res.redirect("/login");
    }
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });


// Home Route
app.get("/", async (req, res) => {
    const saints = await Saint.find();
    res.render("index", { saints });
});

// Saint Detail Route
app.get("/saint/:id", async (req, res) => {
    const saint = await Saint.findById(req.params.id);
    res.render("saint-detail", { saint });
});

// Dashboard Route
app.get("/dashboard", async (req, res) => {
    try {
        const saints = await Saint.find();
        const regions = {};
        saints.forEach(s => {
            const r = s.region || "Other";
            if (!regions[r]) regions[r] = [];
            regions[r].push(s);
        });
        res.render("dashboard", { saints, regions });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading dashboard");
    }
});

// Login Page
app.get("/login", (req, res) => {
    res.render("login");
});

// Login POST
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ username: "admin" }, JWT_SECRET, { expiresIn: "1h" });
        res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
        res.redirect("/admin");
    } else {
        res.send("Invalid Credentials");
    }
});

// Admin Panel (Protected)
app.get("/admin", verifyToken, (req, res) => {
    res.render("admin");
});

// Logout
app.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/login");
});

app.post("/admin/add-saint", verifyToken, upload.single("image"), async (req, res) => {

    const newSaint = new Saint({
        name: req.body.name,
        nameMarathi: req.body.nameMarathi,
        birthYear: req.body.birthYear,
        birthPlace: req.body.birthPlace,
        birthPlaceMarathi: req.body.birthPlaceMarathi,
        godFollowed: req.body.godFollowed,
        godFollowedMarathi: req.body.godFollowedMarathi,
        history: req.body.history,
        historyMarathi: req.body.historyMarathi,
        literature: req.body.literature,
        literatureMarathi: req.body.literatureMarathi,
        mantra: req.body.mantra,
        stotra: req.body.stotra,
        audio: req.body.audio,
        image: req.body.image,
        mapLocation: req.body.mapLocation
    });

    await newSaint.save();

    res.redirect("/");
});

// Edit Saint (Protected)
app.get("/admin/edit/:id", verifyToken, async (req, res) => {
    const saint = await Saint.findById(req.params.id);
    res.render("edit-saint", { saint });
});

app.post("/admin/edit/:id", verifyToken, async (req, res) => {
    await Saint.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        nameMarathi: req.body.nameMarathi,
        birthYear: req.body.birthYear,
        birthPlace: req.body.birthPlace,
        birthPlaceMarathi: req.body.birthPlaceMarathi,
        godFollowed: req.body.godFollowed,
        godFollowedMarathi: req.body.godFollowedMarathi,
        history: req.body.history,
        historyMarathi: req.body.historyMarathi,
        literature: req.body.literature,
        literatureMarathi: req.body.literatureMarathi,
        mantra: req.body.mantra,
        stotra: req.body.stotra,
        audio: req.body.audio,
        image: req.body.image,
        mapLocation: req.body.mapLocation,
        region: req.body.region
    });
    res.redirect("/admin/saints");
});

// List all saints in admin (Protected)
app.get("/admin/saints", verifyToken, async (req, res) => {
    const saints = await Saint.find().select('name birthPlace region');
    res.render("admin-saints", { saints });
});

// ALWAYS KEEP THIS AT BOTTOM
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});