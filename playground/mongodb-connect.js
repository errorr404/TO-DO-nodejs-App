//const MongoClient = require('mongodb').MongoClient;  // here we import the MongoClient from mongodb
const {MongoClient,ObjectID} = require('mongodb'); // by object destructing

// here by connect function we connect to the mongodb database but it takes two argument 1st the url of database and second the callback function.
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err) {
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('connected to MongoDB server');

// here collection() makes an new data folder in database and insertOne() insert data into it and it takes two argument
// first it takes an object and second it takes an callback function
  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // },(err,result) => {
  //   if(err) {
  //     return console.log('Unable to insert to do ',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
    name: 'Dixit',
    Age: '21',
    Location: 'Anand Nagar Bhopal'
  },(err,result) => {
      if(err) {
        return console.log('Unable to insert to do ',err);
      }
      //console.log(JSON.stringify(result.ops,undefined,2));
        console.log(result.ops[0]._id.getTimeStamp());  // gets the getTimeStamp  -->but not working on windows.
  });
  db.close();  // by this we close the connection.
});
