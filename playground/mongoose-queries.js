const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');

const {User} = require('./../server/models/user');
const {Todo} = require('./../server/models/todos');



// var id = '5f2263ade5c8162535cf0f2d';


// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// // Todo.find({
// //     _id: id
// // }).then((todos) => {
// //     console.log('Todos', todos);
// // });

// // Todo.findOne({
// //     _id: id
// // }).then((todo) => {
// //     console.log('Todo', todo);
// // });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));


var id = '5f2109879eec08035f64859e';

if(!ObjectID.isValid(id)){
    console.log('id is not valid');
}

User.findById(id).then((user) => {
    if(!user) {
        return console.log('id not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));