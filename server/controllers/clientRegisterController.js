const clientDB = {
  clients: require("../data/clients.json"),
  setClients: function (data) {
    this.clients = data;
  },
};

const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const handleNewClient = async (req, res) => {
  const { user, email, pwd, accountType, balance, transactions } = req.body;
  if (!email || !pwd)
    return res
      .status(400)
      .json({ message: "Email and password are required." });

  const duplicate = clientDB.clients.find((person) => person.email === email);
  if (duplicate) return res.sendStatus(409); //Conflict

  try {
    const hashedPwd = await bcrypt.hash(pwd, 10);
    const newClient = { user: user, 
      email: email, 
      pwd: hashedPwd , 
      accountType: accountType, 
      balance: balance, 
      transactions: transactions,
      roles:{
        "User":2001
      }
    };

    clientDB.setClients([...clientDB.clients, newClient]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "data", "clients.json"),
      JSON.stringify(clientDB.clients)
    );
    console.log(clientDB.clients);
    console.log(newClient);
    res.status(201).json({ success: `New user ${newClient.user} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewClient };
