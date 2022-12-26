const mongoose = require("mongoose");
const MONGOS_URL = process.env.MONGOS_URL;

async function connect() {
  console.log("try to connect");
  try {
    await mongoose.connect(MONGOS_URL, (err) => {
      if (err) throw err;
      console.log("Connection Success!");
    });
  } catch (err) {
    console.log("my error", err.message);
  }
}

exports.myConnect = connect;
