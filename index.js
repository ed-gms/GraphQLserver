const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const app = express();
const port = process.argv[2] || 8080;

app.get("/", (req, res) => {
  res.send("It's working!");
});

class User {
  constructor(id, { firstName, lastName, gender, language, email }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.language = language;
    this.email = email;
  }
}

const userDatabase = {};

const root = {
  user: () => {
    return {
      id: 123456,
      firstName: "John",
      lastName: "Smith",
      gender: "Male",
      language: "English",
      emails: [{ email: "js@yxz.com" }, { email: "js2@yxz.com" }]
    };
  },
  createUser: ({ input }) => {
    let id = require('crypto').randomBytes(10).toString('hex');
    userDatabase[id] = input;
    return new User(id, input);
  }
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});
