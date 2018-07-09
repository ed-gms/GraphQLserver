const express = require("express");
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const app = express();
const port = process.argv[2] || 8080;

app.get('/', (req, res) => {
  res.send("It's working!")
})

const root = { hello: () => "Hello, welcome to GraphQL!" }

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});