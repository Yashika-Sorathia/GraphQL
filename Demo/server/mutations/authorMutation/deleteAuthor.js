const graphql = require('graphql')
const Author = require('../../models/author')
const authorSchema = require('../../schema/authorSchema').AuthorType

const {GraphQLObjectType, 
    GraphQLNonNull,
    GraphQLID, 
   } = graphql;


exports.removeAuthor = {
    type: authorSchema,
    args: {id: {type: new GraphQLNonNull(GraphQLID)}},
    resolve(parent,args){
    let author = Author.findByIdAndRemove(args.id)
    return author
    }
}
