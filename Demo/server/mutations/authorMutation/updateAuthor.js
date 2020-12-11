const graphql = require('graphql')
const Author = require('../../models/author')
const authorSchema = require('../../schema/authorSchema').AuthorType

const {GraphQLObjectType,
    GraphQLString, 
    GraphQLID,
    GraphQLNonNull
   } = graphql

exports.updateAuthor = {
    type: authorSchema,
    args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        age: {type: new GraphQLNonNull(GraphQLID)},
        authId: {type: new GraphQLNonNull(GraphQLID)}
    },
    resolve(parent,args){
       //Book.findByIdAndUpdate(args.id, book)

        return  Author.findByIdAndUpdate(args.id,{name: args.name, age: args.age})
    }
}
