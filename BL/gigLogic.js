const gigController = require("../DL/controllers/gigController.js");
const jwtFn = require("./jwt");

// -------------------------------------------------------------------------------getAllMyGigs
async function getAllMyGigs(userId) {
  console.log("gig logic getAllMyGigs: userId=====>   ", userId);
  const allGigs = await gigController.readAllByUser(userId);
  const gigs = allGigs.filter((gig) => gig.isActive == true);
  if (gigs.length < 1) {
    return [];
  } else {
    console.log(gigs);
    return gigs;
  }
}

// ------------------------------------------------------------------------------createGig
async function createGig(data, user_Id) {
  console.log("in createGig logic");
  if (!data.date || !data.client || !data.details || !data.payment) {
    throw { code: 400, message: "Enter all fields" };
  }
  const gig = await gigController.create({
    userId: user_Id,
    client: data.client,
    details: data.details,
    payment: data.payment,
    date: data.date,
  });
  return gig;
}
// ------------------------------------------------------------------------------updateGig
async function updateGig(gigId, update) {
  console.log("gigId:  " + gigId);
  console.log("update.isActive:  " + update.isActive);
  res = await gigController.update({ _id: gigId }, update);
  console.log("done  :" + res);
}

// ------------------------------------------------------------------------------

module.exports = { getAllMyGigs, createGig, updateGig };
