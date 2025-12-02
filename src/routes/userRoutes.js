const express = require('express');
const authenticate = require('../middlewares/authenticate.js');
const { getProfile, updateProfile, updateAvatar } = require('../controllers/userController.js');
const upload = require('../middlewares/uploadPhoto.js');

const router = express.Router();

router.get('/profile', authenticate, getProfile);
router.patch('/profile', authenticate, updateProfile);
router.patch('/avatar', authenticate, upload.single('avatar'), updateAvatar);

module.exports = router;