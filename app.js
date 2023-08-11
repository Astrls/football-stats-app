const express = require("express");
const mongoose = require('mongoose');
const apiRouter = require('./routes/apiRoutes');
const viewRouter = require('./routes/viewRoutes')
const path = require('path')
require("./db.js")

const app = express();
const PORT = 9000;
require("dotenv").config();

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
app.use('/api', apiRouter);
app.use('/', viewRouter)


app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

module.exports = PORT
