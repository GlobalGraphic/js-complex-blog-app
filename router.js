const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

// handle home page
router.get('/', userController.home);

// handle register FN
router.post('/register', userController.register);

module.exports = router;