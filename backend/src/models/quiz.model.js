const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    question: String,
    options: {
        type: [String],
        validate: [arrayLimit, '{PATH} must have exactly 4 options']
    },
    answer: String,

});

function arrayLimit(arr) {
    return arr.length === 4;
}

module.exports = mongoose.model('Quiz', quizSchema);