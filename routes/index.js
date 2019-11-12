const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Subject = require('../models/subject');


// GET all subjects
router.get('/subjects', (req, res) => {
    Subject.find({}, (err, subjects) => {
        res.json(subjects);
        console.log(`Found ALL subjects!1!`);
    });
});

// GET all users
router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        //all users
        res.json(users);
        console.log(`Found ALL users!1!`);
    });
});

// GET all users who are students
router.get('/students', (req, res) => {
    User.find({ 'role': 'student' }, (err, users) => {
        res.json(users);
        console.log(`found all STUDENT users`)
    });
});

// GET all users who are tutors
router.get('/tutors', (req, res) => {
    User.find({ 'role': 'tutor' }, (err, users) => {
        res.json(users);
        console.log(`found all TUTOR users`)
    });
});

// GET one user by id whether student or tutor
router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        // one user
        res.json(user);
        console.log(`found ONE user`);
    });
});

// PUT: Update User profile
router.put('/:id', (req, res) => {
User.findById(req.params.id, (err, user) => {
    user.update(req.body, (err, user) => {
        res.json(user);
        console.log('User has been updated')
    });
   });
});

// POST: Student saved tutor to their dashboard
router.post('students/:id/tutors', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        user.tutors.push(req.body);
        user.save((err, user) => {
            res.json(user);
            console.log(`user has saved a tutor`);
        });
    });
});

// UPDATE: Student updated their saved tutors
router.post('/:sid/tutors/:tid', (req, res) => {
    User.findByIdAndUpdate(req.params.id, (err, user) => {
        user.tutors.id(req.params.tid).update();
        user.save((err, user) => {
            res.json(user);
        });
    });
});

// DELETE: Student deleted one of their saved tutors
router.delete('/:sid/tutors/:tid', (req, res) => {
    User.findByIdAndDelete(req.params.uid, (err, user) => {
        user.tutors.id(req.params.tid).remove();
        user.save((err, user) => {
            res.json(user);
        });
    });
});

// POST: a new message for any user
router.post('/messages/:id/', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        user.messages.push(req.body);
        user.save((err, user) => {
            res.json(user);
            console.log(`posted a new message to user model`);
        });
    });
});

// DELETE: Delete a message for any user
router.delete('/messages/delete/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, user) => {
        user.messages.title(req.body).remove();
        user.save((err, user) => {
            res.json(user);
        });
    });
});



module.exports = router;