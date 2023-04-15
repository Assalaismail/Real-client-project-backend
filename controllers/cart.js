const asyncHandler = require("express-async-handler");
const Carts = require("../models/cart");
const Product = require("../models/items");
var mongoose = require("mongoose");
const items = require("../models/items");
var Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

const addToCart = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const productId = req.body.productId;
  let cart = await Carts.findOne({ userId });
  let product = await Product.findOne({ _id: productId });
  let item = { item_id: ObjectId, qty: 1, unit: 0 };
  item.item_id = productId;
  let itemIndex = cart.items.findIndex(
    (p) => p.item_id.toString() === productId.toString()
  );
  console.log(itemIndex, "babababab");
  if (product.discount_per > 0) {
    console.log("bbbbbbb");
    item.unit = product.price_after_discount;
  } else {
    item.unit = product.price;
  }
  if (itemIndex > -1) {
    console.log("aaaaaaa");
    let productItem = cart.items[itemIndex];
    productItem.qty += 1;
    cart.items[itemIndex] = productItem;
  } else {
    cart.items.push(item);
  }
  cart.total += item.unit;
  let carta = await cart.save();
  return res.status(201).send(carta);
});

const removeFromCart = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const productId = req.body.productId;

  let cart = await Carts.findOne({ userId });
  let itemIndex = cart.items.findIndex(
    (p) => p.item_id.toString() === productId.toString()
  );
  if (itemIndex > -1) {
    let product = cart.items[itemIndex];
    let sum = product.qty * product.unit;
    cart.items.splice(itemIndex, 1);
    cart.total -= sum;
    cart = await cart.save();
    return res.status(200).send(cart);
  } else {
    res.status(201).json("item does not exist")
  }
});

const getCart = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  let cart = await Carts.findOne({ userId }).populate('items.item_id').populate('user_id')
  
 
  
  res.status(201).send(cart);
});

module.exports = { removeFromCart, addToCart, getCart };
