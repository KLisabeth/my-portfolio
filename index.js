import express from "express";
import mongoose from "mongoose";
import adminRoute from "./backend/api/routes/adminRoute";
import profileRoute from "./backend/api/routes/profileRoute";
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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/admin", adminRoute);
app.use("/api/profile", profileRoute);

const port = key.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));