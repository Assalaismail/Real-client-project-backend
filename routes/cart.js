const express = require('express');
const router = express.Router();
const{removeFromCart,getCart,addToCart,}=require('../controllers/cart')


router.get("/:id", getCart)
router.post("/:id", addToCart)
router.delete("/:id",removeFromCart)












module.exports=router;