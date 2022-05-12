require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");

// custom middleware logger
app.use(logger);
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

//connect to MongoDB
connectDB();

// folders used serve static files
app.use(express.static(path.join(__dirname, "../Badbank/build")));
app.use("/", express.static(path.join(__dirname, "/public")));

app.use("/", require("./routes/root"));
app.use("/createaccount", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/refresh", require("./routes/refresh"));
app.use("/transaction", require("./routes/transaction"));
app.use("/logout", require("./routes/logout"));
// the above routs dont need verification with JWT token
// any route to verify must be after this line
app.use(verifyJWT);
app.use("/clients", require("./routes/api/clients"));

// catch all
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
