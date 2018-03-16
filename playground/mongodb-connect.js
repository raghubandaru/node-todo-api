// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to mongodb server');

    // db.collection('Todos').insertOne({
    //     text: 'something to do!',
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Raghu',
    //     age: 28,
    //     location: 'Hyderabad'
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Anil',
    //     age: 31,
    //     location: 'Texas'
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('unable to inserrt todo', err);
    //     }
    //     console.log(res.ops[0]._id.getTimestamp());
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    db.close();
});