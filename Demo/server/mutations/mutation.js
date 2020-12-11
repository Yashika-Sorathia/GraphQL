const graphql = require('graphql')
const createAuthor = require('./authorMutation/createAuthor').createAuthor
const updateAuthor = require('./authorMutation/updateAuthor').updateAuthor
const deleteAuthor = require('./authorMutation/deleteAuthor').removeAuthor
const createBook = require('./bookMutation/createBook').createBook
const updateBook = require('./bookMutation/updateBook').updateBook
const deleteBook = require('./bookMutation/deleteBook').deleteBook

// console.log(readAuthor)
const {GraphQLObjectType
} = graphql

   exports.mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createAuthor,
        updateAuthor,
        deleteAuthor,
        createBook,
        updateBook,
        deleteBook
    }
})



// module.exports = {
//     createAuthor,
//     updateAuthor,
//     //readAuthor,
//     deleteAuthor,
//     createBook,
//     updateBook,
//     // readBook,
//     deleteBook
// }