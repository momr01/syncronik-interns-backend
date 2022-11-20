const { Schema, model } = require("mongoose");

const employeesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    required: true,
  },
  subdivision: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  url_photo: {
    type: String,
    default: "",
  },
  biography: {
    type: String,
    default: "",
  },
});

module.exports = model("Employee", employeesSchema, "employees");
