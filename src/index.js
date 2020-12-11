const express = require('express');
// const cors = require('cors');

const pruebaRouter = require('./routes/pruebaRouter');

const app = express();

// app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/prueba', pruebaRouter);

app.get('/', (req, res) => {
    res.status(200).send('<h2>Llama a la ruta específica</h2>');
});

app.listen(3000, () => console.log('Aplicación rulando en el puerto 3000'));


