const graphql = require('graphql');
const Author = require('../models/author')
const authorSchema = require('./authorSchema').AuthorType

const {GraphQLObjectType,
    GraphQLString,  
    GraphQLID, 
   } = graphql;

    module.exports.BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        authId: {type: GraphQLID},
        author: {
            type: authorSchema,
            resolve(parent, args){
                console.log(parent);
                return Author.findById(parent.authId)
            }
        }
    })
});
