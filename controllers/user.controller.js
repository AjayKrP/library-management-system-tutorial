const { userService } = require("../services");
const bcrypt = require("bcrypt");
const { tokenHelper } = require("../helper");

module.exports = {
    getLoginForm: (req, res) => {
        res.render("form/login");
    },
    getSignUpForm: (req, res) => {
        res.render("form/signup");
    },
    getProfile: async (req, res, next) => {
        res.render("pages/profile");
    },
    login: async (req, res, next) => {
        const {
            email,
            password
        } = req.body;
        const user = await userService.findUserByEmail(email, next);
        if (!user) {
            res.locals.message = "User does not exist with this email.";
            return res.redirect("/user/login")
        }
        if (!(bcrypt.compare(password, user.password))) {
            res.locals.message = "Incorrect password.";
            return res.redirect("/user/login")
        }
        const userId = user._id;
        const token = await tokenHelper.sign({ userId: userId }, next);
        user.token = token;
        delete user._id;
        await userService.updateUser(user, userId, next);
        res.cookie("token", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 1 });
        return res.redirect("/user/profile");
    },
    signup: async (req, res, next) => {
        const {
            email,
            password
        } = req.body;
        const user = await userService.findUserByEmail(email, next);
        if (user) {
            res.locals.message = "User already exists.";
            return res.redirect("/user/signup")
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        req.body.password = hashedPassword;
        const newUser = await userService.createUser(req.body, next);
        return res.redirect("/user/login");
    }
}