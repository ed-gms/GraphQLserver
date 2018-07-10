const { buildSchema } = require("graphql");

// the '!' means it's required
// ***input type*** doesn't require the keyword 'type'
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
    getUser(id: ID): User
  }

  input UserInput {
    id: ID
    firstName: String!
    lastName: String
    gender: String
    language: String
    email: String
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`);

module.exports = schema;