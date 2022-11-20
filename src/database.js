const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost/SyncronikInternsProject";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB exito"))
  .catch(() => console.log("DB ERROR"));

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is connected");
});