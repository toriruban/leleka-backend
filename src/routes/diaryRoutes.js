const express = require('express');
const authenticate = require('../middlewares/authenticate.js');
const { createDiary, getDiary, updateDiary, deleteDiary } = require('../controllers/diaryControllers.js');
const { createDiarySchema, updateDiarySchema } = require('../validation/diaryValidation.js');
const validate = require('../middlewares/validate.js');

const router = express.Router();
router.get('/',
           authenticate,
           getDiary
        );  
router.post('/', 
            authenticate,
            validate(createDiarySchema),
            createDiary           
        ); 
router.patch('/:id',
            authenticate,
            validate(updateDiarySchema),
            updateDiary
        );
router.delete('/:id',
            authenticate,
            deleteDiary
);

module.exports = router;
