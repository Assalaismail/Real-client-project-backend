const express = require('express');
const router = express.Router();
const upload= require('../middleware/upload')

const { getfavitems,getfavbyid,  postfavitems,deletefavitems,updatefavitems }=require("../controllers/favorites");

router.get("/getfav", getfavitems)
router.get("/getfav/:id", getfavbyid );
router.post("/addfav",upload.single('image_fav'), postfavitems)
router.delete("/delfav/:id", deletefavitems )
router.put("/updfav/:id", updatefavitems )



module.exports=router;

