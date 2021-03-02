const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: {
        type: String,
        required: false,
        unique: true
    },
    description: {
        type: String,
        required: false
    },
    duration: {
        type: Number,
        required: false
    },
    date: {
        type: Date,
        required: false
    },
    imageUrl: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
    }
);

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;