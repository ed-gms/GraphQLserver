const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type User {
    id: ID
    firstName: String
    lastName: String
    gender: String
    language: String
    email: String

  }
  type Query {
    user: User
  }
`);

module.exports = schema;