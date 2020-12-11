const mongoose = require('mongoose');
const book = require('../models/books.mongo.model');

mongoose.connect(
    'mongodb+srv://josee94:Late1994@cluster0.wiand.mongodb.net/AllBooks?retryWrites=true&w=majority',
    {useNewUrlParser:true, useUnifiedTopology:true}
);

module.exports = {
    getBook: async function(req,res){
        const bookList = await book.find();
        console.log('Respuesta',bookList);
        console.log('Obtener lista');
        res.json(bookList);

    },
    updateBook: async function(req,res){
        const newList = req.body;

    },
    addBook: async function(req,res){
        const listbook = [];
        for(tarea of listbook) {
            const listToAdd = new tarea();
            listToAdd.id = tarea.id;
            listToAdd.descripcion = tarea.descripcion;

            await listToAdd.save();

        }
        res.send('Libro añadido');
    }


    
};
