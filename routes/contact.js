const express = require("express");
const router = express.Router();

const { createContact, getContacts } = require("../controllers/contact");
const { protect, isAdmin } = require("../middleware/authMiddleware");

// router.route("/").post(createContact).get(protect, isAdmin, getContacts);
router.route("/").post(createContact).get(getContacts);

module.exports = router;
