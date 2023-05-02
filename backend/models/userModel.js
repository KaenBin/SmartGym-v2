const mongoose = require('mongoose');
const Exercise = require('./exerciseModel')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    exerciseDeck: []
})

module.exports = mongoose.model('User', userSchema)