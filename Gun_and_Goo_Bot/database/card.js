const mongoose = require('mongoose');
const cardSchema = new mongoose.Schema({
    name: String,
    tier: Number,
    owner: String,
    picURL: String,
    series: String,
    specialPowers: [String]
});
module.exports = mongoose.model('Card', cardSchema);