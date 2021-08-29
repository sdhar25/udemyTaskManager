//CRUD
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const {MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectId()
// console.log('object id- '+id);
// console.log('timestamp- '+id.getTimestamp());

//connecting to server
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client)=>{
    if(error){
        return console.log('Unable to connect')
    }

    //console.log('connected correctly');
    const db = client.db(databaseName)   //connecting to database
    // db.collection('users').insertOne({
    //     name: 'Mahira',
    //     age:27
    // },(error,result) =>{
    //         if(error){
    //             return console.log('unable to insert');
    //         }
    //         console.log(result.insertedId);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'Jen',
    //         age:27
    //     },
    //     {
    //         name:'Gunther',
    //         age:28
    //     }
    // ], (error,result)=>{
    //     if(error){
    //         return console.log('unable to insert')
    //     }
    //     console.log(result.insertedIds)
    // }
    // )

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Fill the form Naac',
    //         completed: false
    //     },
    //     {
    //         description: 'Fill Pass certificate',
    //         completed: false
    //     },
    //     {
    //         description: 'Drink water',
    //         completed: true
    //     }

    // ], (error,result) =>{
    //     if(error){
    //         return console.log('Unable to insert')
    //     }
    //     console.log(result.insertedIds)
    // }
    // )

    //read

    // db.collection('users').findOne({name:'Jen'}, (error,users)=>{
    //     if(error){
    //         return console.log('unable to fetch')
    //     }
    //     console.log(users);
    // })

    // db.collection('users').find({age:27}).toArray( (err,users)=>{
    //     if(err){
    //         return console.log(err);
    //     }
    //     console.log(users);
    // })

    //read from tasks

    db.collection('tasks').findOne({_id: new ObjectId('61227586ecd441682c4b824f')},(err,tasks)=>{
            if(err){
                return console.log('unable to fetch')
            }
            console.log(tasks);
    })

    console.log('second test-....');

    db.collection('tasks').find({completed: false}).toArray((err,tasks)=>{
        if(err){
            return console.log('Unable to fetch')
        }
        console.log(tasks);
    })



})