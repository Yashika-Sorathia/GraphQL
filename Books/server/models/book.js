const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        require: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    }
})

module.exports = mongoose.model('Book', bookSchema)