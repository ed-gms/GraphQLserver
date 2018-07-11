const { buildSchema } = require("graphql");

// the '!' means it's required
// ***input type*** doesn't require the keyword 'type'
const schema = buildSchema(`
  type User {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    age: Int
    language: String
    email: String
    contacts: [Contact]
  }

  type Contact {
    firstName: String
    lastName: String
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  type Query {
    getUser(id: ID): User
  }

  input UserInput {
    id: ID
    firstName: String!
    lastName: String
    gender: Gender
    age: Int
    language: String
    email: String
    contacts: [ContactInput]
  }

  input ContactInput {
    firstName: String
    lastName: String
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`);

module.exports = schema;