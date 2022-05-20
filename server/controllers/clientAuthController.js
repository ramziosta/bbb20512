const Client = require('../model/client.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
    const { email, pwd } = req.body;
    if (!email || !pwd) return res.status(400).json({ 'message': 'Email and password are required.' });

    const foundClient = await Client.findOne({ email: email }).exec();
    if (!foundClient) return res.sendStatus(401); //Unauthorized
    // evaluate password
    const match = await bcrypt.compare(pwd, foundClient.pwd);
  
    if (match) {
        const roles = Object.values(foundClient.roles).filter(Boolean);
        // create JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "user": foundClient.user,
                    "roles": roles
                }
            },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "300s" }
      );
      const refreshToken = jwt.sign(
        { "email": foundClient.email },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d" }
      );
      // Saving refreshToken with current user
      foundClient.refreshToken = refreshToken;
      const result = await foundClient.save();
      console.log(result);
      console.log(roles);

      // Creates Secure Cookie with refresh token
      res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

      // Send authorization roles and access token to user
      res.json({ roles, accessToken });

  } else {
      res.sendStatus(401);
  }
}

module.exports = { handleLogin };