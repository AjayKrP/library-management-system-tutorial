const { tokenHelper } = require("../helper");
const { userService } = require("../services");

module.exports = {
    isAdmin: async (req, res, next) => {
        const userId = req.userId;
        const role = req.role;
        if (!userId) {
            res.locals.message = "Please login to continue.";
            return res.redirect("/user/login");
        }
        if (role !== "ADMIN") {
            res.locals.message = "You dont have permission to perform this action.";
            return res.redirect("/");
        }
        next();
    }
}