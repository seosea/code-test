require("dotenv").config();
const { config } = require("../../config");

const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(config.PORT, options)
  .then(() => {
    console.log("db connected");
  })
  .catch(error => {
    console.log(error);
  });
