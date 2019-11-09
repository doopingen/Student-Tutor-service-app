const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema ({
    name: String,
    id: String
})


module.exports = mongoose.model('Tutor', tutorSchema);