const asyncHandler = require("express-async-handler");
const { User } = require("../models/userModel");

const addUser = asyncHandler(async (req, res) => {
  const { name, address } = req.body;

  // Validate request body
  if (!name || !address) {
    return res.status(400).json({ message: "Please fill all the details" });
  }

  // Check if the user exists
  const user = await User.findOne({ name });

  // If user exists
  if (user) {
    // Check if the address already exists
    const addressExists = user.addresses.some(
      (addr) =>
        addr.street === address.street &&
        addr.city === address.city &&
        addr.state === address.state &&
        addr.zip === address.zip &&
        addr.country === address.country
    );

    if (addressExists) {
      return res.status(400).json({ message: "Address already exists" });
    }

    // Add new address to the existing user's address array
    user.addresses.push(address);
    await user.save();
    return res.status(200).json(user); // Return the updated user
  }

  // If user doesn't exist, create a new user with the address
  const newUser = await User.create({ name, addresses: [address] });
  return res.status(201).json(newUser); // Return the newly created user
});

module.exports = addUser;
