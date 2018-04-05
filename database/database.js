const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;
const UserModel = require('./UserModel.js');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('we\'re connected!');
});


