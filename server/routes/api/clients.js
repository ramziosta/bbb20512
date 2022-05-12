const express = require("express");
const router = express.Router();
const clientsController = require("../../controllers/clientsController");
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

// who is allowed to do what and access which route

router.route('/')
  .get(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), clientsController.getAllClients)
  .post(clientsController.createNewClient)
  .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),clientsController.updateClient)
  .delete(verifyRoles(ROLES_LIST.Admin),clientsController.deleteClient);


router.route("/:email").get(clientsController.getClient);

module.exports = router;
