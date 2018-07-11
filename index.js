const express = require("express");
const port = process.argv[2] || 8080;
const graphqlHTTP = require("express-graphql");
const { schema } = require("./data/schema");

const app = express();

app.get("/", (req, res) => {
  res.send("It's working!");
});

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});
