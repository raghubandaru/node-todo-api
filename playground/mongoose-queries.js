const{ ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5aabcbfcb3bc9f340a2cac73';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((err) => console.log(err));

var id = '5aab8d60927348980d9fa8a0';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('ID not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((err) => console.log(err));
