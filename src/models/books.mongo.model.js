const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const booksSchema = new Schema({
        Titulo: String
});

module.exports = mongoose.model('books', booksSchema)