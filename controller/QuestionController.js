const mongoose = require('mongoose');
const QuestionSchema = require('../models/ques.model');
const QuestionService = require('../services/QuestionService');

exports.Add = (req, res, next) => {
    console.log("Creating Question");
    const standard = req.body.standard;
    const subject = req.body.subject;
    const question = req.body.question;
    const option1 = req.body.option1;
    const option2 = req.body.option2;
    const option3 = req.body.option3;
    const option4 = req.body.option4;
    const answer = req.body.answer;

    const formData = new QuestionSchema({
        standard,
        subject,
        question,
        option1,
        option2,
        option3,
        option4,
        answer
    });
    console.log(formData)
    QuestionService.Add(formData, (err, question) => {
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
            return res.json('Question added!');
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
    QuestionService.GetByID(id, (err, question) => {
        res.json(question)
    })
}

exports.GetAll = (req, res, next) => {
    QuestionService.GetAll((err, questions) => {
        if (err) {
            console.log(err)
        }
        return res.json(
            // success: true,
            questions
        )
    })
}

exports.GetCorrectAnswer = (req, res, next) => {
    // QuestionSchema.findOne
    QuestionService.GetCorrectAnswer(req.params.answer, (err, answer) => {
        if (err) {
            console.log(err)
        }
        return res.json({
            // success: true,
            answer
        })
    })
}



// exports.Update = (req, res, next) => {
//     Exercise.findById(req.params.id)
//         .then(exercise => {
//             exercise.username = req.body.username;
//             exercise.description = req.body.description;
//             exercise.duration = Number(req.body.duration);
//             exercise.date = Date.parse(req.body.date);

//             exercise.save()
//                 .then(() => res.json('Exercises updated!'))
//                 .catch(err => res.status(400).json('Error: ' + err));
//         })
//         .catch(err => res.status(400).json('Error: ' + err));
// }

// exports.Delete = (req, res, next) => {
//     Exercise.findByIdAndDelete(req.params.id)
//         .then(() => res.json('Exercise deleted.'))
//         .catch(err => res.status(400).json('Error: ' + err));
// }