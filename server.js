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
app.use(cors());
app.use("/api", router);

// The current database to use.
//new way to connect mongodb
// const client = new MongoClient(process.env.URI2);

// async function run() {
//   const connect = client.connect();

//   app.listen(port, () => {
//     console.log(`connect to port ${port}.`);
//   });
//   const db = client.db("Profile");
//   const collection = db.collection("Profile");
// }
// run();

//old version mongodb conneciton
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
