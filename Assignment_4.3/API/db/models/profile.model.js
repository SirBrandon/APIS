const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    profile: {
        type: String,
        required: true,
        minlength: 1,
        name: String
    }
});

const Profile = mongoose.model('Profile', ProfileSchema);
module.exports = { Profile };