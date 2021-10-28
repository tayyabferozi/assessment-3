require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/files", express.static(path.join(__dirname, "files")));
app.use("/files", express.static("files"));

app.use("/api/products", require("./routes/products"));

let port = process.env.PORT || 5000;

let dbString = process.env.DB_STRING;

mongoose
  .connect(dbString)
  .then(() => {
    app.listen(port, function () {
      console.log("Server started on port 5000");
    });
  })
  .catch(console.log);
