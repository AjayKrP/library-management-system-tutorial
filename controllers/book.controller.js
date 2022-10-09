const {bookService} = require("../services");

module.exports = {
    displayBooks: async (req, res, next) => {
        const books = await bookService.getAllBooks(next);
        res.render("pages/books", { books });
    },
    addBookForm: function (req, res, next) {
        res.render('form/add-book');
    },
    addBook: async (req, res) => {
        console.log(req.body);
        // there are 2 method save and create to add any entries 
        // const book = new Book(req.body);
        // book.save(function(err, result) {
        //     if (err) throw err;
        //     return res.json(result);
        // })
    
        try {
            const book = await bookService.addBook(req.body, next);
            res.redirect("/book");
        } catch (e) {
            console.log(e.toString());
        }
        //res.json({message: "book added successfully."});
    }
}