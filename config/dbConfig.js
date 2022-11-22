const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("connected to Mongo");
  })
  .catch((error) => {
    console.log(error.message);
  });
