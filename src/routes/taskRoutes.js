const express = require('express');
const authenticate = require('../middlewares/authenticate.js');
const { createTask, getTasks, updateTaskStatus } = require('../controllers/taskController.js');
const validate = require('../middlewares/validate.js');
const { taskSchema, updateTaskSchema } = require('../validation/taskValidation.js');

const router = express.Router();
router.get('/', authenticate, getTasks);
router.post('/', authenticate, 
            validate(taskSchema),
            createTask);
router.patch('/:id', authenticate, 
            validate(updateTaskSchema),
            updateTaskStatus);

module.exports = router;
