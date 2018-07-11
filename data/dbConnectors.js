const mongoose = require("mongoose");

//Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost:27017/users",
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("Connected to db at /data/db/")
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

const Users = mongoose.model("users", userSchema);

module.exports = { Users };