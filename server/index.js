const express = require('express');
const app = express();
const port = 3000;

const client = require('../db/index');
const { findStylesByID } = require('../db/models.js');

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

app.listen(port, () => console.log(`SDC listening on port ${port}!`));