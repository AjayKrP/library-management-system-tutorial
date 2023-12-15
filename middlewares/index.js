const authMiddleware = require("./auth.middleware");
const authrorizationMiddleware  = require("./authorization.middlware");
const loggedInMiddleware = require("./loggedIn.middleware");

module.exports = {
    authMiddleware,
    authrorizationMiddleware,
    loggedInMiddleware
}