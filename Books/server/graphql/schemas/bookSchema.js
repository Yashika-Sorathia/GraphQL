exports.Book = (`
    type Book {
        id: String!
        name: String!
        genre: String!
        authId: String!
        writer: [Author!]!
    }

    type Author{
        books: [Book]!
    }

    type Query {
        book(id: ID): Book!
        books: [Book!]!
    }

    input BookInput {
        name: String!
        genre: String!
        authId: String!
    }

    input BookUpadate{
        name: String!
        genre: String!
    }

    type Mutation {
        createBook(input: BookInput): Book!
        upadatedBook(id: String!,input: BookUpadate): Book!
        deletedBook(id: String!): Book!
    }

    schema{
        query: Query
        mutation: Mutation
    }

`)
// console.log(this.typeDefs)
// module.exports = bookSchema
// const Author = require('../../models/author')