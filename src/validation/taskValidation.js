const Joi = require('joi');

const taskSchema = Joi.object({
    title: Joi.string()
    .min(1)
    .max(200)
    .trim()
    .required(),

    date: Joi.date()
    .iso()
    .required()
});

const updateTaskSchema = Joi.object({
    completed: Joi.boolean()
    .required()
})

module.exports = { taskSchema, updateTaskSchema };
