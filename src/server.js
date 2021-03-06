require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser"); //request, response json parser
const Bcrypt = require("bcrypt");

const app = express();

const todoRoute = require("./route/todo");

// db connect
require("./config/database");

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/todo", todoRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log(`server started at ${process.env.PORT}`);
});
