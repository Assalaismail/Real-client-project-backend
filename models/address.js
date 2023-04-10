const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      // required: true,
    },
    city: {
      type: String,
      // required: true,
    },
    street: {
      type: String,
      // required: true,
    },
    building: {
      type: String,
      // required: true,
    },
    floor: {
      type: Number,
      // required: true,
    },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
