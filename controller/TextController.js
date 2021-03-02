const { text } = require('express');
const mongoose = require('mongoose');
const TextSchema = require('../models/text.model');
const TextService = require('../services/TextService');
var isBase64 = require('is-base64');

exports.Add = (req, res, next) => {
    console.log("Creating Text");
    console.log("Test-->>", req.body);
    const data = req.body.data;
    const image = req.body.image
    // console.log(isBase64(data));
    if (isBase64(image) == true) {
        const formData = new TextSchema({
            // _id: new mongoose.Types.ObjectId(),
            data: data,
            image: image,
        });
        console.log(formData);
        TextService.Add(formData, (err, user) => {
            if (err) {
                let message = [];
                console.log(err);
                // if (err.errors.username) message.push("User Name is required. !");
                // if (err.errors.description) message.push("Description is required !");
                return res.json({
                    success: false,
                    err_subject: "Error !!",
                    err: err,
                    err_message: message
                })
            } else {
                return res.json({
                    message: 'Text with image added!',
                    result: user
                });
                // return res.json({
                //     success: true,
                //     success_subject: "Success !!",
                //     success_message: "You have successfully added the Exercise !.",
                //     user: user
                // })
            }
        })
    }
    else {
        const formData = new TextSchema({
            _id: new mongoose.Types.ObjectId(),
            data: data,
        });
        console.log(formData);
        TextService.Add(formData, (err, user) => {
            if (err) {
                let message = [];
                console.log(err);
                // if (err.errors.username) message.push("User Name is required. !");
                // if (err.errors.description) message.push("Description is required !");
                return res.json({
                    success: false,
                    err_subject: "Error !!",
                    err: err,
                    err_message: message
                })
            } else {
                return res.json({
                    message: 'Text without image added!',
                    result: user.data
                });                // return res.json({
                //     success: true,
                //     success_subject: "Success !!",
                //     success_message: "You have successfully added the Exercise !.",
                //     user: user
                // })
            }
        })
    }


}

exports.GetById = (req, res, next) => {
    let id = req.params.id
    TextService.GetByID(id, (err, text) => {
        res.json(text)
    })
}

exports.GetAll = (req, res, next) => {
    TextService.GetAll((err, texts) => {
        if (err) {
            console.log(err)
        }
        return res.json(
            // success: true,
            texts
        )
    })
}

exports.Update = (req, res, next) => {
    Text.findById(req.params.id)
        .then(data => {
            text.data = req.body.data;

            data.save()
                .then(() => res.json('Data updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
}

// exports.Delete = (req, res, next) => {
//     Exercise.findByIdAndDelete(req.params.id)
//         .then(() => res.json('Exercise deleted.'))
//         .catch(err => res.status(400).json('Error: ' + err));
// }