require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const expressJWT = require('express-jwt');
const helmet = require('helmet');
const User = require('./models/user');
const SubjectData = require('./models/subject');

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

var newUser = new User({
      name: 'JH',
      password: 'password',
      email: 'josh@josh.com',
      role: 'tutor',
  });
  newUser.save(function(err) {
        if (err) return console.log(err);
  });

app.use('/dashboard', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/locked',
        expressJWT({ secret: process.env.JWT_SECRET }).unless({ method: 'POST' }),
        require('./routes/locked'));

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} for life!!`);
});
