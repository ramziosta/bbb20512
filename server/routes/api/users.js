const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/usersController');
const transactionController = require('../../controllers/transactionController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get( usersController.getAllUsers)
    .delete(verifyRoles(ROLES_LIST.Admin), usersController.deleteUser);

router.route('/:email')
    .get( usersController.getUser);



module.exports = router;