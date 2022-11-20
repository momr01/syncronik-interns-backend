const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://momr01:Heartstopper01@cluster0.koly3.mongodb.net/SyncronikInternsProject?retryWrites=true&w=majority";

// const URI = process.env.MONGODB_URI
//   ? process.env.MONGODB_URI
//   : "mongodb://localhost/SyncronikInternsProject";

const URI = MONGODB_URI;

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
