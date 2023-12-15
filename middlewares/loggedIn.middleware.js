const { tokenHelper } = require("../helper");

module.exports = {
    loggedIn: async (req, res, next) => {
        const cookies = await tokenHelper.decode(req.cookies['token'], next);
        const userId = cookies?.userId;
        const role = cookies?.role;
        if (!userId) {
            res.locals.loggedIn = false;
        } else {
            res.locals.loggedIn = true;
        }
        if (role == "ADMIN") {
            res.locals.admin = true;
        }
        next();
    }
}