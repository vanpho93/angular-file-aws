const express = require('express');
const { json } = require('body-parser');
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const ACCESSS_KEY_ID = '';
const SECRET_ACCESS_KEY = '';
const BUCKET_NAME = '';

AWS.config.update({
    accessKeyId: ACCESSS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
    subregion: 'us-east-1'
});

const app = express();
app.use(json());

app.post('/upload', (req, res) => {
    const Key = Date.now() + '.txt';
    const objectParams = { Bucket: BUCKET_NAME, Key, Body: req.body.content, ACL: 'public-read' };
    const uploadPromise = new AWS.S3({ apiVersion: '2006-03-01' }).putObject(objectParams).promise();
    uploadPromise.then(() => res.send('Uploaded'))
    .catch(error => res.send('Loi'))
    .then(() => console.log(`Your file here: ${BUCKET_NAME}/${Key}`));
});

app.listen(3000, () => console.log('Server started.'));
