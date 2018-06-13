const express = require('express');
const multer = require('multer');
const cors = require('cors');
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const ACCESSS_KEY_ID = '***********';
const SECRET_ACCESS_KEY = '*********';
const BUCKET_NAME = '********';

AWS.config.update({
    accessKeyId: ACCESSS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
    subregion: 'us-east-1'
});

const app = express();
app.use(cors());

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 123456789078900 } });

app.post('/upload', upload.single('product-image'), (req, res) => {
    const Key = req.body.name + '-' + Date.now() + '.png';
    const objectParams = { Bucket: BUCKET_NAME, Key, Body: req.file.buffer, ACL: 'public-read' };
    const uploadPromise = new AWS.S3({ apiVersion: '2006-03-01' }).putObject(objectParams).promise();
    uploadPromise
    .then(() => res.send(`Your file here: ${BUCKET_NAME}/${Key}`))
    .catch(error => res.send('Loi'))
});

app.listen(3000, () => console.log('Server started.'));

// https://github.com/vanpho93/angular-file-aws
