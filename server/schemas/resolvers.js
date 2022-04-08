const { User, Club } = require("../models/");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const resolvers = {
  Query: {
    me: async (parent, arts, context) => {
      if (context.user) {
        const userData = await User.findONe({ _id: context.user }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Not loggedf in");
    },
    users: async () => {
      const users = await User.find({});
      return users;
    },
    clubs: async () => {
      const clubs = await Club.find({});
      return clubs;
    },
  },
  Mutation: {
    addUser: async (parent, arts) => {
      const user = await User.create(arts);
      const token = signToken(user);
      return { token, user };
    },
    addClub: async (parent, arts) => {
      const club = await Club.create(args);
      return course;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("INcorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};
module.exports = resolvers;
