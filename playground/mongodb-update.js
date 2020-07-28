const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
      return console.log("unable to connect to mongoDB server");
    }

    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

//    db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5f1fd845f39e7b812ccce7c2')},
//     {
//         $set: {
//             completed: true
//         }
//     }, {
//         returnOriginal: false
//     }).then((result) => {
//         console.log(result);
//     });

    db.collection('Users').updateOne({_id: new ObjectID('5f1fbf9a5bee3d3bf9518874')},
    {
        $set: {
            name: 'Rotem'
        },
        $inc:
        {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    //db.close();
});