// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', 
{useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todos', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.collection('Users').insertOne({
    //     name: 'Saharat Jindawuthiphan',
    //     age: 28,
    //     location: 'Chiangmai'
    // }).then((result) => {
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // }).catch((err) => {
    //     console.log(err);
    // });
    client.close();
});