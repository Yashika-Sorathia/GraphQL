const Book = require('../../models/book')
const Author = require('../../models/author')

exports.Resolver = {
    Query: {
        book: (obj, {id}, context,info)=>{
            return Book.findById({id}).populate().exec()
        },

        books: (obj, args,context, info)=>{
            return Book.find({}).populate().exec()
        }
    },
    Mutation: {
        createBook: (parent, {input})=>{
            return Book.create(input)
        },
        updatedBook: (parent,{id,input})=>{
            let update = Book.findByIdAndUpdate({id}, input, {new: true})
            return update
        },
        deletedBook: (parent, args, context, info)=>{
            return Book.findByIdAndDelete(args.id).exec()
        }
    },
    Author: {
        books: ({authId}, args, context, info)=>{
            return Author.findById({id: authId})
        }
    }
}