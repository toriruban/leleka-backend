const express = require('express');
const { register, login, logout } = require('../controllers/authController.js');
const validate = require('../middlewares/validate.js');
const { registerSchema, loginSchema } = require('../validation/userValidation.js');

const router = express.Router();

router.post('/register', 
            validate(registerSchema),
            register,       
        );
router.post('/login',
            validate(loginSchema), 
            login,
        );
router.post('/logout', 
             logout
        );

module.exports = router;