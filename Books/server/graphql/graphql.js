// const typeDefs = require('./schemas/schema')
const resolvers = require('./resolvers/resolver')
const bookSchema = require('./schemas/bookSchema')
// const authorSchema = require('./schemas/authorSchema')
const bookResolver =require('./resolvers/bookResolver')
// const authorResolver = require('./resolvers/authorResolver')
const typeDefs = require('./schemas/schema')

const GraphTools = require('graphql-tools')
const makeSchemaExecutable = GraphTools.makeExecutableSchema
// const AuthSchema = JSON.stringify(authorSchema)
// const BookSchema = JSON.stringify(bookSchema)
// const typeDefs = JSON.stringify({bookSchema,authorSchema})

const schema =  makeSchemaExecutable({ 
    typeDefs: typeDefs,
    resolvers: bookResolver
}) 
// console.log(authorSchema)
module.exports = schema 