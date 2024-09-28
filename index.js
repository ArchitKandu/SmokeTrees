const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is called !!");
});

app.use("/user", userRoutes);

const server = app.listen(
  5000,
  console.log(`Server started at Port 5000!`)
);
