const express = require('express');
const router = express.Router();

const {getitems,postitems,deleteitems, updateitems}=require("../controllers/items");

router.get("/getitem",getitems)
router.post("/additem",postitems)
router.delete("/delitem/:id",deleteitems)
router.put("/upditem/:id",updateitems)


module.exports=router;

