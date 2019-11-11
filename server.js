require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const expressJWT = require('express-jwt');
const helmet = require('helmet');
const User = require('./models/user');
const Subject = require('./models/subject');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', () => {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}...`);
});
db.on('error', (err) => {
  console.log(`Database error:\n${err}`);
});

var newSubject = new Subject({
  schoolLevel: "Highschool",
  category: "Math",
  subject: "Algebra"
});

var newSubject = new Subject({
  schoolLevel: "Highschool",
  category: "Math",
  subject: "Geometry"
});

var newSubject = new Subject({
  schoolLevel: "Highschool",
  category: "Math",
  subject: "Algebra II/ Trigonometry"
})

var newSubject = new Subject({
  schoolLevel: "Highschool",
  category: "Math",
  subject: "Pre-Calculus"
});

var newSubject = new Subject({
  schoolLevel: "Highschool",
  category: "Language Arts",
  subject: "English I"
});

var newSubject = new Subject({
  schoolLevel: "Highschool",
  category: "Language Arts",
  subject: "English II"
});

var newSubject = new Subject({
  schoolLevel: "Highschool",
  category: "Language Arts",
  subject: "English III"
});

var newSubject = new Subject({
  schoolLevel: "Highschool",
  category: "Language Arts",
  subject: "English IV"
});

var newSubject = new Subject({
  schoolLevel: "Middleschool",
  category: "Math",
  subject: "Whole Numbers"
});

var newSubject = new Subject({
  schoolLevel: "Middleschool",
  category: "Math",
  subject: "Fractions and Mixed Numbers"
});

var newSubject = new Subject({
  schoolLevel: "Middleschool",
  category: "Math",
  subject: "Decimals, Percents, Ratios"
});

var newSubject = new Subject({
  schoolLevel: "Middleschool",
  category: "Math",
  subject: "Solving Equations and Inequalities"
});

var newSubject = new Subject({
  schoolLevel: "Middleschool",
  category: "Language Arts",
  subject: "Grammer and Mechanics"
});

var newSubject = new Subject({
  schoolLevel: "middleschool",
  category: "Language Arts",
  subject: "Reading Comprehension"
});

var newSubject = new Subject({
  schoolLevel: "Middleschool",
  category: "Language Arts",
  subject: "Writing"
});

var newSubject = new Subject({
  schoolLevel: "Middleschool",
  category: "Language Arts",
  subject: "Vocabulary"
});

var newSubject = new Subject({
  schoolLevel: "Elementryschool",
  category: "Math",
  subject: "Addition"
});

var newSubject = new Subject({
  schoolLevel: "Elementryschool",
  category: "Math",
  subject: "Subtraction"
});

var newSubject = new Subject({
  schoolLevel: "Elementryschool",
  category: "Math",
  subject: "Multiplication"
});

var newSubject = new Subject({
  schoolLevel: "Elementryschool",
  category: "Math",
  subject: "Division"
});

var newSubject = new Subject({
  schoolLevel: "Elementryschool",
  category: "English",
  subject: "Reading"
});

var newSubject = new Subject({
  schoolLevel: "Elementryschool",
  category: "English",
  subject: "Writing"
});

var newSubject = new Subject({
  schoolLevel: "Elementryschool",
  category: "English",
  subject: "Vocabulary"
});

var newSubject = new Subject({
  schoolLevel: "Elementryschool",
  category: "English",
  subject: "Communicaton"
});


newSubject.save((err) => {
  if (err) return console.log(err);
  console.log("Subject Created!")
})

app.use('/dashboard', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/locked',
        expressJWT({ secret: process.env.JWT_SECRET }).unless({ method: 'POST' }),
        require('./routes/locked'));

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} for life!!`);
});
