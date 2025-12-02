const express = require('express');
const authenticate = require('../middlewares/authenticate.js');
const { createTask, getTasks, updateTaskStatus } = require('../controllers/taskController.js');

const router = express.Router();
router.post('/', authenticate, createTask);
router.get('/', authenticate, getTasks);
router.patch('/:id', authenticate, updateTaskStatus);

module.exports = router;
