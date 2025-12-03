const mongoose = require('mongoose');

const diarySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    emotions: {
        type: [String],
        default: []
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Diary', diarySchema);