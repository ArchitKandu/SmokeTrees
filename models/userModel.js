const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  country: { type: String, required: true },
});

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  addresses: [addressSchema],
});

const User = mongoose.model("User", userSchema);
const Address = mongoose.model("Address", addressSchema);
module.exports = { User, Address };
