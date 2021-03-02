const Exercise = require('../models/exercise.model');

module.exports.GetAll = function (callback) {
    Exercise.find(callback);
}

module.exports.Add = function (formData, callback) {
    formData.save(callback);
}

module.exports.GetByID = function (id, callback) {
    Exercise.findById(id, callback)
}