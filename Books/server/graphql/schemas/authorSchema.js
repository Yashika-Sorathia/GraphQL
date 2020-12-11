// const {buildSchema} = require('graphql')

exports.Author = (`
    type Author {
        id: String!
        name: String!
        age: Int!
        books: [Book!]!
    }
    type Book{
        authors: Author!
    }
    type Query {
        author(id: ID): Author!
        authors: [Author!]!
    }

    input AuthorInput {
        name: String!
        age: Int!
    }

    input AuthorUpdate{
        name: String!
        age: Int!
    }

    type Mutation {
        createAuthor(authorInput: AuthorInput): Author!
        upadatedAuthor(id: String! ,authorUpdate: AuthorUpdate!): Author!
        deletedAuthor(id: String!): Author!
    }

    schema{
        query: Query
        mutation: Mutation
    }

`)

// module.exports = authorSchema
