const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

const PORT = 3000;

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "server is running",
  });
});
app.get("/", (reg, res) => {
  res.json({
    message: "Server is Running",
  });
});

app.use("/", productRoutes);

app.use("/auth", authRoutes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected mongodb succesfully");
    app.listen(PORT, () => {
      console.log("Server is running fine and good");
    });
  })
  .catch((err) => {
    console.error("failed to connect to mongodb");
    console.log(err.message);
  });
