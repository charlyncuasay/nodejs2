const express = require('express');
const chai = express.Router();
const c = require('../controller/EcommerceController');

chai.get('/', c.index)
chai.get('/up', c.up)
chai.get('/header', c.header)
chai.get('/end', c.end)
chai.get('/featured', c.featured)
chai.get('/bestselling', c.bestselling)
chai.get('/popularbooks', c.popular)
chai.get('/books', c.books)
chai.get('/articles', c.articles)
chai.get('/download', c.download)

module.exports = chai;