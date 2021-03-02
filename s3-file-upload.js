const fs = require('fs');
const AWS = require('aws-sdk');
const express = require('express');
const router = express.Router;
const multer = require('multer');
const upload = require('./handler/UploadHandler/FileUpload');


const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// const uploadParams = {
//     Bucket: 'testBucket',
//     Key: '',
//     Body: null,
// };

// async function uploadFile() {

//     router.post('/api/file/upload', upload.single("file"), (req, res) => {
//         fs.readFile(fileName, (err, data) => {
//             var stats = fs.statSync(fileName);
//             var fileInBytes = stats.size;
//             var fileInMb = fileInBytes / (1024 * 1024);
//             if (err) throw err;
//             else {
//                 if (fileInMb > 5) {
//                     console.log("Upload size limit exceeded, Please upload size less than 5 MB !");
//                 }
//                 else {
//                     console.log("file size under limit");
//                     console.log("File Uploading Please wait for a while");
//                     const params = {
//                         Bucket: 'testBucket',
//                         Key: fileName,
//                         Body: JSON.stringify(data, null, 2)
//                     };
//                     s3.upload(params).promise((error, data) => {
//                         if (error) throw error
//                         else {
//                             console.log(`File uploaded successfully at ${data.Location}`)
//                         }
//                     });
//                 }
//             }
//         })
//         //     const params = uploadParams;

//         //     uploadParams.Key = req.file.originalname;
//         //     uploadParams.Body = req.file.buffer;

//         //     s3Client.upload(params, (err, data) => {
//         //         if (err) {
//         //             res.status(500).json({ error: "Error -> " + err });
//         //         }
//         //         res.json({
//         //             message: 'File uploaded successfully', 'filename':
//         //                 req.file.originalname, 'location': data.Location
//         //         });
//         //     });
//         // });
//     })
// }
// module.exports = router;

const fileName = '/home/admin6/Desktop/sample.pdf';

async function uploadFile() {
    await fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        var stats = fs.statSync(fileName);
        var fileInBytes = stats.size;
        var fileInMb = fileInBytes / (1024 * 1024);

        if (fileInMb > 5) {
                console.log("Upload size limit exceeded, Please upload size less than 5 MB !");
            }
            else {
                console.log("file size under limit. \nFile Uploading Please wait for a while");

                const params = {
                    Bucket: 'testBucket',
                    Key: fileName,
                    Body: JSON.stringify(data, null, 2)
                };

                s3.upload(params).promise(data => {
                        console.log(data)
                        console.log(`File uploaded successfully at ${data.Key}`)
                    })
            }
        })
    }

uploadFile();