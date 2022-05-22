const User = require('../model/client.model')

const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, email, pwd, accountType, accountNumber, created, balance} = req.body;
  if (!email || !pwd)
    return res
      .status(400)
      .json({ message: "Email and password are required." });

  const duplicate = await User.findOne({email: email}).exec();
  if (duplicate) return res.sendStatus(409); //Conflict

  try {
    const hashedPwd = await bcrypt.hash(pwd, 10);
    const newUser = await User.create(
      { user: user, 
        email: email, 
        pwd: hashedPwd , 
        accountType: accountType,
        accountNumber: accountNumber,
        created: created,
        balance: balance,
              });

    
    res.status(201).json({ success: `New user ${newUser.user} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};






module.exports = { handleNewUser };