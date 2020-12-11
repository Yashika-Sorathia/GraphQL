const mongoose = require('mongoose')

const Schema = mongoose.Schema

const authorSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]
})

module.exports = mongoose.model('Author', authorSchema)