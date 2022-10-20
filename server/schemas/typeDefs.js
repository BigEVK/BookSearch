const { gql } = require('apollo-server-express');

typeDefs = gql`
type User {
    _id: ID!
    userName: String!
    email: String!
    bookcount: interface savedBooks: [Book]
    }
    
    type Book {
        bookId: ID!
        authors: [String]
        description: String
        title: String!
        image: Stringlink: String
    }

    input SaveBookInput {
        bookId: ID!
        authors: [String]
        description: String
        titile: String!
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user: [User]
        user(username: String!): User
        me: User
    }

    type Mutation {
        login(email: String, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: SaveBookInput!): user
        removeBook(bookId:) User
    }
    `;