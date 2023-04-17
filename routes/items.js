const express = require('express');
const router = express.Router();
const upload= require('../middleware/upload')

const {getitembyid,getitems,getItemsByCategory,postitems,deleteitems, updateitems}=require("../controllers/items");

router.get("/getitem",getitems)
router.get("/getitem/:id", getitembyid);
// router.get("/products/:category_id", getItemsByCategory );
router.get("/products/:categoryName", getItemsByCategory );


router.post("/additem",upload.single('image'),postitems)
router.delete("/delitem/:id",deleteitems)
router.put("/upditem/:id",upload.single('image'),updateitems)


module.exports=router;

