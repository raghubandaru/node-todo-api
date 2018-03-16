// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to mongodb server');

    // db.collection('Todos').deleteMany({text: 'eat snacks'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'buy car'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5aab60f888320630a8b03575')
    }).then((result) => {
        console.log(result);
    })

    // db.close();
});