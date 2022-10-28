const User = require("../model/user.model");
const {dbHelper} = require("../helper");

module.exports = {
    findUserByEmail: async (email, next) => {
        return await dbHelper.findOne(User, {email: email}, {}, next);
    },
    findUserById: async (id, next) => {
        return await dbHelper.findOne(User, {_id: id}, {}, next);
    },
    createUser: async (body, next) => {
        return await dbHelper.create(User, body, next);
    },
    updateUser: async (body, id, next) => {
        return await dbHelper.update(User, body, {_id: id}, next);
    }
}