var express = require('express');
var router = express.Router();
const Book = require('../../model/book');
const { bookController } = require("../../controllers");

/* GET home page. */
router.get('/', bookController.displayBooks);
router.get('/add-book', bookController.addBookForm);
router.post('/add-book', bookController.addBook);

module.exports = router;
