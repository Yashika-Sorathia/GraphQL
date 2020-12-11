
// import { mergeTypes } from 'merge-graphql-schemas';
const Book = require('./bookSchema')
const Author = require('./authorSchema')
const merge = require('lodash')

const typeDef = [Book,Author].join(' ');
// console.log(typeDef)
console.log(typeDef)

module.exports =  merge.merge(typeDef, { all: true });