const Question = require('../models/ques.model');

module.exports.GetAll = function (callback) {
    Question.find(callback);
}

module.exports.Add = function (formData, callback) {
    formData.save(callback);
}

module.exports.GetByID = function (id, callback) {
    Question.findById(id, callback)
}

module.exports.GetCorrectAnswer = function (answer, callback) {
    let query = {
        answer: answer
    }
    Question.find(query, callback);
}