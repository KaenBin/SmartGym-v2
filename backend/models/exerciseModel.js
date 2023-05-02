const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    id: Number,
    title: String,
    desc: String,
    category: String,
})

module.exports = mongoose.model('Exercise', exerciseSchema)