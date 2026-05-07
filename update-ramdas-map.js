const mongoose = require("mongoose");
const Saint = require("./models/saint");

mongoose.connect("mongodb://127.0.0.1:27017/santDB")
.then(() => console.log("MongoDB Connected ✅"))
.catch((err) => console.log(err));

async function updateRamdasMap() {
    try {
        const result = await Saint.updateOne(
            { name: "Sant Ramdas Swami" },
            { 
                $set: { 
                    mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7595.78755860569!2d73.99282869108954!3d17.843613682493544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc246711ae007a9%3A0x825a6ff88c978809!2sJamb%2C%20Maharashtra%20415530!5e0!3m2!1sen!2sin!4v1772424260841!5m2!1sen!2sin"
                } 
            }
        );
        
        console.log("✅ Sant Ramdas map location updated!");
        console.log("Modified:", result.modifiedCount);
        
        mongoose.connection.close();
    } catch (error) {
        console.error("Error:", error);
    }
}

updateRamdasMap();
