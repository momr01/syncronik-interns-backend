//servidor
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

//settings
app.set("port", process.env.PORT || 3034);

//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static files
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/api/employees", require("./routes/employees"));

module.exports = app;
