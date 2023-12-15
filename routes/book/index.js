var express = require('express');
var router = express.Router();
const Book = require('../../model/book');
const { bookController } = require("../../controllers");
const { authMiddleware, authrorizationMiddleware, loggedInMiddleware } = require("../../middlewares");

/* GET home page. */
router.get('/', loggedInMiddleware.loggedIn, bookController.displayBooks);
router.get('/add-book', loggedInMiddleware.loggedIn, authMiddleware.auth, authrorizationMiddleware.isAdmin, bookController.addBookForm);
router.post('/add-book', loggedInMiddleware.loggedIn, authMiddleware.auth, authrorizationMiddleware.isAdmin, bookController.addBook);
router.post('/purchase/:bookId', loggedInMiddleware.loggedIn, authMiddleware.auth, bookController.purchaseBook);
router.get('/return/:bookId', loggedInMiddleware.loggedIn, authMiddleware.auth, bookController.returnBook);

module.exports = router;
