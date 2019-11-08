const express = require('express');
const router = express.Router();
const User = require('../models/user');


// GET all users
router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        //all users
        res.json(users);
        console.log(`found ALL users`);
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

// POST: Student has saved this tutor
router.post('students/:id/tutors', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        user.tutor.push(req.body);
        user.save((err, user) => {
            res.json(user);
            console.log(`user has saved a tutor`);
        });
    });
});

// UPDATE: Student has updated their saved tutors
router.post('/:sid/tutors/:tid', (req, res) => {
    User.findByIdAndUpdate(req.params.id, (err, user) => {
        user.tutors.id(req.params.tid).update();
        user.save((err, user) => {
            res.json(user);
        });
    });
});


// DELETE: Student has deleted one of their saved tutors
router.delete('/:sid/tutors/:tid', (req, res) => {
    User.findByIdAndUpdate(req.params.uid, (err, user) => {
        user.tutors.id(req.params.tid).remove();
        user.save((err, user) => {
            res.json(user);
        });
    });
});

// POST: a new message for user
router.post('/:id/messages', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        user.message.push(req.body);
        user.save((err, user) => {
            res.json(user);
            console.log(`posted a new message to user model`);
        });
    });
});



// UPDATE: Update an existing message for user
router.put('/:uid/messages/:mid', (req, res) => {
    User.findByIdAndUpdate(req.params.uid, (err, user) => {
        user.messages.id(req.params.mid).update();
        user.save((err, user) => {
            res.json(user);
        });
    });
});

// DELETE: Delete a message
router.delete('/:uid/messages/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.uid, (err, user) => {
        user.messages.id(req.params.mid).remove();
        user.save((err, user) => {
            res.json(user);
        });
    });
});



module.exports = router;