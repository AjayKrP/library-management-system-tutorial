const {fineModel} = require('../model');
const { dbHelper } = require("../helper");

module.exports = {
    createFine: async (body, next) => {
        try {
            const fine = await dbHelper.create(fineModel, body, next);
            return fine;
        } catch (e) {
            console.log(e.toString());
            next(e);
        }
    }
}