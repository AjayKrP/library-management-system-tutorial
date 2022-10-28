var express = require('express');
var router = express.Router();
const { userController } = require("../controllers");
const {authMiddleware} = require("../middlewares");


/* GET home page. */
router.get('/login', userController.getLoginForm);
router.get('/signup', userController.getSignUpForm);
router.get('/profile', authMiddleware.auth, userController.getProfile);


router.post('/login', userController.login);
router.post('/signup', userController.signup);

module.exports = router;
