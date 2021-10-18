var express = require('express');
var router = express.Router();
const Book = require('../../model/book');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send({message: 'this is home route of book'});
});

router.get('/add-book', function(req, res, next) {
    res.render('form/add-book');
});

router.post('/add-book', function (req, res) {
    console.log(req.body)
    const book = new Book(req.body);
    book.save(function (err, result) {
        if (err) throw err;
        else res.send(JSON.stringify(result))
    })
})

module.exports = router;
