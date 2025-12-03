const Joi = require('joi');

const createDiarySchema = Joi.object({

 title: Joi.string()
    .min(1)
    .max(200)
    .trim()
    .required(),

 emotions: Joi.array()
    .items(Joi.string())
    .default([]),

 content: Joi.string()
    .min(1)
    .trim()
    .required()
})

const updateDiarySchema = Joi.object({
    title: Joi.string()
    .min(1)
    .max(200)
    .trim(),

 emotions: Joi.array()
    .items(Joi.string()),

 content: Joi.string()
    .min(1)
    .trim(),
}).min(1);

module.exports = { createDiarySchema, updateDiarySchema };
