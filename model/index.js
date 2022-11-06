const bookModel = require("./book");
const userModel = require("./user.model");
const fineModel = require("./fine.model");
const borrowerModel = require("./borrower.model");
const returModel = require("./return.model");

module.exports = {
    bookModel,
    returModel,
    borrowerModel,
    fineModel,
    userModel
}