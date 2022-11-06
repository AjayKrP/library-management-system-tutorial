var express = require('express');
var router = express.Router();
const Book = require('../../model/book');
const { bookController } = require("../../controllers");
const {authMiddleware} = require("../../middlewares");

/* GET home page. */
router.get('/', bookController.displayBooks);
router.get('/add-book', authMiddleware.auth, bookController.addBookForm);
router.post('/add-book', authMiddleware.auth, bookController.addBook);
router.post('/purchase/:bookId', authMiddleware.auth, bookController.purchaseBook);
router.get('/return/:bookId', authMiddleware.auth, bookController.returnBook);

module.exports = router;
