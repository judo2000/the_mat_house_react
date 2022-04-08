const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID!
    email: String
    firstName: String
    lastName: String
  }

  type Club {
    _id: ID!
    clubName: String!
    clubAddress: String
    clubAddress2: String
    clubPhone: String
    clubCity: String!
    clubState: String!
    clubCountry: String!
    clubZip: String
    instructors: [User!]!
    creator: User!
  }

  type Auth {
    token: String
    user: User
  }

  type Query {
    me: User
    user(email: String!): User
    users: [User!]!
    clubs: [Club!]!
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addClub(
      clubName: String!
      clubAddress: String
      clubAddress2: String
      clubPhone: String
      clubCity: String!
      clubState: String!
      clubCountry: String!
      clubZip: String
    ): Club
  }
`;

module.exports = typeDefs;
