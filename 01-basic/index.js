require("dotenv").config();

const express = require("express");

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Form</h1>");
});

app.listen(port, () => {
  console.log("App listening at port " + port);
});
