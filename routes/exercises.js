const express = require('express');
const router = express.Router();
const ExerciseController = require('../controller/ExerciseController');

router.post('/addExercise', ExerciseController.Add);

router.get('/allExercises', ExerciseController.GetAll);

router.post("/updateExercise/:id", ExerciseController.Update);

router.delete("/deleteExercise/:id", ExerciseController.Delete);

router.get('/:id', ExerciseController.GetById);

module.exports = router;