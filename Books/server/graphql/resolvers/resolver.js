const bookResolver = require('./bookResolver')
const authorResolver = require('./authorResolver')
const _ = require('lodash')
const resolvers = [bookResolver, authorResolver]
module.exports =  _.merge(resolvers)




