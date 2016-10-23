
import mongoose from 'mongoose';


// db setup
var dbName = 'test';
var dbServer = 'localhost:27017';
var conn = `mongodb://${dbServer}/${dbName}`;
mongoose.connect(conn);



