const express = require('express');
const { register, login, logout } = require('../controllers/authController.js');
const ctrlWrapper = require('../utils/ctrlWrapper.js')

const router = express.Router();

router.post('/register', 
            ctrlWrapper(register));
router.post('/login', 
            ctrlWrapper(login));
router.post('/logout', 
            ctrlWrapper(logout));

module.exports = router; 