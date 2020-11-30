const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const postController = require('./controllers/postController');
const followController = require('./controllers/followController');

// ! user related routes

// * handle home page
router.get('/', userController.home);

// * handle register FN
router.post('/register', userController.register);

// * handle login FN
router.post('/login', userController.login);

// * handle logout FN
router.post('/logout', userController.logout);

// ! user profile related routes
router.get('/profile/:username', userController.ifUserExists, userController.sharedProfileData, userController.profilePostsScreen)

// ! post related routes

// * handle create post FN
router.get('/create-post', userController.mustBeLoggedIn, postController.viewCreateScreen);

// * handle creating new post FN
router.post('/create-post', userController.mustBeLoggedIn, postController.create);

// * handle showing single post FN
router.get('/post/:id', postController.viewSingle);

// * handle editing post
router.get('/post/:id/edit', userController.mustBeLoggedIn, postController.viewEditScreen);

// * handle saving edited post into db
router.post('/post/:id/edit', userController.mustBeLoggedIn, postController.edit);

// * handle deleting single post
router.post('/post/:id/delete', userController.mustBeLoggedIn, postController.delete);

// * handle search
router.post('/search', postController.search);

// ! follow related routes

// * handle follow FN
router.post('/addFollow/:username', userController.mustBeLoggedIn, followController.addFollow);

// * handle remove follow FN
router.post('/removeFollow/:username', userController.mustBeLoggedIn, followController.removeFollow);

module.exports = router;