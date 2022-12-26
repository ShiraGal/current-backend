const express = require("express");
const router = express.Router();

router.use("/users", require("./userRouter"));
router.use("/gigs", require("./gigRouter"));

module.exports = router;
