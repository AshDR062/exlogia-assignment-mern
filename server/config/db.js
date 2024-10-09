const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    console.log("Trying to connect to the mongodb database....");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Employee Database is Connected Successfully on Mongodb URI");
  } catch (error) {
    console.log("Databse Could Not Connect on Mongodb URI", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
