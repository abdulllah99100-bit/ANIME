const mongoose = require('mongoose');
const seriesSchema = new mongoose.Schema({ name: { type: String, unique: true } });
module.exports = mongoose.model('Series', seriesSchema);