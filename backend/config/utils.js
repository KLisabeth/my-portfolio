import jwt from "jsonwebtoken";


const getToken = (admin) => {
  return jwt.sign(
    {
      _id: admin._id,
      isAdmin: admin.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "12h",
    }
  );
};
const isAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const onlyToken = token.slice(7, token.length);
    jwt.verify(onlyToken, process.env.JWT_SECRET, (err, decode) => {
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

export { getToken, isAuth, isAdmin };
