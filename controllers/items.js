const express = require('express');
const itemsModels = require ('../models/items.js');
const cloudinary = require('../utils/cloudinary');
const ErrorResponse = require('../utils/errorResponse');


cloudinary.config({
  cloud_name: 'dnwicbvxw',
  api_key: '268686878836367',
  api_secret: '27Tl2zZdeOG0k-hBPhk0tRBzP7c'
});

//view all products
const getitems=async(req,res)=>{
    console.log("ENTERED GET ITEM")
    try{
    const item=await itemsModels.find();
    console.log("ITEM: ", item)
    res.status(200).json(item)
    }
    catch(err){
        res.json({message:err})
    }
}


//add new product
 const postitems=async(req,res)=>{
  //const {image} = req.body;
    try{
      // const result = await cloudinary.uploader.upload(image, {
      // folder: "products",
      //  })
    if(!req.body){
        return res.status(400).json({message:"Error"})
    }
    else{
        const items=await itemsModels.create({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        weight:req.body.weight,
        discount_per:req.body.discount_per,
        // image: {
        //     public_id: result.public_id,
        //     url: result.secure_url
        //   },
            })
          
       return res.status(200).json(items)
    }}
    catch(err){
        console.log("error ",err)
    }
}






//delete a product
const deleteitems = async (req, res) => {
  try {
    const item = await itemsModels.findByIdAndDelete(req.params.id);
    if (!item) { 
      return res.status(404).json({ error: true, message: 'Item not found' });
    }
    return res.status(200).json({ id: item._id }); 
  } catch (error) { 
    console.error(error);
    return res.status(500).json({ error: true, message: 'Server error' });
  }
};


  //update a product
const updateitems = async (req, res) => {
  try {
    const item = await itemsModels.findById(req.params.id); 
    if (!item) { 
      return res.status(404).json({ error: true, 
                                    message: 'Item not found' });
    }

    item.name = req.body.name;
    item.description = req.body.description;
    item.price = req.body.price;
    item.weight = req.body.weight;
    item.discount_per = req.body.discount_per;

    const updatedItem = await item.save(); 
    return res.status(200).json(updatedItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: true, 
                                  message: 'Server error' });
  }
};


module.exports={
  getitems,
  postitems,
  deleteitems,
  updateitems,
 }