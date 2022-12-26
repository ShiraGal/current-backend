const express = require("express");
const router = express.Router();
const userLogic = require("../BL/userLogic");
const { authJWT } = require("../Middleware/auth");

// ----------------------------------------------------------------post new user
router.post("/register", async (req, res) => {
  console.log("router register!!!");
  try {
    const newUser = await userLogic.register(req.body);
    res.send({ code: 200, msg: newUser });
  } catch (err) {
    console.log(err.message);
    res.status(err.code).send(err.message);
  }
});

// ----------------------------------------------------------------login
router.post("/login", async (req, res) => {
  console.log("login router:");
  try {
    const result = await userLogic.login(req.body);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(err.code).send(err.message);
  }
});

module.exports = router;
