import { ObjectId } from "mongodb";
const asyncHandler = require("express-async-handler");
const Carts = require("../models/cart");
const Product = require("../models/items");



export const addToCart = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const productId = req.body.productId;
  let cart = await Carts.findOne({ userId });
  let product = await Product.findOne({ _id: productId });
  let item = { item_id: ObjectId, qty: 1, unit: 0 };
  let itemIndex = cart.items.findIndex(
    (p) => p.productId.toString() === productId.toString()
  );
  if (product.discount_per >0) {
    item.unit = product.price_after_discount;
    cart.items.push(item);
  } else {
    item.unit = product.price;
  }
  if (itemIndex > -1) {
    let productItem = cart.items[itemIndex];
    productItem.qty += 1;
    cart.items[itemIndex] = productItem;
  } else {
    cart.items.push(item);
  }
  cart.total += item.unit;
  cart = await cart.save();
  return res.status(201).send(cart);
});


export const removeFromCart= asyncHandler(async(req,res)=>{
  const userId = req.params.id;
  const productId = req.body.productId;
  let cart = await Carts.findOne({ userId });
  let product = await Product.findOne({ _id: productId });

})
