const mongoose = require('mongoose');
const countrySchema = new mongoose.Schema({
    country: String,
    kingId: String,
    queenId: String,
    knights: [{ userId: String }]
});
module.exports = mongoose.model('Country', countrySchema);