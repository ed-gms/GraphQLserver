const mongoose = require("mongoose");
const { Users } = require("./dbConnectors");

// resolvers map
const resolvers = {
  Query: {
    getUser: ({ id }) => {
      return new User(id, userDatabase[id]);
    }
  },
  Mutation: {
    createUser: (root, { input }) => {
      const newUser = new Users({
        firstName: input.firstName,
        lastName: input.lastName,
        gender: input.gender,
        age: input.age,
        language: input.language,
        email: input.email,
        contacts: input.contacts,
      });

      newUser.id = newUser._id;

      return new Promise((resolvers, object) => {
        newUser.save((err) => {
          if (err) reject(err)
          else resolve(newUser)
        })
      })
    }
  }

};

module.exports = resolvers;
