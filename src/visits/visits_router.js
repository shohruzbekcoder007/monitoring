const express = require('express');
const router = express.Router();

const { User } = require('./../../schema/schema')


router.get('/', async(req, res) => {
    const allUsers = await User.find({});
    res.render('visits', {
        allUsers: allUsers
    });
});


module.exports = router;