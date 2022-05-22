const Transaction = require("../models/transaction.model");

const getAllTransactions = (req, res) => {
    const transactions = await Transaction.find();
    if (!transactions) return res.status(204).json({ 'message': 'No aaccount activity found' });
    res.json(transactions);
};

const createNewTransaction = (req, res) => {
  const newTransaction = {
    amount: req.body.amount,
    balance: req.body.balance,
    transactionDate: req.body.transactionDate,
    transactionType: req.body.TransactionType,
    accountType: accountType
  };
};

//! needs editing email works but need to refactor from/to id
const updateClient = (req, res) => {
  const client = data.clients.find((Clnt) => Clnt.email === req.body.email);
  if (!client) {
    return res
      .status(400)
      .json({ message: `Client email ${req.body.email} not found` });
  }
  if (req.body.name) client.name = req.body.name;
  if (req.body.email) client.email = req.body.email;
  const filteredArray = data.clients.filter(
    (Clnt) => Clnt.email !== req.body.email
  );
  // const unsortedArray = [...filteredArray, client];
  // data.setClients(unsortedArray.sort((a, b) => a.email > b.email ? 1 : a.email < b.email ? -1 : 0));
  res.json(data.clients);
};

const deleteClient = (req, res) => {
  const client = data.clients.find((Clnt) => Clnt.email === req.body.email);
  if (!client) {
    return res
      .status(400)
      .json({ message: `Client email ${req.body.email} not found` });
  }
  const filteredArray = data.clients.filter(
    (Clnt) => Clnt.email !== req.body.email
  );
  data.setClients([...filteredArray]);
  res.json(data.clients);
};

const getClient = (req, res) => {
  const client = data.clients.find((Clnt) => Clnt.email === req.params.email);
  if (!client) {
    return res
      .status(400)
      .json({ message: `Client email ${req.params.email} not found` });
  }
  res.json(client);
};

module.exports = {
  getAllTransactions,
  createNewTransaction,
  updateClient,
  deleteClient,
  getClient,
};
