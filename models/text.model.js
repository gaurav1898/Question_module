const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const textSchema = new Schema({
    data: {
        type: String,
        required: false
    },
    image: {
        type: Array,
        required: false
    }
},
    {
        timestamps: true,
    }
);

const Text = mongoose.model('Text', textSchema);

module.exports = Text;