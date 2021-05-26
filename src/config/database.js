require("dotenv").config();
const config = require("../../Config");

const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(config.MONGO_URL, options)
  .then(() => {
    console.log("db connected");
  })
  .catch(error => {
    console.log(error);
  });
