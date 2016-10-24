
import mongoose from 'mongoose';


// db setup
var dbName = 'test';
var dbServer = 'localhost:27017';
var conn = `mongodb://${dbServer}/${dbName}`;
mongoose.connect(conn);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('we\'re in.');
});

