const graphql = require('graphql')
const Author = require('../../models/author')
const authorSchema = require('../../schema/authorSchema').AuthorType

const {GraphQLObjectType,
    GraphQLString, 
    GraphQLInt,
    GraphQLNonNull
   } = graphql

  module.exports.createAuthor = {
       type: authorSchema,
       args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        age: {type: new GraphQLNonNull(GraphQLInt)}
    },
    resolve(parent,args){
        let author =  new Author(args)
        return author.save()

    }
}
   