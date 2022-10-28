const { tokenHelper } = require("../helper");

module.exports = {
    auth: async (req, res, next) => {
        const { userId } = await tokenHelper.decode(req.cookies['token'], next);
        if (!userId) {
            res.locals.message = "Please login to continue.";
            return res.redirect("/user/login");
        }
        console.log("userId", userId)
        req.userId = userId;
        next();
    }
}