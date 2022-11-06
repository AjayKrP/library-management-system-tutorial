const Book = require('../model/book');
const { dbHelper } = require("../helper");

module.exports = {
    getAllBooks: async (next) => {
        try {
            const books = await dbHelper.findAll(Book, {}, {}, next);
            return books;
        } catch (e) {
            console.log(e.toString());
            next(e);
        }
    },
    addBook: async (body, next) => {
        try {
            const book = await dbHelper.create(Book, body, next);
            return book;
        } catch (e) {
            console.log(e.toString());
            next(e);
        }
    },
    findBookById: async (bookId, next) => {
        try {
            const book = await dbHelper.findOne(Book, {_id: bookId}, {}, next);
            return book;
        } catch (e) {
            console.log(e.toString());
            next(e);
        }
    }
}