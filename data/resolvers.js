const mongoose = require("mongoose");
const { Users } = require("./dbConnectors");

// resolvers map
const resolvers = {
  Query: {
    getOneUser: (root, { id }) => {
      return new Promise((resolve, object) => {
        Users.findById(id, (err, user) => {
          if (err) reject(err);
          else resolve(user);
        });
      });
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
        contacts: input.contacts
      });

      newUser.id = newUser._id;

      return new Promise((resolve, object) => {
        newUser.save((err) => {
          if (err) reject(err)
          else resolve(newUser)
        })
      })
    },
    updateUser: (root, { input }) => {
      return new Promise((resolve, object) => {
        Users.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, user) => {
          if (err) reject(err);
          else resolve(user);
        })
      })
    },
    deleteUser: (root, { id }) => {
      return new Promise((resolve, object) => {
        Users.remove({ _id: id }, (err) => {
          if (err) reject(err)
          else resolve('User successfully deleted!')
        })
      })
    }
  },
};

module.exports = { resolvers };
