const asyncHandler = require("express-async-handler");
const Carts = require("../models/cart");
const orders = require("../models/order");

const checkOut = asyncHandler(async (req, res) => {
  let userId = req.params.id;
  let cart = await Carts.findOne({ userId });
  if (cart) {
    let checkout = await orders.create({
      user_id: cart.user_id,
      items: cart.items,
      total: cart.total,
      status: status,
    });
    if (checkout) {
      cart.update({
        items: [],
        total: 0,
      });
      res.status(200).json("checkout successfull");
    }
  } else {
    res.status(400).json("something went wrong ");
  }
});

const cancelOrder = asyncHandler(async (req, res) => {
  let userId = req.params.id;
  let order = await orders.findOne({ userId });
  if (order) {
    order.update({
      status: "canceled",
    });
    res.status(201).json("order canceled");
  } else {
    res.status(400).json("something went wrong");
  }
});

const finishOrder = asyncHandler(async (req, res) => {
  let userId = req.params.id;
  let order = await orders.findOne({ userId });
  if (order) {
    order.update({
      status: "complete",
    });
    res.status(201).json("order completed");
  } else {
    res.status(400).json("something went wrong");
  }
});

module.exports = { finishOrder, cancelOrder, checkOut };
