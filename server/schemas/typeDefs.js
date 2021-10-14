const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    wars: [War]!
  }

  type War {
    _id: ID
    city: String
    date: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    wars(username: String): [War]
    war(warId: ID!): War
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWar(city: String!, date: Date!, time: String!): War
    removeWar(warId: ID!): War
  }
`;

module.exports = typeDefs;
