import express from "express";
import mongoose from "mongoose";
import adminRoute from "./backend/api/routes/adminRoute.js";
import blogRoute from "./backend/api/routes/blogRoute.js";
import messageRoute from "./backend/api/routes/messageRoute.js";
import profileRoute from "./backend/api/routes/profileRoute.js";
import projectRoute from "./backend/api/routes/projectRoute.js";
import path from 'path';
import uploadRoute from "./backend/api/routes/uploadRoute.js";
import 'dotenv/config.js';

//Mongo Db
const db = process.env.MDB_URL;
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

app.use((err, req, res, next) => {
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

if(process.env.NODE_ENV === 'production'){
  app.use(express.static("frontend/build"));
}
app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const port = process.env.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));