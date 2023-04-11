const express = require('express');
const router = express.Router();

const { getcategories,
    postcategory,
    deletecategory,
    updatecategory}=require("../controllers/categories");

router.get("/getcategory", getcategories)
router.post("/addcategory", postcategory)
router.delete("/delcategory/:id",deletecategory)
router.put("/updcategory:id", updatecategory)


module.exports=router;

