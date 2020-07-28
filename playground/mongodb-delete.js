const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
      return console.log("unable to connect to mongoDB server");
    }

    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    //deleteMany
    db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
        console.log(result);
    });

    //deleteOne
    db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
        console.log(result);
    });

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });
    
    //db.close();
});