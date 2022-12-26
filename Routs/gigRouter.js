const express = require("express");
const router = express.Router();
const gigLogic = require("../BL/gigLogic");
const { authJWT } = require("../Middleware/auth");

// ------------------------------------------------------------get all gigs
router.get("/", authJWT, async (req, res) => {
  console.log("in allGigs router");
  console.log("req._id=", req._id);
  try {
    const result = await gigLogic.getAllMyGigs(req._id);
    console.log(result);
    res.send(result);
  } catch (err) {
    res.status(err.code).send(err.message);
  }
});
// ------------------------------------------------------------create gig
router.post("/user/:_id?", async (req, res) => {
  try {
    console.log("req.body==>  " + req.body);
    console.log("req.params._id==>  " + req.params._id);
    const result = await gigLogic.createGig(req.body, req.params._id);
    res.send(result);
  } catch (err) {
    res.status(err.code).send(err.message);
  }
});
// --------------------------------------------------------------update gig
router.put("/:gigId?", async (req, res) => {
  try {
    const result = await gigLogic.updateGig(req.params.gigId, req.body);
    res.send({ code: 200, msg: result });
  } catch (err) {
    res.status(err.code).send(err.message);
  }
});

module.exports = router;
