const express = require('express');
const router = express.Router();
const User = require('../models/user');


// get all users who are students
router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        //all students
        res.json(users);
        console.log(`successfully found ALL users`);
    });
});


// get one user by id
router.get('/users/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        // one student
        res.json(user);
        console.log(`found ONE user`);
    });
});







module.exports = router;