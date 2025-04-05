const url =
  "mongodb+srv://pankaj1234kashyap:o15iEQtegO1qlcDI@cluster0.2k53c.mongodb.net/abc?retryWrites=true&w=majority&appName=Cluster0";
const mongoose = require("mongoose");

const dbconnect = async () => {
  await mongoose.connect(url);
};
module.exports = dbconnect;
