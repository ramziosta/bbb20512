const express = require('express');
const router = express.Router();
const clientAuthController = require('../controllers/clientAuthController');

router.post('/', clientAuthController.handleLogin);

module.exports = router;