const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name:  String,
  email: String,
  password: String,
  line1: String,
  line2: String,
  city: String,
  zipcode: Number
});

let User = mongoose.model('User', userSchema);

export default User;