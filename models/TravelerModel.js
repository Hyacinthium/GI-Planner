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
    character: {
        type: String,
        default: 'not set'
    },

    vision: {
        type: String,
        default: 'not set'
    },

    weapon: {
        type: String,
        default: 'not set'
    },

    flower: {
        type: String,
        default: 'not set'
    },

    plume: {
        type: String,
        default: 'not set'
    },

    sands: {
        type: String,
        default: 'not set'
    },

    goblet: {
        type: String,
        default: 'not set'
    },

    circlet: {
        type: String,
        default: 'not set'
    }
});

module.exports = mongoose.model('Traveler', TravelerSchema);