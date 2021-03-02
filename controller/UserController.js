const mongoose = require('mongoose');
const User = require('../models/users.model');
const UserSchema = require('../models/users.model');
const UserService = require('../services/UserService');
const Token = require('../handler/genToken');

var config = require('config')

exports.Add = (req, res, next) => {
    console.log("Creating User");

    let formData = new UserSchema({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password,
        salt: config.get('App.SALT_ROUNDS'),
    })

    console.log(formData)
    UserService.Add(formData, (err, user) => {
        if (err) {
            // let message = [];
            console.log(err);
            if (err.errors.username) message.push("User Name is required.")
            if (err.errors.password) message.push("Password is required.")
            return res.json({
                success: false,
                err_subject: "Error !!",
                err_message: message
            })
        } else {
            return res.json({
                success: true,
                success_subject: "Success !!",
                success_message: "You have successfully registered the user.",
                // success_user: user
            })
        }
    })
}

exports.GetAll = (req, res, next) => {
    UserService.GetAll((err, users) => {
        if (err) {
            console.log(err)
        }
        return res.json(
            // success: true,
            users
        )
    })
}

exports.Update = (req, res, next) => {
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;
            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.Delete = (req, res, next) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.GetById = (req, res, next) => {
    let id = req.params.id
    UserService.GetByID(id, (err, user) => {
        res.json(user)
    })
}

exports.SignIn = (req, res, next) => {
    console.log(req.body)
    console.log("processing login")
    UserService.findUser(req.body.username, (err, user) => {
        if (err) {
            let message = [];
            console.log(err)
            return res.status(400).json({
                success: false,
                err_subject: "Authentication Error",
                err_message: err
            })
        }
        if (!user) {
            console.log(user)
            return res.status(400).json({
                success: false,
                err_subject: "Authentication Error",
                err_message: "Invalid Authentication, Please check your login name and password"
            });
        }
        UserService.comparePassword(req.body.password, user.password, (err, isMatch) => {
            // console.log(user)
            // if(err) throw err;

            if (err) {
                console.log("error while finding user, No user found")
                console.log(err)
            }
            if (isMatch) {
                console.log("user found")
                // console.log(user)
                if (user) {
                    const token = Token.generateToken(user);
                    // console.log(token);
                    return res.json({
                        success: true,
                        user: user,
                        role: user.roles,
                        token: "JWT " + token
                    })
                }

            } else {
                return res.status(400).json({
                    success: false,
                    err_subject: "Authentication Error",
                    err_message: "Wrong Password"
                })
            }
        })
    })
}