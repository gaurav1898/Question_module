const multer = require('multer');
const mkdirp = require('mkdirp')
const path = require('path');
const uuid = require("uuid");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(file);
        const dir = './uploads/files';
        mkdirp(dir, err => cb(err, dir));
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, uuid.v4().toString() + "_" + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 1000        
    },
    fileFilter: fileFilter
});

module.exports.upload = upload;