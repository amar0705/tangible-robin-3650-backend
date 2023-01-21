const mongoose = require("mongoose");

let mongoURL =
  "mongodb+srv://amarjeet:amarjeet@cluster0.b4efj1j.mongodb.net/betterbuys?retryWrites=true&w=majority";
const connection = mongoose.connect(mongoURL);

module.exports = { connection };
