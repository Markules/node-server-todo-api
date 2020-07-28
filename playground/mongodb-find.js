// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

var obj = new ObjectID();
console.log(obj);


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("unable to connect to mongoDB server");
  }
  console.log("Connected to MongoDB server");
  const db = client.db("TodoApp");

  // db.collection('Todos').find({
  //   _id: new ObjectID('5f1fbdd95e154c3b29b1b987')
  // }).toArray().then((docs) => {
  //   console.log('Todods')
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todods count:${count}`)
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });

    db.collection('Users').find({name: 'Jen'}).count().then((count) => {
    console.log(`the count of Jen is ${count}`);

  }, (err) => {
    console.log('Unable to fetch todos', err)
  });
  
  // client.close();
});
