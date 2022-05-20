const express = require('express');
const router = express.Router();
const transactionController = require('../../controllers/transactionController');

//deposits n withdraw

router.post("/", transactionController.handleNewTransaction);

 router.get('/', transactionController. getAllTransactions);

 router.get('/:email', transactionController.getUserTransaction)

module.exports = router;