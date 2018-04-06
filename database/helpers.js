const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout');
const db = mongoose.connection;
const Model = require('./UserModel.js');

Model.User.create({
    name: "test",
    email: "safafblah",
    password: 'fsdfs',
    line1: 'ing',
    line2: 'gdsgdsgs',
    city: 'gds',
    zipcode: 23
})