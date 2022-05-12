const clientDB = {
  clients: require("../data/clients.json"),
  setClients: function (data) {
    this.clients = data;
  },
};

const jwt = require("jsonwebtoken");

const transaction = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.status(401);
  console.log("🍪 " + cookies.jwt);
  const refreshToken = cookies.jwt;

  const foundClient = clientDB.clients.find(
    (person) => person.refreshToken === refreshToken
  );
  if (!foundClient) return res.sendStatus(403); //Forbidden
  console.log(foundClient);
  //transaction
  try {
    const newTransaction = {
      amount: amount,
      balance: balance,
      transactionType: transactionType,
      transactionDate: transactionDate,
    };

    clientDB.setClients([...clientDB.clients, newTransaction]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "data", "clients.json"),
      JSON.stringify(clientDB.clients)
    );
    console.log(newTransaction);
    res
      .status(201)
      .json({
        success: ` ${newTransaction.amount} ${newTransaction.transactionType} transaction submitted!`,
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { transaction };
