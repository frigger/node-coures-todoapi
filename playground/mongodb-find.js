// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', 
{useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp');
    db.collection('Users').find({
        name: 'Saharat Jindawuthiphan'
    }).toArray().then((docs) => {
        // console.log(docs);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    })
    // db.collection('Todos').find({}).count().then((count) => {
    //     console.log(`Todos count:${count}`);
    //     // console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })
    client.close();
});