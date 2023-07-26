//require the library
const mongoose = require("mongoose");
//connected to db
mongoose.connect('mongodb://127.0.0.1:27017');
//mongoose.connect('mongodb://localhost/contacts_list_db');
//aquire the connection 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {   
    console.log('Connected to MongoDB');
});