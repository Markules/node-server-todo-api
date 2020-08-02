const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {User} = require('../server/models/user');
const {Todo} = require('../server/models/todos');

Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findOneAndRemove({_id: '1232521'}.then((todo) => {

}));

Todo.findByIdAndRemove('123141231').then((todo) => {
    console.log(todo);
});