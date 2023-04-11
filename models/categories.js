const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");


const categories= new mongoose.Schema({
   name_category:{
            type:String,
            // required:[true, 'Please add a category Name'],
        },
  },
{
timestamps: true,
}
)
module.exports = mongoose.model("categories", categories);