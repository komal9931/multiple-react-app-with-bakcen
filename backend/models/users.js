const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  OfferPrice: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
    // skill:[ed]
  },
  description: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("User", userSchema);
