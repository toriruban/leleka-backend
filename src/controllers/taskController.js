const Task = require('../models/Task.js');

const createTask = async (req, res) => {
    try {
        const { title, date } = req.body;
        const task = new Task({
            title,
            date,
            owner: req.user._id
        })
        await task.save()
        res.status(201).json({
            message: 'Task created successfully',
            task
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
};

const getTasks = async (req, res) => {
   try {
    const tasks = await Task.find({ owner: req.user._id }).sort({ date: 1 });
     res.status(200).json({
        message: 'Successfully got your tasks',
        tasks
     });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error: error.message
        });
   }
};

const updateTaskStatus = async(req, res) => {
    try {
        const { id } = req.params;
        const { completed } = req.body;
        const task = await Task.findOne({_id: id, owner: req.user._id});
        if(!task) {
            return res.status(404).json({
                message: 'Task not found'
            });           
        }
        task.completed = completed;
            await task.save();
         res.status(200).json({
            message: 'Task successfully updated'
         });
    } catch(error) {
        res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
};

module.exports = {
    createTask,
    getTasks,
    updateTaskStatus
};