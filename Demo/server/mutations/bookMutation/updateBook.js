const graphql = require('graphql')
const Book = require('../../models/book')
const bookSchema = require('../../schema/bookSchema').BookType

const {GraphQLObjectType,
    GraphQLString, 
    GraphQLID,
    GraphQLNonNull
   } = graphql

exports.updateBook = {
    type: bookSchema,
    args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        genre: {type: new GraphQLNonNull(GraphQLString)},
        authId: {type: new GraphQLNonNull(GraphQLID)}
    },
    resolve(parent,args){
        let updated = Book.findByIdAndUpdate(args.id,{name: args.name, genre: args.genre})
        return updated
        .catch(err => new Error(err));
    }
}