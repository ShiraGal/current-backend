const jwt = require("jsonwebtoken");
const { createToken, verifyToken } = require("../BL/jwt");
const userLogic = require("../BL/userLogic");

const authJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_JWT, async (err, verifyToken) => {
      if (err) {
        return res.sendStatus(403);
      }
      req._id = verifyToken._id;

      next();
    });
  } else {
    res.sendStatus(401);
  }
};
module.exports = { authJWT };
