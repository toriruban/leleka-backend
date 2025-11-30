const express = require('express');
const authenticate = require('../middlewares/authenticate.js');
const { getProfile, updateProfile } = require('../controllers/userController.js')

const router = express.Router();

router.get('/profile', authenticate, getProfile);
router.patch('/profile', authenticate, updateProfile);

module.exports = router;