const express = require("express");
const mongoose = require('mongoose');
require("./db.js")

const app = express();
const PORT = 9000;
require("dotenv").config();


app.set("view engine", "ejs");



app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
