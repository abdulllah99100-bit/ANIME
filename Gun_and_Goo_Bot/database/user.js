const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    user_id: { type: String, required: true, unique: true },
    level: { type: Number, default: 1 },
    wallet: { type: Number, default: 0 },
    bio: { type: String, default: "" },
    age: { type: Number, default: 0 },
    profilePic: { type: String, default: "" }
});
module.exports = mongoose.model('User', userSchema);