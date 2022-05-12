const clientDB = {
  clients: require("../data/clients.json"),
  setClients: function (data) {
    this.clients = data;
  },
};
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
require("dotenv").config();
const fsPromises = require("fs").promises;
const path = require("path");

const handleLogin = async (req, res) => {
  const { email, pwd } = req.body;
  if (!email || !pwd)
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  const foundClient = clientDB.clients.find((person) => person.email === email);
  if (!foundClient) return res.sendStatus(401); //Unauthorized
  // evaluate pwd
  const match = await bcrypt.compare(pwd, foundClient.pwd);

  if (match) {
    // create JWTs and refresh token
    const accessToken = jwt.sign(
      { email: foundClient.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "300s" }
    );
    const refreshToken = jwt.sign(
      { email: foundClient.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    // save refresh token token with current client
    const otherClients = clientDB.clients.filter(
      (person) => person.email !== foundClient.email
    );
    const currentClient = { ...foundClient, refreshToken };
    clientDB.setClients([...otherClients, currentClient]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "data", "clients.json"),
      JSON.stringify(clientDB.clients)
    );

    res.cookie("jwt", refreshToken, { httpOnly: true, maxAge: 24 * 60 * 1000 });
    res.json({ accessToken });
    //for frontend to be saved in memory not local storage
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };
