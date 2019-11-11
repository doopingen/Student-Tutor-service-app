const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema ({
    schoolLevel: String,
    category: String,
    subject: String
});


module.exports = mongoose.model('Subject', subjectSchema)