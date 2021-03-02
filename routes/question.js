const express = require('express');
const router = express.Router();
const QuestionController = require('../controller/QuestionController');

router.post('/addQuestion', QuestionController.Add);

router.get('/allQuestions', QuestionController.GetAll);

// router.post("/updateQuestion/:id", QuestionController.Update);

// router.delete("/deleteQuestion/:id", QuestionController.Delete);

router.get('/:id', QuestionController.GetById);

router.get('/correctAnswer/:answer', QuestionController.GetCorrectAnswer)

module.exports = router;