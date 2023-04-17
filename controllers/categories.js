const express = require('express');
const categoryModels = require ("../models/categories")


//view all categories
const getcategories=async(req,res)=>{
    console.log("ENTERED GET CATEGORY")
    try{
    const category=await categoryModels.find();
    console.log("CATEGORY: ", category)
    res.status(200).json(category)
    }
    catch(err){
        res.json({message:err})
    }
}

//add new category
const postcategory = async (req, res) => {
  
  try {
    const product = new categoryModels ({
      name_category:req.body.name_category,
     
    });
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};
 



  //delete a category
const deletecategory = async (req, res) => {
    try {
      const category = await categoryModels.findByIdAndDelete(req.params.id);
      if (!category) { 
        return res.status(404).json({ error: true, message: 'Category not found' });
      }
      return res.status(200).json({ id: category._id }); 
    } catch (error) { 
      console.error(error);
      return res.status(500).json({ error: true, message: 'Server error' });
    }
  };

    //update category
const updatecategory = async (req, res) => {
    try {
      const category= await categoryModels.findById(req.params.id); 
      if (!category) { 
        return res.status(404).json({ error: true, 
                                      message: 'Category not found' });
      }
  
      category.name_category = req.body.name_category;
     
  
      const updatedCategory= await category.save(); 
      return res.status(200).json(updatedCategory);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: true, 
                                    message: 'Server error' });
    }
  };


module.exports={
    getcategories,
    postcategory,
    deletecategory,
    updatecategory,
   }