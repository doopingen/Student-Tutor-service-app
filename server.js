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
    schoolLevel: "Highschool",
    category: "History",
    subject: "American History"
  },
  {
    schoolLevel: "Highschool",
    category: "History",
    subject: "World History"
  },
  {
    schoolLevel: "Highschool",
    category: "History",
    subject: "Economics"
  },
  {
    schoolLevel: "Highschool",
    category: "History",
    subject: "US Government"
  },
  {
    schoolLevel: "Highschool",
    category: "Science",
    subject: "Biology"
  },
  {
    schoolLevel: "Highschool",
    category: "Science",
    subject: "Chemistry"
  },
  {
    schoolLevel: "Highschool",
    category: "Science",
    subject: "Earth Science"
  },
  {
    schoolLevel: "Highschool",
    category: "Science",
    subject: "Physics"
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
    schoolLevel: "Middleschool",
    category: "Social Studies",
    subject: "Geography"
  },
  {
    schoolLevel: "Middleschool",
    category: "Social Studies",
    subject: "History"
  },
  {
    schoolLevel: "Middleschool",
    category: "Social Studies",
    subject: "Government"
  },
  {
    schoolLevel: "Middleschool",
    category: "Social Studies",
    subject: "Current Events"
  },
  {
    schoolLevel: "Middleschool",
    category: "Science",
    subject: "Life Science"
  },
  {
    schoolLevel: "Middleschool",
    category: "Science",
    subject: "Physical Science"
  },
  {
    schoolLevel: "Middleschool",
    category: "Science",
    subject: "Earth and Space Science"
  },
  {
    schoolLevel: "Middleschool",
    category: "Science",
    subject: "Science and Technology"
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

var newTutors = [
  {
  name: 'Derp Derpington',
  email: 'derp@ga.co',
  role: 'tutor',
  rating: '5',
  bio: 'My names Steve, I’ve been tutoring for close to 15 years,  helping students gain a better understanding of Language Arts. From writing conventions to essay preparation, I enjoy teaching it all, so message me if your looking for help!',
  subject: 'Language Arts',
  },
  {
    name: 'Sarah B',
  email: 'sarah@ga.co',
  password: 'password',
  role: 'tutor',
  rating: '5',
  bio: `My names Sarah, and if you need help with math,  im the best! I've been tutoring for 4 years now, and while math can be confusing and challenging; I'll make sure to help you every step of the way to gain a better understanding. Message me!`,
  subject: 'Math'
  },
  {
    name: 'Gavin C',
  email: 'gavin@ga.co',
  password: 'password',
  role: 'tutor',
  rating: '1',
  bio: `Mah names Gavin, if ye huvin a wee bit trauchle with ye English, then ah wud love tae teach yuh English ina proper way. Ah've been tutorin students in english noo fer 3 years, teaching subjects fae grammer tae vocabulary, sae message me if ye need help!`,
  subject: 'English'
  },
  {
    name: 'Kelsie M',
  email: 'kelsie@ga.co',
  password: 'password',
  role: 'tutor',
  rating: '4',
  bio: `Hi, i'm Kelsie, I've been tutoring students in science for 6 months. I really enjoy helping students understand subjects like biology, and chemistry; So message if me if you need help!`,
  subject: 'Science'
  },
  {
    name: 'Garret T',
  email: 'garret@ga.co',
  password: 'password',
  role: 'tutor',
  rating: '4',
  bio: `Hello, I'm Garret, I've been tutoring students in History for 2 years. If you need help with any subject in history, feel free to message me at any time!`,
  subject: 'History'
  },
  {
    name: 'Chelsea H',
  email: 'chelsea@ga.co',
  password: 'password',
  role: 'tutor',
  rating: '5',
  bio: `Hi! I'm Chelsea! I help students who have a hard time understanding writing conventions for essays, but dont worry; I can also help you in other parts of the Language Arts curriculum! Message me!`,
  subject: 'Language Arts'
  }
];

// User.collection.insert(newTutors, function (err, docs) {
//   if (err) return console.log(err);
//   console.log(newTutors, 'Tutors Created!');
// });

// Subject.collection.insert(newSubjects, function (err, docs) {
//   if (err) return console.log(err);
//   console.log(newSubjects, "Subjects Created!")
// });

app.use('/dashboard', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/locked',
        expressJWT({ secret: process.env.JWT_SECRET }).unless({ method: 'POST' }),
        require('./routes/locked'));

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} for life!!`);
});
  
  
  
  
  
  
  

