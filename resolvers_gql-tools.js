class User {
  constructor(
    id,
    { firstName, lastName, gender, age, language, email, contacts }
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.language = language;
    this.email = email;
    this.contacts = contacts;
  }
}

const userDatabase = {};

// resolvers map
const resolvers = {
  Query: {
    getUser: ({ id }) => {
      return new User(id, userDatabase[id]);
    }
  },
  Mutation: {
    createUser: ({ input }) => {
      let id = require("crypto")
        .randomBytes(10)
        .toString("hex");
      userDatabase[id] = input;
      return new User(id, input);
    }
  }

};

module.exports = resolvers;
