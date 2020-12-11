const express = require('express');
const PruebaController = require('../controllers/prueba.mongo.controller');
const router = express.Router();

router.get('/',PruebaController.getBook);
router.get('/add',PruebaController.addBook);

module.exports = router;