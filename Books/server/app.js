const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('../server/graphql/schemas/bookSchema')
const resolver = require('../server/graphql/resolvers/bookResolver')
const GraphQL = require('./graphql/graphql')
const Book = require('./models/book')
const Author = require('./models/author')
 

const app = express()

mongoose.connect('mongodb+srv://Raj:1234567890@demo1-hjgya.mongodb.net/Books?retryWrites=true&w=majority').then(()=>{
    app.listen(3000)
    console.log('Server running on port 4000...!')
}).catch(err =>{
    console.log(err)
})

app.use('/graphql', graphqlHTTP({
    schema: GraphQL,
    context: [Book, Author],
    // rootValue: resolver,
    graphiql: true
}))