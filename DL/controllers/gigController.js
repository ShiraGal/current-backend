const gigModel = require("../models/Gig.js");

// -----------------------------------------------------creat a new gig
async function create(data) {
  console.log("start create gig!!");
  const newGig = await gigModel.create(data);
  console.log(newGig);
  return newGig;
}
// -----------------------------------------------------read all gigs by userId
async function readAllByUser(user_Id) {
  const res = await gigModel.find({ userId: user_Id });
  return res;
}
// -----------------------------------------------------read one
async function readOne(gigId) {
  const res = await gigModel.findById(gigId);
  console.log(res);
}

// -----------------------------------------------------update
async function update(findId, update) {
  console.log("controller update:");
  const res = await gigModel.findOneAndUpdate(findId, update);
  console.log(res);
  return res;
}

module.exports = { create, readAllByUser, readOne, update };
