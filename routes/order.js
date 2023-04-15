const express = require("express");
const router = express.Router();
const { checkOut, cancelOrder, finishOrder } = require("../controllers/order");

router.get("/:id", checkOut);
router.patch("/complete/:id", finishOrder);
router.patch("/cancel/:id", cancelOrder);

module.exports = router;
