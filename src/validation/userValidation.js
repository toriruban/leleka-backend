const Joi = require('joi');

const registerSchema = Joi.object({
   name: Joi.string()
   .min(2)
   .max(32)
   .trim()
   .required()
   .messages({
    'string.empty': 'Name is required',
    'string.min': 'Name must be at least 2 characters',
    'string.max': 'Name cannot exceed 32 characters',
   }),

   email: Joi.string()
   .email()
   .max(64)
   .lowercase()
   .required()
   .messages({
    'string.empty': 'Email is required',
    'string.email': 'Please enter valid email',
    'string.max': 'Email cannot exceed 64 characters',
   }),

   password: Joi.string()
   .min(8)
   .max(128)
   .required()
   .messages({
    'string.empty': 'Password is required',
    'string.min': 'Password must be at least 8 characters',
    'string.max': 'Password cannot exceed 128 characters',
   }),

   dueDate: Joi.string()
   .pattern(/^\d{4}-\d{2}-\d{2}$/)
   .allow(null, '')
   .optional()
   .messages({
    'string.pattern.base': 'dueDate must be in YYYY-MM-DD format'
   }),

   babyGender: Joi.string()
   .valid('boy', 'girl')
   .allow(null, '')
   .optional()
   .messages({
    'any.only': 'babyGender must be "boy","girl" or null'
   }),
});

const loginSchema = Joi.object({
    email: Joi.string()
   .email()
   .required()
   .messages({
    'string.empty': 'Email is required',
    'string.email': 'Please enter valid email',
   }),

   password: Joi.string()
   .required()
   .messages({
    'string.empty': 'Password is required',
   }),
});

module.exports = {
    registerSchema, 
    loginSchema,
};