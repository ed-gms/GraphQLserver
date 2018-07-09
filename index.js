const express = require("express");
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const app = express();
const port = process.argv[2] || 8080;

app.get('/', (req, res) => {
  res.send("It's working!")
})

const root = {
  user: () => {
    return {
      "id": 123456,
      "firstName": "John",
      "lastName": "Smith",
      "gender": "Male",
      "language": "English",
      "email": "js@yxz.com",
    }
  }
}

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});