import jwt from "jsonwebtoken";
import key from "./key";

const getToken = (admin) => {
  return jwt.sign(
    {
      _id: admin._id,
      isAdmin: admin.isAdmin,
    },
    key.JWT_SECRET,
    {
      expiresIn: "12h",
    }
  );
};
const isAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const onlyToken = token.slice(7, token.length);
    jwt.verify(onlyToken, key.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ msg: "Invalid Token" });
      }
      req.admin = decode;
      next();
      return;
    });
  } else {
    return res.status(401).send({ msg: "Token is not supplied." });
  }
};

const isAdmin = (req, res, next) => {
  if (req.admin && req.admin.isAdmin) {
    return next();
  }
  return res.status(401).send({ msg: "Admin token is not valid." });
};

module.exports = { getToken, isAuth, isAdmin };
