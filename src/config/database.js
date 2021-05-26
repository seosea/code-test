require("dotenv").config();
const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(
    "mongodb+srv://admin:ssy323@cluster0.o3nco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    options
  )
  .then(() => {
    console.log("db connected");
  })
  .catch(error => {
    console.log(error);
  });
