const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is called !!");
});

app.use("/user", userRoutes);

const server = app.listen(5000, console.log(`Server started at Port 5000!`));
