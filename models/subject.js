const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema ({
    category: String,
    schoolLevel: String,
    schoolGroupElem: ['Eng 1', 'Eng 2', 'Eng 3', 'Math 1', 'Math 2', 'Math 3', 'Science 1', 'Science 2', 'Science 3'],
    schoolGroupMiddle: ['Fiction', 'Poetry', 'Essay Writing', 'Algebra 1', 'Pre-Calculus', 'Geometry', 'Physical Science', 'Earth Science', 'Life Science'],
    schoolGroupHigh: ['Language Arts', 'American Literature', 'World Literature', 'Algebra 2', 'Calculus', 'Geometry', 'Biology', 'Chemistry', 'Physics']
});


module.exports = mongoose.model('Subject', subjectSchema)