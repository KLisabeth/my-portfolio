import express from "express";
import mongoose from "mongoose";
import adminRoute from "./backend/api/routes/adminRoute";
import blogRoute from "./backend/api/routes/blogRoute";
import messageRoute from "./backend/api/routes/messageRoute";
import profileRoute from "./backend/api/routes/profileRoute";
import projectRoute from "./backend/api/routes/projectRoute";
import path from 'path';

import key from "./backend/config/key";
import uploadRoute from "./backend/api/routes/uploadRoute";

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

app.use(function (err, req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
  res.status(500).send({ message: err.message });
});



app.use("/api/admin", adminRoute);
app.use("/api/profile", profileRoute);
app.use("/api/projects", projectRoute);
app.use("/api/blogs", blogRoute);
app.use("/api/message", messageRoute);
app.use("/api/uploads", uploadRoute);



const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

const port = key.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));