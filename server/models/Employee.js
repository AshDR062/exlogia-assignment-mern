const mongoose = require("mongoose");

/* Employee Schema*/
const employeeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"],
  },
  age: {
    type: Number,
    required: true,
    min: 18,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
