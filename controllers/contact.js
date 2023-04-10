const asyncHandler = require("express-async-handler");
const Contact = require("../models/contact");

// @desc    Create a new contact message
// @route   POST /api/contacts
// @access  Public
const createContact = asyncHandler(async (req, res) => {
  const { fullName, email, message } = req.body;

  const contact = await Contact.create({
    userID: req.user._id,
    fullName,
    email,
    message,
  });

  if (contact) {
    res.status(201).json({
      _id: contact.id,
      userID: contact.userID,
      fullName: contact.fullName,
      email: contact.email,
      message: contact.message,
    });
  } else {
    res.status(400);
    throw new Error("Invalid contact data");
  }
});

// @desc    Get all contact messages
// @route   GET /api/contacts
// @access  Private/Admin
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ userID: req.user._id });
  res.json(contacts);
});

module.exports = {
  createContact,
  getContacts,
};
