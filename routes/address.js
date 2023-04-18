const express = require("express");
const router = express.Router();
const {
  createAddress,
  getAddresses,
  getAddressById,
  updateAddress,
  deleteAddress,
} = require("../controllers/address");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getAddresses).post(createAddress);
router.route("/:id").get(getAddressById).put(updateAddress).delete(deleteAddress);

module.exports = router;
