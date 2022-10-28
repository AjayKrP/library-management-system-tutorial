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
            const book = await dbHelper.create(Model, body, next);
            return book;
        } catch (e) {
            console.log(e.toString());
            next(e);
        }
    }
}