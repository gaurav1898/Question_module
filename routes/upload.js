const express = require('express');
const router = express.Router();
const fileUpload = require('../handler/UploadHandler/FileUpload');


router.post('/', fileUpload.upload.single('image'), (req, res, next) => {
    res.json({
        success: true,
        imageUrl: req.file.path
    })
});

module.exports = router;