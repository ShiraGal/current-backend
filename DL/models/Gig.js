const mongoose = require("mongoose");

const gigSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  client: {
    type: String,
  },
  details: {
    type: String,
  },
  payment: {
    type: Number,
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
    required: true,
  },
  paidup: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const gigModel = mongoose.model("Gig", gigSchema);
module.exports = gigModel;
