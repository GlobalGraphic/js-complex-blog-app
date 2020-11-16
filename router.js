const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const postController = require('./controllers/postController');

// ! user related routes

// * handle home page
router.get('/', userController.home);

// * handle register FN
router.post('/register', userController.register);

// * handle login FN
router.post('/login', userController.login);

// * handle logout FN
router.post('/logout', userController.logout);

// ! post related routes

// * handle create post FN
router.get('/create-post', userController.mustBeLoggedIn, postController.viewCreateScreen);

module.exports = router;