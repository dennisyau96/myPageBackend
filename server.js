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
// app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:5173",
      "https://dennisyau-intro.onrender.com",
      "https://github.com/dennisyau96/myPageFrontend/tree/d965d5a1be9fff2ce18f7da6230580630c899c12/src/*",
    ],
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
