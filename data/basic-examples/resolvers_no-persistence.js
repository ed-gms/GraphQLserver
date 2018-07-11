class User {
  constructor(id, { firstName, lastName, gender, age, language, email, contacts }) {
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

const resolvers = {
  // user: () => {
  //   return {
  //     id: 123456,
  //     firstName: "John",
  //     lastName: "Smith",
  //     gender: "Male",
  //     language: "English",
  //     emails: [{ email: "js@yxz.com" }, { email: "js2@yxz.com" }]
  //   };
  // },

  getUser: ({ id }) => {
    return new User(id, userDatabase[id]);
  },

  createUser: ({ input }) => {
    let id = require("crypto")
      .randomBytes(10)
      .toString("hex");
    userDatabase[id] = input;
    return new User(id, input);
  }
};

module.exports = resolvers;