const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const items = new mongoose.Schema(
  {
    name: {
      type: String,
      // required:[true, 'Please add a product Name'],
    },

    image: {
      public_id: {
        type: String,
        //required: true,
      },
      url: {
        type: String,
        //required: true,
      },
    },

    description: {
      type: String,
      //required:[true, 'Please add a product Description'],
    },
    price: {
      type: Number,
    },
    weight: {
      type: Number,
    },

    category_id: {
      type: ObjectId,
      ref: "categories",
      //required: [true, "product must belong to a category"],
    },

    price_after_discount: {
      type: Number,
      default: 0,
    },

    discount_per: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("items", items);
