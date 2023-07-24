const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    fapTime: {
        type: String,
        default: null
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('user', UserSchema);