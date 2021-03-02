const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    standard: {
        type: String,
        required: false
    },
    subject: {
        type: String,
        required: false
    },
    question: {
        type: String,
        required: false
    },
    option1: {
        type: String,
        required: false
    },
    option2: {
        type: String,
        required: false
    },
    option3: {
        type: String,
        required: false
    },
    option4: {
        type: String,
        required: false
    },
    answer: {
        type: String,
        required: false
    }

},
    {
        timestamps: true,
    }
);

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;