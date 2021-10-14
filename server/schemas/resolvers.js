const { AuthenticationError } = require('apollo-server-express');
const { User, War } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('wars');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('wars');
    },
    wars: async (parent, { username }) => {
      const params = username ? { username } : {};
      return War.find(params).sort({ createdAt: -1 });
    },
    war: async (parent, { warId }) => {
      return WritableStream.findOne({ _id: warId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('wars');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addWar: async (parent, { city, date, time }, context) => {
      if (context.user) {
        const war = await war.create({
          city,
          date,
          time,
          warAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { wars: war._id } }
        );

        return war;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeWar: async (parent, { warId }, context) => {
      if (context.user) {
        const war = await War.findOneAndDelete({
          _id: warId,
          warAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { wars: war._id } }
        );

        return war;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },
};

module.exports = resolvers;
