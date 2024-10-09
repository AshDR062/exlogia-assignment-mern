const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const employeeRoutes = require("./routes/employeeRoutes");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

/* Connecting to the Database */
connectDB();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */

app.use("/api/employees", employeeRoutes);

app.listen(PORT, () => {
  console.log(`Exlogia Assignment Server running on port ${PORT}`);
});
