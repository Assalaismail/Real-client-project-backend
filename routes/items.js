const express = require('express');
const router = express.Router();
const upload= require('../middleware/upload')

const {getitems,postitems,deleteitems, updateitems}=require("../controllers/items");

router.get("/getitem",getitems)
router.post("/additem",upload.single('image'),postitems)
router.delete("/delitem/:id",deleteitems)
router.put("/upditem/:id",upload.single('image'),updateitems)


module.exports=router;

