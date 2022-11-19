var express = require('express');
var router = express.Router();
const bookRoute = require("./book");
const userRoute = require("./user.route");
const { userModel, bookModel } = require("../model");
const book = require('../model/book');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const user_count  = await userModel.count();
  const book_count = await bookModel.count();
  const genre_count = await bookModel.find().distinct("genres");

  res.render('index', { title: 'Library Management System', user_count, book_count, genre_count: genre_count.length });
});


router.use('/book', bookRoute);
router.use("/user", userRoute);

module.exports = router;
