export default `
  type User {
    id: ID!
    name: String
    email: String
    ip: String
    auth: [Auth!]!
  }

  type Auth {
    id: ID!
    type: String
    userId: ID!
    user: User!
  }

  type Query {
    users: [User!]!
    auths: [Auth!]!
    user(id: ID!): User
    auth(id: ID!): Auth
  }

  type Mutation {
    createAuth(type: String, userId: ID!): Auth!
    updateAuth(id: ID!, type: String): [Int!]!
    deleteAuth(id: ID!): Int!
  }  
`;
