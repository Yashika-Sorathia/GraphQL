const graphql = require('graphql');
const Book = require('../models/book')
const Author = require('../models/author')
const bookSchema = require('../schema/bookSchema').BookType
const authorSchema = require('../schema/authorSchema').AuthorType


const {GraphQLObjectType,
     GraphQLList,
    } = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: ()=>{
        return {
            books: {
                type: new GraphQLList(bookSchema),
                resolve(){
                    return Book.find()
                }
            },
            authors: {
                type: new GraphQLList(authorSchema),
                resolve(){
                    return Author.find()
                }
            }
        }   
    }
})