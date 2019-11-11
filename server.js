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

var newSubjects = [
  {
    schoolLevel: "Highschool",
    category: "Math",
    subject: "Algebra"
  },
  {
    schoolLevel: "Highschool",
    category: "Math",
    subject: "Geometry"
  },
  {
    schoolLevel: "Highschool",
    category: "Math",
    subject: "Algebra II/ Trigonometry"
  },
  {
    schoolLevel: "Highschool",
    category: "Math",
    subject: "Pre-Calculus"
  },
  {
    schoolLevel: "Highschool",
    category: "Language Arts",
    subject: "English I"
  },
  {
    schoolLevel: "Highschool",
    category: "Language Arts",
    subject: "English II"
  },
  {
    schoolLevel: "Highschool",
    category: "Language Arts",
    subject: "English III"
  },
  {
    schoolLevel: "Highschool",
    category: "Language Arts",
    subject: "English IV"
  },
  {
    schoolLevel: "Middleschool",
    category: "Math",
    subject: "Whole Numbers"
  },
  {
    schoolLevel: "Middleschool",
    category: "Math",
    subject: "Fractions and Mixed Numbers"
  },
  {
    schoolLevel: "Middleschool",
    category: "Math",
    subject: "Decimals, Percents, Ratios"
  },
  {
    schoolLevel: "Middleschool",
    category: "Math",
    subject: "Solving Equations and Inequalities"
  },
  {
    schoolLevel: "Middleschool",
    category: "Language Arts",
    subject: "Grammer and Mechanics"
  },
  {
    schoolLevel: "Middleschool",
    category: "Language Arts",
    subject: "Reading Comprehension"
  },
  {
    schoolLevel: "Middleschool",
    category: "Language Arts",
    subject: "Writing"
  },
  {
    schoolLevel: "Middleschool",
    category: "Language Arts",
    subject: "Vocabulary"
  },
  {
    schoolLevel: "Elementaryschool",
    category: "Math",
    subject: "Addition"
  },
  {
    schoolLevel: "Elementaryschool",
    category: "Math",
    subject: "Subtraction"
  },
  {
    schoolLevel: "Elementaryschool",
    category: "Math",
    subject: "Multiplication"
  },
  {
    schoolLevel: "Elementaryschool",
    category: "Math",
    subject: "Division"
  },
  {
    schoolLevel: "Elementaryschool",
    category: "English",
    subject: "Reading"
  },
  {
    schoolLevel: "Elementaryschool",
    category: "English",
    subject: "Writing"
  },
  {
    schoolLevel: "Elementaryschool",
    category: "English",
    subject: "Vocabulary"
  },
  {
    schoolLevel: "Elementaryschool",
    category: "English",
    subject: "Communicaton"
  }
];

// Subject.collection.insert(newSubjects, function (err, docs) {
//   if (err) return console.log(err);
//   console.log("Subjects Created!")
// })

app.use('/dashboard', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/locked',
        expressJWT({ secret: process.env.JWT_SECRET }).unless({ method: 'POST' }),
        require('./routes/locked'));

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} for life!!`);
});
