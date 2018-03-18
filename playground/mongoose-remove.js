const{ ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findByIdAndRemove('5aadcd92d3dee23c12a11628').then((todo) => {
//     console.log(todo);
// });

