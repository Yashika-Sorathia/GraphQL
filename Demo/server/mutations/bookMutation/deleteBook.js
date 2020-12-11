const graphql = require('graphql')
const Book = require('../../models/book')
const bookSchema = require('../../schema/bookSchema').BookType

const {GraphQLObjectType,
    GraphQLString, 
    GraphQLID,
    GraphQLNonNull
   } = graphql

   exports.deleteBook = {
    type: bookSchema,
    args: {id: {type: new GraphQLNonNull(GraphQLID)}},
    resolve(parent,args){
    let book = Book.findByIdAndRemove(args.id)
    if (!book) {
        throw new Error('Error')
      }
    return book
    }   
}