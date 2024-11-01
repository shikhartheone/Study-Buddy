const mongoose = require("mongoose");

const mongo_url = process.env.MONGO_CONN;

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("MongoDB Connecetd.... :)");
  })
  .catch((err) => {
    console.log("Database not connected :(  : ", err);
  });
