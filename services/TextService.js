const Text = require('../models/text.model');

module.exports.GetAll = function (callback) {
    Text.find(callback);
}

module.exports.Add = function (formData, callback) {
    formData.save(callback);
}

module.exports.Update = function (id, update, callback) {
    let query = {
        _id: id,
    }
    Text.updateOne(query, { $set: update }, callback);
}

module.exports.GetByID = function (id, callback) {
    Text.findById(id, callback)
}