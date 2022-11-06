const bookService = require("./book.service");
const userService = require("./user.service");
const fineService = require("./fine.service");
const borrowerService = require("./borrow.service");
const returnService = require("./return.service");

module.exports = {
    bookService,
    userService,
    fineService,
    borrowerService,
    returnService
}