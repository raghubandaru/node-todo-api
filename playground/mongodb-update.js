// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to mongodb server');

    // db.collection('Todos').findOneAndUpdate({
    //     // filter
    //     _id: new ObjectID("5aab6dc7d7ecb1e75ad1ee94")
    // }, {
    //     // update
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     // options
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
       _id: new ObjectID('5aaad3f088c8d31d40ebebb4') 
    }, {
        $set:{
            name: 'Bandaru'
        },
        $inc: {
            age: -1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});