const Diary = require('../models/Dairy.js');

const createDiary = async (req, res) => {
    try {
        const { title, emotions, content } = req.body;
        const diary = new Diary ({
            title,
            emotions,
            content,
            owner: req.user._id
        });
        await diary.save();
        res.status(201).json({
            message: 'Diary entre created successfully',
            diary
        });
    } catch (error) {
       res.status(500).json({
        message: 'Internal server error',
        error: error.message
       });
    }  
};

const getDiary = async (req, res) => {
    try {
        const diaries = await Diary.find({ owner: req.user._id }).sort({ date: -1 });
        res.status(200).json({
            message: 'Diaries retrieved successfully',
            diaries
    });
 } catch (error) {
    res.status(500).json({
        message: 'Internal server error',
        error: error.message
    });
 }
};

const updateDiary = async(req, res) => {
    try {
        const { id } = req.params;
        const diary = await Diary.findOne({ _id: id, owner: req.user._id});
        if(!diary) {
            return res.status(404).json({
                message: 'Diary entry not found'
            });
        }
        Object.keys(req.body).forEach(key => {
                diary[key] = req.body[key];
            });
            await diary.save();
            res.status(200).json({
                message: 'Diary entry updates successfully',
                diary
            });
    } catch(error) {
      res.status(500).json({
        message: 'Internal server error',
        error: error.message
    });
 }
};

const deleteDiary = async(req, res) => {
    try {
        const { id } = req.params;
        const diary = await Diary.findOneAndDelete({ _id: id, owner: req.user._id });
        if(!diary) {
            return res.status(404).json({
                message: 'Diary not found'
            });
        }
        res.status(200).json({
            message: 'Diary entre deleted successfully'
        });
    } catch {
        res.status(500).json({
        message: 'Internal server error',
        error: error.message
    });
 }
};

module.exports = { createDiary, getDiary, updateDiary, deleteDiary };