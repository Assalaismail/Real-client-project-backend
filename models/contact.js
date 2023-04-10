const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "User",
    },
    fullName: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    message: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
