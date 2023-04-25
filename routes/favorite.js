const express = require('express');
const router = express.Router();
const upload= require('../middleware/upload')

const { getfavitems,getfavbyid,  postfavitems,deletefavitems }=require("../controllers/favorites");

router.get("/getfav", getfavitems)
router.get("/getfav/:id", getfavbyid );
router.post("/addfav",upload.single('image_fav'), postfavitems)
router.delete("/delitem/:id", deletefavitems )


module.exports=router;

