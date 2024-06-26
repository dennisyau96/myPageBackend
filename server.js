const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const router = require("./src/route/routes");
const { MongoClient } = require("mongodb");
dotenv.config();

const port = process.env.PORT;
const uri = process.env.URI2;

//usefule middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use("/api", router);

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
