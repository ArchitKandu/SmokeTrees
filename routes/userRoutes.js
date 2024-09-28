const express = require("express");
const addUser = require("../controllers/userControllers");
const router = express.Router();

router.route("/").post(addUser);

module.exports = router;
