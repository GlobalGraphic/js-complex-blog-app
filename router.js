const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

// * handle home page
router.get('/', userController.home);

// * handle register FN
router.post('/register', userController.register);

// * handle login FN
router.post('/login', userController.login);

// * handle logout FN
router.post('/logout', userController.logout);

module.exports = router;