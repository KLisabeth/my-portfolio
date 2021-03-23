import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, ".env") });

export default {
  PORT: process.env.PORT,
  MDB_URL: process.env.MDB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  ADMIN: process.env.ADMIN,
  EMAIL: process.env.EMAIL,
  NAME: process.env.NAME,
  API_KEY: process.env.API_KEY,
  URL: process.env.URL
  
};
