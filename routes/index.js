const express = require('express');
const router = express.Router();

//Defining routes after /api

router.use('/user', require('./users'));
router.use('/exercise', require('./exercises'));

//file Upload
router.use('/upload', require('./upload'));

router.use('/text',require('./text'));

router.use('/question',require('./question'));


module.exports = router;