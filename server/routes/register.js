const express = require('express');
const router = express.Router();
const clientRegisterController = require('../controllers/clientRegisterController');

router.post('/', clientRegisterController.handleNewClient);

module.exports = router;