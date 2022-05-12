const express = require("express");
const router = express.Router();
const clientsController = require("../../controllers/clientsController");

router.route('/')
  .get(clientsController.getAllClients)
  .post(clientsController.createNewClient)
  .put(clientsController.updateClient)
  .delete(clientsController.deleteClient);

router.route("/:email").get(clientsController.getClient);

module.exports = router;
