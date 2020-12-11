const graphql = require('graphql')
const Book = require('../../models/book')
const bookSchema = require('../../schema/bookSchema').BookType

const {GraphQLObjectType,
    GraphQLString, 
    GraphQLID,
    GraphQLNonNull
   } = graphql

exports.createBook = {
    type: bookSchema,
    args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        genre: {type: new GraphQLNonNull(GraphQLString)},
        authId: {type: new GraphQLNonNull(GraphQLID)}
    },
    resolve(parent, args){
        let book = new Book(args)
        let newBook = book.save()
        if (!newBook) {
            throw new Error('Error');
          }
        return newBook
    }
}

