import express from "express";
import mongoose from "mongoose";
import key from "./backend/config/key";

//Mongo Db
const db = key.MDB_URL;
mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.log(error.reason));

const app = express();

const port = key.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));