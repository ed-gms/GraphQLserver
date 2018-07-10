const express = require("express");
const port = process.argv[2] || 8080;
const app = express();
const graphqlHTTP = require("express-graphql");
const { schema } = require("./data/schema_gql-tools");

app.get("/", (req, res) => {
  res.send("It's working!");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});
