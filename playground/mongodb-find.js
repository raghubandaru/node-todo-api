// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to mongodb server');

    // db.collection('Todos').find({_id: new ObjectID('5aab6248d7ecb1e75ad1ec5c')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todo collection', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Number of Todos: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch number of Todos', err);
    // });

    db.collection('Users').find({name: 'Anil'}).toArray().then((docs) => {
        console.log('Todos queried');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch specified user', err);
    });
    // db.close();
});