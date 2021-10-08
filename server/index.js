const express = require('express');
const app = express();
const port = 3000;

const client = require('../db/index');

const db = client.db('SDC');
const collection = db.collection('productStyles');

// app.use(express.static('./client/dist'));

app.get('/howdy', (req, res) => res.send('Howdy World!'));

app.get('/products/?:id', (req, res) => {
  collection.find({"id": `${req.params.id}`}).toArray()
  .then((styleData) => {
    console.log('Got request id: ', req.params);
    res.send(styleData[0]);
  })
  .catch((error) => {
    console.log(error);
    res.send(error);
  })
})

app.get('/products/?:id/styles', (req, res) => {
  collection.find({"id": `${req.params.id}`}).toArray()
  .then((styleData) => {
    console.log('Got request id: ', req.params);
    res.send(styleData[0].styles);
  })
  .catch((error) => {
    console.log(error);
    res.send(error);
  })
})

app.get('/loaderio-858c789ec2ba570bf1c31bf51b3526f8.txt', (req, res) => {
  res.sendFile('../loaderio-858c789ec2ba570bf1c31bf51b3526f8.txt')
  .catch((error) => {
    console.log('Error sending loader.io file: ', error);
    res.send(error);
  })
})

app.listen(port, () => console.log(`SDC listening on port ${port}!`));