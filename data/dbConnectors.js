const mongoose = require("mongoose");

//Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users', {
  useMongoClient: true
});

const userSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  age: {
    type: Number
  },
  language: {
    type: String
  },
  email: {
    type: String
  },
  contacts: {
    type: Array
  }

});

const Users = mongoose.model('users', userSchema);

module.exports = { Users };