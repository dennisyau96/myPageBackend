const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const router = require("./src/route/routes");

const port = 3000;
const uri = "mongodb://localhost:27017/Profile";

//usefule middleware
app.use(express.json());
app.use(cors());
app.use("/api", router);

// The current database to use.

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to DB");
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  });
