const {returModel} = require('../model');
const { dbHelper } = require("../helper");

module.exports = {
    returnBook: async (body, next) => {
        try {
            const returned = await dbHelper.create(returModel, body, next);
            return returned;
        } catch (e) {
            console.log(e.toString());
            next(e);
        }
    },
    findReturnBookById: async (userId, bookId, next) => {
        try {
            return await dbHelper.findOne(returModel, {userId, bookId}, {}, next);
        } catch(e) {
            console.log(e.toString());
            next(e);
        }
    }
}