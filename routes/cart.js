const express = require('express');
const router = express.Router();
const{removeFromCart,getCart,addToCart, reduceFromCart,}=require('../controllers/cart')


router.get("/:id", getCart)
router.post("/:id", addToCart)
router.delete("/:id/:key",removeFromCart)
router.patch("/:id", reduceFromCart)











module.exports=router;