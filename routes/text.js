const express = require('express');
const router = express.Router();
const TextController = require('../controller/TextController');

router.post('/addText', TextController.Add);

router.get('/allTexts', TextController.GetAll);

// router.post("/updateText/:id", TextController.Update);

// router.delete("/deleteText/:id", TextController.Delete);

// router.get('/:id', TextController.GetById);

module.exports = router;