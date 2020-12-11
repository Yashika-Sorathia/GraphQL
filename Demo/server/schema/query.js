const graphql = require('graphql');
const Book = require('../models/book')
const Author = require('../models/author')

const {GraphQLObjectType} = graphql

module.exports.Query = new GraphQLObjectType({
    name: 'Query',
      
})