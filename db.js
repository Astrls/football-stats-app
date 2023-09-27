const mongoose = require('mongoose');
require("dotenv").config();

const client = mongoose.connect(process.env.DB_CONNECT, {
useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => {
console.log('MongoDB Atlas connected!');
}).catch(err => {
console.log(err);
});

module.exports = client