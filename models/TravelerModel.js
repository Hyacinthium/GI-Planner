const mongoose = require('mongoose');

var TravelerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Traveler', TravelerSchema);