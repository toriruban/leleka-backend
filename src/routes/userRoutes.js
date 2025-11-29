const express = require('express');
const authenticate = require('../middlewares/authenticate.js');

const router = express.Router();

router.get('/profile', authenticate, (req, res) => {
    const { token, password, ...user } = req.user.toObject();
    res.json({ 
        message: 'Profile retrieved successfully',
        user: user
    });
});

module.exports = router;