const Client = require('../model/client.model')
const getAllClients = (req, res) => {
    res.json(data.clients);
}

const createNewClient = (req, res) => {
    const newClient = {
        id: data.clients?.length ? data.clients[data.clients.length - 1].id + 1 : 1,
        user: req.body.user,
        pwd: req.body.pwd,
        email: req.body.email,
        accountType: req.body.accountType,
        created: req.body.created,
        accountNumber: req.body.accountNumber,
        balance: req.body.balance
    }

    if (!newClient.user|| !newClient.email) {
        return res.status(400).json({ 'message': 'First and last names are required.' });
    }

    data.setClients([...data.clients, newClient]);
    res.status(201).json(data.clients);
}


//! needs editing email works but need to refactor from/to id
const updateClient = (req, res) => {
    const client = data.clients.find(Clnt => Clnt.email === req.body.email);
    if (!client) {
        return res.status(400).json({ "message": `Client email ${req.body.email} not found` });
    }
    if (req.body.user) client.user = req.body.user;
    if (req.body.email) client.email = req.body.email;
    const filteredArray = data.clients.filter(Clnt => Clnt.email !== (req.body.email));
    // const unsortedArray = [...filteredArray, client];
    // data.setClients(unsortedArray.sort((a, b) => a.email > b.email ? 1 : a.email < b.email ? -1 : 0));
    res.json(data.clients);
}

const deleteClient = (req, res) => {
    const client = data.clients.find(Clnt => Clnt.email === req.body.email);
    if (!client) {
        return res.status(400).json({ "message": `Client email ${req.body.email} not found` });
    }
    const filteredArray = data.clients.filter(Clnt => Clnt.email !== req.body.email);
    data.setClients([...filteredArray]);
    res.json(data.clients);
}

const getClient = (req, res) => {
    const client = data.clients.find(Clnt => Clnt.email === req.params.email);
    if (!client) {
        return res.status(400).json({ "message": `Client email ${req.params.email} not found` });
    }
    res.json(client);
}

module.exports = {
    getAllClients,
    createNewClient,
    updateClient,
    deleteClient,
    getClient
}