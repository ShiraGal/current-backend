const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_JWT;

function createToken(_id) {
  console.log(secret);
  return jwt.sign({ _id }, secret);
}

function verifyToken(token) {
  console.log("token  =" + token);
  return jwt.verify(token, secret);
}

module.exports = { createToken, verifyToken };
