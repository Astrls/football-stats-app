const express = require("express");
const mongoose = require('mongoose');
const apiRouter = require('./routes/apiRoutes');
const viewRouter = require('./routes/viewRoutes')
require("./db.js")

const app = express();
const PORT = 9000;
require("dotenv").config();


app.set("view engine", "ejs");
app.use('/api', apiRouter);
app.use('/', viewRouter)
app.use(express.static('public'))


app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
