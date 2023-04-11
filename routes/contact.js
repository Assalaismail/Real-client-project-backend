const express = require('express');
const router = express.Router();
const { protect, isAdmin } = require("../middleware/authMiddleware");



const {getcontactus, postcontactus, contUs} = require("../controllers/contact");
//cleanest way
router.route('/').get(protect, getcontactus).post(protect, postcontactus)

router.route("/:id").delete(protect, contUs);
module.exports=router;
