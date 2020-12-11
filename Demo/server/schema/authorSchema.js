const graphql = require('graphql');
const Book = require('../models/book')
// const bookSchema = require('./bookSchema').BookType
// const midSchema = require('./midSchema').midSchema2

const {GraphQLObjectType,
    GraphQLString, 
    GraphQLSchema, 
    GraphQLID, 
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
   } = graphql;

module.exports.AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        books: {
            type: new GraphQLList(bookSchema),
            resolve(parent, args){
                return Book.find({authId: parent.id})
            }
        }
    })
})

const bookSchema = require('./bookSchema').BookType
