const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {

  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("Connected successfully to server");

  const db = client.db('SDC');
  const collection = db.collection('productStyles');


  collection.find().toArray()
  .then((result) => {
    console.log(result[0]);
    client.close();
  })
  .catch((error) => {
    console.error('Mongo error:', error);
    client.close();
  });

}
run().catch(console.dir);