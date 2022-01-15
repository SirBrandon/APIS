const mongoose = require('mongoose');

const HealthSchema = new mongoose.Schema({
    health: {
        type: Object,
        required: true,
        profileId: { type: String, required: true, unique: true },
        name: String,
        date: Date.now,
        calories: { type: Number, required: true }
    }
});

const Health = mongoose.model('Health', HealthSchema);
module.exports = { Health };