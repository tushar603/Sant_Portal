const mongoose = require("mongoose");

const saintSchema = new mongoose.Schema({
    name: String,
    nameMarathi: String,
    birthYear: String,
    birthPlace: String,
    birthPlaceMarathi: String,
    godFollowed: String,
    godFollowedMarathi: String,
    history: String,
    historyMarathi: String,
    literature: String,
    literatureMarathi: String,
    mantra: String,
    stotra: String,
    audio: String,
    image: String,
    mapLocation: String,
    region: String
});

module.exports = mongoose.model("Saint", saintSchema);