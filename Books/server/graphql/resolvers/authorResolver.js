const Book = require('../../models/book')
const Author = require('../../models/author')

exports.Resolver = {
    Query: {
        author: (context, {id}, obj, info)=> {
            return Author.findById({id}).populate().exec()
        },
        authors: (context, obj, info)=> {
            return Author.find({}).populate().exec()
        }
    },
    Mutation: {
        createAuthor: (parent, args, context, info)=> {
            let author = new Author({
                name: args.authorInput.name,
                age: args.authorInput.age
            })
            author.save
            return author
        },
        updatedAuthor: (parent, args, context, info)=> {
            let author = Author.findByIdAndUpdate(args.id, {name: args.authorUpdate.name, age: args.authorUpdate.age})
            return author
        },
        deletedAuthor: (parent, args, context, info)=> {
            return Author.findByIdAndDelete(args.id).exec()
        }
    },
    Book: {
        authors: (id,args,context,info)=>{
            return Book.findById({id})
        }
    }
}