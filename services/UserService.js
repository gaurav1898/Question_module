const User = require('../models/users.model');
const bcrypt = require ('bcrypt');
var config = require('config')


module.exports.Add = function (newUser, callback) {
    bcrypt.genSalt(config.get('App.SALT_ROUNDS'), (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) return err;
            newUser.password = hash;
            newUser.save(callback);
        })
    })
    newUser.save(callback);
}

module.exports.GetAll = function (callback) {
    User.find(callback);
}

module.exports.Update = function (id, update, callback) {
    let query = {
        _id: id,
    }
    User.updateOne(query, { $set: update }, callback);
}

module.exports.GetByID = function (id, callback) {
    User.findById(id, callback)
}

module.exports.findUser = function (username, callback) {
    User.findOne({ username: username }, callback)

}

module.exports.comparePassword = function (password, hashPassword, callback) {
    bcrypt.compare(password, hashPassword, (err, isMatch) => {
        console.log("hashpassword :" + hashPassword)
        if (err) throw err;
        callback(null, isMatch);
    });
}