require("dotenv").config();
const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(process.env.MONGO_URI, options)
  .then(() => {
    console.log("db connected");
  })
  .catch(error => {
    console.log(error);
  });
