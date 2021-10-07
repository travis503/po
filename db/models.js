const client = require('./index');

const db = client.db('SDC');
const collection = db.collection('productStyles');

async function findProductByID(id) {
  collection.find({"id": `${id}`}).toArray()
  .then((result) => {
    console.log(result[0]);
    // client.close();
  })
  .catch((error) => {
    console.log("Mongo error: ", error);
    // client.close();
  });
}

async function findStylesByID(id) {
  collection.find({"id": `${id}`}).toArray()
  .then((result) => {
    console.log('Got result: ', result);
    return result;
    // console.log(result[0].styles);
    // client.close();
  })
  .catch((error) => {
    console.log("Mongo error: ", error);
    // client.close();
  });
}

async function getAllProducts() {
  collection.find().toArray()
  .then((result) => {
    return result;
    // console.log(result);
    // client.close();
  })
  .catch((error) => {
    console.log("Mongo error: ", error);
    // client.close();
  })
}

// findProductByID(1).catch(console.dir);
// findStylesByID(1).catch(console.dir);

module.exports = {
  findStylesByID
}