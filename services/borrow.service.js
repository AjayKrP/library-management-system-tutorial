const { borrowerModel } = require('../model');
const { dbHelper } = require("../helper");

module.exports = {
    purchaseBook: async (body, next) => {
        try {
            const borrower = await dbHelper.create(borrowerModel, body, next);
            return borrower;
        } catch (e) {
            console.log(e.toString());
            next(e);
        }
    },
    findPurchaseBookById: async (userId, bookId, next) => {
        try {
            return await dbHelper.findOne(borrowerModel, { userId, bookId }, {}, next);
        } catch (e) {
            console.log(e.toString());
            next(e);
        }
    },
    findAllPurchasedBooks: async (userId, next) => {
        try {
            return await dbHelper.findAll(borrowerModel, { userId, active: true }, { populate: "bookId" }, next);
        } catch (e) {
            console.log(e.toString());
            next(e);
        }
    },
    updateBorrowerBook: async (userId, bookId, body, next) => {
        try {
            return await dbHelper.update(borrowerModel, body, { userId, bookId }, next);
        } catch (e) {
            console.log(e.toString());
            next(e);
        }
    }
}