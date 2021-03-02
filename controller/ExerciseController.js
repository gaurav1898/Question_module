const mongoose = require('mongoose');
const Exercise = require('../models/exercise.model');
const ExerciseSchema = require('../models/exercise.model');
const ExerciseService = require('../services/ExerciseService');

exports.Add = (req, res, next) => {
    console.log("Creating Exercise");
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const imageUrl = req.body.imageUrl;

    const formData = new ExerciseSchema({
        username,
        description,
        duration,
        date,
        imageUrl,
    });
    console.log(formData)
    ExerciseService.Add(formData, (err, user) => {
        if (err) {
            let message = [];
            console.log(err);
            if (err.errors.username) message.push("User Name is required. !");
            if (err.errors.description) message.push("Description is required !");
            return res.json({
                success: false,
                err_subject: "Error !!",
                err: err,
                err_message: message
            })
        } else {
            return res.json('Exercise added!');
            // return res.json({
            //     success: true,
            //     success_subject: "Success !!",
            //     success_message: "You have successfully added the Exercise !.",
            //     user: user
            // })
        }
    })

}

exports.GetById = (req, res, next) => {
    let id = req.params.id
    ExerciseService.GetByID(id, (err, exercise) => {
        res.json(exercise)
    })
}

exports.GetAll = (req, res, next) => {
    ExerciseService.GetAll((err, exercises) => {
        if (err) {
            console.log(err)
        }
        return res.json(
            // success: true,
            exercises
        )
    })
}

exports.Update = (req, res, next) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json('Exercises updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.Delete = (req, res, next) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
}