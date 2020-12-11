const graphql = require('graphql');
const Mutation = require('../mutations/mutation').mutation
const bookSchema = require('./bookSchema').BookType
const authorSchema = require('./authorSchema').AuthorType
const Book = require('../models/book')
const Author = require('../models/author')

// const RootQuery = require('../query/query').RootQuery

console.log('Mutation', Mutation.readBook);
const {GraphQLObjectType,
      GraphQLSchema, 
      GraphQLList,
      GraphQLInt,   
      GraphQLID
    } = graphql;



const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: ()=>{
        return {
            authors: {
                type: new GraphQLList(authorSchema),
                resolve(){
                    return Author.find()
                }
            },
            books: {
                type: new GraphQLList(bookSchema),
                resolve(){
                    return Book.find()
                }
            },
            book:{
                type: bookSchema,
                args: {id: {type: GraphQLID}},
                resolve(prent,args){
                    return Book.findById(args.id)
                }
            },
            author:{
                name: 'GetAuthor',
                type: authorSchema,
                args: {id: {type: GraphQLID}},
                resolve(parent, args){
                    return Author.findById(args.id)
                }
            }
        //     someAuthor: {
        //         name: 'Paging1',
        //         type: new GraphQLList(authorSchema),
        //         args: {
        //             limit: {type: {GraphQLInt}},
        //             offset: {type: {GraphQLInt}},
        //         },
        //         resolve(parent,args){
        //             const cursor = Author.find(filter? {$or: buildFilters(filter)}:{})
        //             return Author.find({
        //                 args,
        //                 order: ['id', 'ASC']
        //             })
        //         }
        //    }
           
        }   
    }
})
console.log(RootQuery.someAuthor)


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})





// const BookType = new GraphQLObjectType({
//     name: 'Book',
//     fields: () => ({
//         id: {type: GraphQLID},
//         name: {type: GraphQLString},
//         genre: {type: GraphQLString},
//         author: {
//             type: AuthorType,
//             resolve(parent, args){
//                 console.log(parent);
//                 return Author.findById(parent.authId)
//             }
//         }
//     })
// });

// const AuthorType = new GraphQLObjectType({
//     name: 'Author',
//     fields: ()=>({
//         id: {type: GraphQLID},
//         name: {type: GraphQLString},
//         age: {type: GraphQLInt},
//         books: {
//             type: new GraphQLList(BookType),
//             resolve(parent, args){
//                 return Book.find({authId: parent.id})
//             }
//         }
//     })
// })
// const RootQuery = new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//         book: {
//             type: BookType,
//             args: {id: {type: GraphQLID}},
//             resolve(parent, args){
//                 // gets data from db
//                return Book.findById(args.id)
//             }
//         },
//         author: {
//             type: AuthorType,
//             args: {id: {type: GraphQLID}},
//             resolve(parent, args){
//                 return Author.findById(args.id)
//             }
//         },
//         books: {
//             type: new GraphQLList(BookType),
//             resolve(parent,args){
//                 return Book.find({})
//             }
//         },
//         authors: {
//             type: new GraphQLList(AuthorType),
//             resolve(parent,args){
//                 return Author.find({})
//             }
//         }
//     }
// });

// const Mutation = new GraphQLObjectType({
//     name: 'Mutation',
//     fields: {
//         addAuthor: {
//             type: AuthorType,
//             args: {
//                 name: {type: new GraphQLNonNull(GraphQLString)},
//                 age: {type: new GraphQLNonNull(GraphQLInt)}
//             },
//             resolve(parent,args){
//                 let author =  new Author({
//                     name: args.name,
//                     age: args.age
//                 })
//                 return author.save()
//             }
//         },
//         addBook: {
//             type: BookType,
//             args: {
//                 name: {type: new GraphQLNonNull(GraphQLString)},
//                 genre: {type: new GraphQLNonNull(GraphQLString)},
//                 authId: {type: new GraphQLNonNull(GraphQLID)}
//             },
//             resolve(parent, args){
//                 let book = new Book({
//                     name: args.name,
//                     genre: args.genre,
//                     authId: args.authId
//                 })
//                 return book.save()
//             }
//         },
//         updateBook: {
//             type: BookType,
//             args: {
//                 id: {type: new GraphQLNonNull(GraphQLID)},
//                 name: {type: new GraphQLNonNull(GraphQLString)},
//                 genre: {type: new GraphQLNonNull(GraphQLString)},
//                 authId: {type: new GraphQLNonNull(GraphQLID)}
//             },
//             resolve(parent,args){
//                //Book.findByIdAndUpdate(args.id, book)

//                 return  Book.findByIdAndUpdate(args.id,{name: args.name, genre: args.genre})
//             }
//         },

//         removeBook: {
//             type: BookType,
//             args: {id: {type: new GraphQLNonNull(GraphQLID)}},
//             resolve(parent,args){
//                 let book = Book.findByIdAndRemove(args.id).exec()
//                 return book
//             }

//         }
//     }
// })