const userModel = require("../models/User.js");

// -----------------------------------------------------creat a new user
async function create(data) {
  const newUser = await userModel.create(data);
  console.log(newUser);
}
// -----------------------------------------------------read user
async function readOn(filter, proj) {
  const user = await userModel.find(filter, proj);
  console.log(user);
  return user;
}
// -----------------------------------------------------

module.exports = { create, readOn };
