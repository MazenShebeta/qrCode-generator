const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

require("dotenv").config();

const index = require('./routes/index.js');
app.use('/', index);

app.listen(8000, () => {
    console.log("Server running on 8000!");
  });